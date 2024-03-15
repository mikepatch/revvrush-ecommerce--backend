import { Inject, Injectable, Logger } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { Prisma, ProductCategory } from '@prisma/client';
import { createSlug } from 'src/utils/createSlug';

@Injectable()
export class ProductCategoriesService {
  private logger = new Logger('ProductCategoriesService');

  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(data: CreateProductCategoryInput): Promise<ProductCategory> {
    const slug = createSlug(data.name);

    return await this.prismaService.productCategory.create({
      data: { slug, ...data },
    });
  }

  async findAll(params: {
    take: number;
    skip: number;
    orderBy?: Prisma.ProductCategoryOrderByWithRelationInput;
  }) {
    const { skip, take, orderBy } = params;

    const categories = await this.prismaService.productCategory.findMany({
      take,
      skip,
      orderBy,
      include: {
        products: true,
      },
    });

    return {
      data: categories,
    };
  }

  async findOne(params: {
    id?: string;
    name?: string;
    slug?: string;
  }): Promise<ProductCategory | null> {
    const { id, name, slug } = params;

    return this.prismaService.productCategory.findFirst({
      where: {
        id,
        name,
        slug,
      },
      include: {
        products: true,
      },
    });
  }

  async findOneById(
    productCategoryWhereUniqueInput: Prisma.ProductCategoryWhereUniqueInput,
  ): Promise<ProductCategory | null> {
    return this.prismaService.productCategory.findUnique({
      where: productCategoryWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.ProductCategoryWhereUniqueInput;
    data: Prisma.ProductCategoryUpdateInput;
  }): Promise<ProductCategory> {
    const { where, data } = params;

    return this.prismaService.productCategory.update({ data, where });
  }

  remove(
    where: Prisma.ProductCategoryWhereUniqueInput,
  ): Promise<ProductCategory> {
    return this.prismaService.productCategory.delete({ where });
  }
}

import { Inject, Injectable, Logger } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { Prisma, Product } from '@prisma/client';
import { ProductList } from 'src/products/entities/product.entity';
import { createSlug } from 'src/utils/createSlug';

@Injectable()
export class ProductsService {
  private logger = new Logger('ProductsService');

  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(data: CreateProductInput): Promise<Product> {
    const { categoryId, ...rest } = data;
    const slug = createSlug(data.name);

    return await this.prismaService.product.create({
      data: {
        slug,
        category: { connect: { id: categoryId } },
        ...rest,
      },
    });
  }

  async findAll(params: {
    take: number;
    skip: number;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
    where?: Prisma.ProductWhereInput;
  }): Promise<ProductList> {
    const { skip, take, orderBy, where } = params;

    const products = await this.prismaService.product.findMany({
      take,
      skip,
      orderBy,
      where,
      include: {
        category: {
          include: {
            products: {
              include: {
                category: true,
                collections: true,
              },
            },
          },
        },
        collections: true,
      },
    });
    const total = await this.prismaService.product.count({ where });

    return {
      data: products,
      meta: { total },
    };
  }

  async findOne(params: {
    id?: string;
    name?: string;
    slug?: string;
  }): Promise<Product | null> {
    const { id, name, slug } = params;

    return await this.prismaService.product.findFirst({
      where: {
        id,
        name,
        slug,
      },
      include: {
        category: true,
        collections: true,
        variants: true,
      },
    });
  }

  async findAllByCategorySlug(params: {
    categorySlug: string;
    take: number;
    skip: number;
  }): Promise<ProductList> {
    const { categorySlug, skip, take } = params;

    const products = await this.prismaService.product.findMany({
      take,
      skip,
      where: {
        category: {
          slug: categorySlug,
        },
      },
      include: {
        category: {
          include: {
            products: {
              include: {
                category: true,
                collections: true,
              },
            },
          },
        },
      },
    });
    const total = await this.prismaService.product.count({
      where: {
        category: {
          slug: categorySlug,
        },
      },
    });

    return {
      data: products,
      meta: { total },
    };
  }

  async findOneById(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return await this.prismaService.product.findUnique({
      where: productWhereUniqueInput,
      include: {
        category: true,
        collections: true,
      },
    });
  }

  async findAllByQuery(params: {
    take: number;
    skip: number;
    query: string;
  }): Promise<ProductList> {
    const { take, skip, query } = params;

    const products = await this.prismaService.product.findMany({
      take,
      skip,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        category: true,
      },
    });

    const total = await this.prismaService.product.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });

    return {
      data: products,
      meta: { total },
    };
  }

  async update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;

    return await this.prismaService.product.update({ where, data });
  }

  async remove(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return await this.prismaService.product.delete({ where });
  }
}

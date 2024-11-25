import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { CreateProductVariantInput } from './dto/create-product-variant.input';
import { UpdateProductVariantInput } from './dto/update-product-variant.input';
import { ProductVariant } from '@prisma/client';

@Injectable()
export class ProductVariantsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(data: CreateProductVariantInput): Promise<ProductVariant> {
    const { productId, options, ...variantData } = data;

    const optionRecords = options.map((option) => ({
      name: option.name,
      values: { set: option.values },
    }));

    return await this.prismaService.productVariant.create({
      data: {
        ...variantData,
        options: {
          createMany: {
            data: optionRecords,
          },
        },
        product: { connect: { id: productId } },
      },
      include: {
        options: true,
      },
    });
  }

  async findAll() {
    return await this.prismaService.productVariant.findMany({
      include: {
        options: true,
        product: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.productVariant.findUnique({
      where: { id },
      include: {
        options: true,
        product: true,
      },
    });
  }

  async update(id: string, updateData: UpdateProductVariantInput) {
    const { options, productId, ...rest } = updateData;

    return await this.prismaService.productVariant.update({
      where: { id },
      data: {
        ...rest,
        ...(productId && { product: { connect: { id: productId } } }),
        ...(options && {
          options: {
            deleteMany: {},
            createMany: {
              data: options.map((option) => ({
                name: option.name,
                values: option.values ? { set: option.values } : undefined,
              })),
            },
          },
        }),
      },
      include: {
        options: true,
        product: true,
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.productVariant.delete({
      where: { id },
    });
  }
}

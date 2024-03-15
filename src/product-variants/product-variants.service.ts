import { Inject, Injectable } from '@nestjs/common';

import { CreateProductVariantInput } from './dto/create-product-variant.input';
import { UpdateProductVariantInput } from './dto/update-product-variant.input';
import { PrismaService } from 'src/shared/prisma/prisma.service';
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

  async findOne(id: number) {
    return `This action returns a #${id} productVariant`;
  }

  async update(
    id: string,
    updateProductVariantInput: UpdateProductVariantInput,
  ) {
    console.log(updateProductVariantInput);
    return `This action updates a #${id} productVariant`;
  }

  async remove(id: number) {
    return `This action removes a #${id} productVariant`;
  }
}

import { Inject, Injectable } from '@nestjs/common';

import { CreateProductReviewInput } from './dto/create-product-review.input';
import { UpdateProductReviewInput } from './dto/update-product-review.input';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Prisma, ProductReview } from '@prisma/client';
import { ProductReviewListWithMeta } from 'src/product-reviews/entities/product-review.entity';

@Injectable()
export class ProductReviewsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(
    createProductReviewInput: CreateProductReviewInput,
  ): Promise<ProductReview> {
    const newReview = await this.prismaService.productReview.create({
      data: createProductReviewInput,
    });
    const productId = createProductReviewInput.productId;
    const reviews = await this.prismaService.productReview.findMany({
      where: { productId },
    });

    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const avgRating = Math.round((totalRating / reviews.length) * 100) / 100;

    await this.prismaService.product.update({
      where: { id: productId },
      data: {
        avgRating,
      },
    });

    return newReview;
  }

  async findAll(params: {
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput;
  }): Promise<ProductReviewListWithMeta> {
    const { where, orderBy } = params;

    const productReviews = await this.prismaService.productReview.findMany({
      where,
      orderBy,
    });
    const total = await this.prismaService.productReview.count({ where });
    const avgRating = await this.prismaService.productReview.aggregate({
      where,
      _avg: {
        rating: true,
      },
    });

    return {
      data: productReviews,
      meta: {
        total,
        avgRating: Math.round(avgRating._avg.rating * 100) / 100,
      },
    };
  }

  async findOne(id: string) {
    return await this.prismaService.productReview.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateProductReviewInput: UpdateProductReviewInput) {
    return await `This action updates a #${id} review`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} review`;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateCartItemInput } from 'src/carts/dto/create-cart-item.input';
import { UpdateCartItemInput } from 'src/carts/dto/update-cart-item.input';

@Injectable()
export class CartsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(data: CreateCartInput) {
    return await this.prismaService.cart.create({
      data: {
        ...data,
      },
    });
  }

  async addItemToCart(data: CreateCartItemInput) {
    const { cartId, productId, quantity = 1 } = data;

    return await this.prismaService.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId,
          productId,
        },
      },
      update: {
        quantity: {
          increment: quantity,
        },
      },
      create: {
        cartId,
        productId,
        quantity,
      },
    });
  }

  async removeItemFromCart(cartItemId: string) {
    return await this.prismaService.cartItem.delete({
      where: {
        id: cartItemId,
      },
    });
  }

  async findAll(skip: number = 0, take: number = 20) {
    return await this.prismaService.cart.findMany({
      take,
      skip,
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.cart.findUnique({
      where: {
        id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async updateCart(id: string, data: UpdateCartInput) {
    return await this.prismaService.cart.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async updateCartItem(cartItemId: string, data: UpdateCartItemInput) {
    return await this.prismaService.cartItem.update({
      where: { id: cartItemId },
      data: {
        ...data,
      },
    });
  }

  async removeCart(id: string) {
    return await this.prismaService.cart.delete({
      where: {
        id,
      },
    });
  }
}

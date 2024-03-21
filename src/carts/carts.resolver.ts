import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CartsService } from './carts.service';
import { Cart } from './entities/cart.entity';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';
import { CartItem } from 'src/carts/entities/cart-item.entity';
import { CreateCartItemInput } from 'src/carts/dto/create-cart-item.input';
import { UpdateCartItemInput } from 'src/carts/dto/update-cart-item.input';

@Resolver(() => Cart)
export class CartsResolver {
  constructor(private readonly cartsService: CartsService) {}

  @Mutation(() => Cart)
  async createCart(@Args('createCartInput') createCartInput: CreateCartInput) {
    return await this.cartsService.create(createCartInput);
  }

  @Mutation(() => CartItem, {
    name: 'addItemToCart',
    description: 'Add item to cart',
    nullable: true,
  })
  async addItemToCart(
    @Args('createCartItemInput') createCartItemInput: CreateCartItemInput,
  ) {
    return await this.cartsService.addItemToCart(createCartItemInput);
  }

  @Mutation(() => CartItem, {
    name: 'removeItemFromCart',
    description: 'Remove item from cart',
    nullable: true,
  })
  async removeItemFromCart(@Args('cartItemId', { type: () => ID }) id: string) {
    return await this.cartsService.removeItemFromCart(id);
  }

  @Query(() => [Cart], { name: 'carts' })
  async findAll(
    @Args('skip', {
      defaultValue: 0,
      type: () => Int,
      nullable: true,
      name: 'Skip',
    })
    skip?: number,
    @Args('take', {
      defaultValue: 20,
      type: () => Int,
      nullable: true,
      name: 'Take',
    })
    take?: number,
  ) {
    return await this.cartsService.findAll(skip, take);
  }

  @Query(() => Cart, { name: 'cart' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.cartsService.findOne(id);
  }

  @Mutation(() => Cart)
  async updateCart(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateCartInput') updateCartInput: UpdateCartInput,
  ) {
    return await this.cartsService.updateCart(id, updateCartInput);
  }

  @Mutation(() => CartItem)
  async updateCartItem(
    @Args('cartItemId', { type: () => ID }) cartItemId: string,
    @Args('data') data: UpdateCartItemInput,
  ) {
    return await this.cartsService.updateCartItem(cartItemId, data);
  }

  @Mutation(() => Cart)
  async removeCart(@Args('id', { type: () => ID }) id: string) {
    return await this.cartsService.removeCart(id);
  }
}

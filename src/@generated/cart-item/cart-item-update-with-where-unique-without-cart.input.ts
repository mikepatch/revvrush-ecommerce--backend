import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';
import { Type } from 'class-transformer';
import { CartItemUpdateWithoutCartInput } from './cart-item-update-without-cart.input';

@InputType()
export class CartItemUpdateWithWhereUniqueWithoutCartInput {

    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;

    @Field(() => CartItemUpdateWithoutCartInput, {nullable:false})
    @Type(() => CartItemUpdateWithoutCartInput)
    data!: CartItemUpdateWithoutCartInput;
}

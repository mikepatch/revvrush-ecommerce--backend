import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';
import { Type } from 'class-transformer';
import { CartItemCreateWithoutCartInput } from './cart-item-create-without-cart.input';

@InputType()
export class CartItemCreateOrConnectWithoutCartInput {

    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;

    @Field(() => CartItemCreateWithoutCartInput, {nullable:false})
    @Type(() => CartItemCreateWithoutCartInput)
    create!: CartItemCreateWithoutCartInput;
}

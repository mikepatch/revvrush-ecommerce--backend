import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';
import { Type } from 'class-transformer';
import { CartItemCreateWithoutProductInput } from './cart-item-create-without-product.input';

@InputType()
export class CartItemCreateOrConnectWithoutProductInput {

    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;

    @Field(() => CartItemCreateWithoutProductInput, {nullable:false})
    @Type(() => CartItemCreateWithoutProductInput)
    create!: CartItemCreateWithoutProductInput;
}

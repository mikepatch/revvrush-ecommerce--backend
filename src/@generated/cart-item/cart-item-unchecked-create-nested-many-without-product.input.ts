import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateWithoutProductInput } from './cart-item-create-without-product.input';
import { Type } from 'class-transformer';
import { CartItemCreateOrConnectWithoutProductInput } from './cart-item-create-or-connect-without-product.input';
import { CartItemCreateManyProductInputEnvelope } from './cart-item-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';

@InputType()
export class CartItemUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [CartItemCreateWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateWithoutProductInput)
    create?: Array<CartItemCreateWithoutProductInput>;

    @Field(() => [CartItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutProductInput>;

    @Field(() => CartItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyProductInputEnvelope)
    createMany?: CartItemCreateManyProductInputEnvelope;

    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
}

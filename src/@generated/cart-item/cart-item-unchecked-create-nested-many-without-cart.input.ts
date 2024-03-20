import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateWithoutCartInput } from './cart-item-create-without-cart.input';
import { Type } from 'class-transformer';
import { CartItemCreateOrConnectWithoutCartInput } from './cart-item-create-or-connect-without-cart.input';
import { CartItemCreateManyCartInputEnvelope } from './cart-item-create-many-cart-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';

@InputType()
export class CartItemUncheckedCreateNestedManyWithoutCartInput {

    @Field(() => [CartItemCreateWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateWithoutCartInput)
    create?: Array<CartItemCreateWithoutCartInput>;

    @Field(() => [CartItemCreateOrConnectWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutCartInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutCartInput>;

    @Field(() => CartItemCreateManyCartInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyCartInputEnvelope)
    createMany?: CartItemCreateManyCartInputEnvelope;

    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
}

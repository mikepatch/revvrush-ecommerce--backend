import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateWithoutCartInput } from './cart-item-create-without-cart.input';
import { Type } from 'class-transformer';
import { CartItemCreateOrConnectWithoutCartInput } from './cart-item-create-or-connect-without-cart.input';
import { CartItemUpsertWithWhereUniqueWithoutCartInput } from './cart-item-upsert-with-where-unique-without-cart.input';
import { CartItemCreateManyCartInputEnvelope } from './cart-item-create-many-cart-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';
import { CartItemUpdateWithWhereUniqueWithoutCartInput } from './cart-item-update-with-where-unique-without-cart.input';
import { CartItemUpdateManyWithWhereWithoutCartInput } from './cart-item-update-many-with-where-without-cart.input';
import { CartItemScalarWhereInput } from './cart-item-scalar-where.input';

@InputType()
export class CartItemUncheckedUpdateManyWithoutCartNestedInput {

    @Field(() => [CartItemCreateWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateWithoutCartInput)
    create?: Array<CartItemCreateWithoutCartInput>;

    @Field(() => [CartItemCreateOrConnectWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutCartInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutCartInput>;

    @Field(() => [CartItemUpsertWithWhereUniqueWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpsertWithWhereUniqueWithoutCartInput)
    upsert?: Array<CartItemUpsertWithWhereUniqueWithoutCartInput>;

    @Field(() => CartItemCreateManyCartInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyCartInputEnvelope)
    createMany?: CartItemCreateManyCartInputEnvelope;

    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;

    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;

    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;

    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;

    @Field(() => [CartItemUpdateWithWhereUniqueWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpdateWithWhereUniqueWithoutCartInput)
    update?: Array<CartItemUpdateWithWhereUniqueWithoutCartInput>;

    @Field(() => [CartItemUpdateManyWithWhereWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpdateManyWithWhereWithoutCartInput)
    updateMany?: Array<CartItemUpdateManyWithWhereWithoutCartInput>;

    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    @Type(() => CartItemScalarWhereInput)
    deleteMany?: Array<CartItemScalarWhereInput>;
}

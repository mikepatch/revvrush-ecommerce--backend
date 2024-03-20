import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateWithoutProductInput } from './cart-item-create-without-product.input';
import { Type } from 'class-transformer';
import { CartItemCreateOrConnectWithoutProductInput } from './cart-item-create-or-connect-without-product.input';
import { CartItemUpsertWithWhereUniqueWithoutProductInput } from './cart-item-upsert-with-where-unique-without-product.input';
import { CartItemCreateManyProductInputEnvelope } from './cart-item-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';
import { CartItemUpdateWithWhereUniqueWithoutProductInput } from './cart-item-update-with-where-unique-without-product.input';
import { CartItemUpdateManyWithWhereWithoutProductInput } from './cart-item-update-many-with-where-without-product.input';
import { CartItemScalarWhereInput } from './cart-item-scalar-where.input';

@InputType()
export class CartItemUpdateManyWithoutProductNestedInput {

    @Field(() => [CartItemCreateWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateWithoutProductInput)
    create?: Array<CartItemCreateWithoutProductInput>;

    @Field(() => [CartItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutProductInput>;

    @Field(() => [CartItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<CartItemUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => CartItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyProductInputEnvelope)
    createMany?: CartItemCreateManyProductInputEnvelope;

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

    @Field(() => [CartItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<CartItemUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [CartItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<CartItemUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    @Type(() => CartItemScalarWhereInput)
    deleteMany?: Array<CartItemScalarWhereInput>;
}

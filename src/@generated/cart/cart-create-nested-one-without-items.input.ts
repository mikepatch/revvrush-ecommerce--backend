import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutItemsInput } from './cart-create-without-items.input';
import { Type } from 'class-transformer';
import { CartCreateOrConnectWithoutItemsInput } from './cart-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@InputType()
export class CartCreateNestedOneWithoutItemsInput {

    @Field(() => CartCreateWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateWithoutItemsInput)
    create?: CartCreateWithoutItemsInput;

    @Field(() => CartCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateOrConnectWithoutItemsInput)
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput;

    @Field(() => CartWhereUniqueInput, {nullable:true})
    @Type(() => CartWhereUniqueInput)
    connect?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

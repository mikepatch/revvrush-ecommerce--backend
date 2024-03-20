import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Type } from 'class-transformer';
import { CartCreateWithoutItemsInput } from './cart-create-without-items.input';

@InputType()
export class CartCreateOrConnectWithoutItemsInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;

    @Field(() => CartCreateWithoutItemsInput, {nullable:false})
    @Type(() => CartCreateWithoutItemsInput)
    create!: CartCreateWithoutItemsInput;
}

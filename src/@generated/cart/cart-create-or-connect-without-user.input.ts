import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Type } from 'class-transformer';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';

@InputType()
export class CartCreateOrConnectWithoutUserInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;

    @Field(() => CartCreateWithoutUserInput, {nullable:false})
    @Type(() => CartCreateWithoutUserInput)
    create!: CartCreateWithoutUserInput;
}

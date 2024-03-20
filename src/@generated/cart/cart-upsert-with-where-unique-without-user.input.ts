import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Type } from 'class-transformer';
import { CartUpdateWithoutUserInput } from './cart-update-without-user.input';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';

@InputType()
export class CartUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;

    @Field(() => CartUpdateWithoutUserInput, {nullable:false})
    @Type(() => CartUpdateWithoutUserInput)
    update!: CartUpdateWithoutUserInput;

    @Field(() => CartCreateWithoutUserInput, {nullable:false})
    @Type(() => CartCreateWithoutUserInput)
    create!: CartCreateWithoutUserInput;
}

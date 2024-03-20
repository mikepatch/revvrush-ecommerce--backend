import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartUpdateInput } from './cart-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@ArgsType()
export class UpdateOneCartArgs {

    @Field(() => CartUpdateInput, {nullable:false})
    @Type(() => CartUpdateInput)
    data!: CartUpdateInput;

    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

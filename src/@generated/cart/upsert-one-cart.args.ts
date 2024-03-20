import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Type } from 'class-transformer';
import { CartCreateInput } from './cart-create.input';
import { CartUpdateInput } from './cart-update.input';

@ArgsType()
export class UpsertOneCartArgs {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;

    @Field(() => CartCreateInput, {nullable:false})
    @Type(() => CartCreateInput)
    create!: CartCreateInput;

    @Field(() => CartUpdateInput, {nullable:false})
    @Type(() => CartUpdateInput)
    update!: CartUpdateInput;
}

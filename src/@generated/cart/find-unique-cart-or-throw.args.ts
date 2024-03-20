import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCartOrThrowArgs {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

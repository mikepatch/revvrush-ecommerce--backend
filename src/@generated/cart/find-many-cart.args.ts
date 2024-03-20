import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { Type } from 'class-transformer';
import { CartOrderByWithRelationInput } from './cart-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CartScalarFieldEnum } from './cart-scalar-field.enum';

@ArgsType()
export class FindManyCartArgs {

    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: CartWhereInput;

    @Field(() => [CartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithRelationInput>;

    @Field(() => CartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}

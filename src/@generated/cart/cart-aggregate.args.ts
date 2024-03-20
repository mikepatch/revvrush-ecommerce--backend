import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { Type } from 'class-transformer';
import { CartOrderByWithRelationInput } from './cart-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CartCountAggregateInput } from './cart-count-aggregate.input';
import { CartMinAggregateInput } from './cart-min-aggregate.input';
import { CartMaxAggregateInput } from './cart-max-aggregate.input';

@ArgsType()
export class CartAggregateArgs {

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

    @Field(() => CartCountAggregateInput, {nullable:true})
    _count?: CartCountAggregateInput;

    @Field(() => CartMinAggregateInput, {nullable:true})
    _min?: CartMinAggregateInput;

    @Field(() => CartMaxAggregateInput, {nullable:true})
    _max?: CartMaxAggregateInput;
}

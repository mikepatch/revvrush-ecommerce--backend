import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartItemWhereInput } from './cart-item-where.input';
import { Type } from 'class-transformer';
import { CartItemOrderByWithRelationInput } from './cart-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CartItemWhereUniqueInput } from './cart-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CartItemCountAggregateInput } from './cart-item-count-aggregate.input';
import { CartItemAvgAggregateInput } from './cart-item-avg-aggregate.input';
import { CartItemSumAggregateInput } from './cart-item-sum-aggregate.input';
import { CartItemMinAggregateInput } from './cart-item-min-aggregate.input';
import { CartItemMaxAggregateInput } from './cart-item-max-aggregate.input';

@ArgsType()
export class CartItemAggregateArgs {

    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: CartItemWhereInput;

    @Field(() => [CartItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartItemOrderByWithRelationInput>;

    @Field(() => CartItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CartItemCountAggregateInput, {nullable:true})
    _count?: CartItemCountAggregateInput;

    @Field(() => CartItemAvgAggregateInput, {nullable:true})
    _avg?: CartItemAvgAggregateInput;

    @Field(() => CartItemSumAggregateInput, {nullable:true})
    _sum?: CartItemSumAggregateInput;

    @Field(() => CartItemMinAggregateInput, {nullable:true})
    _min?: CartItemMinAggregateInput;

    @Field(() => CartItemMaxAggregateInput, {nullable:true})
    _max?: CartItemMaxAggregateInput;
}

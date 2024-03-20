import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CartItemCountOrderByAggregateInput } from './cart-item-count-order-by-aggregate.input';
import { CartItemAvgOrderByAggregateInput } from './cart-item-avg-order-by-aggregate.input';
import { CartItemMaxOrderByAggregateInput } from './cart-item-max-order-by-aggregate.input';
import { CartItemMinOrderByAggregateInput } from './cart-item-min-order-by-aggregate.input';
import { CartItemSumOrderByAggregateInput } from './cart-item-sum-order-by-aggregate.input';

@InputType()
export class CartItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CartItemCountOrderByAggregateInput, {nullable:true})
    _count?: CartItemCountOrderByAggregateInput;

    @Field(() => CartItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: CartItemAvgOrderByAggregateInput;

    @Field(() => CartItemMaxOrderByAggregateInput, {nullable:true})
    _max?: CartItemMaxOrderByAggregateInput;

    @Field(() => CartItemMinOrderByAggregateInput, {nullable:true})
    _min?: CartItemMinOrderByAggregateInput;

    @Field(() => CartItemSumOrderByAggregateInput, {nullable:true})
    _sum?: CartItemSumOrderByAggregateInput;
}

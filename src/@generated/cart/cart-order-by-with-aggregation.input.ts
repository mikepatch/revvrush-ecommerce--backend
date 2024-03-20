import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CartCountOrderByAggregateInput } from './cart-count-order-by-aggregate.input';
import { CartMaxOrderByAggregateInput } from './cart-max-order-by-aggregate.input';
import { CartMinOrderByAggregateInput } from './cart-min-order-by-aggregate.input';

@InputType()
export class CartOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => CartCountOrderByAggregateInput, {nullable:true})
    _count?: CartCountOrderByAggregateInput;

    @Field(() => CartMaxOrderByAggregateInput, {nullable:true})
    _max?: CartMaxOrderByAggregateInput;

    @Field(() => CartMinOrderByAggregateInput, {nullable:true})
    _min?: CartMinOrderByAggregateInput;
}

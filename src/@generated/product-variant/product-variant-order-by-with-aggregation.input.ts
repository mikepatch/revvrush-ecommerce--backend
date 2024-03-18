import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductVariantCountOrderByAggregateInput } from './product-variant-count-order-by-aggregate.input';
import { ProductVariantAvgOrderByAggregateInput } from './product-variant-avg-order-by-aggregate.input';
import { ProductVariantMaxOrderByAggregateInput } from './product-variant-max-order-by-aggregate.input';
import { ProductVariantMinOrderByAggregateInput } from './product-variant-min-order-by-aggregate.input';
import { ProductVariantSumOrderByAggregateInput } from './product-variant-sum-order-by-aggregate.input';

@InputType()
export class ProductVariantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    price?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductVariantCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantCountOrderByAggregateInput;

    @Field(() => ProductVariantAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProductVariantAvgOrderByAggregateInput;

    @Field(() => ProductVariantMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantMaxOrderByAggregateInput;

    @Field(() => ProductVariantMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantMinOrderByAggregateInput;

    @Field(() => ProductVariantSumOrderByAggregateInput, {nullable:true})
    _sum?: ProductVariantSumOrderByAggregateInput;
}

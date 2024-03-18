import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantOptionCountOrderByAggregateInput } from './product-variant-option-count-order-by-aggregate.input';
import { ProductVariantOptionMaxOrderByAggregateInput } from './product-variant-option-max-order-by-aggregate.input';
import { ProductVariantOptionMinOrderByAggregateInput } from './product-variant-option-min-order-by-aggregate.input';

@InputType()
export class ProductVariantOptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    values?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductVariantOptionCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantOptionCountOrderByAggregateInput;

    @Field(() => ProductVariantOptionMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantOptionMaxOrderByAggregateInput;

    @Field(() => ProductVariantOptionMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantOptionMinOrderByAggregateInput;
}

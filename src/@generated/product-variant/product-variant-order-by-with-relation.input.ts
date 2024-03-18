import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { ProductVariantOptionOrderByRelationAggregateInput } from '../product-variant-option/product-variant-option-order-by-relation-aggregate.input';

@InputType()
export class ProductVariantOrderByWithRelationInput {

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

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => ProductVariantOptionOrderByRelationAggregateInput, {nullable:true})
    options?: ProductVariantOptionOrderByRelationAggregateInput;
}

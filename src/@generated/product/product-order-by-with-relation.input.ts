import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductCategoryOrderByWithRelationInput } from '../product-category/product-category-order-by-with-relation.input';
import { ProductVariantOrderByRelationAggregateInput } from '../product-variant/product-variant-order-by-relation-aggregate.input';
import { CollectionOrderByRelationAggregateInput } from '../collection/collection-order-by-relation-aggregate.input';
import { CartItemOrderByRelationAggregateInput } from '../cart-item/cart-item-order-by-relation-aggregate.input';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    orderId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    category?: ProductCategoryOrderByWithRelationInput;

    @Field(() => ProductVariantOrderByRelationAggregateInput, {nullable:true})
    variants?: ProductVariantOrderByRelationAggregateInput;

    @Field(() => CollectionOrderByRelationAggregateInput, {nullable:true})
    collections?: CollectionOrderByRelationAggregateInput;

    @Field(() => CartItemOrderByRelationAggregateInput, {nullable:true})
    cartItem?: CartItemOrderByRelationAggregateInput;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    orderItem?: OrderItemOrderByRelationAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { ProductCategoryOrderByRelationAggregateInput } from './product-category-order-by-relation-aggregate.input';

@InputType()
export class ProductCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentCategoryId?: SortOrderInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    parentCategory?: ProductCategoryOrderByWithRelationInput;

    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    subCategories?: ProductCategoryOrderByRelationAggregateInput;
}

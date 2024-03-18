import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductCategoryRelationFilter } from '../product-category/product-category-relation-filter.input';
import { OrderNullableRelationFilter } from '../order/order-nullable-relation-filter.input';
import { ProductVariantListRelationFilter } from '../product-variant/product-variant-list-relation-filter.input';
import { CollectionListRelationFilter } from '../collection/collection-list-relation-filter.input';

@InputType()
export class ProductWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductCategoryRelationFilter, {nullable:true})
    category?: ProductCategoryRelationFilter;

    @Field(() => OrderNullableRelationFilter, {nullable:true})
    Order?: OrderNullableRelationFilter;

    @Field(() => ProductVariantListRelationFilter, {nullable:true})
    variants?: ProductVariantListRelationFilter;

    @Field(() => CollectionListRelationFilter, {nullable:true})
    collections?: CollectionListRelationFilter;
}

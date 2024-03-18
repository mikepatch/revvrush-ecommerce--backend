import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { ProductCategoryNullableRelationFilter } from './product-category-nullable-relation-filter.input';
import { ProductCategoryListRelationFilter } from './product-category-list-relation-filter.input';

@InputType()
export class ProductCategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentCategoryId?: StringNullableFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => ProductCategoryNullableRelationFilter, {nullable:true})
    parentCategory?: ProductCategoryNullableRelationFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    subCategories?: ProductCategoryListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductCategoryScalarWhereWithAggregatesInput {

    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    parentCategoryId?: StringNullableWithAggregatesFilter;
}

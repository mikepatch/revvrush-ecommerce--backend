import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductVariantOptionScalarWhereWithAggregatesInput {

    @Field(() => [ProductVariantOptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantOptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantOptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productVariantId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    values?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';

@InputType()
export class ProductVariantOptionWhereInput {

    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    AND?: Array<ProductVariantOptionWhereInput>;

    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    OR?: Array<ProductVariantOptionWhereInput>;

    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    NOT?: Array<ProductVariantOptionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productVariantId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    values?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: ProductVariantRelationFilter;
}

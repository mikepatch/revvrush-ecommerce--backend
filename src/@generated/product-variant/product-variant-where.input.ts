import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { ProductVariantOptionListRelationFilter } from '../product-variant-option/product-variant-option-list-relation-filter.input';

@InputType()
export class ProductVariantWhereInput {

    @Field(() => [ProductVariantWhereInput], {nullable:true})
    AND?: Array<ProductVariantWhereInput>;

    @Field(() => [ProductVariantWhereInput], {nullable:true})
    OR?: Array<ProductVariantWhereInput>;

    @Field(() => [ProductVariantWhereInput], {nullable:true})
    NOT?: Array<ProductVariantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    stock?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    price?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => ProductVariantOptionListRelationFilter, {nullable:true})
    options?: ProductVariantOptionListRelationFilter;
}

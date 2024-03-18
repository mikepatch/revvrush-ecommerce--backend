import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductVariantOptionScalarWhereInput {

    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantOptionScalarWhereInput>;

    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantOptionScalarWhereInput>;

    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantOptionScalarWhereInput>;

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
}

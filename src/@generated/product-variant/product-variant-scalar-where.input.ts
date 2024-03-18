import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductVariantScalarWhereInput {

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantScalarWhereInput>;

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantScalarWhereInput>;

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantScalarWhereInput>;

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
}

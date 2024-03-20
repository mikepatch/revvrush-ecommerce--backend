import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class CartScalarWhereWithAggregatesInput {

    @Field(() => [CartScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CartScalarWhereWithAggregatesInput>;

    @Field(() => [CartScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CartScalarWhereWithAggregatesInput>;

    @Field(() => [CartScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CartScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;
}

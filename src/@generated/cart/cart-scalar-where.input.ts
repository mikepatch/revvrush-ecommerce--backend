import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CartScalarWhereInput {

    @Field(() => [CartScalarWhereInput], {nullable:true})
    AND?: Array<CartScalarWhereInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    OR?: Array<CartScalarWhereInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    NOT?: Array<CartScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}

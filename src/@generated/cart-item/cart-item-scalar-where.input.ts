import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CartItemScalarWhereInput {

    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    AND?: Array<CartItemScalarWhereInput>;

    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    OR?: Array<CartItemScalarWhereInput>;

    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    NOT?: Array<CartItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cartId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

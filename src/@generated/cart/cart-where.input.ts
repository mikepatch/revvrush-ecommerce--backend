import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CartItemListRelationFilter } from '../cart-item/cart-item-list-relation-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class CartWhereInput {

    @Field(() => [CartWhereInput], {nullable:true})
    AND?: Array<CartWhereInput>;

    @Field(() => [CartWhereInput], {nullable:true})
    OR?: Array<CartWhereInput>;

    @Field(() => [CartWhereInput], {nullable:true})
    NOT?: Array<CartWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => CartItemListRelationFilter, {nullable:true})
    items?: CartItemListRelationFilter;

    @Field(() => UserWhereInput, {nullable:true})
    User?: UserWhereInput;
}

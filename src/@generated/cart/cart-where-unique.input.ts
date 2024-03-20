import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CartItemListRelationFilter } from '../cart-item/cart-item-list-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class CartWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CartWhereInput], {nullable:true})
    AND?: Array<CartWhereInput>;

    @Field(() => [CartWhereInput], {nullable:true})
    OR?: Array<CartWhereInput>;

    @Field(() => [CartWhereInput], {nullable:true})
    NOT?: Array<CartWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => CartItemListRelationFilter, {nullable:true})
    items?: CartItemListRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    User?: UserNullableRelationFilter;
}

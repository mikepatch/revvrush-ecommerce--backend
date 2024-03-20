import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCartIdProductIdCompoundUniqueInput } from './cart-item-cart-id-product-id-compound-unique.input';
import { CartItemWhereInput } from './cart-item-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CartRelationFilter } from '../cart/cart-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class CartItemWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CartItemCartIdProductIdCompoundUniqueInput, {nullable:true})
    cartId_productId?: CartItemCartIdProductIdCompoundUniqueInput;

    @Field(() => [CartItemWhereInput], {nullable:true})
    AND?: Array<CartItemWhereInput>;

    @Field(() => [CartItemWhereInput], {nullable:true})
    OR?: Array<CartItemWhereInput>;

    @Field(() => [CartItemWhereInput], {nullable:true})
    NOT?: Array<CartItemWhereInput>;

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

    @Field(() => CartRelationFilter, {nullable:true})
    cart?: CartRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { ProductVariantUncheckedCreateNestedManyWithoutProductInput } from '../product-variant/product-variant-unchecked-create-nested-many-without-product.input';
import { CollectionUncheckedCreateNestedManyWithoutProductsInput } from '../collection/collection-unchecked-create-nested-many-without-products.input';
import { CartItemUncheckedCreateNestedManyWithoutProductInput } from '../cart-item/cart-item-unchecked-create-nested-many-without-product.input';
import { OrderItemUncheckedCreateNestedManyWithoutProductInput } from '../order-item/order-item-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutCategoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: CollectionUncheckedCreateNestedManyWithoutProductsInput;

    @Field(() => CartItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput;
}

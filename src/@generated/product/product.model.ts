import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCategory } from '../product-category/product-category.model';
import { Order } from '../order/order.model';
import { ProductVariant } from '../product-variant/product-variant.model';
import { Collection } from '../collection/collection.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => [String], {nullable:true})
    images!: Array<string>;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ProductCategory, {nullable:false})
    category?: ProductCategory;

    @Field(() => Order, {nullable:true})
    Order?: Order | null;

    @Field(() => [ProductVariant], {nullable:true})
    variants?: Array<ProductVariant>;

    @Field(() => [Collection], {nullable:true})
    collections?: Array<Collection>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}

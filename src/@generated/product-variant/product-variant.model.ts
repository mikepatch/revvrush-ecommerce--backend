import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductVariantOption } from '../product-variant-option/product-variant-option.model';
import { ProductVariantCount } from './product-variant-count.output';

@ObjectType()
export class ProductVariant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    price!: number | null;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => [ProductVariantOption], {nullable:true})
    options?: Array<ProductVariantOption>;

    @Field(() => ProductVariantCount, {nullable:false})
    _count?: ProductVariantCount;
}

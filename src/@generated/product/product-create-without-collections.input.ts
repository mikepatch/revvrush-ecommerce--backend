import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { ProductCategoryCreateNestedOneWithoutProductsInput } from '../product-category/product-category-create-nested-one-without-products.input';
import { OrderCreateNestedOneWithoutProductsInput } from '../order/order-create-nested-one-without-products.input';
import { ProductVariantCreateNestedManyWithoutProductInput } from '../product-variant/product-variant-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutCollectionsInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: ProductCategoryCreateNestedOneWithoutProductsInput;

    @Field(() => OrderCreateNestedOneWithoutProductsInput, {nullable:true})
    Order?: OrderCreateNestedOneWithoutProductsInput;

    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantCreateNestedManyWithoutProductInput;
}

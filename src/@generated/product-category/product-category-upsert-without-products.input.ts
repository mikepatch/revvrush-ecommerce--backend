import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUpdateWithoutProductsInput } from './product-category-update-without-products.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';
import { ProductCategoryWhereInput } from './product-category-where.input';

@InputType()
export class ProductCategoryUpsertWithoutProductsInput {

    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductsInput)
    update!: ProductCategoryUpdateWithoutProductsInput;

    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: ProductCategoryCreateWithoutProductsInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}

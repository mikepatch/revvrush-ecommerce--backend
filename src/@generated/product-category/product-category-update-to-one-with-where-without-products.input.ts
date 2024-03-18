import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutProductsInput } from './product-category-update-without-products.input';

@InputType()
export class ProductCategoryUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductsInput)
    data!: ProductCategoryUpdateWithoutProductsInput;
}

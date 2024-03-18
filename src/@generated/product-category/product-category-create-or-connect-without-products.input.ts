import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutProductsInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: ProductCategoryCreateWithoutProductsInput;
}

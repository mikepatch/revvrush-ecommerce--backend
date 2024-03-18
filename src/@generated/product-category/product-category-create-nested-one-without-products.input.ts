import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutProductsInput } from './product-category-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedOneWithoutProductsInput {

    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: ProductCategoryCreateWithoutProductsInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

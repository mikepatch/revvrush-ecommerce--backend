import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutProductsInput } from './product-category-create-or-connect-without-products.input';
import { ProductCategoryUpsertWithoutProductsInput } from './product-category-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateToOneWithWhereWithoutProductsInput } from './product-category-update-to-one-with-where-without-products.input';

@InputType()
export class ProductCategoryUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: ProductCategoryCreateWithoutProductsInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput;

    @Field(() => ProductCategoryUpsertWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryUpsertWithoutProductsInput)
    upsert?: ProductCategoryUpsertWithoutProductsInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryUpdateToOneWithWhereWithoutProductsInput)
    update?: ProductCategoryUpdateToOneWithWhereWithoutProductsInput;
}

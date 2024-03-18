import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutSubCategoriesInput } from './product-category-create-without-sub-categories.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutSubCategoriesInput } from './product-category-create-or-connect-without-sub-categories.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedOneWithoutSubCategoriesInput {

    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create?: ProductCategoryCreateWithoutSubCategoriesInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutSubCategoriesInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

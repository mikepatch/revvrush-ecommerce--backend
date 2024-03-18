import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutSubCategoriesInput } from './product-category-create-without-sub-categories.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutSubCategoriesInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create!: ProductCategoryCreateWithoutSubCategoriesInput;
}

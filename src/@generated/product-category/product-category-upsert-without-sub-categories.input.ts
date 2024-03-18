import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUpdateWithoutSubCategoriesInput } from './product-category-update-without-sub-categories.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutSubCategoriesInput } from './product-category-create-without-sub-categories.input';
import { ProductCategoryWhereInput } from './product-category-where.input';

@InputType()
export class ProductCategoryUpsertWithoutSubCategoriesInput {

    @Field(() => ProductCategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutSubCategoriesInput)
    update!: ProductCategoryUpdateWithoutSubCategoriesInput;

    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create!: ProductCategoryCreateWithoutSubCategoriesInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}

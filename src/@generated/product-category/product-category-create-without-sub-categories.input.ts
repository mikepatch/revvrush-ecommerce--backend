import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutCategoryInput } from '../product/product-create-nested-many-without-category.input';
import { ProductCategoryCreateNestedOneWithoutSubCategoriesInput } from './product-category-create-nested-one-without-sub-categories.input';

@InputType()
export class ProductCategoryCreateWithoutSubCategoriesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutCategoryInput;

    @Field(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:true})
    parentCategory?: ProductCategoryCreateNestedOneWithoutSubCategoriesInput;
}

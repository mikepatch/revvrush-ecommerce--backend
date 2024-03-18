import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutCategoryInput } from '../product/product-create-nested-many-without-category.input';
import { ProductCategoryCreateNestedManyWithoutParentCategoryInput } from './product-category-create-nested-many-without-parent-category.input';

@InputType()
export class ProductCategoryCreateWithoutParentCategoryInput {

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

    @Field(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: ProductCategoryCreateNestedManyWithoutParentCategoryInput;
}

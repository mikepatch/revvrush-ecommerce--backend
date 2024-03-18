import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutCategoryInput } from '../product/product-unchecked-create-nested-many-without-category.input';
import { ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput } from './product-category-unchecked-create-nested-many-without-parent-category.input';

@InputType()
export class ProductCategoryUncheckedCreateWithoutParentCategoryInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput;

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput;
}

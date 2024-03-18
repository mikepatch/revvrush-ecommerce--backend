import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput } from './product-category-unchecked-create-nested-many-without-parent-category.input';

@InputType()
export class ProductCategoryUncheckedCreateWithoutProductsInput {

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

    @Field(() => String, {nullable:true})
    parentCategoryId?: string;

    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput;
}

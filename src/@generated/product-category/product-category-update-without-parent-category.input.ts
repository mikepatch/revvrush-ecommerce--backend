import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateManyWithoutCategoryNestedInput } from '../product/product-update-many-without-category-nested.input';
import { ProductCategoryUpdateManyWithoutParentCategoryNestedInput } from './product-category-update-many-without-parent-category-nested.input';

@InputType()
export class ProductCategoryUpdateWithoutParentCategoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutCategoryNestedInput;

    @Field(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: ProductCategoryUpdateManyWithoutParentCategoryNestedInput;
}

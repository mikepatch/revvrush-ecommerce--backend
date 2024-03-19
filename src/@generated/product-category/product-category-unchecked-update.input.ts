import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutCategoryNestedInput } from '../product/product-unchecked-update-many-without-category-nested.input';
import { ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput } from './product-category-unchecked-update-many-without-parent-category-nested.input';

@InputType()
export class ProductCategoryUncheckedUpdateInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCategoryId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput;

    @Field(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput;
}
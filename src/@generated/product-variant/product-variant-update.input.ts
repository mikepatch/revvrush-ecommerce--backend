import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutVariantsNestedInput } from '../product/product-update-one-required-without-variants-nested.input';
import { ProductVariantOptionUpdateManyWithoutProductVariantNestedInput } from '../product-variant-option/product-variant-option-update-many-without-product-variant-nested.input';

@InputType()
export class ProductVariantUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutVariantsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput;

    @Field(() => ProductVariantOptionUpdateManyWithoutProductVariantNestedInput, {nullable:true})
    options?: ProductVariantOptionUpdateManyWithoutProductVariantNestedInput;
}

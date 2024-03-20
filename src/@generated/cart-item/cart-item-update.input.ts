import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CartUpdateOneRequiredWithoutItemsNestedInput } from '../cart/cart-update-one-required-without-items-nested.input';
import { ProductUpdateOneRequiredWithoutCartItemNestedInput } from '../product/product-update-one-required-without-cart-item-nested.input';

@InputType()
export class CartItemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CartUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutCartItemNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput;
}

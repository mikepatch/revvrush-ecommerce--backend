import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderUpdateOneRequiredWithoutItemsNestedInput } from '../order/order-update-one-required-without-items-nested.input';
import { ProductUpdateOneRequiredWithoutOrderItemNestedInput } from '../product/product-update-one-required-without-order-item-nested.input';

@InputType()
export class OrderItemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutOrderItemNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput;
}

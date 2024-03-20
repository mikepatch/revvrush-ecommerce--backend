import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { EnumOrderStatusFieldUpdateOperationsInput } from '../prisma/enum-order-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderItemUpdateManyWithoutOrderNestedInput } from '../order-item/order-item-update-many-without-order-nested.input';
import { UserUpdateOneRequiredWithoutOrdersNestedInput } from '../user/user-update-one-required-without-orders-nested.input';

@InputType()
export class OrderUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalAmount?: FloatFieldUpdateOperationsInput;

    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumOrderStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: OrderItemUpdateManyWithoutOrderNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
}

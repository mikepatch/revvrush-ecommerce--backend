import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutOrdersNestedInput } from '../user/user-update-one-required-without-orders-nested.input';
import { ProductUpdateManyWithoutOrderNestedInput } from '../product/product-update-many-without-order-nested.input';

@InputType()
export class OrderUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput;

    @Field(() => ProductUpdateManyWithoutOrderNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutOrderNestedInput;
}

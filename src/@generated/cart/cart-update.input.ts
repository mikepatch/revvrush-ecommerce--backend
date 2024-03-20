import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CartItemUpdateManyWithoutCartNestedInput } from '../cart-item/cart-item-update-many-without-cart-nested.input';
import { UserUpdateOneWithoutCartNestedInput } from '../user/user-update-one-without-cart-nested.input';

@InputType()
export class CartUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CartItemUpdateManyWithoutCartNestedInput, {nullable:true})
    items?: CartItemUpdateManyWithoutCartNestedInput;

    @Field(() => UserUpdateOneWithoutCartNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutCartNestedInput;
}

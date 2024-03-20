import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemUncheckedCreateNestedManyWithoutCartInput } from '../cart-item/cart-item-unchecked-create-nested-many-without-cart.input';

@InputType()
export class CartUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => CartItemUncheckedCreateNestedManyWithoutCartInput, {nullable:true})
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateNestedManyWithoutCartInput } from '../cart-item/cart-item-create-nested-many-without-cart.input';
import { UserCreateNestedOneWithoutCartInput } from '../user/user-create-nested-one-without-cart.input';

@InputType()
export class CartCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CartItemCreateNestedManyWithoutCartInput, {nullable:true})
    items?: CartItemCreateNestedManyWithoutCartInput;

    @Field(() => UserCreateNestedOneWithoutCartInput, {nullable:true})
    User?: UserCreateNestedOneWithoutCartInput;
}

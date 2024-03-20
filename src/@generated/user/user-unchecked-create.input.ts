import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';
import { CartUncheckedCreateNestedManyWithoutUserInput } from '../cart/cart-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CartUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    cart?: CartUncheckedCreateNestedManyWithoutUserInput;
}

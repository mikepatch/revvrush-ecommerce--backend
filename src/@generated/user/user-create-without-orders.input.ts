import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateNestedManyWithoutUserInput } from '../cart/cart-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutOrdersInput {

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

    @Field(() => CartCreateNestedManyWithoutUserInput, {nullable:true})
    cart?: CartCreateNestedManyWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartCreateNestedOneWithoutItemsInput } from '../cart/cart-create-nested-one-without-items.input';

@InputType()
export class CartItemCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CartCreateNestedOneWithoutItemsInput, {nullable:false})
    cart!: CartCreateNestedOneWithoutItemsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CartItemCartIdProductIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    cartId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;
}

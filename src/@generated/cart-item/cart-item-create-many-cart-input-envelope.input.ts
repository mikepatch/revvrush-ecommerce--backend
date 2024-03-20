import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateManyCartInput } from './cart-item-create-many-cart.input';
import { Type } from 'class-transformer';

@InputType()
export class CartItemCreateManyCartInputEnvelope {

    @Field(() => [CartItemCreateManyCartInput], {nullable:false})
    @Type(() => CartItemCreateManyCartInput)
    data!: Array<CartItemCreateManyCartInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

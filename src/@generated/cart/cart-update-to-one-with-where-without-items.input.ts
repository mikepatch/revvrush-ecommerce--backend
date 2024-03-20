import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { Type } from 'class-transformer';
import { CartUpdateWithoutItemsInput } from './cart-update-without-items.input';

@InputType()
export class CartUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: CartWhereInput;

    @Field(() => CartUpdateWithoutItemsInput, {nullable:false})
    @Type(() => CartUpdateWithoutItemsInput)
    data!: CartUpdateWithoutItemsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartUpdateWithoutItemsInput } from './cart-update-without-items.input';
import { Type } from 'class-transformer';
import { CartCreateWithoutItemsInput } from './cart-create-without-items.input';
import { CartWhereInput } from './cart-where.input';

@InputType()
export class CartUpsertWithoutItemsInput {

    @Field(() => CartUpdateWithoutItemsInput, {nullable:false})
    @Type(() => CartUpdateWithoutItemsInput)
    update!: CartUpdateWithoutItemsInput;

    @Field(() => CartCreateWithoutItemsInput, {nullable:false})
    @Type(() => CartCreateWithoutItemsInput)
    create!: CartCreateWithoutItemsInput;

    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: CartWhereInput;
}

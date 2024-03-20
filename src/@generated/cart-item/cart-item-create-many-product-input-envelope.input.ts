import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartItemCreateManyProductInput } from './cart-item-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class CartItemCreateManyProductInputEnvelope {

    @Field(() => [CartItemCreateManyProductInput], {nullable:false})
    @Type(() => CartItemCreateManyProductInput)
    data!: Array<CartItemCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

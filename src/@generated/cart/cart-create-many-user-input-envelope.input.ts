import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateManyUserInput } from './cart-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CartCreateManyUserInputEnvelope {

    @Field(() => [CartCreateManyUserInput], {nullable:false})
    @Type(() => CartCreateManyUserInput)
    data!: Array<CartCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

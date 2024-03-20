import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartCreateInput } from './cart-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCartArgs {

    @Field(() => CartCreateInput, {nullable:false})
    @Type(() => CartCreateInput)
    data!: CartCreateInput;
}

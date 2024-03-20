import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCartArgs {

    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: CartWhereInput;
}

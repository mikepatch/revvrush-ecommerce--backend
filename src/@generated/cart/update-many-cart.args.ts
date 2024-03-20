import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartUpdateManyMutationInput } from './cart-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CartWhereInput } from './cart-where.input';

@ArgsType()
export class UpdateManyCartArgs {

    @Field(() => CartUpdateManyMutationInput, {nullable:false})
    @Type(() => CartUpdateManyMutationInput)
    data!: CartUpdateManyMutationInput;

    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: CartWhereInput;
}

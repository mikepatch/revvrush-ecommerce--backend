import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartScalarWhereInput } from './cart-scalar-where.input';
import { Type } from 'class-transformer';
import { CartUpdateManyMutationInput } from './cart-update-many-mutation.input';

@InputType()
export class CartUpdateManyWithWhereWithoutUserInput {

    @Field(() => CartScalarWhereInput, {nullable:false})
    @Type(() => CartScalarWhereInput)
    where!: CartScalarWhereInput;

    @Field(() => CartUpdateManyMutationInput, {nullable:false})
    @Type(() => CartUpdateManyMutationInput)
    data!: CartUpdateManyMutationInput;
}

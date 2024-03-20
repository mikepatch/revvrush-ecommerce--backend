import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartCreateManyInput } from './cart-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCartArgs {

    @Field(() => [CartCreateManyInput], {nullable:false})
    @Type(() => CartCreateManyInput)
    data!: Array<CartCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCartInput } from './user-update-without-cart.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCartInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCartInput, {nullable:false})
    @Type(() => UserUpdateWithoutCartInput)
    data!: UserUpdateWithoutCartInput;
}

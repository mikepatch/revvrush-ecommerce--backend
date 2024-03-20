import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCartInput } from './user-update-without-cart.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCartInput {

    @Field(() => UserUpdateWithoutCartInput, {nullable:false})
    @Type(() => UserUpdateWithoutCartInput)
    update!: UserUpdateWithoutCartInput;

    @Field(() => UserCreateWithoutCartInput, {nullable:false})
    @Type(() => UserCreateWithoutCartInput)
    create!: UserCreateWithoutCartInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

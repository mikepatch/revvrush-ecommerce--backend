import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCartInput } from './user-create-or-connect-without-cart.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCartInput {

    @Field(() => UserCreateWithoutCartInput, {nullable:true})
    @Type(() => UserCreateWithoutCartInput)
    create?: UserCreateWithoutCartInput;

    @Field(() => UserCreateOrConnectWithoutCartInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCartInput)
    connectOrCreate?: UserCreateOrConnectWithoutCartInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCartInput } from './user-create-or-connect-without-cart.input';
import { UserUpsertWithoutCartInput } from './user-upsert-without-cart.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCartInput } from './user-update-to-one-with-where-without-cart.input';

@InputType()
export class UserUpdateOneWithoutCartNestedInput {

    @Field(() => UserCreateWithoutCartInput, {nullable:true})
    @Type(() => UserCreateWithoutCartInput)
    create?: UserCreateWithoutCartInput;

    @Field(() => UserCreateOrConnectWithoutCartInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCartInput)
    connectOrCreate?: UserCreateOrConnectWithoutCartInput;

    @Field(() => UserUpsertWithoutCartInput, {nullable:true})
    @Type(() => UserUpsertWithoutCartInput)
    upsert?: UserUpsertWithoutCartInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCartInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCartInput)
    update?: UserUpdateToOneWithWhereWithoutCartInput;
}

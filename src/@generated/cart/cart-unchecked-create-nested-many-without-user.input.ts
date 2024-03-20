import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';
import { Type } from 'class-transformer';
import { CartCreateOrConnectWithoutUserInput } from './cart-create-or-connect-without-user.input';
import { CartCreateManyUserInputEnvelope } from './cart-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@InputType()
export class CartUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CartCreateWithoutUserInput], {nullable:true})
    @Type(() => CartCreateWithoutUserInput)
    create?: Array<CartCreateWithoutUserInput>;

    @Field(() => [CartCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CartCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CartCreateOrConnectWithoutUserInput>;

    @Field(() => CartCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CartCreateManyUserInputEnvelope)
    createMany?: CartCreateManyUserInputEnvelope;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    @Type(() => CartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}

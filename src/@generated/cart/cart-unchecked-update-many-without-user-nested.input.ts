import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';
import { Type } from 'class-transformer';
import { CartCreateOrConnectWithoutUserInput } from './cart-create-or-connect-without-user.input';
import { CartUpsertWithWhereUniqueWithoutUserInput } from './cart-upsert-with-where-unique-without-user.input';
import { CartCreateManyUserInputEnvelope } from './cart-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithWhereUniqueWithoutUserInput } from './cart-update-with-where-unique-without-user.input';
import { CartUpdateManyWithWhereWithoutUserInput } from './cart-update-many-with-where-without-user.input';
import { CartScalarWhereInput } from './cart-scalar-where.input';

@InputType()
export class CartUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CartCreateWithoutUserInput], {nullable:true})
    @Type(() => CartCreateWithoutUserInput)
    create?: Array<CartCreateWithoutUserInput>;

    @Field(() => [CartCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CartCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CartCreateOrConnectWithoutUserInput>;

    @Field(() => [CartUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CartUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CartUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CartCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CartCreateManyUserInputEnvelope)
    createMany?: CartCreateManyUserInputEnvelope;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    @Type(() => CartWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    @Type(() => CartWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    @Type(() => CartWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    @Type(() => CartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;

    @Field(() => [CartUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CartUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CartUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CartUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CartUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CartUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    @Type(() => CartScalarWhereInput)
    deleteMany?: Array<CartScalarWhereInput>;
}

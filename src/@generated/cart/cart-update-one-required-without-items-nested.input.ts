import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutItemsInput } from './cart-create-without-items.input';
import { Type } from 'class-transformer';
import { CartCreateOrConnectWithoutItemsInput } from './cart-create-or-connect-without-items.input';
import { CartUpsertWithoutItemsInput } from './cart-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateToOneWithWhereWithoutItemsInput } from './cart-update-to-one-with-where-without-items.input';

@InputType()
export class CartUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => CartCreateWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateWithoutItemsInput)
    create?: CartCreateWithoutItemsInput;

    @Field(() => CartCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateOrConnectWithoutItemsInput)
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput;

    @Field(() => CartUpsertWithoutItemsInput, {nullable:true})
    @Type(() => CartUpsertWithoutItemsInput)
    upsert?: CartUpsertWithoutItemsInput;

    @Field(() => CartWhereUniqueInput, {nullable:true})
    @Type(() => CartWhereUniqueInput)
    connect?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;

    @Field(() => CartUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => CartUpdateToOneWithWhereWithoutItemsInput)
    update?: CartUpdateToOneWithWhereWithoutItemsInput;
}

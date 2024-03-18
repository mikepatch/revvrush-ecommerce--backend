import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutProductsInput } from './order-create-without-products.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutProductsInput } from './order-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutProductsInput {

    @Field(() => OrderCreateWithoutProductsInput, {nullable:true})
    @Type(() => OrderCreateWithoutProductsInput)
    create?: OrderCreateWithoutProductsInput;

    @Field(() => OrderCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutProductsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

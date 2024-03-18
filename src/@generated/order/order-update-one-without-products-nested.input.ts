import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutProductsInput } from './order-create-without-products.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutProductsInput } from './order-create-or-connect-without-products.input';
import { OrderUpsertWithoutProductsInput } from './order-upsert-without-products.input';
import { OrderWhereInput } from './order-where.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutProductsInput } from './order-update-to-one-with-where-without-products.input';

@InputType()
export class OrderUpdateOneWithoutProductsNestedInput {

    @Field(() => OrderCreateWithoutProductsInput, {nullable:true})
    @Type(() => OrderCreateWithoutProductsInput)
    create?: OrderCreateWithoutProductsInput;

    @Field(() => OrderCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutProductsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput;

    @Field(() => OrderUpsertWithoutProductsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutProductsInput)
    upsert?: OrderUpsertWithoutProductsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    disconnect?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    delete?: OrderWhereInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutProductsInput)
    update?: OrderUpdateToOneWithWhereWithoutProductsInput;
}

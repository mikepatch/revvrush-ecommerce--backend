import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutProductsInput } from './order-create-without-products.input';

@InputType()
export class OrderCreateOrConnectWithoutProductsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderCreateWithoutProductsInput, {nullable:false})
    @Type(() => OrderCreateWithoutProductsInput)
    create!: OrderCreateWithoutProductsInput;
}

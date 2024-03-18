import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutProductsInput } from './order-update-without-products.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutProductsInput } from './order-create-without-products.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutProductsInput {

    @Field(() => OrderUpdateWithoutProductsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutProductsInput)
    update!: OrderUpdateWithoutProductsInput;

    @Field(() => OrderCreateWithoutProductsInput, {nullable:false})
    @Type(() => OrderCreateWithoutProductsInput)
    create!: OrderCreateWithoutProductsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}

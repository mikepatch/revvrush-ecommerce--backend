import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutProductsInput } from './order-update-without-products.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutProductsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutProductsInput)
    data!: OrderUpdateWithoutProductsInput;
}

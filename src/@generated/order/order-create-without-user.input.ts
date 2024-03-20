import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemCreateNestedManyWithoutOrderInput } from '../order-item/order-item-create-nested-many-without-order.input';

@InputType()
export class OrderCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    totalAmount!: number;

    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: OrderItemCreateNestedManyWithoutOrderInput;
}

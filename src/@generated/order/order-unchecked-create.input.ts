import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInput } from '../order-item/order-item-unchecked-create-nested-many-without-order.input';

@InputType()
export class OrderUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Float, {nullable:false})
    totalAmount!: number;

    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
}

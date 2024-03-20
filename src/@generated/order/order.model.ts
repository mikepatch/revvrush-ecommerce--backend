import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderItem } from '../order-item/order-item.model';
import { User } from '../user/user.model';
import { OrderCount } from './order-count.output';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Float, {nullable:false})
    totalAmount!: number;

    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [OrderItem], {nullable:true})
    items?: Array<OrderItem>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { User } from '../user/user.model';
import { Product } from '../product/product.model';
import { OrderCount } from './order-count.output';

@ObjectType()
export class Order {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Int, {nullable:false})
    totalAmount!: number;

    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}

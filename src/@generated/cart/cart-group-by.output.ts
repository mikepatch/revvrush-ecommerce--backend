import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CartCountAggregate } from './cart-count-aggregate.output';
import { CartMinAggregate } from './cart-min-aggregate.output';
import { CartMaxAggregate } from './cart-max-aggregate.output';

@ObjectType()
export class CartGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => CartCountAggregate, {nullable:true})
    _count?: CartCountAggregate;

    @Field(() => CartMinAggregate, {nullable:true})
    _min?: CartMinAggregate;

    @Field(() => CartMaxAggregate, {nullable:true})
    _max?: CartMaxAggregate;
}

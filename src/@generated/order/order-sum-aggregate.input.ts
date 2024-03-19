import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CartItemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;
}

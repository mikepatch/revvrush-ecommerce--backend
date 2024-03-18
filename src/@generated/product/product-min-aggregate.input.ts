import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

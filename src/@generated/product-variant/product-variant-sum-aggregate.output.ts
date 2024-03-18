import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantSumAggregate {

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Int, {nullable:true})
    price?: number;
}

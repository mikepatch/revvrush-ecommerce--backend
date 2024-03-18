import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductVariantCountAggregate } from './product-variant-count-aggregate.output';
import { ProductVariantAvgAggregate } from './product-variant-avg-aggregate.output';
import { ProductVariantSumAggregate } from './product-variant-sum-aggregate.output';
import { ProductVariantMinAggregate } from './product-variant-min-aggregate.output';
import { ProductVariantMaxAggregate } from './product-variant-max-aggregate.output';

@ObjectType()
export class ProductVariantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductVariantCountAggregate, {nullable:true})
    _count?: ProductVariantCountAggregate;

    @Field(() => ProductVariantAvgAggregate, {nullable:true})
    _avg?: ProductVariantAvgAggregate;

    @Field(() => ProductVariantSumAggregate, {nullable:true})
    _sum?: ProductVariantSumAggregate;

    @Field(() => ProductVariantMinAggregate, {nullable:true})
    _min?: ProductVariantMinAggregate;

    @Field(() => ProductVariantMaxAggregate, {nullable:true})
    _max?: ProductVariantMaxAggregate;
}

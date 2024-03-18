import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantCountAggregate } from './product-variant-count-aggregate.output';
import { ProductVariantAvgAggregate } from './product-variant-avg-aggregate.output';
import { ProductVariantSumAggregate } from './product-variant-sum-aggregate.output';
import { ProductVariantMinAggregate } from './product-variant-min-aggregate.output';
import { ProductVariantMaxAggregate } from './product-variant-max-aggregate.output';

@ObjectType()
export class AggregateProductVariant {

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

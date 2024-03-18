import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductVariantOptionCountAggregate } from './product-variant-option-count-aggregate.output';
import { ProductVariantOptionMinAggregate } from './product-variant-option-min-aggregate.output';
import { ProductVariantOptionMaxAggregate } from './product-variant-option-max-aggregate.output';

@ObjectType()
export class AggregateProductVariantOption {

    @Field(() => ProductVariantOptionCountAggregate, {nullable:true})
    _count?: ProductVariantOptionCountAggregate;

    @Field(() => ProductVariantOptionMinAggregate, {nullable:true})
    _min?: ProductVariantOptionMinAggregate;

    @Field(() => ProductVariantOptionMaxAggregate, {nullable:true})
    _max?: ProductVariantOptionMaxAggregate;
}

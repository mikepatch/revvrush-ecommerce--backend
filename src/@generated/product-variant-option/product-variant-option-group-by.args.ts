import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionWhereInput } from './product-variant-option-where.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionOrderByWithAggregationInput } from './product-variant-option-order-by-with-aggregation.input';
import { ProductVariantOptionScalarFieldEnum } from './product-variant-option-scalar-field.enum';
import { ProductVariantOptionScalarWhereWithAggregatesInput } from './product-variant-option-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantOptionCountAggregateInput } from './product-variant-option-count-aggregate.input';
import { ProductVariantOptionMinAggregateInput } from './product-variant-option-min-aggregate.input';
import { ProductVariantOptionMaxAggregateInput } from './product-variant-option-max-aggregate.input';

@ArgsType()
export class ProductVariantOptionGroupByArgs {

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: ProductVariantOptionWhereInput;

    @Field(() => [ProductVariantOptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithAggregationInput>;

    @Field(() => [ProductVariantOptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;

    @Field(() => ProductVariantOptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantOptionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantOptionCountAggregateInput, {nullable:true})
    _count?: ProductVariantOptionCountAggregateInput;

    @Field(() => ProductVariantOptionMinAggregateInput, {nullable:true})
    _min?: ProductVariantOptionMinAggregateInput;

    @Field(() => ProductVariantOptionMaxAggregateInput, {nullable:true})
    _max?: ProductVariantOptionMaxAggregateInput;
}

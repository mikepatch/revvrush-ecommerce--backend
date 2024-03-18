import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';
import { Type } from 'class-transformer';
import { ProductVariantOrderByWithAggregationInput } from './product-variant-order-by-with-aggregation.input';
import { ProductVariantScalarFieldEnum } from './product-variant-scalar-field.enum';
import { ProductVariantScalarWhereWithAggregatesInput } from './product-variant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantCountAggregateInput } from './product-variant-count-aggregate.input';
import { ProductVariantAvgAggregateInput } from './product-variant-avg-aggregate.input';
import { ProductVariantSumAggregateInput } from './product-variant-sum-aggregate.input';
import { ProductVariantMinAggregateInput } from './product-variant-min-aggregate.input';
import { ProductVariantMaxAggregateInput } from './product-variant-max-aggregate.input';

@ArgsType()
export class ProductVariantGroupByArgs {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;

    @Field(() => [ProductVariantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithAggregationInput>;

    @Field(() => [ProductVariantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantScalarFieldEnum>;

    @Field(() => ProductVariantScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductVariantScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductVariantCountAggregateInput, {nullable:true})
    _count?: ProductVariantCountAggregateInput;

    @Field(() => ProductVariantAvgAggregateInput, {nullable:true})
    _avg?: ProductVariantAvgAggregateInput;

    @Field(() => ProductVariantSumAggregateInput, {nullable:true})
    _sum?: ProductVariantSumAggregateInput;

    @Field(() => ProductVariantMinAggregateInput, {nullable:true})
    _min?: ProductVariantMinAggregateInput;

    @Field(() => ProductVariantMaxAggregateInput, {nullable:true})
    _max?: ProductVariantMaxAggregateInput;
}

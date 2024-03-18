import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';
import { Type } from 'class-transformer';
import { ProductVariantOrderByWithRelationInput } from './product-variant-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantCountAggregateInput } from './product-variant-count-aggregate.input';
import { ProductVariantAvgAggregateInput } from './product-variant-avg-aggregate.input';
import { ProductVariantSumAggregateInput } from './product-variant-sum-aggregate.input';
import { ProductVariantMinAggregateInput } from './product-variant-min-aggregate.input';
import { ProductVariantMaxAggregateInput } from './product-variant-max-aggregate.input';

@ArgsType()
export class ProductVariantAggregateArgs {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;

    @Field(() => [ProductVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

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

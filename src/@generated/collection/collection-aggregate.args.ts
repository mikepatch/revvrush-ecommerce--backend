import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { Type } from 'class-transformer';
import { CollectionOrderByWithRelationInput } from './collection-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CollectionCountAggregateInput } from './collection-count-aggregate.input';
import { CollectionMinAggregateInput } from './collection-min-aggregate.input';
import { CollectionMaxAggregateInput } from './collection-max-aggregate.input';

@ArgsType()
export class CollectionAggregateArgs {

    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: CollectionWhereInput;

    @Field(() => [CollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithRelationInput>;

    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CollectionCountAggregateInput, {nullable:true})
    _count?: CollectionCountAggregateInput;

    @Field(() => CollectionMinAggregateInput, {nullable:true})
    _min?: CollectionMinAggregateInput;

    @Field(() => CollectionMaxAggregateInput, {nullable:true})
    _max?: CollectionMaxAggregateInput;
}

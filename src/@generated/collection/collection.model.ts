import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { CollectionCount } from './collection-count.output';

@ObjectType()
export class Collection {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    coverImage!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => CollectionCount, {nullable:false})
    _count?: CollectionCount;
}

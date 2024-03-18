import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class CollectionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CollectionWhereInput], {nullable:true})
    AND?: Array<CollectionWhereInput>;

    @Field(() => [CollectionWhereInput], {nullable:true})
    OR?: Array<CollectionWhereInput>;

    @Field(() => [CollectionWhereInput], {nullable:true})
    NOT?: Array<CollectionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    coverImage?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}

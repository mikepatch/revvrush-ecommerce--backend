import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CollectionScalarWhereInput {

    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    AND?: Array<CollectionScalarWhereInput>;

    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    OR?: Array<CollectionScalarWhereInput>;

    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    NOT?: Array<CollectionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}

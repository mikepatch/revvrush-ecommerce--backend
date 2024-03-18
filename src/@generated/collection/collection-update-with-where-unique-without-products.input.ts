import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { Type } from 'class-transformer';
import { CollectionUpdateWithoutProductsInput } from './collection-update-without-products.input';

@InputType()
export class CollectionUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;

    @Field(() => CollectionUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CollectionUpdateWithoutProductsInput)
    data!: CollectionUpdateWithoutProductsInput;
}

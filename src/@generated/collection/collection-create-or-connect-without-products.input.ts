import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { Type } from 'class-transformer';
import { CollectionCreateWithoutProductsInput } from './collection-create-without-products.input';

@InputType()
export class CollectionCreateOrConnectWithoutProductsInput {

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;

    @Field(() => CollectionCreateWithoutProductsInput, {nullable:false})
    @Type(() => CollectionCreateWithoutProductsInput)
    create!: CollectionCreateWithoutProductsInput;
}

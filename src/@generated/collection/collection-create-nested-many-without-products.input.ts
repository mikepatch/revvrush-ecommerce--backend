import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutProductsInput } from './collection-create-without-products.input';
import { Type } from 'class-transformer';
import { CollectionCreateOrConnectWithoutProductsInput } from './collection-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@InputType()
export class CollectionCreateNestedManyWithoutProductsInput {

    @Field(() => [CollectionCreateWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateWithoutProductsInput)
    create?: Array<CollectionCreateWithoutProductsInput>;

    @Field(() => [CollectionCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;

    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
}

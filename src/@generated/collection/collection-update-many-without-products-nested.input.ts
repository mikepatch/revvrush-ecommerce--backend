import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutProductsInput } from './collection-create-without-products.input';
import { Type } from 'class-transformer';
import { CollectionCreateOrConnectWithoutProductsInput } from './collection-create-or-connect-without-products.input';
import { CollectionUpsertWithWhereUniqueWithoutProductsInput } from './collection-upsert-with-where-unique-without-products.input';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionUpdateWithWhereUniqueWithoutProductsInput } from './collection-update-with-where-unique-without-products.input';
import { CollectionUpdateManyWithWhereWithoutProductsInput } from './collection-update-many-with-where-without-products.input';
import { CollectionScalarWhereInput } from './collection-scalar-where.input';

@InputType()
export class CollectionUpdateManyWithoutProductsNestedInput {

    @Field(() => [CollectionCreateWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateWithoutProductsInput)
    create?: Array<CollectionCreateWithoutProductsInput>;

    @Field(() => [CollectionCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;

    @Field(() => [CollectionUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<CollectionUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;

    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;

    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;

    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;

    @Field(() => [CollectionUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<CollectionUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [CollectionUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<CollectionUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    @Type(() => CollectionScalarWhereInput)
    deleteMany?: Array<CollectionScalarWhereInput>;
}

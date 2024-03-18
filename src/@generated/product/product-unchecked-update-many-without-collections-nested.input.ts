import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCollectionsInput } from './product-create-without-collections.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCollectionsInput } from './product-create-or-connect-without-collections.input';
import { ProductUpsertWithWhereUniqueWithoutCollectionsInput } from './product-upsert-with-where-unique-without-collections.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutCollectionsInput } from './product-update-with-where-unique-without-collections.input';
import { ProductUpdateManyWithWhereWithoutCollectionsInput } from './product-update-many-with-where-without-collections.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutCollectionsNestedInput {

    @Field(() => [ProductCreateWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create?: Array<ProductCreateWithoutCollectionsInput>;

    @Field(() => [ProductCreateOrConnectWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCollectionsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCollectionsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCollectionsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCollectionsInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCollectionsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCollectionsInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCollectionsInput } from './product-create-without-collections.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCollectionsInput } from './product-create-or-connect-without-collections.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCollectionsInput {

    @Field(() => [ProductCreateWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create?: Array<ProductCreateWithoutCollectionsInput>;

    @Field(() => [ProductCreateOrConnectWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

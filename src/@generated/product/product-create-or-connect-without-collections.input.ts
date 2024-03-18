import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCollectionsInput } from './product-create-without-collections.input';

@InputType()
export class ProductCreateOrConnectWithoutCollectionsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create!: ProductCreateWithoutCollectionsInput;
}

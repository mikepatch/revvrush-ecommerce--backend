import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCollectionsInput } from './product-update-without-collections.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCollectionsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCollectionsInput)
    data!: ProductUpdateWithoutCollectionsInput;
}

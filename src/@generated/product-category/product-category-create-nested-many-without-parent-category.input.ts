import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutParentCategoryInput } from './product-category-create-without-parent-category.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutParentCategoryInput } from './product-category-create-or-connect-without-parent-category.input';
import { ProductCategoryCreateManyParentCategoryInputEnvelope } from './product-category-create-many-parent-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedManyWithoutParentCategoryInput {

    @Field(() => [ProductCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;

    @Field(() => ProductCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: ProductCategoryCreateManyParentCategoryInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
}

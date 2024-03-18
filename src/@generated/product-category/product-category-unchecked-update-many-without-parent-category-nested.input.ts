import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutParentCategoryInput } from './product-category-create-without-parent-category.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutParentCategoryInput } from './product-category-create-or-connect-without-parent-category.input';
import { ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput } from './product-category-upsert-with-where-unique-without-parent-category.input';
import { ProductCategoryCreateManyParentCategoryInputEnvelope } from './product-category-create-many-parent-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput } from './product-category-update-with-where-unique-without-parent-category.input';
import { ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput } from './product-category-update-many-with-where-without-parent-category.input';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput {

    @Field(() => [ProductCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;

    @Field(() => ProductCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: ProductCategoryCreateManyParentCategoryInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}

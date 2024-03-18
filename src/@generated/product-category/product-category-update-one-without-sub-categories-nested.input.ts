import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutSubCategoriesInput } from './product-category-create-without-sub-categories.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutSubCategoriesInput } from './product-category-create-or-connect-without-sub-categories.input';
import { ProductCategoryUpsertWithoutSubCategoriesInput } from './product-category-upsert-without-sub-categories.input';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput } from './product-category-update-to-one-with-where-without-sub-categories.input';

@InputType()
export class ProductCategoryUpdateOneWithoutSubCategoriesNestedInput {

    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create?: ProductCategoryCreateWithoutSubCategoriesInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutSubCategoriesInput;

    @Field(() => ProductCategoryUpsertWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryUpsertWithoutSubCategoriesInput)
    upsert?: ProductCategoryUpsertWithoutSubCategoriesInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    disconnect?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    delete?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput)
    update?: ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput;
}

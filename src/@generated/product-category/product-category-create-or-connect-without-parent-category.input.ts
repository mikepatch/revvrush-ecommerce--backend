import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutParentCategoryInput } from './product-category-create-without-parent-category.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutParentCategoryInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryCreateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create!: ProductCategoryCreateWithoutParentCategoryInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutParentCategoryInput } from './product-category-update-without-parent-category.input';

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutParentCategoryInput)
    data!: ProductCategoryUpdateWithoutParentCategoryInput;
}

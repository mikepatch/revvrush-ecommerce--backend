import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutSubCategoriesInput } from './product-category-update-without-sub-categories.input';

@InputType()
export class ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutSubCategoriesInput)
    data!: ProductCategoryUpdateWithoutSubCategoriesInput;
}

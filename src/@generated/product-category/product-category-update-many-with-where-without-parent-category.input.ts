import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateManyMutationInput } from './product-category-update-many-mutation.input';

@InputType()
export class ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput {

    @Field(() => ProductCategoryScalarWhereInput, {nullable:false})
    @Type(() => ProductCategoryScalarWhereInput)
    where!: ProductCategoryScalarWhereInput;

    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCategoryUpdateManyMutationInput)
    data!: ProductCategoryUpdateManyMutationInput;
}

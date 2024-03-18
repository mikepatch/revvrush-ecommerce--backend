import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryUpdateManyMutationInput } from './product-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductCategoryWhereInput } from './product-category-where.input';

@ArgsType()
export class UpdateManyProductCategoryArgs {

    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCategoryUpdateManyMutationInput)
    data!: ProductCategoryUpdateManyMutationInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}

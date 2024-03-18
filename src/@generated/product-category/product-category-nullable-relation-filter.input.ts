import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';

@InputType()
export class ProductCategoryNullableRelationFilter {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    is?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    isNot?: ProductCategoryWhereInput;
}

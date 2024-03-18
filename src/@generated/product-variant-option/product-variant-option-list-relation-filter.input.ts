import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionWhereInput } from './product-variant-option-where.input';

@InputType()
export class ProductVariantOptionListRelationFilter {

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    every?: ProductVariantOptionWhereInput;

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    some?: ProductVariantOptionWhereInput;

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    none?: ProductVariantOptionWhereInput;
}

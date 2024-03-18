import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionCreatevaluesInput } from './product-variant-option-createvalues.input';
import { ProductVariantCreateNestedOneWithoutOptionsInput } from '../product-variant/product-variant-create-nested-one-without-options.input';

@InputType()
export class ProductVariantOptionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: ProductVariantOptionCreatevaluesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductVariantCreateNestedOneWithoutOptionsInput, {nullable:false})
    productVariant!: ProductVariantCreateNestedOneWithoutOptionsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionCreatevaluesInput } from './product-variant-option-createvalues.input';

@InputType()
export class ProductVariantOptionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productVariantId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: ProductVariantOptionCreatevaluesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

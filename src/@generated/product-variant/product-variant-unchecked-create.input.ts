import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput } from '../product-variant-option/product-variant-option-unchecked-create-nested-many-without-product-variant.input';

@InputType()
export class ProductVariantUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput, {nullable:true})
    options?: ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput;
}

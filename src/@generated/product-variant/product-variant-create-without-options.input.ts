import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutVariantsInput } from '../product/product-create-nested-one-without-variants.input';

@InputType()
export class ProductVariantCreateWithoutOptionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutVariantsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutVariantsInput;
}

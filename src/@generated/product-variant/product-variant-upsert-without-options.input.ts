import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantUpdateWithoutOptionsInput } from './product-variant-update-without-options.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateWithoutOptionsInput } from './product-variant-create-without-options.input';
import { ProductVariantWhereInput } from './product-variant-where.input';

@InputType()
export class ProductVariantUpsertWithoutOptionsInput {

    @Field(() => ProductVariantUpdateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutOptionsInput)
    update!: ProductVariantUpdateWithoutOptionsInput;

    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create!: ProductVariantCreateWithoutOptionsInput;

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;
}

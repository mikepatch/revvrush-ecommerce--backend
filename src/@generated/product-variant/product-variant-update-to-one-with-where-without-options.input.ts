import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';
import { Type } from 'class-transformer';
import { ProductVariantUpdateWithoutOptionsInput } from './product-variant-update-without-options.input';

@InputType()
export class ProductVariantUpdateToOneWithWhereWithoutOptionsInput {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;

    @Field(() => ProductVariantUpdateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutOptionsInput)
    data!: ProductVariantUpdateWithoutOptionsInput;
}

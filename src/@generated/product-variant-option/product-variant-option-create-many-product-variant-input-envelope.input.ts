import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionCreateManyProductVariantInput } from './product-variant-option-create-many-product-variant.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductVariantOptionCreateManyProductVariantInputEnvelope {

    @Field(() => [ProductVariantOptionCreateManyProductVariantInput], {nullable:false})
    @Type(() => ProductVariantOptionCreateManyProductVariantInput)
    data!: Array<ProductVariantOptionCreateManyProductVariantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

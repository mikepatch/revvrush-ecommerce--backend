import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantCreateManyProductInput } from './product-variant-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductVariantCreateManyProductInputEnvelope {

    @Field(() => [ProductVariantCreateManyProductInput], {nullable:false})
    @Type(() => ProductVariantCreateManyProductInput)
    data!: Array<ProductVariantCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

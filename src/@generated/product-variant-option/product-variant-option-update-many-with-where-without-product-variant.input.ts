import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantOptionScalarWhereInput } from './product-variant-option-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionUpdateManyMutationInput } from './product-variant-option-update-many-mutation.input';

@InputType()
export class ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput {

    @Field(() => ProductVariantOptionScalarWhereInput, {nullable:false})
    @Type(() => ProductVariantOptionScalarWhereInput)
    where!: ProductVariantOptionScalarWhereInput;

    @Field(() => ProductVariantOptionUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateManyMutationInput)
    data!: ProductVariantOptionUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductVariantScalarWhereInput } from './product-variant-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductVariantUpdateManyMutationInput } from './product-variant-update-many-mutation.input';

@InputType()
export class ProductVariantUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductVariantScalarWhereInput, {nullable:false})
    @Type(() => ProductVariantScalarWhereInput)
    where!: ProductVariantScalarWhereInput;

    @Field(() => ProductVariantUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantUpdateManyMutationInput)
    data!: ProductVariantUpdateManyMutationInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionUpdateManyMutationInput } from './product-variant-option-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionWhereInput } from './product-variant-option-where.input';

@ArgsType()
export class UpdateManyProductVariantOptionArgs {

    @Field(() => ProductVariantOptionUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateManyMutationInput)
    data!: ProductVariantOptionUpdateManyMutationInput;

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: ProductVariantOptionWhereInput;
}

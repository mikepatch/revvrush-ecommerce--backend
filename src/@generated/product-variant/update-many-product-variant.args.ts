import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantUpdateManyMutationInput } from './product-variant-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductVariantWhereInput } from './product-variant-where.input';

@ArgsType()
export class UpdateManyProductVariantArgs {

    @Field(() => ProductVariantUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantUpdateManyMutationInput)
    data!: ProductVariantUpdateManyMutationInput;

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;
}

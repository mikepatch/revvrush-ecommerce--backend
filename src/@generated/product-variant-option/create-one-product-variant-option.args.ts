import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionCreateInput } from './product-variant-option-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductVariantOptionArgs {

    @Field(() => ProductVariantOptionCreateInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateInput)
    data!: ProductVariantOptionCreateInput;
}

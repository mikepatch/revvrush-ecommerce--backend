import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantCreateInput } from './product-variant-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductVariantArgs {

    @Field(() => ProductVariantCreateInput, {nullable:false})
    @Type(() => ProductVariantCreateInput)
    data!: ProductVariantCreateInput;
}

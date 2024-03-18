import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionWhereInput } from './product-variant-option-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductVariantOptionArgs {

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: ProductVariantOptionWhereInput;
}

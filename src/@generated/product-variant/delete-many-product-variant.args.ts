import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductVariantArgs {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;
}

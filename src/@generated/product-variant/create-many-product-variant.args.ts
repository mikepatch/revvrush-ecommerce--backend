import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantCreateManyInput } from './product-variant-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductVariantArgs {

    @Field(() => [ProductVariantCreateManyInput], {nullable:false})
    @Type(() => ProductVariantCreateManyInput)
    data!: Array<ProductVariantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

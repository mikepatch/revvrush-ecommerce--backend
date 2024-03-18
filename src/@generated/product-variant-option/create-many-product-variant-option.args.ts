import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionCreateManyInput } from './product-variant-option-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductVariantOptionArgs {

    @Field(() => [ProductVariantOptionCreateManyInput], {nullable:false})
    @Type(() => ProductVariantOptionCreateManyInput)
    data!: Array<ProductVariantOptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

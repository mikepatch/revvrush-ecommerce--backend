import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionUpdateInput } from './product-variant-option-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantOptionArgs {

    @Field(() => ProductVariantOptionUpdateInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateInput)
    data!: ProductVariantOptionUpdateInput;

    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}

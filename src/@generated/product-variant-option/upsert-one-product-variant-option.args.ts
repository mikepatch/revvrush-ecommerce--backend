import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionCreateInput } from './product-variant-option-create.input';
import { ProductVariantOptionUpdateInput } from './product-variant-option-update.input';

@ArgsType()
export class UpsertOneProductVariantOptionArgs {

    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantOptionCreateInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateInput)
    create!: ProductVariantOptionCreateInput;

    @Field(() => ProductVariantOptionUpdateInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateInput)
    update!: ProductVariantOptionUpdateInput;
}

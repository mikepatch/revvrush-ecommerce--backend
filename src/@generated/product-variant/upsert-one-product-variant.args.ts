import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductVariantCreateInput } from './product-variant-create.input';
import { ProductVariantUpdateInput } from './product-variant-update.input';

@ArgsType()
export class UpsertOneProductVariantArgs {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductVariantCreateInput, {nullable:false})
    @Type(() => ProductVariantCreateInput)
    create!: ProductVariantCreateInput;

    @Field(() => ProductVariantUpdateInput, {nullable:false})
    @Type(() => ProductVariantUpdateInput)
    update!: ProductVariantUpdateInput;
}

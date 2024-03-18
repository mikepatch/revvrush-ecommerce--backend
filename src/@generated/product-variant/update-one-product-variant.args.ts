import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantUpdateInput } from './product-variant-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';

@ArgsType()
export class UpdateOneProductVariantArgs {

    @Field(() => ProductVariantUpdateInput, {nullable:false})
    @Type(() => ProductVariantUpdateInput)
    data!: ProductVariantUpdateInput;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

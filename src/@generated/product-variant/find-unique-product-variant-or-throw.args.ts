import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProductVariantOrThrowArgs {

    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

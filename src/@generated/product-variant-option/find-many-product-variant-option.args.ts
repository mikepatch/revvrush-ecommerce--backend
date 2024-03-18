import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantOptionWhereInput } from './product-variant-option-where.input';
import { Type } from 'class-transformer';
import { ProductVariantOptionOrderByWithRelationInput } from './product-variant-option-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductVariantOptionWhereUniqueInput } from './product-variant-option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantOptionScalarFieldEnum } from './product-variant-option-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantOptionArgs {

    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: ProductVariantOptionWhereInput;

    @Field(() => [ProductVariantOptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;

    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantOptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}

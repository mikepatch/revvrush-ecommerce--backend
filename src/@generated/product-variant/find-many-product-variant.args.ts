import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductVariantWhereInput } from './product-variant-where.input';
import { Type } from 'class-transformer';
import { ProductVariantOrderByWithRelationInput } from './product-variant-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductVariantScalarFieldEnum } from './product-variant-scalar-field.enum';

@ArgsType()
export class FindManyProductVariantArgs {

    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: ProductVariantWhereInput;

    @Field(() => [ProductVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;

    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductVariantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}

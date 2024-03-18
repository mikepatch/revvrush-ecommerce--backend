import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input';

@InputType()
export class ProductCreateOrConnectWithoutVariantsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductCreateWithoutVariantsInput)
    create!: ProductCreateWithoutVariantsInput;
}

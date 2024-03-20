import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCartItemInput } from './product-create-without-cart-item.input';

@InputType()
export class ProductCreateOrConnectWithoutCartItemInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutCartItemInput)
    create!: ProductCreateWithoutCartItemInput;
}

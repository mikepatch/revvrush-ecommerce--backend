import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCartItemInput } from './product-create-without-cart-item.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCartItemInput } from './product-create-or-connect-without-cart-item.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutCartItemInput {

    @Field(() => ProductCreateWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutCartItemInput)
    create?: ProductCreateWithoutCartItemInput;

    @Field(() => ProductCreateOrConnectWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCartItemInput)
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

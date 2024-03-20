import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCartItemInput } from './product-create-without-cart-item.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCartItemInput } from './product-create-or-connect-without-cart-item.input';
import { ProductUpsertWithoutCartItemInput } from './product-upsert-without-cart-item.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutCartItemInput } from './product-update-to-one-with-where-without-cart-item.input';

@InputType()
export class ProductUpdateOneRequiredWithoutCartItemNestedInput {

    @Field(() => ProductCreateWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutCartItemInput)
    create?: ProductCreateWithoutCartItemInput;

    @Field(() => ProductCreateOrConnectWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCartItemInput)
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput;

    @Field(() => ProductUpsertWithoutCartItemInput, {nullable:true})
    @Type(() => ProductUpsertWithoutCartItemInput)
    upsert?: ProductUpsertWithoutCartItemInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutCartItemInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutCartItemInput)
    update?: ProductUpdateToOneWithWhereWithoutCartItemInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderItemInput } from './product-create-without-order-item.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderItemInput } from './product-create-or-connect-without-order-item.input';
import { ProductUpsertWithoutOrderItemInput } from './product-upsert-without-order-item.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutOrderItemInput } from './product-update-to-one-with-where-without-order-item.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderItemNestedInput {

    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create?: ProductCreateWithoutOrderItemInput;

    @Field(() => ProductCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput;

    @Field(() => ProductUpsertWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderItemInput)
    upsert?: ProductUpsertWithoutOrderItemInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutOrderItemInput)
    update?: ProductUpdateToOneWithWhereWithoutOrderItemInput;
}

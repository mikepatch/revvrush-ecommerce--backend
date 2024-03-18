import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderInput } from './product-create-without-order.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderInput } from './product-create-or-connect-without-order.input';
import { ProductUpsertWithWhereUniqueWithoutOrderInput } from './product-upsert-with-where-unique-without-order.input';
import { ProductCreateManyOrderInputEnvelope } from './product-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutOrderInput } from './product-update-with-where-unique-without-order.input';
import { ProductUpdateManyWithWhereWithoutOrderInput } from './product-update-many-with-where-without-order.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutOrderNestedInput {

    @Field(() => [ProductCreateWithoutOrderInput], {nullable:true})
    @Type(() => ProductCreateWithoutOrderInput)
    create?: Array<ProductCreateWithoutOrderInput>;

    @Field(() => [ProductCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOrderInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => ProductCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyOrderInputEnvelope)
    createMany?: ProductCreateManyOrderInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

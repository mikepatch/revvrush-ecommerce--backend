import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderInput } from './product-create-without-order.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderInput } from './product-create-or-connect-without-order.input';
import { ProductCreateManyOrderInputEnvelope } from './product-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutOrderInput {

    @Field(() => [ProductCreateWithoutOrderInput], {nullable:true})
    @Type(() => ProductCreateWithoutOrderInput)
    create?: Array<ProductCreateWithoutOrderInput>;

    @Field(() => [ProductCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOrderInput>;

    @Field(() => ProductCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyOrderInputEnvelope)
    createMany?: ProductCreateManyOrderInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

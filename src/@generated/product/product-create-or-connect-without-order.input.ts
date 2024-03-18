import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderInput } from './product-create-without-order.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutOrderInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderInput)
    create!: ProductCreateWithoutOrderInput;
}

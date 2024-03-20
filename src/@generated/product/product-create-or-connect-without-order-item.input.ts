import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderItemInput } from './product-create-without-order-item.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderItemInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: ProductCreateWithoutOrderItemInput;
}

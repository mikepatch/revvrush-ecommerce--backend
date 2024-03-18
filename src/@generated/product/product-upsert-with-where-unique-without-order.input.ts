import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutOrderInput } from './product-update-without-order.input';
import { ProductCreateWithoutOrderInput } from './product-create-without-order.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutOrderInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutOrderInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderInput)
    update!: ProductUpdateWithoutOrderInput;

    @Field(() => ProductCreateWithoutOrderInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderInput)
    create!: ProductCreateWithoutOrderInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutVariantsInput } from './product-create-or-connect-without-variants.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutVariantsInput {

    @Field(() => ProductCreateWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateWithoutVariantsInput)
    create?: ProductCreateWithoutVariantsInput;

    @Field(() => ProductCreateOrConnectWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutVariantsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

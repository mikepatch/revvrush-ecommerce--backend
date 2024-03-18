import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutVariantsInput } from './product-create-or-connect-without-variants.input';
import { ProductUpsertWithoutVariantsInput } from './product-upsert-without-variants.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutVariantsInput } from './product-update-to-one-with-where-without-variants.input';

@InputType()
export class ProductUpdateOneRequiredWithoutVariantsNestedInput {

    @Field(() => ProductCreateWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateWithoutVariantsInput)
    create?: ProductCreateWithoutVariantsInput;

    @Field(() => ProductCreateOrConnectWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutVariantsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput;

    @Field(() => ProductUpsertWithoutVariantsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutVariantsInput)
    upsert?: ProductUpsertWithoutVariantsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutVariantsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutVariantsInput)
    update?: ProductUpdateToOneWithWhereWithoutVariantsInput;
}

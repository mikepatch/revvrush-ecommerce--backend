import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutVariantsInput } from './product-update-without-variants.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutVariantsInput {

    @Field(() => ProductUpdateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutVariantsInput)
    update!: ProductUpdateWithoutVariantsInput;

    @Field(() => ProductCreateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductCreateWithoutVariantsInput)
    create!: ProductCreateWithoutVariantsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}

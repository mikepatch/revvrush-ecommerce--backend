import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutVariantsInput } from './product-update-without-variants.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutVariantsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutVariantsInput)
    data!: ProductUpdateWithoutVariantsInput;
}

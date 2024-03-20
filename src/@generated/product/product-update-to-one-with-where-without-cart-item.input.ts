import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCartItemInput } from './product-update-without-cart-item.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutCartItemInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCartItemInput)
    data!: ProductUpdateWithoutCartItemInput;
}

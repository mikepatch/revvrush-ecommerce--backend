import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutOrderItemInput } from './product-update-without-order-item.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutOrderItemInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderItemInput)
    data!: ProductUpdateWithoutOrderItemInput;
}

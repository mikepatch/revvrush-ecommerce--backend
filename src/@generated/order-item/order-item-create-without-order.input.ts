import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutOrderItemInput } from '../product/product-create-nested-one-without-order-item.input';

@InputType()
export class OrderItemCreateWithoutOrderInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutOrderItemInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutOrderItemInput;
}

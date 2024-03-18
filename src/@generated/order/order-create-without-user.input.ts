import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutOrderInput } from '../product/product-create-nested-many-without-order.input';

@InputType()
export class OrderCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutOrderInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutOrderInput;
}

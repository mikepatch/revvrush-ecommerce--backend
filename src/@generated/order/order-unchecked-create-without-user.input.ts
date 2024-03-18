import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutOrderInput } from '../product/product-unchecked-create-nested-many-without-order.input';

@InputType()
export class OrderUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutOrderInput;
}

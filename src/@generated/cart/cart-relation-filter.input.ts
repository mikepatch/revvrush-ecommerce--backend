import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';

@InputType()
export class CartRelationFilter {

    @Field(() => CartWhereInput, {nullable:true})
    is?: CartWhereInput;

    @Field(() => CartWhereInput, {nullable:true})
    isNot?: CartWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CartItem } from '../cart-item/cart-item.model';
import { User } from '../user/user.model';
import { CartCount } from './cart-count.output';

@ObjectType()
export class Cart {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => [CartItem], {nullable:true})
    items?: Array<CartItem>;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => CartCount, {nullable:false})
    _count?: CartCount;
}

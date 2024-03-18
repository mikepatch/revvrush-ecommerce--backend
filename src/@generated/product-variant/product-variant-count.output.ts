import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductVariantCount {

    @Field(() => Int, {nullable:false})
    options?: number;
}

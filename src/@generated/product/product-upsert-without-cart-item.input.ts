import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutCartItemInput } from './product-update-without-cart-item.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCartItemInput } from './product-create-without-cart-item.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutCartItemInput {

    @Field(() => ProductUpdateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCartItemInput)
    update!: ProductUpdateWithoutCartItemInput;

    @Field(() => ProductCreateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutCartItemInput)
    create!: ProductCreateWithoutCartItemInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}

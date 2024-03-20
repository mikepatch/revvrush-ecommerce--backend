import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutOrderItemInput } from './product-update-without-order-item.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderItemInput } from './product-create-without-order-item.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutOrderItemInput {

    @Field(() => ProductUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderItemInput)
    update!: ProductUpdateWithoutOrderItemInput;

    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: ProductCreateWithoutOrderItemInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}

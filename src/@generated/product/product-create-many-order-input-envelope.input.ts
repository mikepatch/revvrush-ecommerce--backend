import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyOrderInput } from './product-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyOrderInputEnvelope {

    @Field(() => [ProductCreateManyOrderInput], {nullable:false})
    @Type(() => ProductCreateManyOrderInput)
    data!: Array<ProductCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

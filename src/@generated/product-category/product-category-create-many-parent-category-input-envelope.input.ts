import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateManyParentCategoryInput } from './product-category-create-many-parent-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCategoryCreateManyParentCategoryInputEnvelope {

    @Field(() => [ProductCategoryCreateManyParentCategoryInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyParentCategoryInput)
    data!: Array<ProductCategoryCreateManyParentCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductCategoryCount } from './product-category-count.output';

@ObjectType()
export class ProductCategory {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    parentCategoryId!: string | null;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => ProductCategory, {nullable:true})
    parentCategory?: ProductCategory | null;

    @Field(() => [ProductCategory], {nullable:true})
    subCategories?: Array<ProductCategory>;

    @Field(() => ProductCategoryCount, {nullable:false})
    _count?: ProductCategoryCount;
}

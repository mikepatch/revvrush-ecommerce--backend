import { Resolver, Query, Mutation, Args, ID, Int } from '@nestjs/graphql';

import { ProductCategoriesService } from './product-categories.service';
import {
  ProductCategoriesList,
  ProductCategory,
} from './entities/product-category.entity';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';

@Resolver(() => ProductCategory)
export class ProductCategoriesResolver {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Args('createProductCategoryInput')
    createProductCategoryInput: CreateProductCategoryInput,
  ) {
    return await this.productCategoriesService.create(
      createProductCategoryInput,
    );
  }

  @Query(() => ProductCategoriesList, { name: 'productCategories' })
  async getProductCategories(
    @Args('take', {
      defaultValue: 10,
      type: () => Int,
      nullable: true,
      name: 'Take',
    })
    take?: number,
    @Args('skip', {
      defaultValue: 0,
      type: () => Int,
      nullable: true,
      name: 'Skip',
    })
    skip?: number,
  ) {
    return this.productCategoriesService.findAll({ skip, take });
  }

  @Query(() => ProductCategory, { name: 'productCategory' })
  async getProductCategory(
    @Args('id', { type: () => ID, nullable: true, name: 'ID' })
    id?: string,
    @Args('name', { nullable: true, name: 'Name' })
    name?: string,
    @Args('slug', { nullable: true, name: 'Slug' })
    slug?: string,
  ) {
    return this.productCategoriesService.findOne({ id, name, slug });
  }

  @Query(() => ProductCategory, { name: 'productCategoryById' })
  async getProductCategoryById(@Args('id', { type: () => ID }) id: string) {
    return await this.productCategoriesService.findOneById({ id });
  }

  @Mutation(() => ProductCategory)
  async updateProductCategory(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateProductCategoryInput')
    updateProductCategoryInput: UpdateProductCategoryInput,
  ) {
    return this.productCategoriesService.update({
      where: { id },
      data: updateProductCategoryInput,
    });
  }

  @Mutation(() => ProductCategory)
  async removeProductCategory(@Args('id', { type: () => ID }) id: string) {
    return this.productCategoriesService.remove({ id });
  }
}

import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    parentCategoryId = "parentCategoryId"
}


registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })

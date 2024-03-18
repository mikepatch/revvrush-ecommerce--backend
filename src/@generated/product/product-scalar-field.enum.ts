import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    price = "price",
    slug = "slug",
    categoryId = "categoryId",
    images = "images",
    description = "description",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })

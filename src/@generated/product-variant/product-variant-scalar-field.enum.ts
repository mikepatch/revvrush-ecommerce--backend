import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantScalarFieldEnum {
    id = "id",
    name = "name",
    stock = "stock",
    price = "price",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum', description: undefined })

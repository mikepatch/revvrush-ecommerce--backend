import { registerEnumType } from '@nestjs/graphql';

export enum ProductVariantOptionScalarFieldEnum {
    id = "id",
    productVariantId = "productVariantId",
    name = "name",
    values = "values",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductVariantOptionScalarFieldEnum, { name: 'ProductVariantOptionScalarFieldEnum', description: undefined })

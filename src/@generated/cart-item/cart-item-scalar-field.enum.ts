import { registerEnumType } from '@nestjs/graphql';

export enum CartItemScalarFieldEnum {
    id = "id",
    cartId = "cartId",
    productId = "productId",
    quantity = "quantity",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CartItemScalarFieldEnum, { name: 'CartItemScalarFieldEnum', description: undefined })

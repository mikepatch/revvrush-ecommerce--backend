import { registerEnumType } from '@nestjs/graphql';

export enum CartScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(CartScalarFieldEnum, { name: 'CartScalarFieldEnum', description: undefined })

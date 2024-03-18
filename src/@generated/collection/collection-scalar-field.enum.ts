import { registerEnumType } from '@nestjs/graphql';

export enum CollectionScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    slug = "slug",
    coverImage = "coverImage",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined })

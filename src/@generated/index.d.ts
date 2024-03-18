import { Prisma } from '@prisma/client';
export declare enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    name = "name",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProductVariantOptionScalarFieldEnum {
    id = "id",
    productVariantId = "productVariantId",
    name = "name",
    values = "values",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProductVariantScalarFieldEnum {
    id = "id",
    name = "name",
    stock = "stock",
    price = "price",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    parentCategoryId = "parentCategoryId"
}
export declare enum ProductScalarFieldEnum {
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
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum OrderScalarFieldEnum {
    id = "id",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum CollectionScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    slug = "slug",
    coverImage = "coverImage",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare class AggregateCollection {
    _count?: InstanceType<typeof CollectionCountAggregate>;
    _min?: InstanceType<typeof CollectionMinAggregate>;
    _max?: InstanceType<typeof CollectionMaxAggregate>;
}
export declare class CollectionAggregateArgs {
    where?: InstanceType<typeof CollectionWhereInput>;
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CollectionCountAggregateInput>;
    _min?: InstanceType<typeof CollectionMinAggregateInput>;
    _max?: InstanceType<typeof CollectionMaxAggregateInput>;
}
export declare class CollectionCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    slug?: true;
    coverImage?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class CollectionCountAggregate {
    id: number;
    name: number;
    description: number;
    slug: number;
    coverImage: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class CollectionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CollectionCount {
    products?: number;
}
export declare class CollectionCreateManyInput {
    id?: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CollectionCreateNestedManyWithoutProductsInput {
    create?: Array<CollectionCreateWithoutProductsInput>;
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
}
export declare class CollectionCreateOrConnectWithoutProductsInput {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CollectionCreateWithoutProductsInput>;
}
export declare class CollectionCreateWithoutProductsInput {
    id?: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CollectionCreateInput {
    id?: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCollectionsInput>;
}
export declare class CollectionGroupByArgs {
    where?: InstanceType<typeof CollectionWhereInput>;
    orderBy?: Array<CollectionOrderByWithAggregationInput>;
    by: Array<keyof typeof CollectionScalarFieldEnum>;
    having?: InstanceType<typeof CollectionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CollectionCountAggregateInput>;
    _min?: InstanceType<typeof CollectionMinAggregateInput>;
    _max?: InstanceType<typeof CollectionMaxAggregateInput>;
}
export declare class CollectionGroupBy {
    id: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof CollectionCountAggregate>;
    _min?: InstanceType<typeof CollectionMinAggregate>;
    _max?: InstanceType<typeof CollectionMaxAggregate>;
}
export declare class CollectionListRelationFilter {
    every?: InstanceType<typeof CollectionWhereInput>;
    some?: InstanceType<typeof CollectionWhereInput>;
    none?: InstanceType<typeof CollectionWhereInput>;
}
export declare class CollectionMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    slug?: true;
    coverImage?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CollectionMaxAggregate {
    id?: string;
    name?: string;
    description?: string;
    slug?: string;
    coverImage?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CollectionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CollectionMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    slug?: true;
    coverImage?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CollectionMinAggregate {
    id?: string;
    name?: string;
    description?: string;
    slug?: string;
    coverImage?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CollectionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CollectionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CollectionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CollectionCountOrderByAggregateInput>;
    _max?: InstanceType<typeof CollectionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CollectionMinOrderByAggregateInput>;
}
export declare class CollectionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}
export declare class CollectionScalarWhereWithAggregatesInput {
    AND?: Array<CollectionScalarWhereWithAggregatesInput>;
    OR?: Array<CollectionScalarWhereWithAggregatesInput>;
    NOT?: Array<CollectionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    coverImage?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class CollectionScalarWhereInput {
    AND?: Array<CollectionScalarWhereInput>;
    OR?: Array<CollectionScalarWhereInput>;
    NOT?: Array<CollectionScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    slug?: InstanceType<typeof StringFilter>;
    coverImage?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class CollectionUncheckedCreateNestedManyWithoutProductsInput {
    create?: Array<CollectionCreateWithoutProductsInput>;
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
}
export declare class CollectionUncheckedCreateWithoutProductsInput {
    id?: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CollectionUncheckedCreateInput {
    id?: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCollectionsInput>;
}
export declare class CollectionUncheckedUpdateManyWithoutProductsNestedInput {
    create?: Array<CollectionCreateWithoutProductsInput>;
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    upsert?: Array<CollectionUpsertWithWhereUniqueWithoutProductsInput>;
    set?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    update?: Array<CollectionUpdateWithWhereUniqueWithoutProductsInput>;
    updateMany?: Array<CollectionUpdateManyWithWhereWithoutProductsInput>;
    deleteMany?: Array<CollectionScalarWhereInput>;
}
export declare class CollectionUncheckedUpdateManyWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CollectionUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CollectionUncheckedUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CollectionUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCollectionsNestedInput>;
}
export declare class CollectionUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CollectionUpdateManyWithWhereWithoutProductsInput {
    where: InstanceType<typeof CollectionScalarWhereInput>;
    data: InstanceType<typeof CollectionUpdateManyMutationInput>;
}
export declare class CollectionUpdateManyWithoutProductsNestedInput {
    create?: Array<CollectionCreateWithoutProductsInput>;
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    upsert?: Array<CollectionUpsertWithWhereUniqueWithoutProductsInput>;
    set?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    update?: Array<CollectionUpdateWithWhereUniqueWithoutProductsInput>;
    updateMany?: Array<CollectionUpdateManyWithWhereWithoutProductsInput>;
    deleteMany?: Array<CollectionScalarWhereInput>;
}
export declare class CollectionUpdateWithWhereUniqueWithoutProductsInput {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CollectionUpdateWithoutProductsInput>;
}
export declare class CollectionUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CollectionUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutCollectionsNestedInput>;
}
export declare class CollectionUpsertWithWhereUniqueWithoutProductsInput {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CollectionUpdateWithoutProductsInput>;
    create: InstanceType<typeof CollectionCreateWithoutProductsInput>;
}
export declare class CollectionWhereUniqueInput {
    id?: string;
    AND?: Array<CollectionWhereInput>;
    OR?: Array<CollectionWhereInput>;
    NOT?: Array<CollectionWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    slug?: InstanceType<typeof StringFilter>;
    coverImage?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
}
export declare class CollectionWhereInput {
    AND?: Array<CollectionWhereInput>;
    OR?: Array<CollectionWhereInput>;
    NOT?: Array<CollectionWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    slug?: InstanceType<typeof StringFilter>;
    coverImage?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
}
export declare class Collection {
    id: string;
    name: string;
    description: string;
    slug: string;
    coverImage: string;
    createdAt: Date;
    updatedAt: Date;
    products?: Array<Product>;
    _count?: InstanceType<typeof CollectionCount>;
}
export declare class CreateManyCollectionArgs {
    data: Array<CollectionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCollectionArgs {
    data: InstanceType<typeof CollectionCreateInput>;
}
export declare class DeleteManyCollectionArgs {
    where?: InstanceType<typeof CollectionWhereInput>;
}
export declare class DeleteOneCollectionArgs {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}
export declare class FindFirstCollectionOrThrowArgs {
    where?: InstanceType<typeof CollectionWhereInput>;
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}
export declare class FindFirstCollectionArgs {
    where?: InstanceType<typeof CollectionWhereInput>;
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}
export declare class FindManyCollectionArgs {
    where?: InstanceType<typeof CollectionWhereInput>;
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}
export declare class FindUniqueCollectionOrThrowArgs {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCollectionArgs {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCollectionArgs {
    data: InstanceType<typeof CollectionUpdateManyMutationInput>;
    where?: InstanceType<typeof CollectionWhereInput>;
}
export declare class UpdateOneCollectionArgs {
    data: InstanceType<typeof CollectionUpdateInput>;
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCollectionArgs {
    where: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CollectionCreateInput>;
    update: InstanceType<typeof CollectionUpdateInput>;
}
export declare class AggregateOrder {
    _count?: InstanceType<typeof OrderCountAggregate>;
    _min?: InstanceType<typeof OrderMinAggregate>;
    _max?: InstanceType<typeof OrderMaxAggregate>;
}
export declare class CreateManyOrderArgs {
    data: Array<OrderCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneOrderArgs {
    data: InstanceType<typeof OrderCreateInput>;
}
export declare class DeleteManyOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class DeleteOneOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
export declare class FindFirstOrderOrThrowArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindFirstOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindManyOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindUniqueOrderOrThrowArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
export declare class FindUniqueOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
export declare class OrderAggregateArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}
export declare class OrderCountAggregateInput {
    id?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class OrderCountAggregate {
    id: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class OrderCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderCount {
    products?: number;
}
export declare class OrderCreateManyUserInputEnvelope {
    data: Array<OrderCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class OrderCreateManyUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderCreateManyInput {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderCreateNestedManyWithoutUserInput {
    create?: Array<OrderCreateWithoutUserInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}
export declare class OrderCreateNestedOneWithoutProductsInput {
    create?: InstanceType<typeof OrderCreateWithoutProductsInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutProductsInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
export declare class OrderCreateOrConnectWithoutProductsInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    create: InstanceType<typeof OrderCreateWithoutProductsInput>;
}
export declare class OrderCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    create: InstanceType<typeof OrderCreateWithoutUserInput>;
}
export declare class OrderCreateWithoutProductsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
}
export declare class OrderCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutOrderInput>;
}
export declare class OrderCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutOrderInput>;
}
export declare class OrderGroupByArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    by: Array<keyof typeof OrderScalarFieldEnum>;
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}
export declare class OrderGroupBy {
    id: string;
    userId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof OrderCountAggregate>;
    _min?: InstanceType<typeof OrderMinAggregate>;
    _max?: InstanceType<typeof OrderMaxAggregate>;
}
export declare class OrderListRelationFilter {
    every?: InstanceType<typeof OrderWhereInput>;
    some?: InstanceType<typeof OrderWhereInput>;
    none?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderMaxAggregateInput {
    id?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class OrderMaxAggregate {
    id?: string;
    userId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderMinAggregateInput {
    id?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class OrderMinAggregate {
    id?: string;
    userId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderNullableRelationFilter {
    is?: InstanceType<typeof OrderWhereInput>;
    isNot?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class OrderOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
}
export declare class OrderOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class OrderScalarWhereInput {
    AND?: Array<OrderScalarWhereInput>;
    OR?: Array<OrderScalarWhereInput>;
    NOT?: Array<OrderScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class OrderUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<OrderCreateWithoutUserInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}
export declare class OrderUncheckedCreateWithoutProductsInput {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderUncheckedCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedCreateInput {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<OrderCreateWithoutUserInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<OrderScalarWhereInput>;
}
export declare class OrderUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof OrderScalarWhereInput>;
    data: InstanceType<typeof OrderUpdateManyMutationInput>;
}
export declare class OrderUpdateManyWithoutUserNestedInput {
    create?: Array<OrderCreateWithoutUserInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<OrderScalarWhereInput>;
}
export declare class OrderUpdateOneWithoutProductsNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutProductsInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutProductsInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutProductsInput>;
    disconnect?: InstanceType<typeof OrderWhereInput>;
    delete?: InstanceType<typeof OrderWhereInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutProductsInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutProductsInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutProductsInput>;
}
export declare class OrderUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    data: InstanceType<typeof OrderUpdateWithoutUserInput>;
}
export declare class OrderUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
}
export declare class OrderUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    update: InstanceType<typeof OrderUpdateWithoutUserInput>;
    create: InstanceType<typeof OrderCreateWithoutUserInput>;
}
export declare class OrderUpsertWithoutProductsInput {
    update: InstanceType<typeof OrderUpdateWithoutProductsInput>;
    create: InstanceType<typeof OrderCreateWithoutProductsInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderWhereUniqueInput {
    id?: string;
    AND?: Array<OrderWhereInput>;
    OR?: Array<OrderWhereInput>;
    NOT?: Array<OrderWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
}
export declare class OrderWhereInput {
    AND?: Array<OrderWhereInput>;
    OR?: Array<OrderWhereInput>;
    NOT?: Array<OrderWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
}
export declare class Order {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    user?: InstanceType<typeof User>;
    products?: Array<Product>;
    _count?: InstanceType<typeof OrderCount>;
}
export declare class UpdateManyOrderArgs {
    data: InstanceType<typeof OrderUpdateManyMutationInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class UpdateOneOrderArgs {
    data: InstanceType<typeof OrderUpdateInput>;
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
export declare class UpsertOneOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    create: InstanceType<typeof OrderCreateInput>;
    update: InstanceType<typeof OrderUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableIntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableListFilter {
    equals?: Array<string>;
    has?: string;
    hasEvery?: Array<string>;
    hasSome?: Array<string>;
    isEmpty?: boolean;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateProduct {
    _count?: InstanceType<typeof ProductCountAggregate>;
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    _sum?: InstanceType<typeof ProductSumAggregate>;
    _min?: InstanceType<typeof ProductMinAggregate>;
    _max?: InstanceType<typeof ProductMaxAggregate>;
}
export declare class CreateManyProductArgs {
    data: Array<ProductCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProductArgs {
    data: InstanceType<typeof ProductCreateInput>;
}
export declare class DeleteManyProductArgs {
    where?: InstanceType<typeof ProductWhereInput>;
}
export declare class DeleteOneProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class FindFirstProductOrThrowArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
export declare class FindFirstProductArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
export declare class FindManyProductArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
export declare class FindUniqueProductOrThrowArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class ProductAggregateArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}
export declare class ProductAvgAggregateInput {
    price?: true;
}
export declare class ProductAvgAggregate {
    price?: number;
}
export declare class ProductAvgOrderByAggregateInput {
    price?: keyof typeof SortOrder;
}
export declare class ProductCountAggregateInput {
    id?: true;
    name?: true;
    price?: true;
    slug?: true;
    categoryId?: true;
    images?: true;
    description?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProductCountAggregate {
    id: number;
    name: number;
    price: number;
    slug: number;
    categoryId: number;
    images: number;
    description: number;
    orderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProductCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    images?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductCount {
    variants?: number;
    collections?: number;
}
export declare class ProductCreateManyCategoryInputEnvelope {
    data: Array<ProductCreateManyCategoryInput>;
    skipDuplicates?: boolean;
}
export declare class ProductCreateManyCategoryInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductCreateManyOrderInputEnvelope {
    data: Array<ProductCreateManyOrderInput>;
    skipDuplicates?: boolean;
}
export declare class ProductCreateManyOrderInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductCreateManyInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductCreateNestedManyWithoutCategoryInput {
    create?: Array<ProductCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductCreateNestedManyWithoutCollectionsInput {
    create?: Array<ProductCreateWithoutCollectionsInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductCreateNestedManyWithoutOrderInput {
    create?: Array<ProductCreateWithoutOrderInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof ProductCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductCreateNestedOneWithoutVariantsInput {
    create?: InstanceType<typeof ProductCreateWithoutVariantsInput>;
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutVariantsInput>;
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class ProductCreateOrConnectWithoutCategoryInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}
export declare class ProductCreateOrConnectWithoutCollectionsInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateWithoutCollectionsInput>;
}
export declare class ProductCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateWithoutOrderInput>;
}
export declare class ProductCreateOrConnectWithoutVariantsInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateWithoutVariantsInput>;
}
export declare class ProductCreateWithoutCategoryInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutProductsInput>;
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
}
export declare class ProductCreateWithoutCollectionsInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutProductsInput>;
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
}
export declare class ProductCreateWithoutOrderInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
}
export declare class ProductCreateWithoutVariantsInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutProductsInput>;
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
}
export declare class ProductCreateInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutProductsInput>;
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
}
export declare class ProductCreateimagesInput {
    set: Array<string>;
}
export declare class ProductGroupByArgs {
    where?: InstanceType<typeof ProductWhereInput>;
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductScalarFieldEnum>;
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}
export declare class ProductGroupBy {
    id: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: Array<string>;
    description?: string;
    orderId?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProductCountAggregate>;
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    _sum?: InstanceType<typeof ProductSumAggregate>;
    _min?: InstanceType<typeof ProductMinAggregate>;
    _max?: InstanceType<typeof ProductMaxAggregate>;
}
export declare class ProductListRelationFilter {
    every?: InstanceType<typeof ProductWhereInput>;
    some?: InstanceType<typeof ProductWhereInput>;
    none?: InstanceType<typeof ProductWhereInput>;
}
export declare class ProductMaxAggregateInput {
    id?: true;
    name?: true;
    price?: true;
    slug?: true;
    categoryId?: true;
    description?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProductMaxAggregate {
    id?: string;
    name?: string;
    price?: number;
    slug?: string;
    categoryId?: string;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductMinAggregateInput {
    id?: true;
    name?: true;
    price?: true;
    slug?: true;
    categoryId?: true;
    description?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProductMinAggregate {
    id?: string;
    name?: string;
    price?: number;
    slug?: string;
    categoryId?: string;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProductOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    images?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    orderId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}
export declare class ProductOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    images?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    orderId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    category?: InstanceType<typeof ProductCategoryOrderByWithRelationInput>;
    Order?: InstanceType<typeof OrderOrderByWithRelationInput>;
    variants?: InstanceType<typeof ProductVariantOrderByRelationAggregateInput>;
    collections?: InstanceType<typeof CollectionOrderByRelationAggregateInput>;
}
export declare class ProductRelationFilter {
    is?: InstanceType<typeof ProductWhereInput>;
    isNot?: InstanceType<typeof ProductWhereInput>;
}
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    categoryId?: InstanceType<typeof StringWithAggregatesFilter>;
    images?: InstanceType<typeof StringNullableListFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    orderId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProductScalarWhereInput {
    AND?: Array<ProductScalarWhereInput>;
    OR?: Array<ProductScalarWhereInput>;
    NOT?: Array<ProductScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof IntFilter>;
    slug?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof StringFilter>;
    images?: InstanceType<typeof StringNullableListFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    orderId?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ProductSumAggregateInput {
    price?: true;
}
export declare class ProductSumAggregate {
    price?: number;
}
export declare class ProductSumOrderByAggregateInput {
    price?: keyof typeof SortOrder;
}
export declare class ProductUncheckedCreateNestedManyWithoutCategoryInput {
    create?: Array<ProductCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductUncheckedCreateNestedManyWithoutCollectionsInput {
    create?: Array<ProductCreateWithoutCollectionsInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductUncheckedCreateNestedManyWithoutOrderInput {
    create?: Array<ProductCreateWithoutOrderInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof ProductCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
export declare class ProductUncheckedCreateWithoutCategoryInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
}
export declare class ProductUncheckedCreateWithoutCollectionsInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
}
export declare class ProductUncheckedCreateWithoutOrderInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
}
export declare class ProductUncheckedCreateWithoutVariantsInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
}
export declare class ProductUncheckedCreateInput {
    id?: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images?: InstanceType<typeof ProductCreateimagesInput>;
    description?: string;
    orderId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
}
export declare class ProductUncheckedUpdateManyWithoutCategoryNestedInput {
    create?: Array<ProductCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUncheckedUpdateManyWithoutCategoryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateManyWithoutCollectionsNestedInput {
    create?: Array<ProductCreateWithoutCollectionsInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCollectionsInput>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutCollectionsInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCollectionsInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUncheckedUpdateManyWithoutCollectionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateManyWithoutOrderNestedInput {
    create?: Array<ProductCreateWithoutOrderInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOrderInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof ProductCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUncheckedUpdateManyWithoutOrderInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUncheckedUpdateWithoutCategoryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUncheckedUpdateWithoutCollectionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
}
export declare class ProductUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUncheckedUpdateWithoutVariantsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductUpdateManyWithWhereWithoutCategoryInput {
    where: InstanceType<typeof ProductScalarWhereInput>;
    data: InstanceType<typeof ProductUpdateManyMutationInput>;
}
export declare class ProductUpdateManyWithWhereWithoutCollectionsInput {
    where: InstanceType<typeof ProductScalarWhereInput>;
    data: InstanceType<typeof ProductUpdateManyMutationInput>;
}
export declare class ProductUpdateManyWithWhereWithoutOrderInput {
    where: InstanceType<typeof ProductScalarWhereInput>;
    data: InstanceType<typeof ProductUpdateManyMutationInput>;
}
export declare class ProductUpdateManyWithoutCategoryNestedInput {
    create?: Array<ProductCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUpdateManyWithoutCollectionsNestedInput {
    create?: Array<ProductCreateWithoutCollectionsInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCollectionsInput>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutCollectionsInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCollectionsInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUpdateManyWithoutOrderNestedInput {
    create?: Array<ProductCreateWithoutOrderInput>;
    connectOrCreate?: Array<ProductCreateOrConnectWithoutOrderInput>;
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof ProductCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    update?: Array<ProductUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<ProductUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<ProductScalarWhereInput>;
}
export declare class ProductUpdateOneRequiredWithoutVariantsNestedInput {
    create?: InstanceType<typeof ProductCreateWithoutVariantsInput>;
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutVariantsInput>;
    upsert?: InstanceType<typeof ProductUpsertWithoutVariantsInput>;
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProductUpdateToOneWithWhereWithoutVariantsInput>;
}
export declare class ProductUpdateToOneWithWhereWithoutVariantsInput {
    where?: InstanceType<typeof ProductWhereInput>;
    data: InstanceType<typeof ProductUpdateWithoutVariantsInput>;
}
export declare class ProductUpdateWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
}
export declare class ProductUpdateWithWhereUniqueWithoutCollectionsInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductUpdateWithoutCollectionsInput>;
}
export declare class ProductUpdateWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductUpdateWithoutOrderInput>;
}
export declare class ProductUpdateWithoutCategoryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutProductsNestedInput>;
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUpdateWithoutCollectionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutProductsNestedInput>;
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
}
export declare class ProductUpdateWithoutOrderInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUpdateWithoutVariantsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutProductsNestedInput>;
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutProductsNestedInput>;
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
}
export declare class ProductUpdateimagesInput {
    set?: Array<string>;
    push?: Array<string>;
}
export declare class ProductUpsertWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
    create: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}
export declare class ProductUpsertWithWhereUniqueWithoutCollectionsInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductUpdateWithoutCollectionsInput>;
    create: InstanceType<typeof ProductCreateWithoutCollectionsInput>;
}
export declare class ProductUpsertWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductUpdateWithoutOrderInput>;
    create: InstanceType<typeof ProductCreateWithoutOrderInput>;
}
export declare class ProductUpsertWithoutVariantsInput {
    update: InstanceType<typeof ProductUpdateWithoutVariantsInput>;
    create: InstanceType<typeof ProductCreateWithoutVariantsInput>;
    where?: InstanceType<typeof ProductWhereInput>;
}
export declare class ProductWhereUniqueInput {
    id?: string;
    AND?: Array<ProductWhereInput>;
    OR?: Array<ProductWhereInput>;
    NOT?: Array<ProductWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof IntFilter>;
    slug?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof StringFilter>;
    images?: InstanceType<typeof StringNullableListFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    orderId?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof ProductCategoryRelationFilter>;
    Order?: InstanceType<typeof OrderNullableRelationFilter>;
    variants?: InstanceType<typeof ProductVariantListRelationFilter>;
    collections?: InstanceType<typeof CollectionListRelationFilter>;
}
export declare class ProductWhereInput {
    AND?: Array<ProductWhereInput>;
    OR?: Array<ProductWhereInput>;
    NOT?: Array<ProductWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof IntFilter>;
    slug?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof StringFilter>;
    images?: InstanceType<typeof StringNullableListFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    orderId?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof ProductCategoryRelationFilter>;
    Order?: InstanceType<typeof OrderNullableRelationFilter>;
    variants?: InstanceType<typeof ProductVariantListRelationFilter>;
    collections?: InstanceType<typeof CollectionListRelationFilter>;
}
export declare class Product {
    id: string;
    name: string;
    price: number;
    slug: string;
    categoryId: string;
    images: Array<string>;
    description: string | null;
    orderId: string | null;
    createdAt: Date;
    updatedAt: Date;
    category?: InstanceType<typeof ProductCategory>;
    Order?: InstanceType<typeof Order> | null;
    variants?: Array<ProductVariant>;
    collections?: Array<Collection>;
    _count?: InstanceType<typeof ProductCount>;
}
export declare class UpdateManyProductArgs {
    data: InstanceType<typeof ProductUpdateManyMutationInput>;
    where?: InstanceType<typeof ProductWhereInput>;
}
export declare class UpdateOneProductArgs {
    data: InstanceType<typeof ProductUpdateInput>;
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProductArgs {
    where: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCreateInput>;
    update: InstanceType<typeof ProductUpdateInput>;
}
export declare class AggregateProductCategory {
    _count?: InstanceType<typeof ProductCategoryCountAggregate>;
    _min?: InstanceType<typeof ProductCategoryMinAggregate>;
    _max?: InstanceType<typeof ProductCategoryMaxAggregate>;
}
export declare class CreateManyProductCategoryArgs {
    data: Array<ProductCategoryCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProductCategoryArgs {
    data: InstanceType<typeof ProductCategoryCreateInput>;
}
export declare class DeleteManyProductCategoryArgs {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class DeleteOneProductCategoryArgs {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
export declare class FindFirstProductCategoryOrThrowArgs {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}
export declare class FindFirstProductCategoryArgs {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}
export declare class FindManyProductCategoryArgs {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}
export declare class FindUniqueProductCategoryOrThrowArgs {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProductCategoryArgs {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
export declare class ProductCategoryAggregateArgs {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductCategoryCountAggregateInput>;
    _min?: InstanceType<typeof ProductCategoryMinAggregateInput>;
    _max?: InstanceType<typeof ProductCategoryMaxAggregateInput>;
}
export declare class ProductCategoryCountAggregateInput {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
    parentCategoryId?: true;
    _all?: true;
}
export declare class ProductCategoryCountAggregate {
    id: number;
    name: number;
    slug: number;
    createdAt: number;
    updatedAt: number;
    parentCategoryId: number;
    _all: number;
}
export declare class ProductCategoryCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    parentCategoryId?: keyof typeof SortOrder;
}
export declare class ProductCategoryCount {
    products?: number;
    subCategories?: number;
}
export declare class ProductCategoryCreateManyParentCategoryInputEnvelope {
    data: Array<ProductCategoryCreateManyParentCategoryInput>;
    skipDuplicates?: boolean;
}
export declare class ProductCategoryCreateManyParentCategoryInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductCategoryCreateManyInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategoryId?: string;
}
export declare class ProductCategoryCreateNestedManyWithoutParentCategoryInput {
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
}
export declare class ProductCategoryCreateNestedOneWithoutProductsInput {
    create?: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutProductsInput>;
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
export declare class ProductCategoryCreateNestedOneWithoutSubCategoriesInput {
    create?: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutSubCategoriesInput>;
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
export declare class ProductCategoryCreateOrConnectWithoutParentCategoryInput {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCategoryCreateWithoutParentCategoryInput>;
}
export declare class ProductCategoryCreateOrConnectWithoutProductsInput {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
}
export declare class ProductCategoryCreateOrConnectWithoutSubCategoriesInput {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
}
export declare class ProductCategoryCreateWithoutParentCategoryInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
    subCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
}
export declare class ProductCategoryCreateWithoutProductsInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategory?: InstanceType<typeof ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
    subCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
}
export declare class ProductCategoryCreateWithoutSubCategoriesInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
    parentCategory?: InstanceType<typeof ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
}
export declare class ProductCategoryCreateInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
    parentCategory?: InstanceType<typeof ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
    subCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
}
export declare class ProductCategoryGroupByArgs {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    orderBy?: Array<ProductCategoryOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductCategoryScalarFieldEnum>;
    having?: InstanceType<typeof ProductCategoryScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductCategoryCountAggregateInput>;
    _min?: InstanceType<typeof ProductCategoryMinAggregateInput>;
    _max?: InstanceType<typeof ProductCategoryMaxAggregateInput>;
}
export declare class ProductCategoryGroupBy {
    id: string;
    name: string;
    slug: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    parentCategoryId?: string;
    _count?: InstanceType<typeof ProductCategoryCountAggregate>;
    _min?: InstanceType<typeof ProductCategoryMinAggregate>;
    _max?: InstanceType<typeof ProductCategoryMaxAggregate>;
}
export declare class ProductCategoryListRelationFilter {
    every?: InstanceType<typeof ProductCategoryWhereInput>;
    some?: InstanceType<typeof ProductCategoryWhereInput>;
    none?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class ProductCategoryMaxAggregateInput {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
    parentCategoryId?: true;
}
export declare class ProductCategoryMaxAggregate {
    id?: string;
    name?: string;
    slug?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategoryId?: string;
}
export declare class ProductCategoryMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    parentCategoryId?: keyof typeof SortOrder;
}
export declare class ProductCategoryMinAggregateInput {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
    parentCategoryId?: true;
}
export declare class ProductCategoryMinAggregate {
    id?: string;
    name?: string;
    slug?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategoryId?: string;
}
export declare class ProductCategoryMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    parentCategoryId?: keyof typeof SortOrder;
}
export declare class ProductCategoryNullableRelationFilter {
    is?: InstanceType<typeof ProductCategoryWhereInput>;
    isNot?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class ProductCategoryOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProductCategoryOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    parentCategoryId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ProductCategoryCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ProductCategoryMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProductCategoryMinOrderByAggregateInput>;
}
export declare class ProductCategoryOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    slug?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    parentCategoryId?: InstanceType<typeof SortOrderInput>;
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
    parentCategory?: InstanceType<typeof ProductCategoryOrderByWithRelationInput>;
    subCategories?: InstanceType<typeof ProductCategoryOrderByRelationAggregateInput>;
}
export declare class ProductCategoryRelationFilter {
    is?: InstanceType<typeof ProductCategoryWhereInput>;
    isNot?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class ProductCategoryScalarWhereWithAggregatesInput {
    AND?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    OR?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    parentCategoryId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class ProductCategoryScalarWhereInput {
    AND?: Array<ProductCategoryScalarWhereInput>;
    OR?: Array<ProductCategoryScalarWhereInput>;
    NOT?: Array<ProductCategoryScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    slug?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    parentCategoryId?: InstanceType<typeof StringNullableFilter>;
}
export declare class ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput {
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
}
export declare class ProductCategoryUncheckedCreateWithoutParentCategoryInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
    subCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
}
export declare class ProductCategoryUncheckedCreateWithoutProductsInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategoryId?: string;
    subCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
}
export declare class ProductCategoryUncheckedCreateWithoutSubCategoriesInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategoryId?: string;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
}
export declare class ProductCategoryUncheckedCreateInput {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentCategoryId?: string;
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
    subCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
}
export declare class ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput {
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput>;
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}
export declare class ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductCategoryUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ProductCategoryUncheckedUpdateWithoutParentCategoryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
    subCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
}
export declare class ProductCategoryUncheckedUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
}
export declare class ProductCategoryUncheckedUpdateWithoutSubCategoriesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
}
export declare class ProductCategoryUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
    subCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
}
export declare class ProductCategoryUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput {
    where: InstanceType<typeof ProductCategoryScalarWhereInput>;
    data: InstanceType<typeof ProductCategoryUpdateManyMutationInput>;
}
export declare class ProductCategoryUpdateManyWithoutParentCategoryNestedInput {
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput>;
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}
export declare class ProductCategoryUpdateOneRequiredWithoutProductsNestedInput {
    create?: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutProductsInput>;
    upsert?: InstanceType<typeof ProductCategoryUpsertWithoutProductsInput>;
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProductCategoryUpdateToOneWithWhereWithoutProductsInput>;
}
export declare class ProductCategoryUpdateOneWithoutSubCategoriesNestedInput {
    create?: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutSubCategoriesInput>;
    upsert?: InstanceType<typeof ProductCategoryUpsertWithoutSubCategoriesInput>;
    disconnect?: InstanceType<typeof ProductCategoryWhereInput>;
    delete?: InstanceType<typeof ProductCategoryWhereInput>;
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput>;
}
export declare class ProductCategoryUpdateToOneWithWhereWithoutProductsInput {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    data: InstanceType<typeof ProductCategoryUpdateWithoutProductsInput>;
}
export declare class ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput {
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    data: InstanceType<typeof ProductCategoryUpdateWithoutSubCategoriesInput>;
}
export declare class ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductCategoryUpdateWithoutParentCategoryInput>;
}
export declare class ProductCategoryUpdateWithoutParentCategoryInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
    subCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
}
export declare class ProductCategoryUpdateWithoutProductsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    parentCategory?: InstanceType<typeof ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
    subCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
}
export declare class ProductCategoryUpdateWithoutSubCategoriesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
    parentCategory?: InstanceType<typeof ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
}
export declare class ProductCategoryUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
    parentCategory?: InstanceType<typeof ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
    subCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
}
export declare class ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductCategoryUpdateWithoutParentCategoryInput>;
    create: InstanceType<typeof ProductCategoryCreateWithoutParentCategoryInput>;
}
export declare class ProductCategoryUpsertWithoutProductsInput {
    update: InstanceType<typeof ProductCategoryUpdateWithoutProductsInput>;
    create: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class ProductCategoryUpsertWithoutSubCategoriesInput {
    update: InstanceType<typeof ProductCategoryUpdateWithoutSubCategoriesInput>;
    create: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class ProductCategoryWhereUniqueInput {
    id?: string;
    AND?: Array<ProductCategoryWhereInput>;
    OR?: Array<ProductCategoryWhereInput>;
    NOT?: Array<ProductCategoryWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    slug?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    parentCategoryId?: InstanceType<typeof StringNullableFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
    parentCategory?: InstanceType<typeof ProductCategoryNullableRelationFilter>;
    subCategories?: InstanceType<typeof ProductCategoryListRelationFilter>;
}
export declare class ProductCategoryWhereInput {
    AND?: Array<ProductCategoryWhereInput>;
    OR?: Array<ProductCategoryWhereInput>;
    NOT?: Array<ProductCategoryWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    slug?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    parentCategoryId?: InstanceType<typeof StringNullableFilter>;
    products?: InstanceType<typeof ProductListRelationFilter>;
    parentCategory?: InstanceType<typeof ProductCategoryNullableRelationFilter>;
    subCategories?: InstanceType<typeof ProductCategoryListRelationFilter>;
}
export declare class ProductCategory {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    parentCategoryId: string | null;
    products?: Array<Product>;
    parentCategory?: InstanceType<typeof ProductCategory> | null;
    subCategories?: Array<ProductCategory>;
    _count?: InstanceType<typeof ProductCategoryCount>;
}
export declare class UpdateManyProductCategoryArgs {
    data: InstanceType<typeof ProductCategoryUpdateManyMutationInput>;
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}
export declare class UpdateOneProductCategoryArgs {
    data: InstanceType<typeof ProductCategoryUpdateInput>;
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProductCategoryArgs {
    where: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductCategoryCreateInput>;
    update: InstanceType<typeof ProductCategoryUpdateInput>;
}
export declare class AggregateProductVariant {
    _count?: InstanceType<typeof ProductVariantCountAggregate>;
    _avg?: InstanceType<typeof ProductVariantAvgAggregate>;
    _sum?: InstanceType<typeof ProductVariantSumAggregate>;
    _min?: InstanceType<typeof ProductVariantMinAggregate>;
    _max?: InstanceType<typeof ProductVariantMaxAggregate>;
}
export declare class CreateManyProductVariantArgs {
    data: Array<ProductVariantCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProductVariantArgs {
    data: InstanceType<typeof ProductVariantCreateInput>;
}
export declare class DeleteManyProductVariantArgs {
    where?: InstanceType<typeof ProductVariantWhereInput>;
}
export declare class DeleteOneProductVariantArgs {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}
export declare class FindFirstProductVariantOrThrowArgs {
    where?: InstanceType<typeof ProductVariantWhereInput>;
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}
export declare class FindFirstProductVariantArgs {
    where?: InstanceType<typeof ProductVariantWhereInput>;
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}
export declare class FindManyProductVariantArgs {
    where?: InstanceType<typeof ProductVariantWhereInput>;
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}
export declare class FindUniqueProductVariantOrThrowArgs {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProductVariantArgs {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}
export declare class ProductVariantAggregateArgs {
    where?: InstanceType<typeof ProductVariantWhereInput>;
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductVariantCountAggregateInput>;
    _avg?: InstanceType<typeof ProductVariantAvgAggregateInput>;
    _sum?: InstanceType<typeof ProductVariantSumAggregateInput>;
    _min?: InstanceType<typeof ProductVariantMinAggregateInput>;
    _max?: InstanceType<typeof ProductVariantMaxAggregateInput>;
}
export declare class ProductVariantAvgAggregateInput {
    stock?: true;
    price?: true;
}
export declare class ProductVariantAvgAggregate {
    stock?: number;
    price?: number;
}
export declare class ProductVariantAvgOrderByAggregateInput {
    stock?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
}
export declare class ProductVariantCountAggregateInput {
    id?: true;
    name?: true;
    stock?: true;
    price?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProductVariantCountAggregate {
    id: number;
    name: number;
    stock: number;
    price: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProductVariantCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stock?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    productId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductVariantCount {
    options?: number;
}
export declare class ProductVariantCreateManyProductInputEnvelope {
    data: Array<ProductVariantCreateManyProductInput>;
    skipDuplicates?: boolean;
}
export declare class ProductVariantCreateManyProductInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantCreateManyInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantCreateNestedManyWithoutProductInput {
    create?: Array<ProductVariantCreateWithoutProductInput>;
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
}
export declare class ProductVariantCreateNestedOneWithoutOptionsInput {
    create?: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
    connectOrCreate?: InstanceType<typeof ProductVariantCreateOrConnectWithoutOptionsInput>;
    connect?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}
export declare class ProductVariantCreateOrConnectWithoutOptionsInput {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
}
export declare class ProductVariantCreateOrConnectWithoutProductInput {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductVariantCreateWithoutProductInput>;
}
export declare class ProductVariantCreateWithoutOptionsInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: InstanceType<typeof ProductCreateNestedOneWithoutVariantsInput>;
}
export declare class ProductVariantCreateWithoutProductInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    options?: InstanceType<typeof ProductVariantOptionCreateNestedManyWithoutProductVariantInput>;
}
export declare class ProductVariantCreateInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: InstanceType<typeof ProductCreateNestedOneWithoutVariantsInput>;
    options?: InstanceType<typeof ProductVariantOptionCreateNestedManyWithoutProductVariantInput>;
}
export declare class ProductVariantGroupByArgs {
    where?: InstanceType<typeof ProductVariantWhereInput>;
    orderBy?: Array<ProductVariantOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductVariantScalarFieldEnum>;
    having?: InstanceType<typeof ProductVariantScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductVariantCountAggregateInput>;
    _avg?: InstanceType<typeof ProductVariantAvgAggregateInput>;
    _sum?: InstanceType<typeof ProductVariantSumAggregateInput>;
    _min?: InstanceType<typeof ProductVariantMinAggregateInput>;
    _max?: InstanceType<typeof ProductVariantMaxAggregateInput>;
}
export declare class ProductVariantGroupBy {
    id: string;
    name: string;
    stock: number;
    price?: number;
    productId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProductVariantCountAggregate>;
    _avg?: InstanceType<typeof ProductVariantAvgAggregate>;
    _sum?: InstanceType<typeof ProductVariantSumAggregate>;
    _min?: InstanceType<typeof ProductVariantMinAggregate>;
    _max?: InstanceType<typeof ProductVariantMaxAggregate>;
}
export declare class ProductVariantListRelationFilter {
    every?: InstanceType<typeof ProductVariantWhereInput>;
    some?: InstanceType<typeof ProductVariantWhereInput>;
    none?: InstanceType<typeof ProductVariantWhereInput>;
}
export declare class ProductVariantMaxAggregateInput {
    id?: true;
    name?: true;
    stock?: true;
    price?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProductVariantMaxAggregate {
    id?: string;
    name?: string;
    stock?: number;
    price?: number;
    productId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stock?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    productId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductVariantMinAggregateInput {
    id?: true;
    name?: true;
    stock?: true;
    price?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProductVariantMinAggregate {
    id?: string;
    name?: string;
    stock?: number;
    price?: number;
    productId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stock?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    productId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductVariantOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProductVariantOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stock?: keyof typeof SortOrder;
    price?: InstanceType<typeof SortOrderInput>;
    productId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProductVariantCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProductVariantAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProductVariantMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProductVariantMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProductVariantSumOrderByAggregateInput>;
}
export declare class ProductVariantOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stock?: keyof typeof SortOrder;
    price?: InstanceType<typeof SortOrderInput>;
    productId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
    options?: InstanceType<typeof ProductVariantOptionOrderByRelationAggregateInput>;
}
export declare class ProductVariantRelationFilter {
    is?: InstanceType<typeof ProductVariantWhereInput>;
    isNot?: InstanceType<typeof ProductVariantWhereInput>;
}
export declare class ProductVariantScalarWhereWithAggregatesInput {
    AND?: Array<ProductVariantScalarWhereWithAggregatesInput>;
    OR?: Array<ProductVariantScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductVariantScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    stock?: InstanceType<typeof IntWithAggregatesFilter>;
    price?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProductVariantScalarWhereInput {
    AND?: Array<ProductVariantScalarWhereInput>;
    OR?: Array<ProductVariantScalarWhereInput>;
    NOT?: Array<ProductVariantScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    stock?: InstanceType<typeof IntFilter>;
    price?: InstanceType<typeof IntNullableFilter>;
    productId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ProductVariantSumAggregateInput {
    stock?: true;
    price?: true;
}
export declare class ProductVariantSumAggregate {
    stock?: number;
    price?: number;
}
export declare class ProductVariantSumOrderByAggregateInput {
    stock?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
}
export declare class ProductVariantUncheckedCreateNestedManyWithoutProductInput {
    create?: Array<ProductVariantCreateWithoutProductInput>;
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
}
export declare class ProductVariantUncheckedCreateWithoutOptionsInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantUncheckedCreateWithoutProductInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    options?: InstanceType<typeof ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput>;
}
export declare class ProductVariantUncheckedCreateInput {
    id?: string;
    name: string;
    stock: number;
    price?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    options?: InstanceType<typeof ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput>;
}
export declare class ProductVariantUncheckedUpdateManyWithoutProductNestedInput {
    create?: Array<ProductVariantCreateWithoutProductInput>;
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    upsert?: Array<ProductVariantUpsertWithWhereUniqueWithoutProductInput>;
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    update?: Array<ProductVariantUpdateWithWhereUniqueWithoutProductInput>;
    updateMany?: Array<ProductVariantUpdateManyWithWhereWithoutProductInput>;
    deleteMany?: Array<ProductVariantScalarWhereInput>;
}
export declare class ProductVariantUncheckedUpdateManyWithoutProductInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantUncheckedUpdateWithoutOptionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantUncheckedUpdateWithoutProductInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    options?: InstanceType<typeof ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput>;
}
export declare class ProductVariantUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    options?: InstanceType<typeof ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput>;
}
export declare class ProductVariantUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantUpdateManyWithWhereWithoutProductInput {
    where: InstanceType<typeof ProductVariantScalarWhereInput>;
    data: InstanceType<typeof ProductVariantUpdateManyMutationInput>;
}
export declare class ProductVariantUpdateManyWithoutProductNestedInput {
    create?: Array<ProductVariantCreateWithoutProductInput>;
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    upsert?: Array<ProductVariantUpsertWithWhereUniqueWithoutProductInput>;
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    update?: Array<ProductVariantUpdateWithWhereUniqueWithoutProductInput>;
    updateMany?: Array<ProductVariantUpdateManyWithWhereWithoutProductInput>;
    deleteMany?: Array<ProductVariantScalarWhereInput>;
}
export declare class ProductVariantUpdateOneRequiredWithoutOptionsNestedInput {
    create?: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
    connectOrCreate?: InstanceType<typeof ProductVariantCreateOrConnectWithoutOptionsInput>;
    upsert?: InstanceType<typeof ProductVariantUpsertWithoutOptionsInput>;
    connect?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProductVariantUpdateToOneWithWhereWithoutOptionsInput>;
}
export declare class ProductVariantUpdateToOneWithWhereWithoutOptionsInput {
    where?: InstanceType<typeof ProductVariantWhereInput>;
    data: InstanceType<typeof ProductVariantUpdateWithoutOptionsInput>;
}
export declare class ProductVariantUpdateWithWhereUniqueWithoutProductInput {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductVariantUpdateWithoutProductInput>;
}
export declare class ProductVariantUpdateWithoutOptionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutVariantsNestedInput>;
}
export declare class ProductVariantUpdateWithoutProductInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    options?: InstanceType<typeof ProductVariantOptionUpdateManyWithoutProductVariantNestedInput>;
}
export declare class ProductVariantUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutVariantsNestedInput>;
    options?: InstanceType<typeof ProductVariantOptionUpdateManyWithoutProductVariantNestedInput>;
}
export declare class ProductVariantUpsertWithWhereUniqueWithoutProductInput {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductVariantUpdateWithoutProductInput>;
    create: InstanceType<typeof ProductVariantCreateWithoutProductInput>;
}
export declare class ProductVariantUpsertWithoutOptionsInput {
    update: InstanceType<typeof ProductVariantUpdateWithoutOptionsInput>;
    create: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
    where?: InstanceType<typeof ProductVariantWhereInput>;
}
export declare class ProductVariantWhereUniqueInput {
    id?: string;
    AND?: Array<ProductVariantWhereInput>;
    OR?: Array<ProductVariantWhereInput>;
    NOT?: Array<ProductVariantWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    stock?: InstanceType<typeof IntFilter>;
    price?: InstanceType<typeof IntNullableFilter>;
    productId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    product?: InstanceType<typeof ProductRelationFilter>;
    options?: InstanceType<typeof ProductVariantOptionListRelationFilter>;
}
export declare class ProductVariantWhereInput {
    AND?: Array<ProductVariantWhereInput>;
    OR?: Array<ProductVariantWhereInput>;
    NOT?: Array<ProductVariantWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    stock?: InstanceType<typeof IntFilter>;
    price?: InstanceType<typeof IntNullableFilter>;
    productId?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    product?: InstanceType<typeof ProductRelationFilter>;
    options?: InstanceType<typeof ProductVariantOptionListRelationFilter>;
}
export declare class ProductVariant {
    id: string;
    name: string;
    stock: number;
    price: number | null;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    product?: InstanceType<typeof Product>;
    options?: Array<ProductVariantOption>;
    _count?: InstanceType<typeof ProductVariantCount>;
}
export declare class UpdateManyProductVariantArgs {
    data: InstanceType<typeof ProductVariantUpdateManyMutationInput>;
    where?: InstanceType<typeof ProductVariantWhereInput>;
}
export declare class UpdateOneProductVariantArgs {
    data: InstanceType<typeof ProductVariantUpdateInput>;
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProductVariantArgs {
    where: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductVariantCreateInput>;
    update: InstanceType<typeof ProductVariantUpdateInput>;
}
export declare class AggregateProductVariantOption {
    _count?: InstanceType<typeof ProductVariantOptionCountAggregate>;
    _min?: InstanceType<typeof ProductVariantOptionMinAggregate>;
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregate>;
}
export declare class CreateManyProductVariantOptionArgs {
    data: Array<ProductVariantOptionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProductVariantOptionArgs {
    data: InstanceType<typeof ProductVariantOptionCreateInput>;
}
export declare class DeleteManyProductVariantOptionArgs {
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
}
export declare class DeleteOneProductVariantOptionArgs {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}
export declare class FindFirstProductVariantOptionOrThrowArgs {
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}
export declare class FindFirstProductVariantOptionArgs {
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}
export declare class FindManyProductVariantOptionArgs {
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}
export declare class FindUniqueProductVariantOptionOrThrowArgs {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProductVariantOptionArgs {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}
export declare class ProductVariantOptionAggregateArgs {
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductVariantOptionCountAggregateInput>;
    _min?: InstanceType<typeof ProductVariantOptionMinAggregateInput>;
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregateInput>;
}
export declare class ProductVariantOptionCountAggregateInput {
    id?: true;
    productVariantId?: true;
    name?: true;
    values?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProductVariantOptionCountAggregate {
    id: number;
    productVariantId: number;
    name: number;
    values: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProductVariantOptionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    productVariantId?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    values?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductVariantOptionCreateManyProductVariantInputEnvelope {
    data: Array<ProductVariantOptionCreateManyProductVariantInput>;
    skipDuplicates?: boolean;
}
export declare class ProductVariantOptionCreateManyProductVariantInput {
    id?: string;
    name: string;
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionCreateManyInput {
    id?: string;
    productVariantId: string;
    name: string;
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionCreateNestedManyWithoutProductVariantInput {
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
}
export declare class ProductVariantOptionCreateOrConnectWithoutProductVariantInput {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductVariantOptionCreateWithoutProductVariantInput>;
}
export declare class ProductVariantOptionCreateWithoutProductVariantInput {
    id?: string;
    name: string;
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionCreateInput {
    id?: string;
    name: string;
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productVariant: InstanceType<typeof ProductVariantCreateNestedOneWithoutOptionsInput>;
}
export declare class ProductVariantOptionCreatevaluesInput {
    set: Array<string>;
}
export declare class ProductVariantOptionGroupByArgs {
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    orderBy?: Array<ProductVariantOptionOrderByWithAggregationInput>;
    by: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
    having?: InstanceType<typeof ProductVariantOptionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProductVariantOptionCountAggregateInput>;
    _min?: InstanceType<typeof ProductVariantOptionMinAggregateInput>;
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregateInput>;
}
export declare class ProductVariantOptionGroupBy {
    id: string;
    productVariantId: string;
    name: string;
    values?: Array<string>;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProductVariantOptionCountAggregate>;
    _min?: InstanceType<typeof ProductVariantOptionMinAggregate>;
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregate>;
}
export declare class ProductVariantOptionListRelationFilter {
    every?: InstanceType<typeof ProductVariantOptionWhereInput>;
    some?: InstanceType<typeof ProductVariantOptionWhereInput>;
    none?: InstanceType<typeof ProductVariantOptionWhereInput>;
}
export declare class ProductVariantOptionMaxAggregateInput {
    id?: true;
    productVariantId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProductVariantOptionMaxAggregate {
    id?: string;
    productVariantId?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    productVariantId?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductVariantOptionMinAggregateInput {
    id?: true;
    productVariantId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProductVariantOptionMinAggregate {
    id?: string;
    productVariantId?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    productVariantId?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProductVariantOptionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProductVariantOptionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    productVariantId?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    values?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProductVariantOptionCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ProductVariantOptionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProductVariantOptionMinOrderByAggregateInput>;
}
export declare class ProductVariantOptionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    productVariantId?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    values?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    productVariant?: InstanceType<typeof ProductVariantOrderByWithRelationInput>;
}
export declare class ProductVariantOptionScalarWhereWithAggregatesInput {
    AND?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;
    OR?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;
    NOT?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    productVariantId?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    values?: InstanceType<typeof StringNullableListFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProductVariantOptionScalarWhereInput {
    AND?: Array<ProductVariantOptionScalarWhereInput>;
    OR?: Array<ProductVariantOptionScalarWhereInput>;
    NOT?: Array<ProductVariantOptionScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    productVariantId?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    values?: InstanceType<typeof StringNullableListFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput {
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
}
export declare class ProductVariantOptionUncheckedCreateWithoutProductVariantInput {
    id?: string;
    name: string;
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionUncheckedCreateInput {
    id?: string;
    productVariantId: string;
    name: string;
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput {
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    upsert?: Array<ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput>;
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    update?: Array<ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput>;
    updateMany?: Array<ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput>;
    deleteMany?: Array<ProductVariantOptionScalarWhereInput>;
}
export declare class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantOptionUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    productVariantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantOptionUncheckedUpdateWithoutProductVariantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantOptionUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    productVariantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantOptionUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput {
    where: InstanceType<typeof ProductVariantOptionScalarWhereInput>;
    data: InstanceType<typeof ProductVariantOptionUpdateManyMutationInput>;
}
export declare class ProductVariantOptionUpdateManyWithoutProductVariantNestedInput {
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    upsert?: Array<ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput>;
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    update?: Array<ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput>;
    updateMany?: Array<ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput>;
    deleteMany?: Array<ProductVariantOptionScalarWhereInput>;
}
export declare class ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProductVariantOptionUpdateWithoutProductVariantInput>;
}
export declare class ProductVariantOptionUpdateWithoutProductVariantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProductVariantOptionUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    productVariant?: InstanceType<typeof ProductVariantUpdateOneRequiredWithoutOptionsNestedInput>;
}
export declare class ProductVariantOptionUpdatevaluesInput {
    set?: Array<string>;
    push?: Array<string>;
}
export declare class ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProductVariantOptionUpdateWithoutProductVariantInput>;
    create: InstanceType<typeof ProductVariantOptionCreateWithoutProductVariantInput>;
}
export declare class ProductVariantOptionWhereUniqueInput {
    id?: string;
    AND?: Array<ProductVariantOptionWhereInput>;
    OR?: Array<ProductVariantOptionWhereInput>;
    NOT?: Array<ProductVariantOptionWhereInput>;
    productVariantId?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    values?: InstanceType<typeof StringNullableListFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    productVariant?: InstanceType<typeof ProductVariantRelationFilter>;
}
export declare class ProductVariantOptionWhereInput {
    AND?: Array<ProductVariantOptionWhereInput>;
    OR?: Array<ProductVariantOptionWhereInput>;
    NOT?: Array<ProductVariantOptionWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    productVariantId?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    values?: InstanceType<typeof StringNullableListFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    productVariant?: InstanceType<typeof ProductVariantRelationFilter>;
}
export declare class ProductVariantOption {
    id: string;
    productVariantId: string;
    name: string;
    values: Array<string>;
    createdAt: Date;
    updatedAt: Date;
    productVariant?: InstanceType<typeof ProductVariant>;
}
export declare class UpdateManyProductVariantOptionArgs {
    data: InstanceType<typeof ProductVariantOptionUpdateManyMutationInput>;
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
}
export declare class UpdateOneProductVariantOptionArgs {
    data: InstanceType<typeof ProductVariantOptionUpdateInput>;
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProductVariantOptionArgs {
    where: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProductVariantOptionCreateInput>;
    update: InstanceType<typeof ProductVariantOptionUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserCountAggregateInput {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    email: number;
    password: number;
    name: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class UserCount {
    orders?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserCreateNestedOneWithoutOrdersInput {
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateOrConnectWithoutOrdersInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutOrdersInput>;
}
export declare class UserCreateWithoutOrdersInput {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserCreateInput {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutUserInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    email?: string;
    password?: string;
    name?: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class UserMinAggregate {
    id?: string;
    email?: string;
    password?: string;
    name?: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    role?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class UserUncheckedCreateWithoutOrdersInput {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutOrdersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateOneRequiredWithoutOrdersNestedInput {
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutOrdersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutOrdersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutOrdersInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutOrdersInput>;
}
export declare class UserUpdateWithoutOrdersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpsertWithoutOrdersInput {
    update: InstanceType<typeof UserUpdateWithoutOrdersInput>;
    create: InstanceType<typeof UserCreateWithoutOrdersInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    password?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    role?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    orders?: InstanceType<typeof OrderListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    role?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    orders?: InstanceType<typeof OrderListRelationFilter>;
}
export declare class User {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    orders?: Array<Order>;
    _count?: InstanceType<typeof UserCount>;
}

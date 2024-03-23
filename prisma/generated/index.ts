import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    name = "name",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum ProductVariantScalarFieldEnum {
    id = "id",
    name = "name",
    stock = "stock",
    price = "price",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ProductVariantOptionScalarFieldEnum {
    id = "id",
    productVariantId = "productVariantId",
    name = "name",
    values = "values",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

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

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    parentCategoryId = "parentCategoryId"
}

export enum OrderStatus {
    CREATED = "CREATED",
    PAID = "PAID",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export enum OrderScalarFieldEnum {
    id = "id",
    userId = "userId",
    totalPrice = "totalPrice",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum OrderItemScalarFieldEnum {
    id = "id",
    orderId = "orderId",
    productId = "productId",
    quantity = "quantity",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum CollectionScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    slug = "slug",
    coverImage = "coverImage",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CartScalarFieldEnum {
    id = "id",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CartItemScalarFieldEnum {
    id = "id",
    cartId = "cartId",
    productId = "productId",
    quantity = "quantity",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CartItemScalarFieldEnum, { name: 'CartItemScalarFieldEnum', description: undefined })
registerEnumType(CartScalarFieldEnum, { name: 'CartScalarFieldEnum', description: undefined })
registerEnumType(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })
registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(ProductVariantOptionScalarFieldEnum, { name: 'ProductVariantOptionScalarFieldEnum', description: undefined })
registerEnumType(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@InputType()
export class CartCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartCreateNestedOneWithoutItemsInput {
    @Field(() => CartCreateWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateWithoutItemsInput)
    create?: InstanceType<typeof CartCreateWithoutItemsInput>;
    @Field(() => CartCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateOrConnectWithoutItemsInput)
    connectOrCreate?: InstanceType<typeof CartCreateOrConnectWithoutItemsInput>;
    @Field(() => CartWhereUniqueInput, {nullable:true})
    @Type(() => CartWhereUniqueInput)
    connect?: InstanceType<typeof CartWhereUniqueInput>;
}

@InputType()
export class CartCreateOrConnectWithoutItemsInput {
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: InstanceType<typeof CartWhereUniqueInput>;
    @Field(() => CartCreateWithoutItemsInput, {nullable:false})
    @Type(() => CartCreateWithoutItemsInput)
    create!: InstanceType<typeof CartCreateWithoutItemsInput>;
}

@InputType()
export class CartCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CartItemCreateNestedManyWithoutCartInput, {nullable:true})
    items?: InstanceType<typeof CartItemCreateNestedManyWithoutCartInput>;
}

@InputType()
export class CartItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
}

@InputType()
export class CartItemCartIdProductIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
}

@InputType()
export class CartItemCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartItemCreateManyCartInputEnvelope {
    @Field(() => [CartItemCreateManyCartInput], {nullable:false})
    @Type(() => CartItemCreateManyCartInput)
    data!: Array<CartItemCreateManyCartInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CartItemCreateManyCartInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartItemCreateManyProductInputEnvelope {
    @Field(() => [CartItemCreateManyProductInput], {nullable:false})
    @Type(() => CartItemCreateManyProductInput)
    data!: Array<CartItemCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CartItemCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartItemCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartItemCreateNestedManyWithoutCartInput {
    @Field(() => [CartItemCreateWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateWithoutCartInput)
    create?: Array<CartItemCreateWithoutCartInput>;
    @Field(() => [CartItemCreateOrConnectWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutCartInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutCartInput>;
    @Field(() => CartItemCreateManyCartInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyCartInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyCartInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
}

@InputType()
export class CartItemCreateNestedManyWithoutProductInput {
    @Field(() => [CartItemCreateWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateWithoutProductInput)
    create?: Array<CartItemCreateWithoutProductInput>;
    @Field(() => [CartItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutProductInput>;
    @Field(() => CartItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyProductInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
}

@InputType()
export class CartItemCreateOrConnectWithoutCartInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: InstanceType<typeof CartItemWhereUniqueInput>;
    @Field(() => CartItemCreateWithoutCartInput, {nullable:false})
    @Type(() => CartItemCreateWithoutCartInput)
    create!: InstanceType<typeof CartItemCreateWithoutCartInput>;
}

@InputType()
export class CartItemCreateOrConnectWithoutProductInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: InstanceType<typeof CartItemWhereUniqueInput>;
    @Field(() => CartItemCreateWithoutProductInput, {nullable:false})
    @Type(() => CartItemCreateWithoutProductInput)
    create!: InstanceType<typeof CartItemCreateWithoutProductInput>;
}

@InputType()
export class CartItemCreateWithoutCartInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutCartItemInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutCartItemInput>;
}

@InputType()
export class CartItemCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CartCreateNestedOneWithoutItemsInput, {nullable:false})
    cart!: InstanceType<typeof CartCreateNestedOneWithoutItemsInput>;
}

@InputType()
export class CartItemCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CartCreateNestedOneWithoutItemsInput, {nullable:false})
    cart!: InstanceType<typeof CartCreateNestedOneWithoutItemsInput>;
    @Field(() => ProductCreateNestedOneWithoutCartItemInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutCartItemInput>;
}

@InputType()
export class CartItemListRelationFilter {
    @Field(() => CartItemWhereInput, {nullable:true})
    every?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => CartItemWhereInput, {nullable:true})
    some?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => CartItemWhereInput, {nullable:true})
    none?: InstanceType<typeof CartItemWhereInput>;
}

@InputType()
export class CartItemMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartItemMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartItemOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CartItemOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CartItemCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CartItemCountOrderByAggregateInput>;
    @Field(() => CartItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CartItemAvgOrderByAggregateInput>;
    @Field(() => CartItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CartItemMaxOrderByAggregateInput>;
    @Field(() => CartItemMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CartItemMinOrderByAggregateInput>;
    @Field(() => CartItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CartItemSumOrderByAggregateInput>;
}

@InputType()
export class CartItemOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cartId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CartOrderByWithRelationInput, {nullable:true})
    cart?: InstanceType<typeof CartOrderByWithRelationInput>;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
}

@InputType()
export class CartItemScalarWhereWithAggregatesInput {
    @Field(() => [CartItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CartItemScalarWhereWithAggregatesInput>;
    @Field(() => [CartItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CartItemScalarWhereWithAggregatesInput>;
    @Field(() => [CartItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CartItemScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cartId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CartItemScalarWhereInput {
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    AND?: Array<CartItemScalarWhereInput>;
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    OR?: Array<CartItemScalarWhereInput>;
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    NOT?: Array<CartItemScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cartId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CartItemSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
}

@InputType()
export class CartItemUncheckedCreateNestedManyWithoutCartInput {
    @Field(() => [CartItemCreateWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateWithoutCartInput)
    create?: Array<CartItemCreateWithoutCartInput>;
    @Field(() => [CartItemCreateOrConnectWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutCartInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutCartInput>;
    @Field(() => CartItemCreateManyCartInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyCartInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyCartInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
}

@InputType()
export class CartItemUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [CartItemCreateWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateWithoutProductInput)
    create?: Array<CartItemCreateWithoutProductInput>;
    @Field(() => [CartItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutProductInput>;
    @Field(() => CartItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyProductInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
}

@InputType()
export class CartItemUncheckedCreateWithoutCartInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartItemUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartItemUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartItemUncheckedUpdateManyWithoutCartNestedInput {
    @Field(() => [CartItemCreateWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateWithoutCartInput)
    create?: Array<CartItemCreateWithoutCartInput>;
    @Field(() => [CartItemCreateOrConnectWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutCartInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutCartInput>;
    @Field(() => [CartItemUpsertWithWhereUniqueWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpsertWithWhereUniqueWithoutCartInput)
    upsert?: Array<CartItemUpsertWithWhereUniqueWithoutCartInput>;
    @Field(() => CartItemCreateManyCartInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyCartInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyCartInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    set?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemUpdateWithWhereUniqueWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpdateWithWhereUniqueWithoutCartInput)
    update?: Array<CartItemUpdateWithWhereUniqueWithoutCartInput>;
    @Field(() => [CartItemUpdateManyWithWhereWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpdateManyWithWhereWithoutCartInput)
    updateMany?: Array<CartItemUpdateManyWithWhereWithoutCartInput>;
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    @Type(() => CartItemScalarWhereInput)
    deleteMany?: Array<CartItemScalarWhereInput>;
}

@InputType()
export class CartItemUncheckedUpdateManyWithoutCartInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [CartItemCreateWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateWithoutProductInput)
    create?: Array<CartItemCreateWithoutProductInput>;
    @Field(() => [CartItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutProductInput>;
    @Field(() => [CartItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<CartItemUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => CartItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyProductInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    set?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<CartItemUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [CartItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<CartItemUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    @Type(() => CartItemScalarWhereInput)
    deleteMany?: Array<CartItemScalarWhereInput>;
}

@InputType()
export class CartItemUncheckedUpdateManyWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cartId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cartId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUncheckedUpdateWithoutCartInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cartId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cartId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartItemUpdateManyWithWhereWithoutCartInput {
    @Field(() => CartItemScalarWhereInput, {nullable:false})
    @Type(() => CartItemScalarWhereInput)
    where!: InstanceType<typeof CartItemScalarWhereInput>;
    @Field(() => CartItemUpdateManyMutationInput, {nullable:false})
    @Type(() => CartItemUpdateManyMutationInput)
    data!: InstanceType<typeof CartItemUpdateManyMutationInput>;
}

@InputType()
export class CartItemUpdateManyWithWhereWithoutProductInput {
    @Field(() => CartItemScalarWhereInput, {nullable:false})
    @Type(() => CartItemScalarWhereInput)
    where!: InstanceType<typeof CartItemScalarWhereInput>;
    @Field(() => CartItemUpdateManyMutationInput, {nullable:false})
    @Type(() => CartItemUpdateManyMutationInput)
    data!: InstanceType<typeof CartItemUpdateManyMutationInput>;
}

@InputType()
export class CartItemUpdateManyWithoutCartNestedInput {
    @Field(() => [CartItemCreateWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateWithoutCartInput)
    create?: Array<CartItemCreateWithoutCartInput>;
    @Field(() => [CartItemCreateOrConnectWithoutCartInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutCartInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutCartInput>;
    @Field(() => [CartItemUpsertWithWhereUniqueWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpsertWithWhereUniqueWithoutCartInput)
    upsert?: Array<CartItemUpsertWithWhereUniqueWithoutCartInput>;
    @Field(() => CartItemCreateManyCartInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyCartInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyCartInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    set?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemUpdateWithWhereUniqueWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpdateWithWhereUniqueWithoutCartInput)
    update?: Array<CartItemUpdateWithWhereUniqueWithoutCartInput>;
    @Field(() => [CartItemUpdateManyWithWhereWithoutCartInput], {nullable:true})
    @Type(() => CartItemUpdateManyWithWhereWithoutCartInput)
    updateMany?: Array<CartItemUpdateManyWithWhereWithoutCartInput>;
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    @Type(() => CartItemScalarWhereInput)
    deleteMany?: Array<CartItemScalarWhereInput>;
}

@InputType()
export class CartItemUpdateManyWithoutProductNestedInput {
    @Field(() => [CartItemCreateWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateWithoutProductInput)
    create?: Array<CartItemCreateWithoutProductInput>;
    @Field(() => [CartItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CartItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CartItemCreateOrConnectWithoutProductInput>;
    @Field(() => [CartItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<CartItemUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => CartItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CartItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof CartItemCreateManyProductInputEnvelope>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    set?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<CartItemWhereUniqueInput>;
    @Field(() => [CartItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<CartItemUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [CartItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => CartItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<CartItemUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [CartItemScalarWhereInput], {nullable:true})
    @Type(() => CartItemScalarWhereInput)
    deleteMany?: Array<CartItemScalarWhereInput>;
}

@InputType()
export class CartItemUpdateWithWhereUniqueWithoutCartInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: InstanceType<typeof CartItemWhereUniqueInput>;
    @Field(() => CartItemUpdateWithoutCartInput, {nullable:false})
    @Type(() => CartItemUpdateWithoutCartInput)
    data!: InstanceType<typeof CartItemUpdateWithoutCartInput>;
}

@InputType()
export class CartItemUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: InstanceType<typeof CartItemWhereUniqueInput>;
    @Field(() => CartItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => CartItemUpdateWithoutProductInput)
    data!: InstanceType<typeof CartItemUpdateWithoutProductInput>;
}

@InputType()
export class CartItemUpdateWithoutCartInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneRequiredWithoutCartItemNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutCartItemNestedInput>;
}

@InputType()
export class CartItemUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CartUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    cart?: InstanceType<typeof CartUpdateOneRequiredWithoutItemsNestedInput>;
}

@InputType()
export class CartItemUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CartUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    cart?: InstanceType<typeof CartUpdateOneRequiredWithoutItemsNestedInput>;
    @Field(() => ProductUpdateOneRequiredWithoutCartItemNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutCartItemNestedInput>;
}

@InputType()
export class CartItemUpsertWithWhereUniqueWithoutCartInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: InstanceType<typeof CartItemWhereUniqueInput>;
    @Field(() => CartItemUpdateWithoutCartInput, {nullable:false})
    @Type(() => CartItemUpdateWithoutCartInput)
    update!: InstanceType<typeof CartItemUpdateWithoutCartInput>;
    @Field(() => CartItemCreateWithoutCartInput, {nullable:false})
    @Type(() => CartItemCreateWithoutCartInput)
    create!: InstanceType<typeof CartItemCreateWithoutCartInput>;
}

@InputType()
export class CartItemUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: InstanceType<typeof CartItemWhereUniqueInput>;
    @Field(() => CartItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => CartItemUpdateWithoutProductInput)
    update!: InstanceType<typeof CartItemUpdateWithoutProductInput>;
    @Field(() => CartItemCreateWithoutProductInput, {nullable:false})
    @Type(() => CartItemCreateWithoutProductInput)
    create!: InstanceType<typeof CartItemCreateWithoutProductInput>;
}

@InputType()
export class CartItemWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => CartItemCartIdProductIdCompoundUniqueInput, {nullable:true})
    cartId_productId?: InstanceType<typeof CartItemCartIdProductIdCompoundUniqueInput>;
    @Field(() => [CartItemWhereInput], {nullable:true})
    AND?: Array<CartItemWhereInput>;
    @Field(() => [CartItemWhereInput], {nullable:true})
    OR?: Array<CartItemWhereInput>;
    @Field(() => [CartItemWhereInput], {nullable:true})
    NOT?: Array<CartItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    cartId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CartRelationFilter, {nullable:true})
    cart?: InstanceType<typeof CartRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@InputType()
export class CartItemWhereInput {
    @Field(() => [CartItemWhereInput], {nullable:true})
    AND?: Array<CartItemWhereInput>;
    @Field(() => [CartItemWhereInput], {nullable:true})
    OR?: Array<CartItemWhereInput>;
    @Field(() => [CartItemWhereInput], {nullable:true})
    NOT?: Array<CartItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cartId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CartRelationFilter, {nullable:true})
    cart?: InstanceType<typeof CartRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@InputType()
export class CartMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CartCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CartCountOrderByAggregateInput>;
    @Field(() => CartMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CartMaxOrderByAggregateInput>;
    @Field(() => CartMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CartMinOrderByAggregateInput>;
}

@InputType()
export class CartOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CartItemOrderByRelationAggregateInput, {nullable:true})
    items?: InstanceType<typeof CartItemOrderByRelationAggregateInput>;
}

@InputType()
export class CartRelationFilter {
    @Field(() => CartWhereInput, {nullable:true})
    is?: InstanceType<typeof CartWhereInput>;
    @Field(() => CartWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CartWhereInput>;
}

@InputType()
export class CartScalarWhereWithAggregatesInput {
    @Field(() => [CartScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CartScalarWhereWithAggregatesInput>;
    @Field(() => [CartScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CartScalarWhereWithAggregatesInput>;
    @Field(() => [CartScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CartScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CartUncheckedCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CartItemUncheckedCreateNestedManyWithoutCartInput, {nullable:true})
    items?: InstanceType<typeof CartItemUncheckedCreateNestedManyWithoutCartInput>;
}

@InputType()
export class CartUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUncheckedUpdateWithoutItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CartItemUncheckedUpdateManyWithoutCartNestedInput, {nullable:true})
    items?: InstanceType<typeof CartItemUncheckedUpdateManyWithoutCartNestedInput>;
}

@InputType()
export class CartUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUpdateOneRequiredWithoutItemsNestedInput {
    @Field(() => CartCreateWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateWithoutItemsInput)
    create?: InstanceType<typeof CartCreateWithoutItemsInput>;
    @Field(() => CartCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => CartCreateOrConnectWithoutItemsInput)
    connectOrCreate?: InstanceType<typeof CartCreateOrConnectWithoutItemsInput>;
    @Field(() => CartUpsertWithoutItemsInput, {nullable:true})
    @Type(() => CartUpsertWithoutItemsInput)
    upsert?: InstanceType<typeof CartUpsertWithoutItemsInput>;
    @Field(() => CartWhereUniqueInput, {nullable:true})
    @Type(() => CartWhereUniqueInput)
    connect?: InstanceType<typeof CartWhereUniqueInput>;
    @Field(() => CartUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => CartUpdateToOneWithWhereWithoutItemsInput)
    update?: InstanceType<typeof CartUpdateToOneWithWhereWithoutItemsInput>;
}

@InputType()
export class CartUpdateToOneWithWhereWithoutItemsInput {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
    @Field(() => CartUpdateWithoutItemsInput, {nullable:false})
    @Type(() => CartUpdateWithoutItemsInput)
    data!: InstanceType<typeof CartUpdateWithoutItemsInput>;
}

@InputType()
export class CartUpdateWithoutItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CartItemUpdateManyWithoutCartNestedInput, {nullable:true})
    items?: InstanceType<typeof CartItemUpdateManyWithoutCartNestedInput>;
}

@InputType()
export class CartUpsertWithoutItemsInput {
    @Field(() => CartUpdateWithoutItemsInput, {nullable:false})
    @Type(() => CartUpdateWithoutItemsInput)
    update!: InstanceType<typeof CartUpdateWithoutItemsInput>;
    @Field(() => CartCreateWithoutItemsInput, {nullable:false})
    @Type(() => CartCreateWithoutItemsInput)
    create!: InstanceType<typeof CartCreateWithoutItemsInput>;
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
}

@InputType()
export class CartWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CartWhereInput], {nullable:true})
    AND?: Array<CartWhereInput>;
    @Field(() => [CartWhereInput], {nullable:true})
    OR?: Array<CartWhereInput>;
    @Field(() => [CartWhereInput], {nullable:true})
    NOT?: Array<CartWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CartItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof CartItemListRelationFilter>;
}

@InputType()
export class CartWhereInput {
    @Field(() => [CartWhereInput], {nullable:true})
    AND?: Array<CartWhereInput>;
    @Field(() => [CartWhereInput], {nullable:true})
    OR?: Array<CartWhereInput>;
    @Field(() => [CartWhereInput], {nullable:true})
    NOT?: Array<CartWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CartItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof CartItemListRelationFilter>;
}

@InputType()
export class CollectionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CollectionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CollectionCreateNestedManyWithoutProductsInput {
    @Field(() => [CollectionCreateWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateWithoutProductsInput)
    create?: Array<CollectionCreateWithoutProductsInput>;
    @Field(() => [CollectionCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<CollectionWhereUniqueInput>;
}

@InputType()
export class CollectionCreateOrConnectWithoutProductsInput {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: InstanceType<typeof CollectionWhereUniqueInput>;
    @Field(() => CollectionCreateWithoutProductsInput, {nullable:false})
    @Type(() => CollectionCreateWithoutProductsInput)
    create!: InstanceType<typeof CollectionCreateWithoutProductsInput>;
}

@InputType()
export class CollectionCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CollectionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCollectionsInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCollectionsInput>;
}

@InputType()
export class CollectionListRelationFilter {
    @Field(() => CollectionWhereInput, {nullable:true})
    every?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => CollectionWhereInput, {nullable:true})
    some?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => CollectionWhereInput, {nullable:true})
    none?: InstanceType<typeof CollectionWhereInput>;
}

@InputType()
export class CollectionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CollectionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CollectionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CollectionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CollectionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CollectionCountOrderByAggregateInput>;
    @Field(() => CollectionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CollectionMaxOrderByAggregateInput>;
    @Field(() => CollectionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CollectionMinOrderByAggregateInput>;
}

@InputType()
export class CollectionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class CollectionScalarWhereWithAggregatesInput {
    @Field(() => [CollectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CollectionScalarWhereWithAggregatesInput>;
    @Field(() => [CollectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CollectionScalarWhereWithAggregatesInput>;
    @Field(() => [CollectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CollectionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CollectionScalarWhereInput {
    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    AND?: Array<CollectionScalarWhereInput>;
    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    OR?: Array<CollectionScalarWhereInput>;
    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    NOT?: Array<CollectionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CollectionUncheckedCreateNestedManyWithoutProductsInput {
    @Field(() => [CollectionCreateWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateWithoutProductsInput)
    create?: Array<CollectionCreateWithoutProductsInput>;
    @Field(() => [CollectionCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<CollectionWhereUniqueInput>;
}

@InputType()
export class CollectionUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CollectionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCollectionsInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCollectionsInput>;
}

@InputType()
export class CollectionUncheckedUpdateManyWithoutProductsNestedInput {
    @Field(() => [CollectionCreateWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateWithoutProductsInput)
    create?: Array<CollectionCreateWithoutProductsInput>;
    @Field(() => [CollectionCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    @Field(() => [CollectionUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<CollectionUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    set?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    disconnect?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    delete?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<CollectionUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CollectionUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<CollectionUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    @Type(() => CollectionScalarWhereInput)
    deleteMany?: Array<CollectionScalarWhereInput>;
}

@InputType()
export class CollectionUncheckedUpdateManyWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CollectionUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CollectionUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CollectionUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCollectionsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCollectionsNestedInput>;
}

@InputType()
export class CollectionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CollectionUpdateManyWithWhereWithoutProductsInput {
    @Field(() => CollectionScalarWhereInput, {nullable:false})
    @Type(() => CollectionScalarWhereInput)
    where!: InstanceType<typeof CollectionScalarWhereInput>;
    @Field(() => CollectionUpdateManyMutationInput, {nullable:false})
    @Type(() => CollectionUpdateManyMutationInput)
    data!: InstanceType<typeof CollectionUpdateManyMutationInput>;
}

@InputType()
export class CollectionUpdateManyWithoutProductsNestedInput {
    @Field(() => [CollectionCreateWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateWithoutProductsInput)
    create?: Array<CollectionCreateWithoutProductsInput>;
    @Field(() => [CollectionCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CollectionCreateOrConnectWithoutProductsInput>;
    @Field(() => [CollectionUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<CollectionUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    set?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    disconnect?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    delete?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<CollectionWhereUniqueInput>;
    @Field(() => [CollectionUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<CollectionUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CollectionUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => CollectionUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<CollectionUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [CollectionScalarWhereInput], {nullable:true})
    @Type(() => CollectionScalarWhereInput)
    deleteMany?: Array<CollectionScalarWhereInput>;
}

@InputType()
export class CollectionUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: InstanceType<typeof CollectionWhereUniqueInput>;
    @Field(() => CollectionUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CollectionUpdateWithoutProductsInput)
    data!: InstanceType<typeof CollectionUpdateWithoutProductsInput>;
}

@InputType()
export class CollectionUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CollectionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    coverImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCollectionsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCollectionsNestedInput>;
}

@InputType()
export class CollectionUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: InstanceType<typeof CollectionWhereUniqueInput>;
    @Field(() => CollectionUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CollectionUpdateWithoutProductsInput)
    update!: InstanceType<typeof CollectionUpdateWithoutProductsInput>;
    @Field(() => CollectionCreateWithoutProductsInput, {nullable:false})
    @Type(() => CollectionCreateWithoutProductsInput)
    create!: InstanceType<typeof CollectionCreateWithoutProductsInput>;
}

@InputType()
export class CollectionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CollectionWhereInput], {nullable:true})
    AND?: Array<CollectionWhereInput>;
    @Field(() => [CollectionWhereInput], {nullable:true})
    OR?: Array<CollectionWhereInput>;
    @Field(() => [CollectionWhereInput], {nullable:true})
    NOT?: Array<CollectionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@InputType()
export class CollectionWhereInput {
    @Field(() => [CollectionWhereInput], {nullable:true})
    AND?: Array<CollectionWhereInput>;
    @Field(() => [CollectionWhereInput], {nullable:true})
    OR?: Array<CollectionWhereInput>;
    @Field(() => [CollectionWhereInput], {nullable:true})
    NOT?: Array<CollectionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumOrderStatusFieldUpdateOperationsInput {
    @Field(() => OrderStatus, {nullable:true})
    set?: keyof typeof OrderStatus;
}

@InputType()
export class EnumOrderStatusFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class EnumOrderStatusWithAggregatesFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumOrderStatusFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {nullable:true})
    set?: number;
    @Field(() => Float, {nullable:true})
    increment?: number;
    @Field(() => Float, {nullable:true})
    decrement?: number;
    @Field(() => Float, {nullable:true})
    multiply?: number;
    @Field(() => Float, {nullable:true})
    divide?: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumOrderStatusFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class NestedEnumOrderStatusWithAggregatesFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => NestedEnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOrderStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumOrderStatusFilter>;
    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumOrderStatusFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedFloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class OrderAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
}

@InputType()
export class OrderCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderCreateManyUserInputEnvelope {
    @Field(() => [OrderCreateManyUserInput], {nullable:false})
    @Type(() => OrderCreateManyUserInput)
    data!: Array<OrderCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderCreateNestedManyWithoutUserInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderCreateNestedOneWithoutItemsInput {
    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutItemsInput)
    create?: InstanceType<typeof OrderCreateWithoutItemsInput>;
    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutItemsInput)
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutItemsInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: InstanceType<typeof OrderWhereUniqueInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutItemsInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutItemsInput)
    create!: InstanceType<typeof OrderCreateWithoutItemsInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    @Type(() => OrderCreateWithoutUserInput)
    create!: InstanceType<typeof OrderCreateWithoutUserInput>;
}

@InputType()
export class OrderCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
}

@InputType()
export class OrderCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemCreateNestedManyWithoutOrderInput>;
}

@InputType()
export class OrderCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemCreateNestedManyWithoutOrderInput>;
    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
}

@InputType()
export class OrderItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemCreateManyOrderInputEnvelope {
    @Field(() => [OrderItemCreateManyOrderInput], {nullable:false})
    @Type(() => OrderItemCreateManyOrderInput)
    data!: Array<OrderItemCreateManyOrderInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderItemCreateManyOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderItemCreateManyProductInputEnvelope {
    @Field(() => [OrderItemCreateManyProductInput], {nullable:false})
    @Type(() => OrderItemCreateManyProductInput)
    data!: Array<OrderItemCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderItemCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    orderId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderItemCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    orderId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderItemCreateNestedManyWithoutOrderInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
}

@InputType()
export class OrderItemCreateNestedManyWithoutProductInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
}

@InputType()
export class OrderItemCreateOrConnectWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: InstanceType<typeof OrderItemWhereUniqueInput>;
    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create!: InstanceType<typeof OrderItemCreateWithoutOrderInput>;
}

@InputType()
export class OrderItemCreateOrConnectWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: InstanceType<typeof OrderItemWhereUniqueInput>;
    @Field(() => OrderItemCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutProductInput)
    create!: InstanceType<typeof OrderItemCreateWithoutProductInput>;
}

@InputType()
export class OrderItemCreateWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutOrderItemInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutOrderItemInput>;
}

@InputType()
export class OrderItemCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderCreateNestedOneWithoutItemsInput, {nullable:false})
    order!: InstanceType<typeof OrderCreateNestedOneWithoutItemsInput>;
}

@InputType()
export class OrderItemCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderCreateNestedOneWithoutItemsInput, {nullable:false})
    order!: InstanceType<typeof OrderCreateNestedOneWithoutItemsInput>;
    @Field(() => ProductCreateNestedOneWithoutOrderItemInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutOrderItemInput>;
}

@InputType()
export class OrderItemListRelationFilter {
    @Field(() => OrderItemWhereInput, {nullable:true})
    every?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    some?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    none?: InstanceType<typeof OrderItemWhereInput>;
}

@InputType()
export class OrderItemMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => OrderItemCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountOrderByAggregateInput>;
    @Field(() => OrderItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgOrderByAggregateInput>;
    @Field(() => OrderItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxOrderByAggregateInput>;
    @Field(() => OrderItemMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinOrderByAggregateInput>;
    @Field(() => OrderItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumOrderByAggregateInput>;
}

@InputType()
export class OrderItemOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
}

@InputType()
export class OrderItemScalarWhereWithAggregatesInput {
    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    orderId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class OrderItemScalarWhereInput {
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    orderId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class OrderItemSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemUncheckedCreateNestedManyWithoutOrderInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
}

@InputType()
export class OrderItemUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
}

@InputType()
export class OrderItemUncheckedCreateWithoutOrderInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderItemUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    orderId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderItemUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    orderId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutOrderNestedInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutOrderInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutOrderInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateWithoutOrderInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUpdateManyWithWhereWithoutOrderInput {
    @Field(() => OrderItemScalarWhereInput, {nullable:false})
    @Type(() => OrderItemScalarWhereInput)
    where!: InstanceType<typeof OrderItemScalarWhereInput>;
    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: InstanceType<typeof OrderItemUpdateManyMutationInput>;
}

@InputType()
export class OrderItemUpdateManyWithWhereWithoutProductInput {
    @Field(() => OrderItemScalarWhereInput, {nullable:false})
    @Type(() => OrderItemScalarWhereInput)
    where!: InstanceType<typeof OrderItemScalarWhereInput>;
    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: InstanceType<typeof OrderItemUpdateManyMutationInput>;
}

@InputType()
export class OrderItemUpdateManyWithoutOrderNestedInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutOrderInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUpdateManyWithoutProductNestedInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<OrderItemWhereUniqueInput>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: InstanceType<typeof OrderItemWhereUniqueInput>;
    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutOrderInput)
    data!: InstanceType<typeof OrderItemUpdateWithoutOrderInput>;
}

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: InstanceType<typeof OrderItemWhereUniqueInput>;
    @Field(() => OrderItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutProductInput)
    data!: InstanceType<typeof OrderItemUpdateWithoutProductInput>;
}

@InputType()
export class OrderItemUpdateWithoutOrderInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneRequiredWithoutOrderItemNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
}

@InputType()
export class OrderItemUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutItemsNestedInput>;
}

@InputType()
export class OrderItemUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutItemsNestedInput>;
    @Field(() => ProductUpdateOneRequiredWithoutOrderItemNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
}

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: InstanceType<typeof OrderItemWhereUniqueInput>;
    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutOrderInput)
    update!: InstanceType<typeof OrderItemUpdateWithoutOrderInput>;
    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create!: InstanceType<typeof OrderItemCreateWithoutOrderInput>;
}

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: InstanceType<typeof OrderItemWhereUniqueInput>;
    @Field(() => OrderItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutProductInput)
    update!: InstanceType<typeof OrderItemUpdateWithoutProductInput>;
    @Field(() => OrderItemCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutProductInput)
    create!: InstanceType<typeof OrderItemCreateWithoutProductInput>;
}

@InputType()
export class OrderItemWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    orderId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderRelationFilter, {nullable:true})
    order?: InstanceType<typeof OrderRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@InputType()
export class OrderItemWhereInput {
    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    orderId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderRelationFilter, {nullable:true})
    order?: InstanceType<typeof OrderRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@InputType()
export class OrderListRelationFilter {
    @Field(() => OrderWhereInput, {nullable:true})
    every?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    some?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    none?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => OrderCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    @Field(() => OrderAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgOrderByAggregateInput>;
    @Field(() => OrderMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    @Field(() => OrderMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
    @Field(() => OrderSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderSumOrderByAggregateInput>;
}

@InputType()
export class OrderOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    items?: InstanceType<typeof OrderItemOrderByRelationAggregateInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class OrderRelationFilter {
    @Field(() => OrderWhereInput, {nullable:true})
    is?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    isNot?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderScalarWhereWithAggregatesInput {
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    totalPrice?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class OrderScalarWhereInput {
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class OrderSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    totalPrice?: keyof typeof SortOrder;
}

@InputType()
export class OrderUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
}

@InputType()
export class OrderUncheckedCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutOrderInput>;
}

@InputType()
export class OrderUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Float, {nullable:false})
    totalPrice!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutOrderInput>;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUncheckedUpdateWithoutItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUpdateManyWithWhereWithoutUserInput {
    @Field(() => OrderScalarWhereInput, {nullable:false})
    @Type(() => OrderScalarWhereInput)
    where!: InstanceType<typeof OrderScalarWhereInput>;
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
}

@InputType()
export class OrderUpdateManyWithoutUserNestedInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<OrderWhereUniqueInput>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUpdateOneRequiredWithoutItemsNestedInput {
    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutItemsInput)
    create?: InstanceType<typeof OrderCreateWithoutItemsInput>;
    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutItemsInput)
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutItemsInput>;
    @Field(() => OrderUpsertWithoutItemsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutItemsInput)
    upsert?: InstanceType<typeof OrderUpsertWithoutItemsInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutItemsInput)
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutItemsInput>;
}

@InputType()
export class OrderUpdateToOneWithWhereWithoutItemsInput {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderUpdateWithoutItemsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutItemsInput)
    data!: InstanceType<typeof OrderUpdateWithoutItemsInput>;
}

@InputType()
export class OrderUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OrderUpdateWithoutUserInput)
    data!: InstanceType<typeof OrderUpdateWithoutUserInput>;
}

@InputType()
export class OrderUpdateWithoutItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
}

@InputType()
export class OrderUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUpdateManyWithoutOrderNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
}

@InputType()
export class OrderUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: InstanceType<typeof OrderWhereUniqueInput>;
    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OrderUpdateWithoutUserInput)
    update!: InstanceType<typeof OrderUpdateWithoutUserInput>;
    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    @Type(() => OrderCreateWithoutUserInput)
    create!: InstanceType<typeof OrderCreateWithoutUserInput>;
}

@InputType()
export class OrderUpsertWithoutItemsInput {
    @Field(() => OrderUpdateWithoutItemsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutItemsInput)
    update!: InstanceType<typeof OrderUpdateWithoutItemsInput>;
    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutItemsInput)
    create!: InstanceType<typeof OrderCreateWithoutItemsInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof OrderItemListRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class OrderWhereInput {
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    totalPrice?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof OrderItemListRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryCreateManyParentCategoryInputEnvelope {
    @Field(() => [ProductCategoryCreateManyParentCategoryInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyParentCategoryInput)
    data!: Array<ProductCategoryCreateManyParentCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCategoryCreateManyParentCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
}

@InputType()
export class ProductCategoryCreateNestedManyWithoutParentCategoryInput {
    @Field(() => [ProductCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    @Field(() => ProductCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryCreateNestedOneWithoutProductsInput {
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
    @Field(() => ProductCategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryCreateNestedOneWithoutSubCategoriesInput {
    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create?: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutParentCategoryInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryCreateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutProductsInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutSubCategoriesInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
}

@InputType()
export class ProductCategoryCreateWithoutParentCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryCreateWithoutSubCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
    @Field(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
}

@InputType()
export class ProductCategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
    @Field(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryCreateNestedOneWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryListRelationFilter {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductCategoryWhereInput>;
}

@InputType()
export class ProductCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryNullableRelationFilter {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductCategoryWhereInput>;
}

@InputType()
export class ProductCategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    parentCategoryId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountOrderByAggregateInput>;
    @Field(() => ProductCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxOrderByAggregateInput>;
    @Field(() => ProductCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinOrderByAggregateInput>;
}

@InputType()
export class ProductCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    parentCategoryId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryOrderByRelationAggregateInput>;
}

@InputType()
export class ProductCategoryRelationFilter {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductCategoryWhereInput>;
}

@InputType()
export class ProductCategoryScalarWhereWithAggregatesInput {
    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    parentCategoryId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class ProductCategoryScalarWhereInput {
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    parentCategoryId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput {
    @Field(() => [ProductCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    @Field(() => ProductCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryUncheckedCreateWithoutParentCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryUncheckedCreateWithoutSubCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
}

@InputType()
export class ProductCategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput {
    @Field(() => [ProductCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;
    @Field(() => ProductCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateWithoutParentCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateWithoutSubCategoriesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentCategoryId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput {
    @Field(() => ProductCategoryScalarWhereInput, {nullable:false})
    @Type(() => ProductCategoryScalarWhereInput)
    where!: InstanceType<typeof ProductCategoryScalarWhereInput>;
    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof ProductCategoryUpdateManyMutationInput>;
}

@InputType()
export class ProductCategoryUpdateManyWithoutParentCategoryNestedInput {
    @Field(() => [ProductCategoryCreateWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create?: Array<ProductCategoryCreateWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput>;
    @Field(() => ProductCategoryCreateManyParentCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCategoryCreateManyParentCategoryInputEnvelope>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}

@InputType()
export class ProductCategoryUpdateOneRequiredWithoutProductsNestedInput {
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
    @Field(() => ProductCategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => ProductCategoryUpsertWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryUpsertWithoutProductsInput)
    upsert?: InstanceType<typeof ProductCategoryUpsertWithoutProductsInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => ProductCategoryUpdateToOneWithWhereWithoutProductsInput)
    update?: InstanceType<typeof ProductCategoryUpdateToOneWithWhereWithoutProductsInput>;
}

@InputType()
export class ProductCategoryUpdateOneWithoutSubCategoriesNestedInput {
    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create?: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: InstanceType<typeof ProductCategoryCreateOrConnectWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryUpsertWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryUpsertWithoutSubCategoriesInput)
    upsert?: InstanceType<typeof ProductCategoryUpsertWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    disconnect?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    delete?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput, {nullable:true})
    @Type(() => ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput)
    update?: InstanceType<typeof ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput>;
}

@InputType()
export class ProductCategoryUpdateToOneWithWhereWithoutProductsInput {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductsInput)
    data!: InstanceType<typeof ProductCategoryUpdateWithoutProductsInput>;
}

@InputType()
export class ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutSubCategoriesInput)
    data!: InstanceType<typeof ProductCategoryUpdateWithoutSubCategoriesInput>;
}

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryUpdateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutParentCategoryInput)
    data!: InstanceType<typeof ProductCategoryUpdateWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryUpdateWithoutParentCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUpdateOneWithoutSubCategoriesNestedInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUpdateWithoutSubCategoriesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
    @Field(() => ProductCategoryUpdateOneWithoutSubCategoriesNestedInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
}

@InputType()
export class ProductCategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
    @Field(() => ProductCategoryUpdateOneWithoutSubCategoriesNestedInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryUpdateOneWithoutSubCategoriesNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutParentCategoryNestedInput>;
}

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryUpdateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutParentCategoryInput)
    update!: InstanceType<typeof ProductCategoryUpdateWithoutParentCategoryInput>;
    @Field(() => ProductCategoryCreateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryUpsertWithoutProductsInput {
    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductsInput)
    update!: InstanceType<typeof ProductCategoryUpdateWithoutProductsInput>;
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}

@InputType()
export class ProductCategoryUpsertWithoutSubCategoriesInput {
    @Field(() => ProductCategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutSubCategoriesInput)
    update!: InstanceType<typeof ProductCategoryUpdateWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutSubCategoriesInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutSubCategoriesInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}

@InputType()
export class ProductCategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    parentCategoryId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => ProductCategoryNullableRelationFilter, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryNullableRelationFilter>;
    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryListRelationFilter>;
}

@InputType()
export class ProductCategoryWhereInput {
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    parentCategoryId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => ProductCategoryNullableRelationFilter, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryNullableRelationFilter>;
    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryListRelationFilter>;
}

@InputType()
export class ProductCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductCreateManyCategoryInputEnvelope {
    @Field(() => [ProductCreateManyCategoryInput], {nullable:false})
    @Type(() => ProductCreateManyCategoryInput)
    data!: Array<ProductCreateManyCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutCollectionsInput {
    @Field(() => [ProductCreateWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create?: Array<ProductCreateWithoutCollectionsInput>;
    @Field(() => [ProductCreateOrConnectWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutCartItemInput {
    @Field(() => ProductCreateWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutCartItemInput)
    create?: InstanceType<typeof ProductCreateWithoutCartItemInput>;
    @Field(() => ProductCreateOrConnectWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCartItemInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutCartItemInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutOrderItemInput {
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create?: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
    @Field(() => ProductCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutOrderItemInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutVariantsInput {
    @Field(() => ProductCreateWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateWithoutVariantsInput)
    create?: InstanceType<typeof ProductCreateWithoutVariantsInput>;
    @Field(() => ProductCreateOrConnectWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutVariantsInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutVariantsInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCartItemInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutCartItemInput)
    create!: InstanceType<typeof ProductCreateWithoutCartItemInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCollectionsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create!: InstanceType<typeof ProductCreateWithoutCollectionsInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutOrderItemInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutVariantsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductCreateWithoutVariantsInput)
    create!: InstanceType<typeof ProductCreateWithoutVariantsInput>;
}

@InputType()
export class ProductCreateWithoutCartItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutCollectionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    @Field(() => CartItemCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutOrderItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutVariantsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => CollectionCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof ProductCategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateimagesInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@InputType()
export class ProductListRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    orderId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}

@InputType()
export class ProductOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    orderId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductVariantOrderByRelationAggregateInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantOrderByRelationAggregateInput>;
    @Field(() => CollectionOrderByRelationAggregateInput, {nullable:true})
    collections?: InstanceType<typeof CollectionOrderByRelationAggregateInput>;
    @Field(() => CartItemOrderByRelationAggregateInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemOrderByRelationAggregateInput>;
    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemOrderByRelationAggregateInput>;
}

@InputType()
export class ProductRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    orderId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProductScalarWhereInput {
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ProductSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCollectionsInput {
    @Field(() => [ProductCreateWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create?: Array<ProductCreateWithoutCollectionsInput>;
    @Field(() => [ProductCreateOrConnectWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutCartItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutCollectionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CartItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutOrderItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutVariantsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductCreateimagesInput>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => CartItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCategoryNestedInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCollectionsNestedInput {
    @Field(() => [ProductCreateWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create?: Array<ProductCreateWithoutCollectionsInput>;
    @Field(() => [ProductCreateOrConnectWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCollectionsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCollectionsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCollectionsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCollectionsInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCollectionsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCollectionsInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCollectionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCartItemInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCollectionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CartItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutOrderItemInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutVariantsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutCategoryInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutCollectionsInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithoutCategoryNestedInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutCollectionsNestedInput {
    @Field(() => [ProductCreateWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create?: Array<ProductCreateWithoutCollectionsInput>;
    @Field(() => [ProductCreateOrConnectWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCollectionsInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCollectionsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCollectionsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCollectionsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCollectionsInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCollectionsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCollectionsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCollectionsInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateOneRequiredWithoutCartItemNestedInput {
    @Field(() => ProductCreateWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutCartItemInput)
    create?: InstanceType<typeof ProductCreateWithoutCartItemInput>;
    @Field(() => ProductCreateOrConnectWithoutCartItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCartItemInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutCartItemInput>;
    @Field(() => ProductUpsertWithoutCartItemInput, {nullable:true})
    @Type(() => ProductUpsertWithoutCartItemInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutCartItemInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateToOneWithWhereWithoutCartItemInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutCartItemInput)
    update?: InstanceType<typeof ProductUpdateToOneWithWhereWithoutCartItemInput>;
}

@InputType()
export class ProductUpdateOneRequiredWithoutOrderItemNestedInput {
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create?: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
    @Field(() => ProductCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutOrderItemInput>;
    @Field(() => ProductUpsertWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderItemInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutOrderItemInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateToOneWithWhereWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutOrderItemInput)
    update?: InstanceType<typeof ProductUpdateToOneWithWhereWithoutOrderItemInput>;
}

@InputType()
export class ProductUpdateOneRequiredWithoutVariantsNestedInput {
    @Field(() => ProductCreateWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateWithoutVariantsInput)
    create?: InstanceType<typeof ProductCreateWithoutVariantsInput>;
    @Field(() => ProductCreateOrConnectWithoutVariantsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutVariantsInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutVariantsInput>;
    @Field(() => ProductUpsertWithoutVariantsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutVariantsInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutVariantsInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateToOneWithWhereWithoutVariantsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutVariantsInput)
    update?: InstanceType<typeof ProductUpdateToOneWithWhereWithoutVariantsInput>;
}

@InputType()
export class ProductUpdateToOneWithWhereWithoutCartItemInput {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductUpdateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCartItemInput)
    data!: InstanceType<typeof ProductUpdateWithoutCartItemInput>;
}

@InputType()
export class ProductUpdateToOneWithWhereWithoutOrderItemInput {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderItemInput)
    data!: InstanceType<typeof ProductUpdateWithoutOrderItemInput>;
}

@InputType()
export class ProductUpdateToOneWithWhereWithoutVariantsInput {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductUpdateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutVariantsInput)
    data!: InstanceType<typeof ProductUpdateWithoutVariantsInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    data!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCollectionsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCollectionsInput)
    data!: InstanceType<typeof ProductUpdateWithoutCollectionsInput>;
}

@InputType()
export class ProductUpdateWithoutCartItemInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    @Field(() => ProductVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutCollectionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    @Field(() => ProductVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    @Field(() => CartItemUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutOrderItemInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    @Field(() => ProductVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutVariantsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof ProductUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryUpdateOneRequiredWithoutProductsNestedInput>;
    @Field(() => ProductVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: InstanceType<typeof ProductVariantUpdateManyWithoutProductNestedInput>;
    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: InstanceType<typeof CollectionUpdateManyWithoutProductsNestedInput>;
    @Field(() => CartItemUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: InstanceType<typeof CartItemUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateimagesInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    update!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCollectionsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCollectionsInput)
    update!: InstanceType<typeof ProductUpdateWithoutCollectionsInput>;
    @Field(() => ProductCreateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create!: InstanceType<typeof ProductCreateWithoutCollectionsInput>;
}

@InputType()
export class ProductUpsertWithoutCartItemInput {
    @Field(() => ProductUpdateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCartItemInput)
    update!: InstanceType<typeof ProductUpdateWithoutCartItemInput>;
    @Field(() => ProductCreateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutCartItemInput)
    create!: InstanceType<typeof ProductCreateWithoutCartItemInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductUpsertWithoutOrderItemInput {
    @Field(() => ProductUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderItemInput)
    update!: InstanceType<typeof ProductUpdateWithoutOrderItemInput>;
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductUpsertWithoutVariantsInput {
    @Field(() => ProductUpdateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutVariantsInput)
    update!: InstanceType<typeof ProductUpdateWithoutVariantsInput>;
    @Field(() => ProductCreateWithoutVariantsInput, {nullable:false})
    @Type(() => ProductCreateWithoutVariantsInput)
    create!: InstanceType<typeof ProductCreateWithoutVariantsInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductVariantAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantCreateManyProductInputEnvelope {
    @Field(() => [ProductVariantCreateManyProductInput], {nullable:false})
    @Type(() => ProductVariantCreateManyProductInput)
    data!: Array<ProductVariantCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductVariantCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantCreateNestedManyWithoutProductInput {
    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create?: Array<ProductVariantCreateWithoutProductInput>;
    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductVariantCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<ProductVariantWhereUniqueInput>;
}

@InputType()
export class ProductVariantCreateNestedOneWithoutOptionsInput {
    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create?: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
    @Field(() => ProductVariantCreateOrConnectWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutOptionsInput)
    connectOrCreate?: InstanceType<typeof ProductVariantCreateOrConnectWithoutOptionsInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: InstanceType<typeof ProductVariantWhereUniqueInput>;
}

@InputType()
export class ProductVariantCreateOrConnectWithoutOptionsInput {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantWhereUniqueInput>;
    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create!: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
}

@InputType()
export class ProductVariantCreateOrConnectWithoutProductInput {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantWhereUniqueInput>;
    @Field(() => ProductVariantCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create!: InstanceType<typeof ProductVariantCreateWithoutProductInput>;
}

@InputType()
export class ProductVariantCreateWithoutOptionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutVariantsInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutVariantsInput>;
}

@InputType()
export class ProductVariantCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantOptionCreateNestedManyWithoutProductVariantInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionCreateNestedManyWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutVariantsInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutVariantsInput>;
    @Field(() => ProductVariantOptionCreateNestedManyWithoutProductVariantInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionCreateNestedManyWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantListRelationFilter {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => ProductVariantWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => ProductVariantWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductVariantWhereInput>;
}

@InputType()
export class ProductVariantMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantOptionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    values?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantOptionCreateManyProductVariantInputEnvelope {
    @Field(() => [ProductVariantOptionCreateManyProductVariantInput], {nullable:false})
    @Type(() => ProductVariantOptionCreateManyProductVariantInput)
    data!: Array<ProductVariantOptionCreateManyProductVariantInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductVariantOptionCreateManyProductVariantInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantOptionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    productVariantId!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantOptionCreateNestedManyWithoutProductVariantInput {
    @Field(() => [ProductVariantOptionCreateWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    @Field(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, {nullable:true})
    @Type(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<ProductVariantOptionWhereUniqueInput>;
}

@InputType()
export class ProductVariantOptionCreateOrConnectWithoutProductVariantInput {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantOptionWhereUniqueInput>;
    @Field(() => ProductVariantOptionCreateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create!: InstanceType<typeof ProductVariantOptionCreateWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantOptionCreateWithoutProductVariantInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantOptionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantCreateNestedOneWithoutOptionsInput, {nullable:false})
    productVariant!: InstanceType<typeof ProductVariantCreateNestedOneWithoutOptionsInput>;
}

@InputType()
export class ProductVariantOptionCreatevaluesInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@InputType()
export class ProductVariantOptionListRelationFilter {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductVariantOptionWhereInput>;
}

@InputType()
export class ProductVariantOptionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantOptionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantOptionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantOptionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    values?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductVariantOptionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductVariantOptionCountOrderByAggregateInput>;
    @Field(() => ProductVariantOptionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductVariantOptionMaxOrderByAggregateInput>;
    @Field(() => ProductVariantOptionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductVariantOptionMinOrderByAggregateInput>;
}

@InputType()
export class ProductVariantOptionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    values?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductVariantOrderByWithRelationInput, {nullable:true})
    productVariant?: InstanceType<typeof ProductVariantOrderByWithRelationInput>;
}

@InputType()
export class ProductVariantOptionScalarWhereWithAggregatesInput {
    @Field(() => [ProductVariantOptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;
    @Field(() => [ProductVariantOptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;
    @Field(() => [ProductVariantOptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantOptionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productVariantId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    values?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProductVariantOptionScalarWhereInput {
    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantOptionScalarWhereInput>;
    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantOptionScalarWhereInput>;
    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantOptionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productVariantId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    values?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput {
    @Field(() => [ProductVariantOptionCreateWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    @Field(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, {nullable:true})
    @Type(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<ProductVariantOptionWhereUniqueInput>;
}

@InputType()
export class ProductVariantOptionUncheckedCreateWithoutProductVariantInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantOptionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    productVariantId!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductVariantOptionCreatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionCreatevaluesInput>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput {
    @Field(() => [ProductVariantOptionCreateWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput)
    upsert?: Array<ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput>;
    @Field(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, {nullable:true})
    @Type(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    set?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    disconnect?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    delete?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput)
    update?: Array<ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput)
    updateMany?: Array<ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    @Type(() => ProductVariantOptionScalarWhereInput)
    deleteMany?: Array<ProductVariantOptionScalarWhereInput>;
}

@InputType()
export class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantOptionUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productVariantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantOptionUncheckedUpdateWithoutProductVariantInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantOptionUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productVariantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantOptionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput {
    @Field(() => ProductVariantOptionScalarWhereInput, {nullable:false})
    @Type(() => ProductVariantOptionScalarWhereInput)
    where!: InstanceType<typeof ProductVariantOptionScalarWhereInput>;
    @Field(() => ProductVariantOptionUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateManyMutationInput)
    data!: InstanceType<typeof ProductVariantOptionUpdateManyMutationInput>;
}

@InputType()
export class ProductVariantOptionUpdateManyWithoutProductVariantNestedInput {
    @Field(() => [ProductVariantOptionCreateWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create?: Array<ProductVariantOptionCreateWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
    connectOrCreate?: Array<ProductVariantOptionCreateOrConnectWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput)
    upsert?: Array<ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput>;
    @Field(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, {nullable:true})
    @Type(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantOptionCreateManyProductVariantInputEnvelope>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    set?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    disconnect?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    delete?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<ProductVariantOptionWhereUniqueInput>;
    @Field(() => [ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput)
    update?: Array<ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput], {nullable:true})
    @Type(() => ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput)
    updateMany?: Array<ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput>;
    @Field(() => [ProductVariantOptionScalarWhereInput], {nullable:true})
    @Type(() => ProductVariantOptionScalarWhereInput)
    deleteMany?: Array<ProductVariantOptionScalarWhereInput>;
}

@InputType()
export class ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantOptionWhereUniqueInput>;
    @Field(() => ProductVariantOptionUpdateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateWithoutProductVariantInput)
    data!: InstanceType<typeof ProductVariantOptionUpdateWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantOptionUpdateWithoutProductVariantInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantOptionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdatevaluesInput, {nullable:true})
    values?: InstanceType<typeof ProductVariantOptionUpdatevaluesInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantUpdateOneRequiredWithoutOptionsNestedInput, {nullable:true})
    productVariant?: InstanceType<typeof ProductVariantUpdateOneRequiredWithoutOptionsNestedInput>;
}

@InputType()
export class ProductVariantOptionUpdatevaluesInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantOptionWhereUniqueInput>;
    @Field(() => ProductVariantOptionUpdateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateWithoutProductVariantInput)
    update!: InstanceType<typeof ProductVariantOptionUpdateWithoutProductVariantInput>;
    @Field(() => ProductVariantOptionCreateWithoutProductVariantInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateWithoutProductVariantInput)
    create!: InstanceType<typeof ProductVariantOptionCreateWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantOptionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    AND?: Array<ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    OR?: Array<ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    NOT?: Array<ProductVariantOptionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    productVariantId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    values?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: InstanceType<typeof ProductVariantRelationFilter>;
}

@InputType()
export class ProductVariantOptionWhereInput {
    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    AND?: Array<ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    OR?: Array<ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionWhereInput], {nullable:true})
    NOT?: Array<ProductVariantOptionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productVariantId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    values?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: InstanceType<typeof ProductVariantRelationFilter>;
}

@InputType()
export class ProductVariantOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    price?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductVariantCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductVariantCountOrderByAggregateInput>;
    @Field(() => ProductVariantAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductVariantAvgOrderByAggregateInput>;
    @Field(() => ProductVariantMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductVariantMaxOrderByAggregateInput>;
    @Field(() => ProductVariantMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductVariantMinOrderByAggregateInput>;
    @Field(() => ProductVariantSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductVariantSumOrderByAggregateInput>;
}

@InputType()
export class ProductVariantOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    price?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
    @Field(() => ProductVariantOptionOrderByRelationAggregateInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionOrderByRelationAggregateInput>;
}

@InputType()
export class ProductVariantRelationFilter {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => ProductVariantWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductVariantWhereInput>;
}

@InputType()
export class ProductVariantScalarWhereWithAggregatesInput {
    @Field(() => [ProductVariantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantScalarWhereWithAggregatesInput>;
    @Field(() => [ProductVariantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantScalarWhereWithAggregatesInput>;
    @Field(() => [ProductVariantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stock?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProductVariantScalarWhereInput {
    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantScalarWhereInput>;
    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantScalarWhereInput>;
    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    stock?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    price?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ProductVariantSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create?: Array<ProductVariantCreateWithoutProductInput>;
    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductVariantCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<ProductVariantWhereUniqueInput>;
}

@InputType()
export class ProductVariantUncheckedCreateWithoutOptionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductVariantUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput>;
}

@InputType()
export class ProductVariantUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create?: Array<ProductVariantCreateWithoutProductInput>;
    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    @Field(() => [ProductVariantUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductVariantUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductVariantCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    set?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    disconnect?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    delete?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductVariantUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ProductVariantUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductVariantUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    @Type(() => ProductVariantScalarWhereInput)
    deleteMany?: Array<ProductVariantScalarWhereInput>;
}

@InputType()
export class ProductVariantUncheckedUpdateManyWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantUncheckedUpdateWithoutOptionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput>;
}

@InputType()
export class ProductVariantUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput>;
}

@InputType()
export class ProductVariantUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductVariantUpdateManyWithWhereWithoutProductInput {
    @Field(() => ProductVariantScalarWhereInput, {nullable:false})
    @Type(() => ProductVariantScalarWhereInput)
    where!: InstanceType<typeof ProductVariantScalarWhereInput>;
    @Field(() => ProductVariantUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantUpdateManyMutationInput)
    data!: InstanceType<typeof ProductVariantUpdateManyMutationInput>;
}

@InputType()
export class ProductVariantUpdateManyWithoutProductNestedInput {
    @Field(() => [ProductVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create?: Array<ProductVariantCreateWithoutProductInput>;
    @Field(() => [ProductVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductVariantCreateOrConnectWithoutProductInput>;
    @Field(() => [ProductVariantUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductVariantUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ProductVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductVariantCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ProductVariantCreateManyProductInputEnvelope>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    set?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    disconnect?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    delete?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<ProductVariantWhereUniqueInput>;
    @Field(() => [ProductVariantUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductVariantUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ProductVariantUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductVariantUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductVariantUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    @Type(() => ProductVariantScalarWhereInput)
    deleteMany?: Array<ProductVariantScalarWhereInput>;
}

@InputType()
export class ProductVariantUpdateOneRequiredWithoutOptionsNestedInput {
    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create?: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
    @Field(() => ProductVariantCreateOrConnectWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantCreateOrConnectWithoutOptionsInput)
    connectOrCreate?: InstanceType<typeof ProductVariantCreateOrConnectWithoutOptionsInput>;
    @Field(() => ProductVariantUpsertWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantUpsertWithoutOptionsInput)
    upsert?: InstanceType<typeof ProductVariantUpsertWithoutOptionsInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: InstanceType<typeof ProductVariantWhereUniqueInput>;
    @Field(() => ProductVariantUpdateToOneWithWhereWithoutOptionsInput, {nullable:true})
    @Type(() => ProductVariantUpdateToOneWithWhereWithoutOptionsInput)
    update?: InstanceType<typeof ProductVariantUpdateToOneWithWhereWithoutOptionsInput>;
}

@InputType()
export class ProductVariantUpdateToOneWithWhereWithoutOptionsInput {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => ProductVariantUpdateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutOptionsInput)
    data!: InstanceType<typeof ProductVariantUpdateWithoutOptionsInput>;
}

@InputType()
export class ProductVariantUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantWhereUniqueInput>;
    @Field(() => ProductVariantUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutProductInput)
    data!: InstanceType<typeof ProductVariantUpdateWithoutProductInput>;
}

@InputType()
export class ProductVariantUpdateWithoutOptionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneRequiredWithoutVariantsNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutVariantsNestedInput>;
}

@InputType()
export class ProductVariantUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductVariantOptionUpdateManyWithoutProductVariantNestedInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionUpdateManyWithoutProductVariantNestedInput>;
}

@InputType()
export class ProductVariantUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneRequiredWithoutVariantsNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutVariantsNestedInput>;
    @Field(() => ProductVariantOptionUpdateManyWithoutProductVariantNestedInput, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionUpdateManyWithoutProductVariantNestedInput>;
}

@InputType()
export class ProductVariantUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: InstanceType<typeof ProductVariantWhereUniqueInput>;
    @Field(() => ProductVariantUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutProductInput)
    update!: InstanceType<typeof ProductVariantUpdateWithoutProductInput>;
    @Field(() => ProductVariantCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutProductInput)
    create!: InstanceType<typeof ProductVariantCreateWithoutProductInput>;
}

@InputType()
export class ProductVariantUpsertWithoutOptionsInput {
    @Field(() => ProductVariantUpdateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantUpdateWithoutOptionsInput)
    update!: InstanceType<typeof ProductVariantUpdateWithoutOptionsInput>;
    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create!: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
}

@InputType()
export class ProductVariantWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ProductVariantWhereInput], {nullable:true})
    AND?: Array<ProductVariantWhereInput>;
    @Field(() => [ProductVariantWhereInput], {nullable:true})
    OR?: Array<ProductVariantWhereInput>;
    @Field(() => [ProductVariantWhereInput], {nullable:true})
    NOT?: Array<ProductVariantWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    stock?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    price?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => ProductVariantOptionListRelationFilter, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionListRelationFilter>;
}

@InputType()
export class ProductVariantWhereInput {
    @Field(() => [ProductVariantWhereInput], {nullable:true})
    AND?: Array<ProductVariantWhereInput>;
    @Field(() => [ProductVariantWhereInput], {nullable:true})
    OR?: Array<ProductVariantWhereInput>;
    @Field(() => [ProductVariantWhereInput], {nullable:true})
    NOT?: Array<ProductVariantWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    stock?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    price?: InstanceType<typeof IntNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => ProductVariantOptionListRelationFilter, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionListRelationFilter>;
}

@InputType()
export class ProductWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductCategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof ProductCategoryRelationFilter>;
    @Field(() => ProductVariantListRelationFilter, {nullable:true})
    variants?: InstanceType<typeof ProductVariantListRelationFilter>;
    @Field(() => CollectionListRelationFilter, {nullable:true})
    collections?: InstanceType<typeof CollectionListRelationFilter>;
    @Field(() => CartItemListRelationFilter, {nullable:true})
    cartItem?: InstanceType<typeof CartItemListRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemListRelationFilter>;
}

@InputType()
export class ProductWhereInput {
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ProductCategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof ProductCategoryRelationFilter>;
    @Field(() => ProductVariantListRelationFilter, {nullable:true})
    variants?: InstanceType<typeof ProductVariantListRelationFilter>;
    @Field(() => CollectionListRelationFilter, {nullable:true})
    collections?: InstanceType<typeof CollectionListRelationFilter>;
    @Field(() => CartItemListRelationFilter, {nullable:true})
    cartItem?: InstanceType<typeof CartItemListRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemListRelationFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutOrdersInput {
    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateWithoutOrdersInput)
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutOrdersInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    @Type(() => UserCreateWithoutOrdersInput)
    create!: InstanceType<typeof UserCreateWithoutOrdersInput>;
}

@InputType()
export class UserCreateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutOrdersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutOrdersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutOrdersNestedInput {
    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateWithoutOrdersInput)
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    @Field(() => UserUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => UserUpsertWithoutOrdersInput)
    upsert?: InstanceType<typeof UserUpsertWithoutOrdersInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateToOneWithWhereWithoutOrdersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOrdersInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutOrdersInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutOrdersInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrdersInput)
    data!: InstanceType<typeof UserUpdateWithoutOrdersInput>;
}

@InputType()
export class UserUpdateWithoutOrdersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: InstanceType<typeof OrderUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutOrdersInput {
    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrdersInput)
    update!: InstanceType<typeof UserUpdateWithoutOrdersInput>;
    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    @Type(() => UserCreateWithoutOrdersInput)
    create!: InstanceType<typeof UserCreateWithoutOrdersInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    role?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: InstanceType<typeof OrderListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    role?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: InstanceType<typeof OrderListRelationFilter>;
}

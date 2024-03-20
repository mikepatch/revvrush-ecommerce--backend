import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
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

export enum ProductVariantOptionScalarFieldEnum {
    id = "id",
    productVariantId = "productVariantId",
    name = "name",
    values = "values",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
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

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    parentCategoryId = "parentCategoryId"
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

export enum OrderStatus {
    CREATED = "CREATED",
    PAID = "PAID",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum OrderItemScalarFieldEnum {
    id = "id",
    orderId = "orderId",
    productId = "productId",
    quantity = "quantity",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum OrderScalarFieldEnum {
    id = "id",
    userId = "userId",
    totalAmount = "totalAmount",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
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

export enum CartItemScalarFieldEnum {
    id = "id",
    cartId = "cartId",
    productId = "productId",
    quantity = "quantity",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CartScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CartScalarFieldEnum, { name: 'CartScalarFieldEnum', description: undefined })
registerEnumType(CartItemScalarFieldEnum, { name: 'CartItemScalarFieldEnum', description: undefined })
registerEnumType(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined })
registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })
registerEnumType(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum', description: undefined })
registerEnumType(ProductVariantOptionScalarFieldEnum, { name: 'ProductVariantOptionScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCart {
    @Field(() => CartCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CartCountAggregate>;
    @Field(() => CartMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CartMinAggregate>;
    @Field(() => CartMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CartMaxAggregate>;
}

@ArgsType()
export class CartAggregateArgs {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
    @Field(() => [CartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithRelationInput>;
    @Field(() => CartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CartCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CartCountAggregateInput>;
    @Field(() => CartMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CartMinAggregateInput>;
    @Field(() => CartMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CartMaxAggregateInput>;
}

@InputType()
export class CartCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CartCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CartCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CartCount {
    @Field(() => Int, {nullable:false})
    items?: number;
}

@InputType()
export class CartCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    connect?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

@InputType()
export class CartCreateOrConnectWithoutItemsInput {
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    @Field(() => CartCreateWithoutItemsInput, {nullable:false})
    @Type(() => CartCreateWithoutItemsInput)
    create!: InstanceType<typeof CartCreateWithoutItemsInput>;
}

@InputType()
export class CartCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CartItemCreateNestedManyWithoutCartInput, {nullable:true})
    items?: InstanceType<typeof CartItemCreateNestedManyWithoutCartInput>;
}

@ArgsType()
export class CartGroupByArgs {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
    @Field(() => [CartOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithAggregationInput>;
    @Field(() => [CartScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CartScalarFieldEnum>;
    @Field(() => CartScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CartScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CartCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CartCountAggregateInput>;
    @Field(() => CartMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CartMinAggregateInput>;
    @Field(() => CartMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CartMaxAggregateInput>;
}

@ObjectType()
export class CartGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CartCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CartCountAggregate>;
    @Field(() => CartMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CartMinAggregate>;
    @Field(() => CartMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CartMaxAggregate>;
}

@InputType()
export class CartMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CartMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CartMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CartMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
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
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CartUncheckedCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CartUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUncheckedUpdateWithoutItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    connect?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
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
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CartUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CartItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof CartItemListRelationFilter>;
}

@ObjectType()
export class Cart {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [CartItem], {nullable:true})
    items?: Array<CartItem>;
    @Field(() => CartCount, {nullable:false})
    _count?: InstanceType<typeof CartCount>;
}

@ArgsType()
export class CreateManyCartArgs {
    @Field(() => [CartCreateManyInput], {nullable:false})
    @Type(() => CartCreateManyInput)
    data!: Array<CartCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCartArgs {
    @Field(() => CartCreateInput, {nullable:false})
    @Type(() => CartCreateInput)
    data!: InstanceType<typeof CartCreateInput>;
}

@ArgsType()
export class DeleteManyCartArgs {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
}

@ArgsType()
export class DeleteOneCartArgs {
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCartOrThrowArgs {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
    @Field(() => [CartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithRelationInput>;
    @Field(() => CartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCartArgs {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
    @Field(() => [CartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithRelationInput>;
    @Field(() => CartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}

@ArgsType()
export class FindManyCartArgs {
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
    @Field(() => [CartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithRelationInput>;
    @Field(() => CartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCartOrThrowArgs {
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCartArgs {
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCartArgs {
    @Field(() => CartUpdateManyMutationInput, {nullable:false})
    @Type(() => CartUpdateManyMutationInput)
    data!: InstanceType<typeof CartUpdateManyMutationInput>;
    @Field(() => CartWhereInput, {nullable:true})
    @Type(() => CartWhereInput)
    where?: InstanceType<typeof CartWhereInput>;
}

@ArgsType()
export class UpdateOneCartArgs {
    @Field(() => CartUpdateInput, {nullable:false})
    @Type(() => CartUpdateInput)
    data!: InstanceType<typeof CartUpdateInput>;
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCartArgs {
    @Field(() => CartWhereUniqueInput, {nullable:false})
    @Type(() => CartWhereUniqueInput)
    where!: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    @Field(() => CartCreateInput, {nullable:false})
    @Type(() => CartCreateInput)
    create!: InstanceType<typeof CartCreateInput>;
    @Field(() => CartUpdateInput, {nullable:false})
    @Type(() => CartUpdateInput)
    update!: InstanceType<typeof CartUpdateInput>;
}

@ObjectType()
export class AggregateCartItem {
    @Field(() => CartItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CartItemCountAggregate>;
    @Field(() => CartItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CartItemAvgAggregate>;
    @Field(() => CartItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CartItemSumAggregate>;
    @Field(() => CartItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CartItemMinAggregate>;
    @Field(() => CartItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CartItemMaxAggregate>;
}

@ArgsType()
export class CartItemAggregateArgs {
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => [CartItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartItemOrderByWithRelationInput>;
    @Field(() => CartItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CartItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CartItemCountAggregateInput>;
    @Field(() => CartItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CartItemAvgAggregateInput>;
    @Field(() => CartItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CartItemSumAggregateInput>;
    @Field(() => CartItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CartItemMinAggregateInput>;
    @Field(() => CartItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CartItemMaxAggregateInput>;
}

@InputType()
export class CartItemAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}

@ObjectType()
export class CartItemAvgAggregate {
    @Field(() => Float, {nullable:true})
    quantity?: number;
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
export class CartItemCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    cartId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CartItemCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    cartId!: number;
    @Field(() => Int, {nullable:false})
    productId!: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
}

@InputType()
export class CartItemCreateOrConnectWithoutCartInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => CartItemCreateWithoutCartInput, {nullable:false})
    @Type(() => CartItemCreateWithoutCartInput)
    create!: InstanceType<typeof CartItemCreateWithoutCartInput>;
}

@InputType()
export class CartItemCreateOrConnectWithoutProductInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
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

@ArgsType()
export class CartItemGroupByArgs {
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => [CartItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CartItemOrderByWithAggregationInput>;
    @Field(() => [CartItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CartItemScalarFieldEnum>;
    @Field(() => CartItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CartItemScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CartItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CartItemCountAggregateInput>;
    @Field(() => CartItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CartItemAvgAggregateInput>;
    @Field(() => CartItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CartItemSumAggregateInput>;
    @Field(() => CartItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CartItemMinAggregateInput>;
    @Field(() => CartItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CartItemMaxAggregateInput>;
}

@ObjectType()
export class CartItemGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CartItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CartItemCountAggregate>;
    @Field(() => CartItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CartItemAvgAggregate>;
    @Field(() => CartItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CartItemSumAggregate>;
    @Field(() => CartItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CartItemMinAggregate>;
    @Field(() => CartItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CartItemMaxAggregate>;
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
export class CartItemMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    cartId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CartItemMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    cartId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class CartItemMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    cartId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CartItemMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    cartId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class CartItemSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}

@ObjectType()
export class CartItemSumAggregate {
    @Field(() => Int, {nullable:true})
    quantity?: number;
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
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    set?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    set?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    set?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    set?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
    @Field(() => [CartItemWhereUniqueInput], {nullable:true})
    @Type(() => CartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>>;
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
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => CartItemUpdateWithoutCartInput, {nullable:false})
    @Type(() => CartItemUpdateWithoutCartInput)
    data!: InstanceType<typeof CartItemUpdateWithoutCartInput>;
}

@InputType()
export class CartItemUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
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
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
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
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
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
    @Field(() => CartWhereInput, {nullable:true})
    cart?: InstanceType<typeof CartWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    product?: InstanceType<typeof ProductWhereInput>;
}

@ObjectType()
export class CartItem {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    cartId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Cart, {nullable:false})
    cart?: InstanceType<typeof Cart>;
    @Field(() => Product, {nullable:false})
    product?: InstanceType<typeof Product>;
}

@ArgsType()
export class CreateManyCartItemArgs {
    @Field(() => [CartItemCreateManyInput], {nullable:false})
    @Type(() => CartItemCreateManyInput)
    data!: Array<CartItemCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCartItemArgs {
    @Field(() => CartItemCreateInput, {nullable:false})
    @Type(() => CartItemCreateInput)
    data!: InstanceType<typeof CartItemCreateInput>;
}

@ArgsType()
export class DeleteManyCartItemArgs {
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
}

@ArgsType()
export class DeleteOneCartItemArgs {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
}

@ArgsType()
export class FindFirstCartItemOrThrowArgs {
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => [CartItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartItemOrderByWithRelationInput>;
    @Field(() => CartItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CartItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartItemScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCartItemArgs {
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => [CartItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartItemOrderByWithRelationInput>;
    @Field(() => CartItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CartItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartItemScalarFieldEnum>;
}

@ArgsType()
export class FindManyCartItemArgs {
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
    @Field(() => [CartItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CartItemOrderByWithRelationInput>;
    @Field(() => CartItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CartItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartItemScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCartItemOrThrowArgs {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
}

@ArgsType()
export class FindUniqueCartItemArgs {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
}

@ArgsType()
export class UpdateManyCartItemArgs {
    @Field(() => CartItemUpdateManyMutationInput, {nullable:false})
    @Type(() => CartItemUpdateManyMutationInput)
    data!: InstanceType<typeof CartItemUpdateManyMutationInput>;
    @Field(() => CartItemWhereInput, {nullable:true})
    @Type(() => CartItemWhereInput)
    where?: InstanceType<typeof CartItemWhereInput>;
}

@ArgsType()
export class UpdateOneCartItemArgs {
    @Field(() => CartItemUpdateInput, {nullable:false})
    @Type(() => CartItemUpdateInput)
    data!: InstanceType<typeof CartItemUpdateInput>;
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
}

@ArgsType()
export class UpsertOneCartItemArgs {
    @Field(() => CartItemWhereUniqueInput, {nullable:false})
    @Type(() => CartItemWhereUniqueInput)
    where!: Prisma.AtLeast<CartItemWhereUniqueInput, 'id' | 'cartId_productId'>;
    @Field(() => CartItemCreateInput, {nullable:false})
    @Type(() => CartItemCreateInput)
    create!: InstanceType<typeof CartItemCreateInput>;
    @Field(() => CartItemUpdateInput, {nullable:false})
    @Type(() => CartItemUpdateInput)
    update!: InstanceType<typeof CartItemUpdateInput>;
}

@ObjectType()
export class AggregateCollection {
    @Field(() => CollectionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CollectionCountAggregate>;
    @Field(() => CollectionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CollectionMinAggregate>;
    @Field(() => CollectionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CollectionMaxAggregate>;
}

@ArgsType()
export class CollectionAggregateArgs {
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => [CollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CollectionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CollectionCountAggregateInput>;
    @Field(() => CollectionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CollectionMinAggregateInput>;
    @Field(() => CollectionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CollectionMaxAggregateInput>;
}

@InputType()
export class CollectionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CollectionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    coverImage!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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

@ObjectType()
export class CollectionCount {
    @Field(() => Int, {nullable:false})
    products?: number;
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
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
}

@InputType()
export class CollectionCreateOrConnectWithoutProductsInput {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
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

@ArgsType()
export class CollectionGroupByArgs {
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => [CollectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithAggregationInput>;
    @Field(() => [CollectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CollectionScalarFieldEnum>;
    @Field(() => CollectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CollectionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CollectionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CollectionCountAggregateInput>;
    @Field(() => CollectionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CollectionMinAggregateInput>;
    @Field(() => CollectionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CollectionMaxAggregateInput>;
}

@ObjectType()
export class CollectionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CollectionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CollectionCountAggregate>;
    @Field(() => CollectionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CollectionMinAggregate>;
    @Field(() => CollectionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CollectionMaxAggregate>;
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
export class CollectionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CollectionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => String, {nullable:true})
    coverImage?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class CollectionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CollectionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => String, {nullable:true})
    coverImage?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
    @Field(() => [CollectionWhereUniqueInput], {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>>;
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
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
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

@ObjectType()
export class Collection {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    coverImage!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => CollectionCount, {nullable:false})
    _count?: InstanceType<typeof CollectionCount>;
}

@ArgsType()
export class CreateManyCollectionArgs {
    @Field(() => [CollectionCreateManyInput], {nullable:false})
    @Type(() => CollectionCreateManyInput)
    data!: Array<CollectionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCollectionArgs {
    @Field(() => CollectionCreateInput, {nullable:false})
    @Type(() => CollectionCreateInput)
    data!: InstanceType<typeof CollectionCreateInput>;
}

@ArgsType()
export class DeleteManyCollectionArgs {
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
}

@ArgsType()
export class DeleteOneCollectionArgs {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCollectionOrThrowArgs {
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => [CollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CollectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCollectionArgs {
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => [CollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CollectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}

@ArgsType()
export class FindManyCollectionArgs {
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
    @Field(() => [CollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithRelationInput>;
    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CollectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCollectionOrThrowArgs {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCollectionArgs {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCollectionArgs {
    @Field(() => CollectionUpdateManyMutationInput, {nullable:false})
    @Type(() => CollectionUpdateManyMutationInput)
    data!: InstanceType<typeof CollectionUpdateManyMutationInput>;
    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: InstanceType<typeof CollectionWhereInput>;
}

@ArgsType()
export class UpdateOneCollectionArgs {
    @Field(() => CollectionUpdateInput, {nullable:false})
    @Type(() => CollectionUpdateInput)
    data!: InstanceType<typeof CollectionUpdateInput>;
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCollectionArgs {
    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id'>;
    @Field(() => CollectionCreateInput, {nullable:false})
    @Type(() => CollectionCreateInput)
    create!: InstanceType<typeof CollectionCreateInput>;
    @Field(() => CollectionUpdateInput, {nullable:false})
    @Type(() => CollectionUpdateInput)
    update!: InstanceType<typeof CollectionUpdateInput>;
}

@ObjectType()
export class AggregateOrder {
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@ArgsType()
export class CreateManyOrderArgs {
    @Field(() => [OrderCreateManyInput], {nullable:false})
    @Type(() => OrderCreateManyInput)
    data!: Array<OrderCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneOrderArgs {
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    data!: InstanceType<typeof OrderCreateInput>;
}

@ArgsType()
export class DeleteManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class DeleteOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstOrderOrThrowArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindFirstOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueOrderOrThrowArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class OrderAggregateArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    @Field(() => OrderSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@InputType()
export class OrderAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
}

@ObjectType()
export class OrderAvgAggregate {
    @Field(() => Float, {nullable:true})
    totalAmount?: number;
}

@InputType()
export class OrderAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;
}

@InputType()
export class OrderCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class OrderCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    totalAmount!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class OrderCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class OrderCount {
    @Field(() => Int, {nullable:false})
    items?: number;
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
    totalAmount!: number;
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
    totalAmount!: number;
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
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@InputType()
export class OrderCreateOrConnectWithoutItemsInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutItemsInput)
    create!: InstanceType<typeof OrderCreateWithoutItemsInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    @Type(() => OrderCreateWithoutUserInput)
    create!: InstanceType<typeof OrderCreateWithoutUserInput>;
}

@InputType()
export class OrderCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    totalAmount!: number;
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
    totalAmount!: number;
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
    totalAmount!: number;
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

@ArgsType()
export class OrderGroupByArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    @Field(() => [OrderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderScalarFieldEnum>;
    @Field(() => OrderScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    @Field(() => OrderSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@ObjectType()
export class OrderGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Float, {nullable:false})
    totalAmount!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
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
export class OrderMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class OrderMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Float, {nullable:true})
    totalAmount?: number;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class OrderMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class OrderMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Float, {nullable:true})
    totalAmount?: number;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;
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
    totalAmount?: keyof typeof SortOrder;
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
    totalAmount?: keyof typeof SortOrder;
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
    totalAmount?: InstanceType<typeof FloatWithAggregatesFilter>;
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
    totalAmount?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class OrderSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
}

@ObjectType()
export class OrderSumAggregate {
    @Field(() => Float, {nullable:true})
    totalAmount?: number;
}

@InputType()
export class OrderSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;
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
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderUncheckedCreateWithoutItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Float, {nullable:false})
    totalAmount!: number;
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
    totalAmount!: number;
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
    totalAmount!: number;
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
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OrderUpdateWithoutUserInput)
    data!: InstanceType<typeof OrderUpdateWithoutUserInput>;
}

@InputType()
export class OrderUpdateWithoutItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    totalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
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
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
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
    totalAmount?: InstanceType<typeof FloatFilter>;
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
    totalAmount?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof OrderItemListRelationFilter>;
    @Field(() => UserWhereInput, {nullable:true})
    user?: InstanceType<typeof UserWhereInput>;
}

@ObjectType()
export class Order {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Float, {nullable:false})
    totalAmount!: number;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [OrderItem], {nullable:true})
    items?: Array<OrderItem>;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => OrderCount, {nullable:false})
    _count?: InstanceType<typeof OrderCount>;
}

@ArgsType()
export class UpdateManyOrderArgs {
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class UpdateOneOrderArgs {
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    data!: InstanceType<typeof OrderUpdateInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    create!: InstanceType<typeof OrderCreateInput>;
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    update!: InstanceType<typeof OrderUpdateInput>;
}

@ObjectType()
export class AggregateOrderItem {
    @Field(() => OrderItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregate>;
    @Field(() => OrderItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregate>;
    @Field(() => OrderItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregate>;
    @Field(() => OrderItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregate>;
    @Field(() => OrderItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregate>;
}

@ArgsType()
export class CreateManyOrderItemArgs {
    @Field(() => [OrderItemCreateManyInput], {nullable:false})
    @Type(() => OrderItemCreateManyInput)
    data!: Array<OrderItemCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneOrderItemArgs {
    @Field(() => OrderItemCreateInput, {nullable:false})
    @Type(() => OrderItemCreateInput)
    data!: InstanceType<typeof OrderItemCreateInput>;
}

@ArgsType()
export class DeleteManyOrderItemArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
}

@ArgsType()
export class DeleteOneOrderItemArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstOrderItemOrThrowArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}

@ArgsType()
export class FindFirstOrderItemArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}

@ArgsType()
export class FindManyOrderItemArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueOrderItemOrThrowArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueOrderItemArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class OrderItemAggregateArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregateInput>;
    @Field(() => OrderItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregateInput>;
    @Field(() => OrderItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregateInput>;
    @Field(() => OrderItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregateInput>;
    @Field(() => OrderItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregateInput>;
}

@InputType()
export class OrderItemAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}

@ObjectType()
export class OrderItemAvgAggregate {
    @Field(() => Float, {nullable:true})
    quantity?: number;
}

@InputType()
export class OrderItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class OrderItemCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    orderId!: number;
    @Field(() => Int, {nullable:false})
    productId!: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderItemCreateOrConnectWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create!: InstanceType<typeof OrderItemCreateWithoutOrderInput>;
}

@InputType()
export class OrderItemCreateOrConnectWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
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

@ArgsType()
export class OrderItemGroupByArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithAggregationInput>;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderItemScalarFieldEnum>;
    @Field(() => OrderItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregateInput>;
    @Field(() => OrderItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregateInput>;
    @Field(() => OrderItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregateInput>;
    @Field(() => OrderItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregateInput>;
    @Field(() => OrderItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregateInput>;
}

@ObjectType()
export class OrderItemGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    orderId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => OrderItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregate>;
    @Field(() => OrderItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregate>;
    @Field(() => OrderItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregate>;
    @Field(() => OrderItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregate>;
    @Field(() => OrderItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregate>;
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
export class OrderItemMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class OrderItemMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class OrderItemMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class OrderItemMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class OrderItemSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}

@ObjectType()
export class OrderItemSumAggregate {
    @Field(() => Int, {nullable:true})
    quantity?: number;
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
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
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
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutOrderInput)
    data!: InstanceType<typeof OrderItemUpdateWithoutOrderInput>;
}

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
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
    @Field(() => OrderWhereInput, {nullable:true})
    order?: InstanceType<typeof OrderWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    product?: InstanceType<typeof ProductWhereInput>;
}

@ObjectType()
export class OrderItem {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    orderId!: string;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Order, {nullable:false})
    order?: InstanceType<typeof Order>;
    @Field(() => Product, {nullable:false})
    product?: InstanceType<typeof Product>;
}

@ArgsType()
export class UpdateManyOrderItemArgs {
    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: InstanceType<typeof OrderItemUpdateManyMutationInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
}

@ArgsType()
export class UpdateOneOrderItemArgs {
    @Field(() => OrderItemUpdateInput, {nullable:false})
    @Type(() => OrderItemUpdateInput)
    data!: InstanceType<typeof OrderItemUpdateInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneOrderItemArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemCreateInput, {nullable:false})
    @Type(() => OrderItemCreateInput)
    create!: InstanceType<typeof OrderItemCreateInput>;
    @Field(() => OrderItemUpdateInput, {nullable:false})
    @Type(() => OrderItemUpdateInput)
    update!: InstanceType<typeof OrderItemUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
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

@ObjectType()
export class AggregateProduct {
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@ArgsType()
export class CreateManyProductArgs {
    @Field(() => [ProductCreateManyInput], {nullable:false})
    @Type(() => ProductCreateManyInput)
    data!: Array<ProductCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    data!: InstanceType<typeof ProductCreateInput>;
}

@ArgsType()
export class DeleteManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstProductOrThrowArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductOrThrowArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@InputType()
export class ProductAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class ProductAvgAggregate {
    @Field(() => Float, {nullable:true})
    price?: number;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    images?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => Int, {nullable:false})
    images!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    orderId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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

@ObjectType()
export class ProductCount {
    @Field(() => Int, {nullable:false})
    variants?: number;
    @Field(() => Int, {nullable:false})
    collections?: number;
    @Field(() => Int, {nullable:false})
    cartItem?: number;
    @Field(() => Int, {nullable:false})
    orderItem?: number;
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
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@InputType()
export class ProductCreateOrConnectWithoutCartItemInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateWithoutCartItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutCartItemInput)
    create!: InstanceType<typeof ProductCreateWithoutCartItemInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCollectionsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateWithoutCollectionsInput, {nullable:false})
    @Type(() => ProductCreateWithoutCollectionsInput)
    create!: InstanceType<typeof ProductCreateWithoutCollectionsInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutOrderItemInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutVariantsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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

@ArgsType()
export class ProductGroupByArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductScalarFieldEnum>;
    @Field(() => ProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@ObjectType()
export class ProductGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => [String], {nullable:true})
    images?: Array<string>;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    orderId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
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
export class ProductMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => String, {nullable:true})
    categoryId?: string;
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
export class ProductMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => String, {nullable:true})
    categoryId?: string;
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
export class ProductSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class ProductSumAggregate {
    @Field(() => Int, {nullable:true})
    price?: number;
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
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    data!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCollectionsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
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
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    category?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductVariantListRelationFilter, {nullable:true})
    variants?: InstanceType<typeof ProductVariantListRelationFilter>;
    @Field(() => CollectionListRelationFilter, {nullable:true})
    collections?: InstanceType<typeof CollectionListRelationFilter>;
    @Field(() => CartItemListRelationFilter, {nullable:true})
    cartItem?: InstanceType<typeof CartItemListRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    orderItem?: InstanceType<typeof OrderItemListRelationFilter>;
}

@ObjectType()
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => [String], {nullable:true})
    images!: Array<string>;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => String, {nullable:true})
    orderId!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => ProductCategory, {nullable:false})
    category?: InstanceType<typeof ProductCategory>;
    @Field(() => [ProductVariant], {nullable:true})
    variants?: Array<ProductVariant>;
    @Field(() => [Collection], {nullable:true})
    collections?: Array<Collection>;
    @Field(() => [CartItem], {nullable:true})
    cartItem?: Array<CartItem>;
    @Field(() => [OrderItem], {nullable:true})
    orderItem?: Array<OrderItem>;
    @Field(() => ProductCount, {nullable:false})
    _count?: InstanceType<typeof ProductCount>;
}

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    data!: InstanceType<typeof ProductUpdateInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    update!: InstanceType<typeof ProductUpdateInput>;
}

@ObjectType()
export class AggregateProductCategory {
    @Field(() => ProductCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregate>;
    @Field(() => ProductCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregate>;
    @Field(() => ProductCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyProductCategoryArgs {
    @Field(() => [ProductCategoryCreateManyInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyInput)
    data!: Array<ProductCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductCategoryArgs {
    @Field(() => ProductCategoryCreateInput, {nullable:false})
    @Type(() => ProductCategoryCreateInput)
    data!: InstanceType<typeof ProductCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyProductCategoryArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstProductCategoryOrThrowArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductCategoryArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductCategoryArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductCategoryOrThrowArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ProductCategoryAggregateArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregateInput>;
    @Field(() => ProductCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregateInput>;
    @Field(() => ProductCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregateInput>;
}

@InputType()
export class ProductCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    parentCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    parentCategoryId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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

@ObjectType()
export class ProductCategoryCount {
    @Field(() => Int, {nullable:false})
    products?: number;
    @Field(() => Int, {nullable:false})
    subCategories?: number;
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
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutParentCategoryInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => ProductCategoryCreateWithoutParentCategoryInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutParentCategoryInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutParentCategoryInput>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutProductsInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutSubCategoriesInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
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

@ArgsType()
export class ProductCategoryGroupByArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithAggregationInput>;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductCategoryScalarFieldEnum>;
    @Field(() => ProductCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregateInput>;
    @Field(() => ProductCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregateInput>;
    @Field(() => ProductCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregateInput>;
}

@ObjectType()
export class ProductCategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
    @Field(() => ProductCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregate>;
    @Field(() => ProductCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregate>;
    @Field(() => ProductCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregate>;
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
export class ProductCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    parentCategoryId?: true;
}

@ObjectType()
export class ProductCategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
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
export class ProductCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    parentCategoryId?: true;
}

@ObjectType()
export class ProductCategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    slug?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    parentCategoryId?: string;
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
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
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
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    subCategories?: InstanceType<typeof ProductCategoryListRelationFilter>;
}

@ObjectType()
export class ProductCategory {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:true})
    parentCategoryId!: string | null;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => ProductCategory, {nullable:true})
    parentCategory?: InstanceType<typeof ProductCategory> | null;
    @Field(() => [ProductCategory], {nullable:true})
    subCategories?: Array<ProductCategory>;
    @Field(() => ProductCategoryCount, {nullable:false})
    _count?: InstanceType<typeof ProductCategoryCount>;
}

@ArgsType()
export class UpdateManyProductCategoryArgs {
    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof ProductCategoryUpdateManyMutationInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneProductCategoryArgs {
    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    @Type(() => ProductCategoryUpdateInput)
    data!: InstanceType<typeof ProductCategoryUpdateInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
    @Field(() => ProductCategoryCreateInput, {nullable:false})
    @Type(() => ProductCategoryCreateInput)
    create!: InstanceType<typeof ProductCategoryCreateInput>;
    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    @Type(() => ProductCategoryUpdateInput)
    update!: InstanceType<typeof ProductCategoryUpdateInput>;
}

@ObjectType()
export class AggregateProductVariant {
    @Field(() => ProductVariantCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductVariantCountAggregate>;
    @Field(() => ProductVariantAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductVariantAvgAggregate>;
    @Field(() => ProductVariantSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductVariantSumAggregate>;
    @Field(() => ProductVariantMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductVariantMinAggregate>;
    @Field(() => ProductVariantMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductVariantMaxAggregate>;
}

@ArgsType()
export class CreateManyProductVariantArgs {
    @Field(() => [ProductVariantCreateManyInput], {nullable:false})
    @Type(() => ProductVariantCreateManyInput)
    data!: Array<ProductVariantCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductVariantArgs {
    @Field(() => ProductVariantCreateInput, {nullable:false})
    @Type(() => ProductVariantCreateInput)
    data!: InstanceType<typeof ProductVariantCreateInput>;
}

@ArgsType()
export class DeleteManyProductVariantArgs {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
}

@ArgsType()
export class DeleteOneProductVariantArgs {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstProductVariantOrThrowArgs {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => [ProductVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductVariantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductVariantArgs {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => [ProductVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductVariantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductVariantArgs {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => [ProductVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductVariantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductVariantOrThrowArgs {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueProductVariantArgs {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ProductVariantAggregateArgs {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => [ProductVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithRelationInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductVariantCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductVariantCountAggregateInput>;
    @Field(() => ProductVariantAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductVariantAvgAggregateInput>;
    @Field(() => ProductVariantSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductVariantSumAggregateInput>;
    @Field(() => ProductVariantMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductVariantMinAggregateInput>;
    @Field(() => ProductVariantMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductVariantMaxAggregateInput>;
}

@InputType()
export class ProductVariantAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    stock?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class ProductVariantAvgAggregate {
    @Field(() => Float, {nullable:true})
    stock?: number;
    @Field(() => Float, {nullable:true})
    price?: number;
}

@InputType()
export class ProductVariantAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ProductVariantCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductVariantCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    productId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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

@ObjectType()
export class ProductVariantCount {
    @Field(() => Int, {nullable:false})
    options?: number;
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
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

@InputType()
export class ProductVariantCreateOrConnectWithoutOptionsInput {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    @Field(() => ProductVariantCreateWithoutOptionsInput, {nullable:false})
    @Type(() => ProductVariantCreateWithoutOptionsInput)
    create!: InstanceType<typeof ProductVariantCreateWithoutOptionsInput>;
}

@InputType()
export class ProductVariantCreateOrConnectWithoutProductInput {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
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

@ArgsType()
export class ProductVariantGroupByArgs {
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
    @Field(() => [ProductVariantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductVariantOrderByWithAggregationInput>;
    @Field(() => [ProductVariantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantScalarFieldEnum>;
    @Field(() => ProductVariantScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductVariantScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductVariantCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductVariantCountAggregateInput>;
    @Field(() => ProductVariantAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductVariantAvgAggregateInput>;
    @Field(() => ProductVariantSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductVariantSumAggregateInput>;
    @Field(() => ProductVariantMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductVariantMinAggregateInput>;
    @Field(() => ProductVariantMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductVariantMaxAggregateInput>;
}

@ObjectType()
export class ProductVariantGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProductVariantCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductVariantCountAggregate>;
    @Field(() => ProductVariantAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductVariantAvgAggregate>;
    @Field(() => ProductVariantSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductVariantSumAggregate>;
    @Field(() => ProductVariantMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductVariantMinAggregate>;
    @Field(() => ProductVariantMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductVariantMaxAggregate>;
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
export class ProductVariantMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductVariantMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    stock?: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class ProductVariantMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductVariantMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    stock?: number;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class ProductVariantSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    stock?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class ProductVariantSumAggregate {
    @Field(() => Int, {nullable:true})
    stock?: number;
    @Field(() => Int, {nullable:true})
    price?: number;
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
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>>;
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
    connect?: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
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
    @Field(() => ProductWhereInput, {nullable:true})
    product?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductVariantOptionListRelationFilter, {nullable:true})
    options?: InstanceType<typeof ProductVariantOptionListRelationFilter>;
}

@ObjectType()
export class ProductVariant {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true})
    price!: number | null;
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Product, {nullable:false})
    product?: InstanceType<typeof Product>;
    @Field(() => [ProductVariantOption], {nullable:true})
    options?: Array<ProductVariantOption>;
    @Field(() => ProductVariantCount, {nullable:false})
    _count?: InstanceType<typeof ProductVariantCount>;
}

@ArgsType()
export class UpdateManyProductVariantArgs {
    @Field(() => ProductVariantUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantUpdateManyMutationInput)
    data!: InstanceType<typeof ProductVariantUpdateManyMutationInput>;
    @Field(() => ProductVariantWhereInput, {nullable:true})
    @Type(() => ProductVariantWhereInput)
    where?: InstanceType<typeof ProductVariantWhereInput>;
}

@ArgsType()
export class UpdateOneProductVariantArgs {
    @Field(() => ProductVariantUpdateInput, {nullable:false})
    @Type(() => ProductVariantUpdateInput)
    data!: InstanceType<typeof ProductVariantUpdateInput>;
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneProductVariantArgs {
    @Field(() => ProductVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantWhereUniqueInput, 'id'>;
    @Field(() => ProductVariantCreateInput, {nullable:false})
    @Type(() => ProductVariantCreateInput)
    create!: InstanceType<typeof ProductVariantCreateInput>;
    @Field(() => ProductVariantUpdateInput, {nullable:false})
    @Type(() => ProductVariantUpdateInput)
    update!: InstanceType<typeof ProductVariantUpdateInput>;
}

@ObjectType()
export class AggregateProductVariantOption {
    @Field(() => ProductVariantOptionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductVariantOptionCountAggregate>;
    @Field(() => ProductVariantOptionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductVariantOptionMinAggregate>;
    @Field(() => ProductVariantOptionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregate>;
}

@ArgsType()
export class CreateManyProductVariantOptionArgs {
    @Field(() => [ProductVariantOptionCreateManyInput], {nullable:false})
    @Type(() => ProductVariantOptionCreateManyInput)
    data!: Array<ProductVariantOptionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductVariantOptionArgs {
    @Field(() => ProductVariantOptionCreateInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateInput)
    data!: InstanceType<typeof ProductVariantOptionCreateInput>;
}

@ArgsType()
export class DeleteManyProductVariantOptionArgs {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
}

@ArgsType()
export class DeleteOneProductVariantOptionArgs {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstProductVariantOptionOrThrowArgs {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductVariantOptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductVariantOptionArgs {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductVariantOptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductVariantOptionArgs {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductVariantOptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductVariantOptionOrThrowArgs {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueProductVariantOptionArgs {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ProductVariantOptionAggregateArgs {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithRelationInput>;
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductVariantOptionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductVariantOptionCountAggregateInput>;
    @Field(() => ProductVariantOptionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductVariantOptionMinAggregateInput>;
    @Field(() => ProductVariantOptionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregateInput>;
}

@InputType()
export class ProductVariantOptionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    productVariantId?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    values?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductVariantOptionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    productVariantId!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    values!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ProductVariantOptionCreateOrConnectWithoutProductVariantInput {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
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

@ArgsType()
export class ProductVariantOptionGroupByArgs {
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
    @Field(() => [ProductVariantOptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductVariantOptionOrderByWithAggregationInput>;
    @Field(() => [ProductVariantOptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductVariantOptionScalarFieldEnum>;
    @Field(() => ProductVariantOptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductVariantOptionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductVariantOptionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductVariantOptionCountAggregateInput>;
    @Field(() => ProductVariantOptionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductVariantOptionMinAggregateInput>;
    @Field(() => ProductVariantOptionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregateInput>;
}

@ObjectType()
export class ProductVariantOptionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    productVariantId!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [String], {nullable:true})
    values?: Array<string>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProductVariantOptionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductVariantOptionCountAggregate>;
    @Field(() => ProductVariantOptionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductVariantOptionMinAggregate>;
    @Field(() => ProductVariantOptionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductVariantOptionMaxAggregate>;
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
export class ProductVariantOptionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    productVariantId?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductVariantOptionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    productVariantId?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class ProductVariantOptionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    productVariantId?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductVariantOptionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    productVariantId?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
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
    set?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
    @Field(() => [ProductVariantOptionWhereUniqueInput], {nullable:true})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>>;
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
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
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
    @Field(() => ProductVariantWhereInput, {nullable:true})
    productVariant?: InstanceType<typeof ProductVariantWhereInput>;
}

@ObjectType()
export class ProductVariantOption {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    productVariantId!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [String], {nullable:true})
    values!: Array<string>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => ProductVariant, {nullable:false})
    productVariant?: InstanceType<typeof ProductVariant>;
}

@ArgsType()
export class UpdateManyProductVariantOptionArgs {
    @Field(() => ProductVariantOptionUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateManyMutationInput)
    data!: InstanceType<typeof ProductVariantOptionUpdateManyMutationInput>;
    @Field(() => ProductVariantOptionWhereInput, {nullable:true})
    @Type(() => ProductVariantOptionWhereInput)
    where?: InstanceType<typeof ProductVariantOptionWhereInput>;
}

@ArgsType()
export class UpdateOneProductVariantOptionArgs {
    @Field(() => ProductVariantOptionUpdateInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateInput)
    data!: InstanceType<typeof ProductVariantOptionUpdateInput>;
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneProductVariantOptionArgs {
    @Field(() => ProductVariantOptionWhereUniqueInput, {nullable:false})
    @Type(() => ProductVariantOptionWhereUniqueInput)
    where!: Prisma.AtLeast<ProductVariantOptionWhereUniqueInput, 'id'>;
    @Field(() => ProductVariantOptionCreateInput, {nullable:false})
    @Type(() => ProductVariantOptionCreateInput)
    create!: InstanceType<typeof ProductVariantOptionCreateInput>;
    @Field(() => ProductVariantOptionUpdateInput, {nullable:false})
    @Type(() => ProductVariantOptionUpdateInput)
    update!: InstanceType<typeof ProductVariantOptionUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
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

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    orders?: number;
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
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateOrConnectWithoutOrdersInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
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

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    role!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    role?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
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

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false,defaultValue:'USER'})
    role!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

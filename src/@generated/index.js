"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CollectionScalarWhereWithAggregatesInput_1, CollectionScalarWhereInput_1, CollectionWhereInput_1, OrderScalarWhereWithAggregatesInput_1, OrderScalarWhereInput_1, OrderWhereInput_1, NestedDateTimeFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedFloatFilter_1, NestedFloatNullableFilter_1, NestedIntFilter_1, NestedIntNullableFilter_1, NestedIntNullableWithAggregatesFilter_1, NestedIntWithAggregatesFilter_1, NestedStringFilter_1, NestedStringNullableFilter_1, NestedStringNullableWithAggregatesFilter_1, NestedStringWithAggregatesFilter_1, ProductScalarWhereWithAggregatesInput_1, ProductScalarWhereInput_1, ProductWhereInput_1, ProductCategoryOrderByWithRelationInput_1, ProductCategoryScalarWhereWithAggregatesInput_1, ProductCategoryScalarWhereInput_1, ProductCategoryWhereInput_1, ProductCategory_1, ProductVariantScalarWhereWithAggregatesInput_1, ProductVariantScalarWhereInput_1, ProductVariantWhereInput_1, ProductVariantOptionScalarWhereWithAggregatesInput_1, ProductVariantOptionScalarWhereInput_1, ProductVariantOptionWhereInput_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionUpdateInput = exports.CollectionUpdateWithoutProductsInput = exports.CollectionUpdateWithWhereUniqueWithoutProductsInput = exports.CollectionUpdateManyWithoutProductsNestedInput = exports.CollectionUpdateManyWithWhereWithoutProductsInput = exports.CollectionUpdateManyMutationInput = exports.CollectionUncheckedUpdateInput = exports.CollectionUncheckedUpdateWithoutProductsInput = exports.CollectionUncheckedUpdateManyInput = exports.CollectionUncheckedUpdateManyWithoutProductsInput = exports.CollectionUncheckedUpdateManyWithoutProductsNestedInput = exports.CollectionUncheckedCreateInput = exports.CollectionUncheckedCreateWithoutProductsInput = exports.CollectionUncheckedCreateNestedManyWithoutProductsInput = exports.CollectionScalarWhereInput = exports.CollectionScalarWhereWithAggregatesInput = exports.CollectionOrderByWithRelationInput = exports.CollectionOrderByWithAggregationInput = exports.CollectionOrderByRelationAggregateInput = exports.CollectionMinOrderByAggregateInput = exports.CollectionMinAggregate = exports.CollectionMinAggregateInput = exports.CollectionMaxOrderByAggregateInput = exports.CollectionMaxAggregate = exports.CollectionMaxAggregateInput = exports.CollectionListRelationFilter = exports.CollectionGroupBy = exports.CollectionGroupByArgs = exports.CollectionCreateInput = exports.CollectionCreateWithoutProductsInput = exports.CollectionCreateOrConnectWithoutProductsInput = exports.CollectionCreateNestedManyWithoutProductsInput = exports.CollectionCreateManyInput = exports.CollectionCount = exports.CollectionCountOrderByAggregateInput = exports.CollectionCountAggregate = exports.CollectionCountAggregateInput = exports.CollectionAggregateArgs = exports.AggregateCollection = exports.CollectionScalarFieldEnum = exports.OrderScalarFieldEnum = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.TransactionIsolationLevel = exports.ProductScalarFieldEnum = exports.ProductCategoryScalarFieldEnum = exports.ProductVariantScalarFieldEnum = exports.ProductVariantOptionScalarFieldEnum = exports.UserScalarFieldEnum = void 0;
exports.OrderMinOrderByAggregateInput = exports.OrderMinAggregate = exports.OrderMinAggregateInput = exports.OrderMaxOrderByAggregateInput = exports.OrderMaxAggregate = exports.OrderMaxAggregateInput = exports.OrderListRelationFilter = exports.OrderGroupBy = exports.OrderGroupByArgs = exports.OrderCreateInput = exports.OrderCreateWithoutUserInput = exports.OrderCreateWithoutProductsInput = exports.OrderCreateOrConnectWithoutUserInput = exports.OrderCreateOrConnectWithoutProductsInput = exports.OrderCreateNestedOneWithoutProductsInput = exports.OrderCreateNestedManyWithoutUserInput = exports.OrderCreateManyInput = exports.OrderCreateManyUserInput = exports.OrderCreateManyUserInputEnvelope = exports.OrderCount = exports.OrderCountOrderByAggregateInput = exports.OrderCountAggregate = exports.OrderCountAggregateInput = exports.OrderAggregateArgs = exports.FindUniqueOrderArgs = exports.FindUniqueOrderOrThrowArgs = exports.FindManyOrderArgs = exports.FindFirstOrderArgs = exports.FindFirstOrderOrThrowArgs = exports.DeleteOneOrderArgs = exports.DeleteManyOrderArgs = exports.CreateOneOrderArgs = exports.CreateManyOrderArgs = exports.AggregateOrder = exports.UpsertOneCollectionArgs = exports.UpdateOneCollectionArgs = exports.UpdateManyCollectionArgs = exports.FindUniqueCollectionArgs = exports.FindUniqueCollectionOrThrowArgs = exports.FindManyCollectionArgs = exports.FindFirstCollectionArgs = exports.FindFirstCollectionOrThrowArgs = exports.DeleteOneCollectionArgs = exports.DeleteManyCollectionArgs = exports.CreateOneCollectionArgs = exports.CreateManyCollectionArgs = exports.Collection = exports.CollectionWhereInput = exports.CollectionWhereUniqueInput = exports.CollectionUpsertWithWhereUniqueWithoutProductsInput = void 0;
exports.NestedIntWithAggregatesFilter = exports.NestedIntNullableWithAggregatesFilter = exports.NestedIntNullableFilter = exports.NestedIntFilter = exports.NestedFloatNullableFilter = exports.NestedFloatFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeFilter = exports.IntWithAggregatesFilter = exports.IntNullableWithAggregatesFilter = exports.IntNullableFilter = exports.IntFilter = exports.IntFieldUpdateOperationsInput = exports.DateTimeWithAggregatesFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.AffectedRows = exports.UpsertOneOrderArgs = exports.UpdateOneOrderArgs = exports.UpdateManyOrderArgs = exports.Order = exports.OrderWhereInput = exports.OrderWhereUniqueInput = exports.OrderUpsertWithoutProductsInput = exports.OrderUpsertWithWhereUniqueWithoutUserInput = exports.OrderUpdateInput = exports.OrderUpdateWithoutUserInput = exports.OrderUpdateWithoutProductsInput = exports.OrderUpdateWithWhereUniqueWithoutUserInput = exports.OrderUpdateToOneWithWhereWithoutProductsInput = exports.OrderUpdateOneWithoutProductsNestedInput = exports.OrderUpdateManyWithoutUserNestedInput = exports.OrderUpdateManyWithWhereWithoutUserInput = exports.OrderUpdateManyMutationInput = exports.OrderUncheckedUpdateInput = exports.OrderUncheckedUpdateWithoutUserInput = exports.OrderUncheckedUpdateWithoutProductsInput = exports.OrderUncheckedUpdateManyInput = exports.OrderUncheckedUpdateManyWithoutUserInput = exports.OrderUncheckedUpdateManyWithoutUserNestedInput = exports.OrderUncheckedCreateInput = exports.OrderUncheckedCreateWithoutUserInput = exports.OrderUncheckedCreateWithoutProductsInput = exports.OrderUncheckedCreateNestedManyWithoutUserInput = exports.OrderScalarWhereInput = exports.OrderScalarWhereWithAggregatesInput = exports.OrderOrderByWithRelationInput = exports.OrderOrderByWithAggregationInput = exports.OrderOrderByRelationAggregateInput = exports.OrderNullableRelationFilter = void 0;
exports.ProductCreateimagesInput = exports.ProductCreateInput = exports.ProductCreateWithoutVariantsInput = exports.ProductCreateWithoutOrderInput = exports.ProductCreateWithoutCollectionsInput = exports.ProductCreateWithoutCategoryInput = exports.ProductCreateOrConnectWithoutVariantsInput = exports.ProductCreateOrConnectWithoutOrderInput = exports.ProductCreateOrConnectWithoutCollectionsInput = exports.ProductCreateOrConnectWithoutCategoryInput = exports.ProductCreateNestedOneWithoutVariantsInput = exports.ProductCreateNestedManyWithoutOrderInput = exports.ProductCreateNestedManyWithoutCollectionsInput = exports.ProductCreateNestedManyWithoutCategoryInput = exports.ProductCreateManyInput = exports.ProductCreateManyOrderInput = exports.ProductCreateManyOrderInputEnvelope = exports.ProductCreateManyCategoryInput = exports.ProductCreateManyCategoryInputEnvelope = exports.ProductCount = exports.ProductCountOrderByAggregateInput = exports.ProductCountAggregate = exports.ProductCountAggregateInput = exports.ProductAvgOrderByAggregateInput = exports.ProductAvgAggregate = exports.ProductAvgAggregateInput = exports.ProductAggregateArgs = exports.FindUniqueProductArgs = exports.FindUniqueProductOrThrowArgs = exports.FindManyProductArgs = exports.FindFirstProductArgs = exports.FindFirstProductOrThrowArgs = exports.DeleteOneProductArgs = exports.DeleteManyProductArgs = exports.CreateOneProductArgs = exports.CreateManyProductArgs = exports.AggregateProduct = exports.StringWithAggregatesFilter = exports.StringNullableWithAggregatesFilter = exports.StringNullableListFilter = exports.StringNullableFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.SortOrderInput = exports.NullableStringFieldUpdateOperationsInput = exports.NullableIntFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = exports.NestedStringNullableWithAggregatesFilter = exports.NestedStringNullableFilter = exports.NestedStringFilter = void 0;
exports.ProductUpdateWithWhereUniqueWithoutOrderInput = exports.ProductUpdateWithWhereUniqueWithoutCollectionsInput = exports.ProductUpdateWithWhereUniqueWithoutCategoryInput = exports.ProductUpdateToOneWithWhereWithoutVariantsInput = exports.ProductUpdateOneRequiredWithoutVariantsNestedInput = exports.ProductUpdateManyWithoutOrderNestedInput = exports.ProductUpdateManyWithoutCollectionsNestedInput = exports.ProductUpdateManyWithoutCategoryNestedInput = exports.ProductUpdateManyWithWhereWithoutOrderInput = exports.ProductUpdateManyWithWhereWithoutCollectionsInput = exports.ProductUpdateManyWithWhereWithoutCategoryInput = exports.ProductUpdateManyMutationInput = exports.ProductUncheckedUpdateInput = exports.ProductUncheckedUpdateWithoutVariantsInput = exports.ProductUncheckedUpdateWithoutOrderInput = exports.ProductUncheckedUpdateWithoutCollectionsInput = exports.ProductUncheckedUpdateWithoutCategoryInput = exports.ProductUncheckedUpdateManyInput = exports.ProductUncheckedUpdateManyWithoutOrderInput = exports.ProductUncheckedUpdateManyWithoutOrderNestedInput = exports.ProductUncheckedUpdateManyWithoutCollectionsInput = exports.ProductUncheckedUpdateManyWithoutCollectionsNestedInput = exports.ProductUncheckedUpdateManyWithoutCategoryInput = exports.ProductUncheckedUpdateManyWithoutCategoryNestedInput = exports.ProductUncheckedCreateInput = exports.ProductUncheckedCreateWithoutVariantsInput = exports.ProductUncheckedCreateWithoutOrderInput = exports.ProductUncheckedCreateWithoutCollectionsInput = exports.ProductUncheckedCreateWithoutCategoryInput = exports.ProductUncheckedCreateNestedManyWithoutOrderInput = exports.ProductUncheckedCreateNestedManyWithoutCollectionsInput = exports.ProductUncheckedCreateNestedManyWithoutCategoryInput = exports.ProductSumOrderByAggregateInput = exports.ProductSumAggregate = exports.ProductSumAggregateInput = exports.ProductScalarWhereInput = exports.ProductScalarWhereWithAggregatesInput = exports.ProductRelationFilter = exports.ProductOrderByWithRelationInput = exports.ProductOrderByWithAggregationInput = exports.ProductOrderByRelationAggregateInput = exports.ProductMinOrderByAggregateInput = exports.ProductMinAggregate = exports.ProductMinAggregateInput = exports.ProductMaxOrderByAggregateInput = exports.ProductMaxAggregate = exports.ProductMaxAggregateInput = exports.ProductListRelationFilter = exports.ProductGroupBy = exports.ProductGroupByArgs = void 0;
exports.ProductCategoryMaxOrderByAggregateInput = exports.ProductCategoryMaxAggregate = exports.ProductCategoryMaxAggregateInput = exports.ProductCategoryListRelationFilter = exports.ProductCategoryGroupBy = exports.ProductCategoryGroupByArgs = exports.ProductCategoryCreateInput = exports.ProductCategoryCreateWithoutSubCategoriesInput = exports.ProductCategoryCreateWithoutProductsInput = exports.ProductCategoryCreateWithoutParentCategoryInput = exports.ProductCategoryCreateOrConnectWithoutSubCategoriesInput = exports.ProductCategoryCreateOrConnectWithoutProductsInput = exports.ProductCategoryCreateOrConnectWithoutParentCategoryInput = exports.ProductCategoryCreateNestedOneWithoutSubCategoriesInput = exports.ProductCategoryCreateNestedOneWithoutProductsInput = exports.ProductCategoryCreateNestedManyWithoutParentCategoryInput = exports.ProductCategoryCreateManyInput = exports.ProductCategoryCreateManyParentCategoryInput = exports.ProductCategoryCreateManyParentCategoryInputEnvelope = exports.ProductCategoryCount = exports.ProductCategoryCountOrderByAggregateInput = exports.ProductCategoryCountAggregate = exports.ProductCategoryCountAggregateInput = exports.ProductCategoryAggregateArgs = exports.FindUniqueProductCategoryArgs = exports.FindUniqueProductCategoryOrThrowArgs = exports.FindManyProductCategoryArgs = exports.FindFirstProductCategoryArgs = exports.FindFirstProductCategoryOrThrowArgs = exports.DeleteOneProductCategoryArgs = exports.DeleteManyProductCategoryArgs = exports.CreateOneProductCategoryArgs = exports.CreateManyProductCategoryArgs = exports.AggregateProductCategory = exports.UpsertOneProductArgs = exports.UpdateOneProductArgs = exports.UpdateManyProductArgs = exports.Product = exports.ProductWhereInput = exports.ProductWhereUniqueInput = exports.ProductUpsertWithoutVariantsInput = exports.ProductUpsertWithWhereUniqueWithoutOrderInput = exports.ProductUpsertWithWhereUniqueWithoutCollectionsInput = exports.ProductUpsertWithWhereUniqueWithoutCategoryInput = exports.ProductUpdateimagesInput = exports.ProductUpdateInput = exports.ProductUpdateWithoutVariantsInput = exports.ProductUpdateWithoutOrderInput = exports.ProductUpdateWithoutCollectionsInput = exports.ProductUpdateWithoutCategoryInput = void 0;
exports.FindFirstProductVariantArgs = exports.FindFirstProductVariantOrThrowArgs = exports.DeleteOneProductVariantArgs = exports.DeleteManyProductVariantArgs = exports.CreateOneProductVariantArgs = exports.CreateManyProductVariantArgs = exports.AggregateProductVariant = exports.UpsertOneProductCategoryArgs = exports.UpdateOneProductCategoryArgs = exports.UpdateManyProductCategoryArgs = exports.ProductCategory = exports.ProductCategoryWhereInput = exports.ProductCategoryWhereUniqueInput = exports.ProductCategoryUpsertWithoutSubCategoriesInput = exports.ProductCategoryUpsertWithoutProductsInput = exports.ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = exports.ProductCategoryUpdateInput = exports.ProductCategoryUpdateWithoutSubCategoriesInput = exports.ProductCategoryUpdateWithoutProductsInput = exports.ProductCategoryUpdateWithoutParentCategoryInput = exports.ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = exports.ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = exports.ProductCategoryUpdateToOneWithWhereWithoutProductsInput = exports.ProductCategoryUpdateOneWithoutSubCategoriesNestedInput = exports.ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = exports.ProductCategoryUpdateManyWithoutParentCategoryNestedInput = exports.ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput = exports.ProductCategoryUpdateManyMutationInput = exports.ProductCategoryUncheckedUpdateInput = exports.ProductCategoryUncheckedUpdateWithoutSubCategoriesInput = exports.ProductCategoryUncheckedUpdateWithoutProductsInput = exports.ProductCategoryUncheckedUpdateWithoutParentCategoryInput = exports.ProductCategoryUncheckedUpdateManyInput = exports.ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput = exports.ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = exports.ProductCategoryUncheckedCreateInput = exports.ProductCategoryUncheckedCreateWithoutSubCategoriesInput = exports.ProductCategoryUncheckedCreateWithoutProductsInput = exports.ProductCategoryUncheckedCreateWithoutParentCategoryInput = exports.ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = exports.ProductCategoryScalarWhereInput = exports.ProductCategoryScalarWhereWithAggregatesInput = exports.ProductCategoryRelationFilter = exports.ProductCategoryOrderByWithRelationInput = exports.ProductCategoryOrderByWithAggregationInput = exports.ProductCategoryOrderByRelationAggregateInput = exports.ProductCategoryNullableRelationFilter = exports.ProductCategoryMinOrderByAggregateInput = exports.ProductCategoryMinAggregate = exports.ProductCategoryMinAggregateInput = void 0;
exports.ProductVariantUpdateManyMutationInput = exports.ProductVariantUncheckedUpdateInput = exports.ProductVariantUncheckedUpdateWithoutProductInput = exports.ProductVariantUncheckedUpdateWithoutOptionsInput = exports.ProductVariantUncheckedUpdateManyInput = exports.ProductVariantUncheckedUpdateManyWithoutProductInput = exports.ProductVariantUncheckedUpdateManyWithoutProductNestedInput = exports.ProductVariantUncheckedCreateInput = exports.ProductVariantUncheckedCreateWithoutProductInput = exports.ProductVariantUncheckedCreateWithoutOptionsInput = exports.ProductVariantUncheckedCreateNestedManyWithoutProductInput = exports.ProductVariantSumOrderByAggregateInput = exports.ProductVariantSumAggregate = exports.ProductVariantSumAggregateInput = exports.ProductVariantScalarWhereInput = exports.ProductVariantScalarWhereWithAggregatesInput = exports.ProductVariantRelationFilter = exports.ProductVariantOrderByWithRelationInput = exports.ProductVariantOrderByWithAggregationInput = exports.ProductVariantOrderByRelationAggregateInput = exports.ProductVariantMinOrderByAggregateInput = exports.ProductVariantMinAggregate = exports.ProductVariantMinAggregateInput = exports.ProductVariantMaxOrderByAggregateInput = exports.ProductVariantMaxAggregate = exports.ProductVariantMaxAggregateInput = exports.ProductVariantListRelationFilter = exports.ProductVariantGroupBy = exports.ProductVariantGroupByArgs = exports.ProductVariantCreateInput = exports.ProductVariantCreateWithoutProductInput = exports.ProductVariantCreateWithoutOptionsInput = exports.ProductVariantCreateOrConnectWithoutProductInput = exports.ProductVariantCreateOrConnectWithoutOptionsInput = exports.ProductVariantCreateNestedOneWithoutOptionsInput = exports.ProductVariantCreateNestedManyWithoutProductInput = exports.ProductVariantCreateManyInput = exports.ProductVariantCreateManyProductInput = exports.ProductVariantCreateManyProductInputEnvelope = exports.ProductVariantCount = exports.ProductVariantCountOrderByAggregateInput = exports.ProductVariantCountAggregate = exports.ProductVariantCountAggregateInput = exports.ProductVariantAvgOrderByAggregateInput = exports.ProductVariantAvgAggregate = exports.ProductVariantAvgAggregateInput = exports.ProductVariantAggregateArgs = exports.FindUniqueProductVariantArgs = exports.FindUniqueProductVariantOrThrowArgs = exports.FindManyProductVariantArgs = void 0;
exports.ProductVariantOptionOrderByWithRelationInput = exports.ProductVariantOptionOrderByWithAggregationInput = exports.ProductVariantOptionOrderByRelationAggregateInput = exports.ProductVariantOptionMinOrderByAggregateInput = exports.ProductVariantOptionMinAggregate = exports.ProductVariantOptionMinAggregateInput = exports.ProductVariantOptionMaxOrderByAggregateInput = exports.ProductVariantOptionMaxAggregate = exports.ProductVariantOptionMaxAggregateInput = exports.ProductVariantOptionListRelationFilter = exports.ProductVariantOptionGroupBy = exports.ProductVariantOptionGroupByArgs = exports.ProductVariantOptionCreatevaluesInput = exports.ProductVariantOptionCreateInput = exports.ProductVariantOptionCreateWithoutProductVariantInput = exports.ProductVariantOptionCreateOrConnectWithoutProductVariantInput = exports.ProductVariantOptionCreateNestedManyWithoutProductVariantInput = exports.ProductVariantOptionCreateManyInput = exports.ProductVariantOptionCreateManyProductVariantInput = exports.ProductVariantOptionCreateManyProductVariantInputEnvelope = exports.ProductVariantOptionCountOrderByAggregateInput = exports.ProductVariantOptionCountAggregate = exports.ProductVariantOptionCountAggregateInput = exports.ProductVariantOptionAggregateArgs = exports.FindUniqueProductVariantOptionArgs = exports.FindUniqueProductVariantOptionOrThrowArgs = exports.FindManyProductVariantOptionArgs = exports.FindFirstProductVariantOptionArgs = exports.FindFirstProductVariantOptionOrThrowArgs = exports.DeleteOneProductVariantOptionArgs = exports.DeleteManyProductVariantOptionArgs = exports.CreateOneProductVariantOptionArgs = exports.CreateManyProductVariantOptionArgs = exports.AggregateProductVariantOption = exports.UpsertOneProductVariantArgs = exports.UpdateOneProductVariantArgs = exports.UpdateManyProductVariantArgs = exports.ProductVariant = exports.ProductVariantWhereInput = exports.ProductVariantWhereUniqueInput = exports.ProductVariantUpsertWithoutOptionsInput = exports.ProductVariantUpsertWithWhereUniqueWithoutProductInput = exports.ProductVariantUpdateInput = exports.ProductVariantUpdateWithoutProductInput = exports.ProductVariantUpdateWithoutOptionsInput = exports.ProductVariantUpdateWithWhereUniqueWithoutProductInput = exports.ProductVariantUpdateToOneWithWhereWithoutOptionsInput = exports.ProductVariantUpdateOneRequiredWithoutOptionsNestedInput = exports.ProductVariantUpdateManyWithoutProductNestedInput = exports.ProductVariantUpdateManyWithWhereWithoutProductInput = void 0;
exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutOrdersInput = exports.UserCreateOrConnectWithoutOrdersInput = exports.UserCreateNestedOneWithoutOrdersInput = exports.UserCreateManyInput = exports.UserCount = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = exports.UserCountAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.UpsertOneProductVariantOptionArgs = exports.UpdateOneProductVariantOptionArgs = exports.UpdateManyProductVariantOptionArgs = exports.ProductVariantOption = exports.ProductVariantOptionWhereInput = exports.ProductVariantOptionWhereUniqueInput = exports.ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput = exports.ProductVariantOptionUpdatevaluesInput = exports.ProductVariantOptionUpdateInput = exports.ProductVariantOptionUpdateWithoutProductVariantInput = exports.ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput = exports.ProductVariantOptionUpdateManyWithoutProductVariantNestedInput = exports.ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput = exports.ProductVariantOptionUpdateManyMutationInput = exports.ProductVariantOptionUncheckedUpdateInput = exports.ProductVariantOptionUncheckedUpdateWithoutProductVariantInput = exports.ProductVariantOptionUncheckedUpdateManyInput = exports.ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput = exports.ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput = exports.ProductVariantOptionUncheckedCreateInput = exports.ProductVariantOptionUncheckedCreateWithoutProductVariantInput = exports.ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput = exports.ProductVariantOptionScalarWhereInput = exports.ProductVariantOptionScalarWhereWithAggregatesInput = void 0;
exports.User = exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutOrdersInput = exports.UserUpdateInput = exports.UserUpdateWithoutOrdersInput = exports.UserUpdateToOneWithWhereWithoutOrdersInput = exports.UserUpdateOneRequiredWithoutOrdersNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutOrdersInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutOrdersInput = exports.UserScalarWhereWithAggregatesInput = exports.UserRelationFilter = exports.UserOrderByWithRelationInput = exports.UserOrderByWithAggregationInput = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = exports.UserMaxAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const graphql_7 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
var ProductVariantOptionScalarFieldEnum;
(function (ProductVariantOptionScalarFieldEnum) {
    ProductVariantOptionScalarFieldEnum["id"] = "id";
    ProductVariantOptionScalarFieldEnum["productVariantId"] = "productVariantId";
    ProductVariantOptionScalarFieldEnum["name"] = "name";
    ProductVariantOptionScalarFieldEnum["values"] = "values";
    ProductVariantOptionScalarFieldEnum["createdAt"] = "createdAt";
    ProductVariantOptionScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductVariantOptionScalarFieldEnum = exports.ProductVariantOptionScalarFieldEnum || (exports.ProductVariantOptionScalarFieldEnum = {}));
var ProductVariantScalarFieldEnum;
(function (ProductVariantScalarFieldEnum) {
    ProductVariantScalarFieldEnum["id"] = "id";
    ProductVariantScalarFieldEnum["name"] = "name";
    ProductVariantScalarFieldEnum["stock"] = "stock";
    ProductVariantScalarFieldEnum["price"] = "price";
    ProductVariantScalarFieldEnum["productId"] = "productId";
    ProductVariantScalarFieldEnum["createdAt"] = "createdAt";
    ProductVariantScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductVariantScalarFieldEnum = exports.ProductVariantScalarFieldEnum || (exports.ProductVariantScalarFieldEnum = {}));
var ProductCategoryScalarFieldEnum;
(function (ProductCategoryScalarFieldEnum) {
    ProductCategoryScalarFieldEnum["id"] = "id";
    ProductCategoryScalarFieldEnum["name"] = "name";
    ProductCategoryScalarFieldEnum["slug"] = "slug";
    ProductCategoryScalarFieldEnum["createdAt"] = "createdAt";
    ProductCategoryScalarFieldEnum["updatedAt"] = "updatedAt";
    ProductCategoryScalarFieldEnum["parentCategoryId"] = "parentCategoryId";
})(ProductCategoryScalarFieldEnum = exports.ProductCategoryScalarFieldEnum || (exports.ProductCategoryScalarFieldEnum = {}));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id"] = "id";
    ProductScalarFieldEnum["name"] = "name";
    ProductScalarFieldEnum["price"] = "price";
    ProductScalarFieldEnum["slug"] = "slug";
    ProductScalarFieldEnum["categoryId"] = "categoryId";
    ProductScalarFieldEnum["images"] = "images";
    ProductScalarFieldEnum["description"] = "description";
    ProductScalarFieldEnum["orderId"] = "orderId";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductScalarFieldEnum = exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}));
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel = exports.TransactionIsolationLevel || (exports.TransactionIsolationLevel = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode["default"] = "default";
    QueryMode["insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
var NullsOrder;
(function (NullsOrder) {
    NullsOrder["first"] = "first";
    NullsOrder["last"] = "last";
})(NullsOrder = exports.NullsOrder || (exports.NullsOrder = {}));
var OrderScalarFieldEnum;
(function (OrderScalarFieldEnum) {
    OrderScalarFieldEnum["id"] = "id";
    OrderScalarFieldEnum["userId"] = "userId";
    OrderScalarFieldEnum["createdAt"] = "createdAt";
    OrderScalarFieldEnum["updatedAt"] = "updatedAt";
})(OrderScalarFieldEnum = exports.OrderScalarFieldEnum || (exports.OrderScalarFieldEnum = {}));
var CollectionScalarFieldEnum;
(function (CollectionScalarFieldEnum) {
    CollectionScalarFieldEnum["id"] = "id";
    CollectionScalarFieldEnum["name"] = "name";
    CollectionScalarFieldEnum["description"] = "description";
    CollectionScalarFieldEnum["slug"] = "slug";
    CollectionScalarFieldEnum["coverImage"] = "coverImage";
    CollectionScalarFieldEnum["createdAt"] = "createdAt";
    CollectionScalarFieldEnum["updatedAt"] = "updatedAt";
})(CollectionScalarFieldEnum = exports.CollectionScalarFieldEnum || (exports.CollectionScalarFieldEnum = {}));
(0, graphql_6.registerEnumType)(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(NullsOrder, { name: 'NullsOrder', description: undefined });
(0, graphql_6.registerEnumType)(QueryMode, { name: 'QueryMode', description: undefined });
(0, graphql_6.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });
(0, graphql_6.registerEnumType)(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
(0, graphql_6.registerEnumType)(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(ProductVariantScalarFieldEnum, { name: 'ProductVariantScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(ProductVariantOptionScalarFieldEnum, { name: 'ProductVariantOptionScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
let AggregateCollection = class AggregateCollection {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionCountAggregate, { nullable: true })
], AggregateCollection.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMinAggregate, { nullable: true })
], AggregateCollection.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMaxAggregate, { nullable: true })
], AggregateCollection.prototype, "_max", void 0);
AggregateCollection = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCollection);
exports.AggregateCollection = AggregateCollection;
let CollectionAggregateArgs = class CollectionAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], CollectionAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionOrderByWithRelationInput], { nullable: true })
], CollectionAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: true })
], CollectionAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CollectionAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CollectionAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCountAggregateInput, { nullable: true })
], CollectionAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMinAggregateInput, { nullable: true })
], CollectionAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMaxAggregateInput, { nullable: true })
], CollectionAggregateArgs.prototype, "_max", void 0);
CollectionAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CollectionAggregateArgs);
exports.CollectionAggregateArgs = CollectionAggregateArgs;
let CollectionCountAggregateInput = class CollectionCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionCountAggregateInput.prototype, "_all", void 0);
CollectionCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCountAggregateInput);
exports.CollectionCountAggregateInput = CollectionCountAggregateInput;
let CollectionCountAggregate = class CollectionCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCountAggregate.prototype, "_all", void 0);
CollectionCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CollectionCountAggregate);
exports.CollectionCountAggregate = CollectionCountAggregate;
let CollectionCountOrderByAggregateInput = class CollectionCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionCountOrderByAggregateInput.prototype, "updatedAt", void 0);
CollectionCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCountOrderByAggregateInput);
exports.CollectionCountOrderByAggregateInput = CollectionCountOrderByAggregateInput;
let CollectionCount = class CollectionCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CollectionCount.prototype, "products", void 0);
CollectionCount = __decorate([
    (0, graphql_2.ObjectType)()
], CollectionCount);
exports.CollectionCount = CollectionCount;
let CollectionCreateManyInput = class CollectionCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateManyInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateManyInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionCreateManyInput.prototype, "updatedAt", void 0);
CollectionCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCreateManyInput);
exports.CollectionCreateManyInput = CollectionCreateManyInput;
let CollectionCreateNestedManyWithoutProductsInput = class CollectionCreateNestedManyWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateWithoutProductsInput)
], CollectionCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateOrConnectWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateOrConnectWithoutProductsInput)
], CollectionCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
CollectionCreateNestedManyWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCreateNestedManyWithoutProductsInput);
exports.CollectionCreateNestedManyWithoutProductsInput = CollectionCreateNestedManyWithoutProductsInput;
let CollectionCreateOrConnectWithoutProductsInput = class CollectionCreateOrConnectWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionCreateWithoutProductsInput)
], CollectionCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
CollectionCreateOrConnectWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCreateOrConnectWithoutProductsInput);
exports.CollectionCreateOrConnectWithoutProductsInput = CollectionCreateOrConnectWithoutProductsInput;
let CollectionCreateWithoutProductsInput = class CollectionCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateWithoutProductsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateWithoutProductsInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionCreateWithoutProductsInput.prototype, "updatedAt", void 0);
CollectionCreateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCreateWithoutProductsInput);
exports.CollectionCreateWithoutProductsInput = CollectionCreateWithoutProductsInput;
let CollectionCreateInput = class CollectionCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionCreateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutCollectionsInput, { nullable: true })
], CollectionCreateInput.prototype, "products", void 0);
CollectionCreateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionCreateInput);
exports.CollectionCreateInput = CollectionCreateInput;
let CollectionGroupByArgs = class CollectionGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], CollectionGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionOrderByWithAggregationInput], { nullable: true })
], CollectionGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarFieldEnum], { nullable: false })
], CollectionGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionScalarWhereWithAggregatesInput, { nullable: true })
], CollectionGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CollectionGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CollectionGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCountAggregateInput, { nullable: true })
], CollectionGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMinAggregateInput, { nullable: true })
], CollectionGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMaxAggregateInput, { nullable: true })
], CollectionGroupByArgs.prototype, "_max", void 0);
CollectionGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CollectionGroupByArgs);
exports.CollectionGroupByArgs = CollectionGroupByArgs;
let CollectionGroupBy = class CollectionGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionGroupBy.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionGroupBy.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CollectionGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CollectionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCountAggregate, { nullable: true })
], CollectionGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMinAggregate, { nullable: true })
], CollectionGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMaxAggregate, { nullable: true })
], CollectionGroupBy.prototype, "_max", void 0);
CollectionGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CollectionGroupBy);
exports.CollectionGroupBy = CollectionGroupBy;
let CollectionListRelationFilter = class CollectionListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true })
], CollectionListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true })
], CollectionListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true })
], CollectionListRelationFilter.prototype, "none", void 0);
CollectionListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], CollectionListRelationFilter);
exports.CollectionListRelationFilter = CollectionListRelationFilter;
let CollectionMaxAggregateInput = class CollectionMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMaxAggregateInput.prototype, "updatedAt", void 0);
CollectionMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionMaxAggregateInput);
exports.CollectionMaxAggregateInput = CollectionMaxAggregateInput;
let CollectionMaxAggregate = class CollectionMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMaxAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMaxAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMaxAggregate.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionMaxAggregate.prototype, "updatedAt", void 0);
CollectionMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CollectionMaxAggregate);
exports.CollectionMaxAggregate = CollectionMaxAggregate;
let CollectionMaxOrderByAggregateInput = class CollectionMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
CollectionMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionMaxOrderByAggregateInput);
exports.CollectionMaxOrderByAggregateInput = CollectionMaxOrderByAggregateInput;
let CollectionMinAggregateInput = class CollectionMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CollectionMinAggregateInput.prototype, "updatedAt", void 0);
CollectionMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionMinAggregateInput);
exports.CollectionMinAggregateInput = CollectionMinAggregateInput;
let CollectionMinAggregate = class CollectionMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMinAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMinAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionMinAggregate.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionMinAggregate.prototype, "updatedAt", void 0);
CollectionMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CollectionMinAggregate);
exports.CollectionMinAggregate = CollectionMinAggregate;
let CollectionMinOrderByAggregateInput = class CollectionMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionMinOrderByAggregateInput.prototype, "updatedAt", void 0);
CollectionMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionMinOrderByAggregateInput);
exports.CollectionMinOrderByAggregateInput = CollectionMinOrderByAggregateInput;
let CollectionOrderByRelationAggregateInput = class CollectionOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByRelationAggregateInput.prototype, "_count", void 0);
CollectionOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionOrderByRelationAggregateInput);
exports.CollectionOrderByRelationAggregateInput = CollectionOrderByRelationAggregateInput;
let CollectionOrderByWithAggregationInput = class CollectionOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCountOrderByAggregateInput, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMaxOrderByAggregateInput, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionMinOrderByAggregateInput, { nullable: true })
], CollectionOrderByWithAggregationInput.prototype, "_min", void 0);
CollectionOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionOrderByWithAggregationInput);
exports.CollectionOrderByWithAggregationInput = CollectionOrderByWithAggregationInput;
let CollectionOrderByWithRelationInput = class CollectionOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductOrderByRelationAggregateInput, { nullable: true })
], CollectionOrderByWithRelationInput.prototype, "products", void 0);
CollectionOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionOrderByWithRelationInput);
exports.CollectionOrderByWithRelationInput = CollectionOrderByWithRelationInput;
let CollectionScalarWhereWithAggregatesInput = CollectionScalarWhereWithAggregatesInput_1 = class CollectionScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereWithAggregatesInput_1], { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereWithAggregatesInput_1], { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereWithAggregatesInput_1], { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], CollectionScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
CollectionScalarWhereWithAggregatesInput = CollectionScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], CollectionScalarWhereWithAggregatesInput);
exports.CollectionScalarWhereWithAggregatesInput = CollectionScalarWhereWithAggregatesInput;
let CollectionScalarWhereInput = CollectionScalarWhereInput_1 = class CollectionScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereInput_1], { nullable: true })
], CollectionScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereInput_1], { nullable: true })
], CollectionScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereInput_1], { nullable: true })
], CollectionScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CollectionScalarWhereInput.prototype, "updatedAt", void 0);
CollectionScalarWhereInput = CollectionScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], CollectionScalarWhereInput);
exports.CollectionScalarWhereInput = CollectionScalarWhereInput;
let CollectionUncheckedCreateNestedManyWithoutProductsInput = class CollectionUncheckedCreateNestedManyWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateWithoutProductsInput)
], CollectionUncheckedCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateOrConnectWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateOrConnectWithoutProductsInput)
], CollectionUncheckedCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUncheckedCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
CollectionUncheckedCreateNestedManyWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedCreateNestedManyWithoutProductsInput);
exports.CollectionUncheckedCreateNestedManyWithoutProductsInput = CollectionUncheckedCreateNestedManyWithoutProductsInput;
let CollectionUncheckedCreateWithoutProductsInput = class CollectionUncheckedCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionUncheckedCreateWithoutProductsInput.prototype, "updatedAt", void 0);
CollectionUncheckedCreateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedCreateWithoutProductsInput);
exports.CollectionUncheckedCreateWithoutProductsInput = CollectionUncheckedCreateWithoutProductsInput;
let CollectionUncheckedCreateInput = class CollectionUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CollectionUncheckedCreateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CollectionUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutCollectionsInput, { nullable: true })
], CollectionUncheckedCreateInput.prototype, "products", void 0);
CollectionUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedCreateInput);
exports.CollectionUncheckedCreateInput = CollectionUncheckedCreateInput;
let CollectionUncheckedUpdateManyWithoutProductsNestedInput = class CollectionUncheckedUpdateManyWithoutProductsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateWithoutProductsInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateOrConnectWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateOrConnectWithoutProductsInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionUpsertWithWhereUniqueWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionUpsertWithWhereUniqueWithoutProductsInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionUpdateWithWhereUniqueWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionUpdateWithWhereUniqueWithoutProductsInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionUpdateManyWithWhereWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionUpdateManyWithWhereWithoutProductsInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionScalarWhereInput)
], CollectionUncheckedUpdateManyWithoutProductsNestedInput.prototype, "deleteMany", void 0);
CollectionUncheckedUpdateManyWithoutProductsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedUpdateManyWithoutProductsNestedInput);
exports.CollectionUncheckedUpdateManyWithoutProductsNestedInput = CollectionUncheckedUpdateManyWithoutProductsNestedInput;
let CollectionUncheckedUpdateManyWithoutProductsInput = class CollectionUncheckedUpdateManyWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyWithoutProductsInput.prototype, "updatedAt", void 0);
CollectionUncheckedUpdateManyWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedUpdateManyWithoutProductsInput);
exports.CollectionUncheckedUpdateManyWithoutProductsInput = CollectionUncheckedUpdateManyWithoutProductsInput;
let CollectionUncheckedUpdateManyInput = class CollectionUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
CollectionUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedUpdateManyInput);
exports.CollectionUncheckedUpdateManyInput = CollectionUncheckedUpdateManyInput;
let CollectionUncheckedUpdateWithoutProductsInput = class CollectionUncheckedUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
CollectionUncheckedUpdateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedUpdateWithoutProductsInput);
exports.CollectionUncheckedUpdateWithoutProductsInput = CollectionUncheckedUpdateWithoutProductsInput;
let CollectionUncheckedUpdateInput = class CollectionUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutCollectionsNestedInput, { nullable: true })
], CollectionUncheckedUpdateInput.prototype, "products", void 0);
CollectionUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUncheckedUpdateInput);
exports.CollectionUncheckedUpdateInput = CollectionUncheckedUpdateInput;
let CollectionUpdateManyMutationInput = class CollectionUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateManyMutationInput.prototype, "updatedAt", void 0);
CollectionUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpdateManyMutationInput);
exports.CollectionUpdateManyMutationInput = CollectionUpdateManyMutationInput;
let CollectionUpdateManyWithWhereWithoutProductsInput = class CollectionUpdateManyWithWhereWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionScalarWhereInput)
], CollectionUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionUpdateManyMutationInput)
], CollectionUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
CollectionUpdateManyWithWhereWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpdateManyWithWhereWithoutProductsInput);
exports.CollectionUpdateManyWithWhereWithoutProductsInput = CollectionUpdateManyWithWhereWithoutProductsInput;
let CollectionUpdateManyWithoutProductsNestedInput = class CollectionUpdateManyWithoutProductsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateWithoutProductsInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateOrConnectWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionCreateOrConnectWithoutProductsInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionUpsertWithWhereUniqueWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionUpsertWithWhereUniqueWithoutProductsInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionUpdateWithWhereUniqueWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionUpdateWithWhereUniqueWithoutProductsInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionUpdateManyWithWhereWithoutProductsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionUpdateManyWithWhereWithoutProductsInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionScalarWhereInput)
], CollectionUpdateManyWithoutProductsNestedInput.prototype, "deleteMany", void 0);
CollectionUpdateManyWithoutProductsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpdateManyWithoutProductsNestedInput);
exports.CollectionUpdateManyWithoutProductsNestedInput = CollectionUpdateManyWithoutProductsNestedInput;
let CollectionUpdateWithWhereUniqueWithoutProductsInput = class CollectionUpdateWithWhereUniqueWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionUpdateWithoutProductsInput)
], CollectionUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
CollectionUpdateWithWhereUniqueWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpdateWithWhereUniqueWithoutProductsInput);
exports.CollectionUpdateWithWhereUniqueWithoutProductsInput = CollectionUpdateWithWhereUniqueWithoutProductsInput;
let CollectionUpdateWithoutProductsInput = class CollectionUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
CollectionUpdateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpdateWithoutProductsInput);
exports.CollectionUpdateWithoutProductsInput = CollectionUpdateWithoutProductsInput;
let CollectionUpdateInput = class CollectionUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CollectionUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutCollectionsNestedInput, { nullable: true })
], CollectionUpdateInput.prototype, "products", void 0);
CollectionUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpdateInput);
exports.CollectionUpdateInput = CollectionUpdateInput;
let CollectionUpsertWithWhereUniqueWithoutProductsInput = class CollectionUpsertWithWhereUniqueWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], CollectionUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionUpdateWithoutProductsInput)
], CollectionUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionCreateWithoutProductsInput)
], CollectionUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
CollectionUpsertWithWhereUniqueWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionUpsertWithWhereUniqueWithoutProductsInput);
exports.CollectionUpsertWithWhereUniqueWithoutProductsInput = CollectionUpsertWithWhereUniqueWithoutProductsInput;
let CollectionWhereUniqueInput = class CollectionWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CollectionWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereInput], { nullable: true })
], CollectionWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereInput], { nullable: true })
], CollectionWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereInput], { nullable: true })
], CollectionWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], CollectionWhereUniqueInput.prototype, "products", void 0);
CollectionWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], CollectionWhereUniqueInput);
exports.CollectionWhereUniqueInput = CollectionWhereUniqueInput;
let CollectionWhereInput = CollectionWhereInput_1 = class CollectionWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereInput_1], { nullable: true })
], CollectionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereInput_1], { nullable: true })
], CollectionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionWhereInput_1], { nullable: true })
], CollectionWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CollectionWhereInput.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CollectionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CollectionWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], CollectionWhereInput.prototype, "products", void 0);
CollectionWhereInput = CollectionWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], CollectionWhereInput);
exports.CollectionWhereInput = CollectionWhereInput;
let Collection = class Collection {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Collection.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Collection.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Collection.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Collection.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Collection.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Collection.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Collection.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Product], { nullable: true })
], Collection.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCount, { nullable: false })
], Collection.prototype, "_count", void 0);
Collection = __decorate([
    (0, graphql_2.ObjectType)()
], Collection);
exports.Collection = Collection;
let CreateManyCollectionArgs = class CreateManyCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [CollectionCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionCreateManyInput)
], CreateManyCollectionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyCollectionArgs.prototype, "skipDuplicates", void 0);
CreateManyCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyCollectionArgs);
exports.CreateManyCollectionArgs = CreateManyCollectionArgs;
let CreateOneCollectionArgs = class CreateOneCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionCreateInput)
], CreateOneCollectionArgs.prototype, "data", void 0);
CreateOneCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneCollectionArgs);
exports.CreateOneCollectionArgs = CreateOneCollectionArgs;
let DeleteManyCollectionArgs = class DeleteManyCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], DeleteManyCollectionArgs.prototype, "where", void 0);
DeleteManyCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyCollectionArgs);
exports.DeleteManyCollectionArgs = DeleteManyCollectionArgs;
let DeleteOneCollectionArgs = class DeleteOneCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], DeleteOneCollectionArgs.prototype, "where", void 0);
DeleteOneCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneCollectionArgs);
exports.DeleteOneCollectionArgs = DeleteOneCollectionArgs;
let FindFirstCollectionOrThrowArgs = class FindFirstCollectionOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], FindFirstCollectionOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionOrderByWithRelationInput], { nullable: true })
], FindFirstCollectionOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: true })
], FindFirstCollectionOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCollectionOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCollectionOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarFieldEnum], { nullable: true })
], FindFirstCollectionOrThrowArgs.prototype, "distinct", void 0);
FindFirstCollectionOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstCollectionOrThrowArgs);
exports.FindFirstCollectionOrThrowArgs = FindFirstCollectionOrThrowArgs;
let FindFirstCollectionArgs = class FindFirstCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], FindFirstCollectionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionOrderByWithRelationInput], { nullable: true })
], FindFirstCollectionArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: true })
], FindFirstCollectionArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCollectionArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCollectionArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarFieldEnum], { nullable: true })
], FindFirstCollectionArgs.prototype, "distinct", void 0);
FindFirstCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstCollectionArgs);
exports.FindFirstCollectionArgs = FindFirstCollectionArgs;
let FindManyCollectionArgs = class FindManyCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], FindManyCollectionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionOrderByWithRelationInput], { nullable: true })
], FindManyCollectionArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: true })
], FindManyCollectionArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyCollectionArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyCollectionArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CollectionScalarFieldEnum], { nullable: true })
], FindManyCollectionArgs.prototype, "distinct", void 0);
FindManyCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyCollectionArgs);
exports.FindManyCollectionArgs = FindManyCollectionArgs;
let FindUniqueCollectionOrThrowArgs = class FindUniqueCollectionOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], FindUniqueCollectionOrThrowArgs.prototype, "where", void 0);
FindUniqueCollectionOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueCollectionOrThrowArgs);
exports.FindUniqueCollectionOrThrowArgs = FindUniqueCollectionOrThrowArgs;
let FindUniqueCollectionArgs = class FindUniqueCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], FindUniqueCollectionArgs.prototype, "where", void 0);
FindUniqueCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueCollectionArgs);
exports.FindUniqueCollectionArgs = FindUniqueCollectionArgs;
let UpdateManyCollectionArgs = class UpdateManyCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionUpdateManyMutationInput)
], UpdateManyCollectionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CollectionWhereInput)
], UpdateManyCollectionArgs.prototype, "where", void 0);
UpdateManyCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyCollectionArgs);
exports.UpdateManyCollectionArgs = UpdateManyCollectionArgs;
let UpdateOneCollectionArgs = class UpdateOneCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionUpdateInput)
], UpdateOneCollectionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], UpdateOneCollectionArgs.prototype, "where", void 0);
UpdateOneCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneCollectionArgs);
exports.UpdateOneCollectionArgs = UpdateOneCollectionArgs;
let UpsertOneCollectionArgs = class UpsertOneCollectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CollectionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionWhereUniqueInput)
], UpsertOneCollectionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionCreateInput)
], UpsertOneCollectionArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CollectionUpdateInput)
], UpsertOneCollectionArgs.prototype, "update", void 0);
UpsertOneCollectionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneCollectionArgs);
exports.UpsertOneCollectionArgs = UpsertOneCollectionArgs;
let AggregateOrder = class AggregateOrder {
};
__decorate([
    (0, graphql_1.Field)(() => OrderCountAggregate, { nullable: true })
], AggregateOrder.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMinAggregate, { nullable: true })
], AggregateOrder.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMaxAggregate, { nullable: true })
], AggregateOrder.prototype, "_max", void 0);
AggregateOrder = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateOrder);
exports.AggregateOrder = AggregateOrder;
let CreateManyOrderArgs = class CreateManyOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateManyInput)
], CreateManyOrderArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyOrderArgs.prototype, "skipDuplicates", void 0);
CreateManyOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyOrderArgs);
exports.CreateManyOrderArgs = CreateManyOrderArgs;
let CreateOneOrderArgs = class CreateOneOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateInput)
], CreateOneOrderArgs.prototype, "data", void 0);
CreateOneOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneOrderArgs);
exports.CreateOneOrderArgs = CreateOneOrderArgs;
let DeleteManyOrderArgs = class DeleteManyOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], DeleteManyOrderArgs.prototype, "where", void 0);
DeleteManyOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyOrderArgs);
exports.DeleteManyOrderArgs = DeleteManyOrderArgs;
let DeleteOneOrderArgs = class DeleteOneOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], DeleteOneOrderArgs.prototype, "where", void 0);
DeleteOneOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneOrderArgs);
exports.DeleteOneOrderArgs = DeleteOneOrderArgs;
let FindFirstOrderOrThrowArgs = class FindFirstOrderOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], FindFirstOrderOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderOrderByWithRelationInput], { nullable: true })
], FindFirstOrderOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: true })
], FindFirstOrderOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstOrderOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstOrderOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarFieldEnum], { nullable: true })
], FindFirstOrderOrThrowArgs.prototype, "distinct", void 0);
FindFirstOrderOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstOrderOrThrowArgs);
exports.FindFirstOrderOrThrowArgs = FindFirstOrderOrThrowArgs;
let FindFirstOrderArgs = class FindFirstOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], FindFirstOrderArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderOrderByWithRelationInput], { nullable: true })
], FindFirstOrderArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: true })
], FindFirstOrderArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstOrderArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstOrderArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarFieldEnum], { nullable: true })
], FindFirstOrderArgs.prototype, "distinct", void 0);
FindFirstOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstOrderArgs);
exports.FindFirstOrderArgs = FindFirstOrderArgs;
let FindManyOrderArgs = class FindManyOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], FindManyOrderArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderOrderByWithRelationInput], { nullable: true })
], FindManyOrderArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: true })
], FindManyOrderArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyOrderArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyOrderArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarFieldEnum], { nullable: true })
], FindManyOrderArgs.prototype, "distinct", void 0);
FindManyOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyOrderArgs);
exports.FindManyOrderArgs = FindManyOrderArgs;
let FindUniqueOrderOrThrowArgs = class FindUniqueOrderOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], FindUniqueOrderOrThrowArgs.prototype, "where", void 0);
FindUniqueOrderOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueOrderOrThrowArgs);
exports.FindUniqueOrderOrThrowArgs = FindUniqueOrderOrThrowArgs;
let FindUniqueOrderArgs = class FindUniqueOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], FindUniqueOrderArgs.prototype, "where", void 0);
FindUniqueOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueOrderArgs);
exports.FindUniqueOrderArgs = FindUniqueOrderArgs;
let OrderAggregateArgs = class OrderAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], OrderAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderOrderByWithRelationInput], { nullable: true })
], OrderAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: true })
], OrderAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], OrderAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], OrderAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCountAggregateInput, { nullable: true })
], OrderAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMinAggregateInput, { nullable: true })
], OrderAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMaxAggregateInput, { nullable: true })
], OrderAggregateArgs.prototype, "_max", void 0);
OrderAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], OrderAggregateArgs);
exports.OrderAggregateArgs = OrderAggregateArgs;
let OrderCountAggregateInput = class OrderCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderCountAggregateInput.prototype, "_all", void 0);
OrderCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCountAggregateInput);
exports.OrderCountAggregateInput = OrderCountAggregateInput;
let OrderCountAggregate = class OrderCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], OrderCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], OrderCountAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], OrderCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], OrderCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], OrderCountAggregate.prototype, "_all", void 0);
OrderCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], OrderCountAggregate);
exports.OrderCountAggregate = OrderCountAggregate;
let OrderCountOrderByAggregateInput = class OrderCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderCountOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderCountOrderByAggregateInput.prototype, "updatedAt", void 0);
OrderCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCountOrderByAggregateInput);
exports.OrderCountOrderByAggregateInput = OrderCountOrderByAggregateInput;
let OrderCount = class OrderCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], OrderCount.prototype, "products", void 0);
OrderCount = __decorate([
    (0, graphql_2.ObjectType)()
], OrderCount);
exports.OrderCount = OrderCount;
let OrderCreateManyUserInputEnvelope = class OrderCreateManyUserInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateManyUserInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateManyUserInput)
], OrderCreateManyUserInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
OrderCreateManyUserInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateManyUserInputEnvelope);
exports.OrderCreateManyUserInputEnvelope = OrderCreateManyUserInputEnvelope;
let OrderCreateManyUserInput = class OrderCreateManyUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderCreateManyUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateManyUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateManyUserInput.prototype, "updatedAt", void 0);
OrderCreateManyUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateManyUserInput);
exports.OrderCreateManyUserInput = OrderCreateManyUserInput;
let OrderCreateManyInput = class OrderCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], OrderCreateManyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateManyInput.prototype, "updatedAt", void 0);
OrderCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateManyInput);
exports.OrderCreateManyInput = OrderCreateManyInput;
let OrderCreateNestedManyWithoutUserInput = class OrderCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutUserInput)
], OrderCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateOrConnectWithoutUserInput)
], OrderCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateManyUserInputEnvelope)
], OrderCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateNestedManyWithoutUserInput);
exports.OrderCreateNestedManyWithoutUserInput = OrderCreateNestedManyWithoutUserInput;
let OrderCreateNestedOneWithoutProductsInput = class OrderCreateNestedOneWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutProductsInput)
], OrderCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateOrConnectWithoutProductsInput)
], OrderCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
OrderCreateNestedOneWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateNestedOneWithoutProductsInput);
exports.OrderCreateNestedOneWithoutProductsInput = OrderCreateNestedOneWithoutProductsInput;
let OrderCreateOrConnectWithoutProductsInput = class OrderCreateOrConnectWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutProductsInput)
], OrderCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateOrConnectWithoutProductsInput);
exports.OrderCreateOrConnectWithoutProductsInput = OrderCreateOrConnectWithoutProductsInput;
let OrderCreateOrConnectWithoutUserInput = class OrderCreateOrConnectWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutUserInput)
], OrderCreateOrConnectWithoutUserInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateOrConnectWithoutUserInput);
exports.OrderCreateOrConnectWithoutUserInput = OrderCreateOrConnectWithoutUserInput;
let OrderCreateWithoutProductsInput = class OrderCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutOrdersInput, { nullable: false })
], OrderCreateWithoutProductsInput.prototype, "user", void 0);
OrderCreateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateWithoutProductsInput);
exports.OrderCreateWithoutProductsInput = OrderCreateWithoutProductsInput;
let OrderCreateWithoutUserInput = class OrderCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutOrderInput, { nullable: true })
], OrderCreateWithoutUserInput.prototype, "products", void 0);
OrderCreateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateWithoutUserInput);
exports.OrderCreateWithoutUserInput = OrderCreateWithoutUserInput;
let OrderCreateInput = class OrderCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutOrdersInput, { nullable: false })
], OrderCreateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutOrderInput, { nullable: true })
], OrderCreateInput.prototype, "products", void 0);
OrderCreateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderCreateInput);
exports.OrderCreateInput = OrderCreateInput;
let OrderGroupByArgs = class OrderGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], OrderGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderOrderByWithAggregationInput], { nullable: true })
], OrderGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarFieldEnum], { nullable: false })
], OrderGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderScalarWhereWithAggregatesInput, { nullable: true })
], OrderGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], OrderGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], OrderGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCountAggregateInput, { nullable: true })
], OrderGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMinAggregateInput, { nullable: true })
], OrderGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMaxAggregateInput, { nullable: true })
], OrderGroupByArgs.prototype, "_max", void 0);
OrderGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], OrderGroupByArgs);
exports.OrderGroupByArgs = OrderGroupByArgs;
let OrderGroupBy = class OrderGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], OrderGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], OrderGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], OrderGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], OrderGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCountAggregate, { nullable: true })
], OrderGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMinAggregate, { nullable: true })
], OrderGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMaxAggregate, { nullable: true })
], OrderGroupBy.prototype, "_max", void 0);
OrderGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], OrderGroupBy);
exports.OrderGroupBy = OrderGroupBy;
let OrderListRelationFilter = class OrderListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true })
], OrderListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true })
], OrderListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true })
], OrderListRelationFilter.prototype, "none", void 0);
OrderListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], OrderListRelationFilter);
exports.OrderListRelationFilter = OrderListRelationFilter;
let OrderMaxAggregateInput = class OrderMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMaxAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMaxAggregateInput.prototype, "updatedAt", void 0);
OrderMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderMaxAggregateInput);
exports.OrderMaxAggregateInput = OrderMaxAggregateInput;
let OrderMaxAggregate = class OrderMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderMaxAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderMaxAggregate.prototype, "updatedAt", void 0);
OrderMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], OrderMaxAggregate);
exports.OrderMaxAggregate = OrderMaxAggregate;
let OrderMaxOrderByAggregateInput = class OrderMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMaxOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
OrderMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderMaxOrderByAggregateInput);
exports.OrderMaxOrderByAggregateInput = OrderMaxOrderByAggregateInput;
let OrderMinAggregateInput = class OrderMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMinAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], OrderMinAggregateInput.prototype, "updatedAt", void 0);
OrderMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderMinAggregateInput);
exports.OrderMinAggregateInput = OrderMinAggregateInput;
let OrderMinAggregate = class OrderMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderMinAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderMinAggregate.prototype, "updatedAt", void 0);
OrderMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], OrderMinAggregate);
exports.OrderMinAggregate = OrderMinAggregate;
let OrderMinOrderByAggregateInput = class OrderMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMinOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderMinOrderByAggregateInput.prototype, "updatedAt", void 0);
OrderMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderMinOrderByAggregateInput);
exports.OrderMinOrderByAggregateInput = OrderMinOrderByAggregateInput;
let OrderNullableRelationFilter = class OrderNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true })
], OrderNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true })
], OrderNullableRelationFilter.prototype, "isNot", void 0);
OrderNullableRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], OrderNullableRelationFilter);
exports.OrderNullableRelationFilter = OrderNullableRelationFilter;
let OrderOrderByRelationAggregateInput = class OrderOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByRelationAggregateInput.prototype, "_count", void 0);
OrderOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderOrderByRelationAggregateInput);
exports.OrderOrderByRelationAggregateInput = OrderOrderByRelationAggregateInput;
let OrderOrderByWithAggregationInput = class OrderOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCountOrderByAggregateInput, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMaxOrderByAggregateInput, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderMinOrderByAggregateInput, { nullable: true })
], OrderOrderByWithAggregationInput.prototype, "_min", void 0);
OrderOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], OrderOrderByWithAggregationInput);
exports.OrderOrderByWithAggregationInput = OrderOrderByWithAggregationInput;
let OrderOrderByWithRelationInput = class OrderOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], OrderOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput, { nullable: true })
], OrderOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductOrderByRelationAggregateInput, { nullable: true })
], OrderOrderByWithRelationInput.prototype, "products", void 0);
OrderOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], OrderOrderByWithRelationInput);
exports.OrderOrderByWithRelationInput = OrderOrderByWithRelationInput;
let OrderScalarWhereWithAggregatesInput = OrderScalarWhereWithAggregatesInput_1 = class OrderScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereWithAggregatesInput_1], { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereWithAggregatesInput_1], { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereWithAggregatesInput_1], { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], OrderScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
OrderScalarWhereWithAggregatesInput = OrderScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], OrderScalarWhereWithAggregatesInput);
exports.OrderScalarWhereWithAggregatesInput = OrderScalarWhereWithAggregatesInput;
let OrderScalarWhereInput = OrderScalarWhereInput_1 = class OrderScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereInput_1], { nullable: true })
], OrderScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereInput_1], { nullable: true })
], OrderScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereInput_1], { nullable: true })
], OrderScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], OrderScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], OrderScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], OrderScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], OrderScalarWhereInput.prototype, "updatedAt", void 0);
OrderScalarWhereInput = OrderScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], OrderScalarWhereInput);
exports.OrderScalarWhereInput = OrderScalarWhereInput;
let OrderUncheckedCreateNestedManyWithoutUserInput = class OrderUncheckedCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutUserInput)
], OrderUncheckedCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateOrConnectWithoutUserInput)
], OrderUncheckedCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateManyUserInputEnvelope)
], OrderUncheckedCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUncheckedCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
OrderUncheckedCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedCreateNestedManyWithoutUserInput);
exports.OrderUncheckedCreateNestedManyWithoutUserInput = OrderUncheckedCreateNestedManyWithoutUserInput;
let OrderUncheckedCreateWithoutProductsInput = class OrderUncheckedCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderUncheckedCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], OrderUncheckedCreateWithoutProductsInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderUncheckedCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderUncheckedCreateWithoutProductsInput.prototype, "updatedAt", void 0);
OrderUncheckedCreateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedCreateWithoutProductsInput);
exports.OrderUncheckedCreateWithoutProductsInput = OrderUncheckedCreateWithoutProductsInput;
let OrderUncheckedCreateWithoutUserInput = class OrderUncheckedCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderUncheckedCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderUncheckedCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderUncheckedCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutOrderInput, { nullable: true })
], OrderUncheckedCreateWithoutUserInput.prototype, "products", void 0);
OrderUncheckedCreateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedCreateWithoutUserInput);
exports.OrderUncheckedCreateWithoutUserInput = OrderUncheckedCreateWithoutUserInput;
let OrderUncheckedCreateInput = class OrderUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], OrderUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], OrderUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutOrderInput, { nullable: true })
], OrderUncheckedCreateInput.prototype, "products", void 0);
OrderUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedCreateInput);
exports.OrderUncheckedCreateInput = OrderUncheckedCreateInput;
let OrderUncheckedUpdateManyWithoutUserNestedInput = class OrderUncheckedUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutUserInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateOrConnectWithoutUserInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpsertWithWhereUniqueWithoutUserInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateManyUserInputEnvelope)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpdateWithWhereUniqueWithoutUserInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpdateManyWithWhereWithoutUserInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderScalarWhereInput)
], OrderUncheckedUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
OrderUncheckedUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedUpdateManyWithoutUserNestedInput);
exports.OrderUncheckedUpdateManyWithoutUserNestedInput = OrderUncheckedUpdateManyWithoutUserNestedInput;
let OrderUncheckedUpdateManyWithoutUserInput = class OrderUncheckedUpdateManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyWithoutUserInput.prototype, "updatedAt", void 0);
OrderUncheckedUpdateManyWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedUpdateManyWithoutUserInput);
exports.OrderUncheckedUpdateManyWithoutUserInput = OrderUncheckedUpdateManyWithoutUserInput;
let OrderUncheckedUpdateManyInput = class OrderUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
OrderUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedUpdateManyInput);
exports.OrderUncheckedUpdateManyInput = OrderUncheckedUpdateManyInput;
let OrderUncheckedUpdateWithoutProductsInput = class OrderUncheckedUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutProductsInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
OrderUncheckedUpdateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedUpdateWithoutProductsInput);
exports.OrderUncheckedUpdateWithoutProductsInput = OrderUncheckedUpdateWithoutProductsInput;
let OrderUncheckedUpdateWithoutUserInput = class OrderUncheckedUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutOrderNestedInput, { nullable: true })
], OrderUncheckedUpdateWithoutUserInput.prototype, "products", void 0);
OrderUncheckedUpdateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedUpdateWithoutUserInput);
exports.OrderUncheckedUpdateWithoutUserInput = OrderUncheckedUpdateWithoutUserInput;
let OrderUncheckedUpdateInput = class OrderUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutOrderNestedInput, { nullable: true })
], OrderUncheckedUpdateInput.prototype, "products", void 0);
OrderUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUncheckedUpdateInput);
exports.OrderUncheckedUpdateInput = OrderUncheckedUpdateInput;
let OrderUpdateManyMutationInput = class OrderUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateManyMutationInput.prototype, "updatedAt", void 0);
OrderUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateManyMutationInput);
exports.OrderUpdateManyMutationInput = OrderUpdateManyMutationInput;
let OrderUpdateManyWithWhereWithoutUserInput = class OrderUpdateManyWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderScalarWhereInput)
], OrderUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateManyMutationInput)
], OrderUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
OrderUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateManyWithWhereWithoutUserInput);
exports.OrderUpdateManyWithWhereWithoutUserInput = OrderUpdateManyWithWhereWithoutUserInput;
let OrderUpdateManyWithoutUserNestedInput = class OrderUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutUserInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateOrConnectWithoutUserInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpsertWithWhereUniqueWithoutUserInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateManyUserInputEnvelope)
], OrderUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpdateWithWhereUniqueWithoutUserInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpdateManyWithWhereWithoutUserInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderScalarWhereInput)
], OrderUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateManyWithoutUserNestedInput);
exports.OrderUpdateManyWithoutUserNestedInput = OrderUpdateManyWithoutUserNestedInput;
let OrderUpdateOneWithoutProductsNestedInput = class OrderUpdateOneWithoutProductsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutProductsInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderCreateOrConnectWithoutProductsInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpsertWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpsertWithoutProductsInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateToOneWithWhereWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderUpdateToOneWithWhereWithoutProductsInput)
], OrderUpdateOneWithoutProductsNestedInput.prototype, "update", void 0);
OrderUpdateOneWithoutProductsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateOneWithoutProductsNestedInput);
exports.OrderUpdateOneWithoutProductsNestedInput = OrderUpdateOneWithoutProductsNestedInput;
let OrderUpdateToOneWithWhereWithoutProductsInput = class OrderUpdateToOneWithWhereWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], OrderUpdateToOneWithWhereWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateWithoutProductsInput)
], OrderUpdateToOneWithWhereWithoutProductsInput.prototype, "data", void 0);
OrderUpdateToOneWithWhereWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateToOneWithWhereWithoutProductsInput);
exports.OrderUpdateToOneWithWhereWithoutProductsInput = OrderUpdateToOneWithWhereWithoutProductsInput;
let OrderUpdateWithWhereUniqueWithoutUserInput = class OrderUpdateWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateWithoutUserInput)
], OrderUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateWithWhereUniqueWithoutUserInput);
exports.OrderUpdateWithWhereUniqueWithoutUserInput = OrderUpdateWithWhereUniqueWithoutUserInput;
let OrderUpdateWithoutProductsInput = class OrderUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutOrdersNestedInput, { nullable: true })
], OrderUpdateWithoutProductsInput.prototype, "user", void 0);
OrderUpdateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateWithoutProductsInput);
exports.OrderUpdateWithoutProductsInput = OrderUpdateWithoutProductsInput;
let OrderUpdateWithoutUserInput = class OrderUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutOrderNestedInput, { nullable: true })
], OrderUpdateWithoutUserInput.prototype, "products", void 0);
OrderUpdateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateWithoutUserInput);
exports.OrderUpdateWithoutUserInput = OrderUpdateWithoutUserInput;
let OrderUpdateInput = class OrderUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], OrderUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutOrdersNestedInput, { nullable: true })
], OrderUpdateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutOrderNestedInput, { nullable: true })
], OrderUpdateInput.prototype, "products", void 0);
OrderUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpdateInput);
exports.OrderUpdateInput = OrderUpdateInput;
let OrderUpsertWithWhereUniqueWithoutUserInput = class OrderUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateWithoutUserInput)
], OrderUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutUserInput)
], OrderUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpsertWithWhereUniqueWithoutUserInput);
exports.OrderUpsertWithWhereUniqueWithoutUserInput = OrderUpsertWithWhereUniqueWithoutUserInput;
let OrderUpsertWithoutProductsInput = class OrderUpsertWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateWithoutProductsInput)
], OrderUpsertWithoutProductsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateWithoutProductsInput)
], OrderUpsertWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], OrderUpsertWithoutProductsInput.prototype, "where", void 0);
OrderUpsertWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], OrderUpsertWithoutProductsInput);
exports.OrderUpsertWithoutProductsInput = OrderUpsertWithoutProductsInput;
let OrderWhereUniqueInput = class OrderWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], OrderWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereInput], { nullable: true })
], OrderWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereInput], { nullable: true })
], OrderWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereInput], { nullable: true })
], OrderWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], OrderWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], OrderWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], OrderWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], OrderWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], OrderWhereUniqueInput.prototype, "products", void 0);
OrderWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], OrderWhereUniqueInput);
exports.OrderWhereUniqueInput = OrderWhereUniqueInput;
let OrderWhereInput = OrderWhereInput_1 = class OrderWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereInput_1], { nullable: true })
], OrderWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereInput_1], { nullable: true })
], OrderWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderWhereInput_1], { nullable: true })
], OrderWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], OrderWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], OrderWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], OrderWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], OrderWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], OrderWhereInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], OrderWhereInput.prototype, "products", void 0);
OrderWhereInput = OrderWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], OrderWhereInput);
exports.OrderWhereInput = OrderWhereInput;
let Order = class Order {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Order.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Order.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => User, { nullable: false })
], Order.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Product], { nullable: true })
], Order.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCount, { nullable: false })
], Order.prototype, "_count", void 0);
Order = __decorate([
    (0, graphql_2.ObjectType)()
], Order);
exports.Order = Order;
let UpdateManyOrderArgs = class UpdateManyOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateManyMutationInput)
], UpdateManyOrderArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => OrderWhereInput)
], UpdateManyOrderArgs.prototype, "where", void 0);
UpdateManyOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyOrderArgs);
exports.UpdateManyOrderArgs = UpdateManyOrderArgs;
let UpdateOneOrderArgs = class UpdateOneOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateInput)
], UpdateOneOrderArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], UpdateOneOrderArgs.prototype, "where", void 0);
UpdateOneOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneOrderArgs);
exports.UpdateOneOrderArgs = UpdateOneOrderArgs;
let UpsertOneOrderArgs = class UpsertOneOrderArgs {
};
__decorate([
    (0, graphql_1.Field)(() => OrderWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderWhereUniqueInput)
], UpsertOneOrderArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderCreateInput)
], UpsertOneOrderArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => OrderUpdateInput)
], UpsertOneOrderArgs.prototype, "update", void 0);
UpsertOneOrderArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneOrderArgs);
exports.UpsertOneOrderArgs = UpsertOneOrderArgs;
let AffectedRows = class AffectedRows {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], AffectedRows.prototype, "count", void 0);
AffectedRows = __decorate([
    (0, graphql_2.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], DateTimeFieldUpdateOperationsInput);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
let DateTimeFilter = class DateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeFilter);
exports.DateTimeFilter = DateTimeFilter;
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
let IntFieldUpdateOperationsInput = class IntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "divide", void 0);
IntFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], IntFieldUpdateOperationsInput);
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
let IntFilter = class IntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntFilter.prototype, "not", void 0);
IntFilter = __decorate([
    (0, graphql_5.InputType)()
], IntFilter);
exports.IntFilter = IntFilter;
let IntNullableFilter = class IntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableFilter.prototype, "not", void 0);
IntNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], IntNullableFilter);
exports.IntNullableFilter = IntNullableFilter;
let IntNullableWithAggregatesFilter = class IntNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_max", void 0);
IntNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], IntNullableWithAggregatesFilter);
exports.IntNullableWithAggregatesFilter = IntNullableWithAggregatesFilter;
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_max", void 0);
IntWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], IntWithAggregatesFilter);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter_1, { nullable: true })
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
let NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = class NestedDateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_7.Float], { nullable: true })
], NestedFloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_7.Float], { nullable: true })
], NestedFloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter_1, { nullable: true })
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
let NestedFloatNullableFilter = NestedFloatNullableFilter_1 = class NestedFloatNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_7.Float], { nullable: true })
], NestedFloatNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_7.Float], { nullable: true })
], NestedFloatNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter_1, { nullable: true })
], NestedFloatNullableFilter.prototype, "not", void 0);
NestedFloatNullableFilter = NestedFloatNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatNullableFilter);
exports.NestedFloatNullableFilter = NestedFloatNullableFilter;
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true })
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
let NestedIntNullableFilter = NestedIntNullableFilter_1 = class NestedIntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter_1, { nullable: true })
], NestedIntNullableFilter.prototype, "not", void 0);
NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntNullableFilter);
exports.NestedIntNullableFilter = NestedIntNullableFilter;
let NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter_1 = class NestedIntNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableWithAggregatesFilter_1, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntNullableWithAggregatesFilter);
exports.NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter;
let NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = class NestedIntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter_1, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_max", void 0);
NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntWithAggregatesFilter);
exports.NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter;
let NestedStringFilter = NestedStringFilter_1 = class NestedStringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter_1, { nullable: true })
], NestedStringFilter.prototype, "not", void 0);
NestedStringFilter = NestedStringFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringFilter);
exports.NestedStringFilter = NestedStringFilter;
let NestedStringNullableFilter = NestedStringNullableFilter_1 = class NestedStringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter_1, { nullable: true })
], NestedStringNullableFilter.prototype, "not", void 0);
NestedStringNullableFilter = NestedStringNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringNullableFilter);
exports.NestedStringNullableFilter = NestedStringNullableFilter;
let NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = class NestedStringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter_1, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringNullableWithAggregatesFilter);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter_1, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
let NullableIntFieldUpdateOperationsInput = class NullableIntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableIntFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableIntFieldUpdateOperationsInput);
exports.NullableIntFieldUpdateOperationsInput = NullableIntFieldUpdateOperationsInput;
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
NullableStringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableStringFieldUpdateOperationsInput);
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput;
let SortOrderInput = class SortOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: false })
], SortOrderInput.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullsOrder, { nullable: true })
], SortOrderInput.prototype, "nulls", void 0);
SortOrderInput = __decorate([
    (0, graphql_5.InputType)()
], SortOrderInput);
exports.SortOrderInput = SortOrderInput;
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
StringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], StringFieldUpdateOperationsInput);
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
let StringFilter = class StringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    (0, graphql_5.InputType)()
], StringFilter);
exports.StringFilter = StringFilter;
let StringNullableFilter = class StringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
let StringNullableListFilter = class StringNullableListFilter {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableListFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableListFilter.prototype, "has", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableListFilter.prototype, "hasEvery", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableListFilter.prototype, "hasSome", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StringNullableListFilter.prototype, "isEmpty", void 0);
StringNullableListFilter = __decorate([
    (0, graphql_5.InputType)()
], StringNullableListFilter);
exports.StringNullableListFilter = StringNullableListFilter;
let StringNullableWithAggregatesFilter = class StringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_max", void 0);
StringNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], StringNullableWithAggregatesFilter);
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
let AggregateProduct = class AggregateProduct {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregate, { nullable: true })
], AggregateProduct.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregate, { nullable: true })
], AggregateProduct.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregate, { nullable: true })
], AggregateProduct.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregate, { nullable: true })
], AggregateProduct.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregate, { nullable: true })
], AggregateProduct.prototype, "_max", void 0);
AggregateProduct = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProduct);
exports.AggregateProduct = AggregateProduct;
let CreateManyProductArgs = class CreateManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateManyInput)
], CreateManyProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyProductArgs.prototype, "skipDuplicates", void 0);
CreateManyProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyProductArgs);
exports.CreateManyProductArgs = CreateManyProductArgs;
let CreateOneProductArgs = class CreateOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateInput)
], CreateOneProductArgs.prototype, "data", void 0);
CreateOneProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneProductArgs);
exports.CreateOneProductArgs = CreateOneProductArgs;
let DeleteManyProductArgs = class DeleteManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], DeleteManyProductArgs.prototype, "where", void 0);
DeleteManyProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyProductArgs);
exports.DeleteManyProductArgs = DeleteManyProductArgs;
let DeleteOneProductArgs = class DeleteOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], DeleteOneProductArgs.prototype, "where", void 0);
DeleteOneProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneProductArgs);
exports.DeleteOneProductArgs = DeleteOneProductArgs;
let FindFirstProductOrThrowArgs = class FindFirstProductOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], FindFirstProductOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: true })
], FindFirstProductOrThrowArgs.prototype, "distinct", void 0);
FindFirstProductOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductOrThrowArgs);
exports.FindFirstProductOrThrowArgs = FindFirstProductOrThrowArgs;
let FindFirstProductArgs = class FindFirstProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], FindFirstProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], FindFirstProductArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], FindFirstProductArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: true })
], FindFirstProductArgs.prototype, "distinct", void 0);
FindFirstProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductArgs);
exports.FindFirstProductArgs = FindFirstProductArgs;
let FindManyProductArgs = class FindManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], FindManyProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], FindManyProductArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], FindManyProductArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: true })
], FindManyProductArgs.prototype, "distinct", void 0);
FindManyProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyProductArgs);
exports.FindManyProductArgs = FindManyProductArgs;
let FindUniqueProductOrThrowArgs = class FindUniqueProductOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], FindUniqueProductOrThrowArgs.prototype, "where", void 0);
FindUniqueProductOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductOrThrowArgs);
exports.FindUniqueProductOrThrowArgs = FindUniqueProductOrThrowArgs;
let FindUniqueProductArgs = class FindUniqueProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], FindUniqueProductArgs.prototype, "where", void 0);
FindUniqueProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductArgs);
exports.FindUniqueProductArgs = FindUniqueProductArgs;
let ProductAggregateArgs = class ProductAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], ProductAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithRelationInput], { nullable: true })
], ProductAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true })
], ProductAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregateInput, { nullable: true })
], ProductAggregateArgs.prototype, "_max", void 0);
ProductAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductAggregateArgs);
exports.ProductAggregateArgs = ProductAggregateArgs;
let ProductAvgAggregateInput = class ProductAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductAvgAggregateInput.prototype, "price", void 0);
ProductAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductAvgAggregateInput);
exports.ProductAvgAggregateInput = ProductAvgAggregateInput;
let ProductAvgAggregate = class ProductAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], ProductAvgAggregate.prototype, "price", void 0);
ProductAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductAvgAggregate);
exports.ProductAvgAggregate = ProductAvgAggregate;
let ProductAvgOrderByAggregateInput = class ProductAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductAvgOrderByAggregateInput.prototype, "price", void 0);
ProductAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductAvgOrderByAggregateInput);
exports.ProductAvgOrderByAggregateInput = ProductAvgOrderByAggregateInput;
let ProductCountAggregateInput = class ProductCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCountAggregateInput.prototype, "_all", void 0);
ProductCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCountAggregateInput);
exports.ProductCountAggregateInput = ProductCountAggregateInput;
let ProductCountAggregate = class ProductCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCountAggregate.prototype, "_all", void 0);
ProductCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCountAggregate);
exports.ProductCountAggregate = ProductCountAggregate;
let ProductCountOrderByAggregateInput = class ProductCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCountOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCountOrderByAggregateInput);
exports.ProductCountOrderByAggregateInput = ProductCountOrderByAggregateInput;
let ProductCount = class ProductCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCount.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCount.prototype, "collections", void 0);
ProductCount = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCount);
exports.ProductCount = ProductCount;
let ProductCreateManyCategoryInputEnvelope = class ProductCreateManyCategoryInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateManyCategoryInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateManyCategoryInput)
], ProductCreateManyCategoryInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCreateManyCategoryInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyCategoryInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateManyCategoryInputEnvelope);
exports.ProductCreateManyCategoryInputEnvelope = ProductCreateManyCategoryInputEnvelope;
let ProductCreateManyCategoryInput = class ProductCreateManyCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateManyCategoryInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateManyCategoryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyCategoryInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyCategoryInput.prototype, "updatedAt", void 0);
ProductCreateManyCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateManyCategoryInput);
exports.ProductCreateManyCategoryInput = ProductCreateManyCategoryInput;
let ProductCreateManyOrderInputEnvelope = class ProductCreateManyOrderInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateManyOrderInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateManyOrderInput)
], ProductCreateManyOrderInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCreateManyOrderInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyOrderInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateManyOrderInputEnvelope);
exports.ProductCreateManyOrderInputEnvelope = ProductCreateManyOrderInputEnvelope;
let ProductCreateManyOrderInput = class ProductCreateManyOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateManyOrderInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyOrderInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyOrderInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateManyOrderInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyOrderInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyOrderInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyOrderInput.prototype, "updatedAt", void 0);
ProductCreateManyOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateManyOrderInput);
exports.ProductCreateManyOrderInput = ProductCreateManyOrderInput;
let ProductCreateManyInput = class ProductCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateManyInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateManyInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateManyInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateManyInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateManyInput.prototype, "updatedAt", void 0);
ProductCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateManyInput);
exports.ProductCreateManyInput = ProductCreateManyInput;
let ProductCreateNestedManyWithoutCategoryInput = class ProductCreateNestedManyWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCategoryInput)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCategoryInput)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyCategoryInputEnvelope)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateNestedManyWithoutCategoryInput);
exports.ProductCreateNestedManyWithoutCategoryInput = ProductCreateNestedManyWithoutCategoryInput;
let ProductCreateNestedManyWithoutCollectionsInput = class ProductCreateNestedManyWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCollectionsInput)
], ProductCreateNestedManyWithoutCollectionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCollectionsInput)
], ProductCreateNestedManyWithoutCollectionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateNestedManyWithoutCollectionsInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateNestedManyWithoutCollectionsInput);
exports.ProductCreateNestedManyWithoutCollectionsInput = ProductCreateNestedManyWithoutCollectionsInput;
let ProductCreateNestedManyWithoutOrderInput = class ProductCreateNestedManyWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutOrderInput)
], ProductCreateNestedManyWithoutOrderInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutOrderInput)
], ProductCreateNestedManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyOrderInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyOrderInputEnvelope)
], ProductCreateNestedManyWithoutOrderInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateNestedManyWithoutOrderInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateNestedManyWithoutOrderInput);
exports.ProductCreateNestedManyWithoutOrderInput = ProductCreateNestedManyWithoutOrderInput;
let ProductCreateNestedOneWithoutVariantsInput = class ProductCreateNestedOneWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutVariantsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutVariantsInput)
], ProductCreateNestedOneWithoutVariantsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateOrConnectWithoutVariantsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutVariantsInput)
], ProductCreateNestedOneWithoutVariantsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutVariantsInput.prototype, "connect", void 0);
ProductCreateNestedOneWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateNestedOneWithoutVariantsInput);
exports.ProductCreateNestedOneWithoutVariantsInput = ProductCreateNestedOneWithoutVariantsInput;
let ProductCreateOrConnectWithoutCategoryInput = class ProductCreateOrConnectWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCategoryInput)
], ProductCreateOrConnectWithoutCategoryInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateOrConnectWithoutCategoryInput);
exports.ProductCreateOrConnectWithoutCategoryInput = ProductCreateOrConnectWithoutCategoryInput;
let ProductCreateOrConnectWithoutCollectionsInput = class ProductCreateOrConnectWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutCollectionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutCollectionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCollectionsInput)
], ProductCreateOrConnectWithoutCollectionsInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateOrConnectWithoutCollectionsInput);
exports.ProductCreateOrConnectWithoutCollectionsInput = ProductCreateOrConnectWithoutCollectionsInput;
let ProductCreateOrConnectWithoutOrderInput = class ProductCreateOrConnectWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutOrderInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutOrderInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutOrderInput)
], ProductCreateOrConnectWithoutOrderInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateOrConnectWithoutOrderInput);
exports.ProductCreateOrConnectWithoutOrderInput = ProductCreateOrConnectWithoutOrderInput;
let ProductCreateOrConnectWithoutVariantsInput = class ProductCreateOrConnectWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutVariantsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutVariantsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutVariantsInput)
], ProductCreateOrConnectWithoutVariantsInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateOrConnectWithoutVariantsInput);
exports.ProductCreateOrConnectWithoutVariantsInput = ProductCreateOrConnectWithoutVariantsInput;
let ProductCreateWithoutCategoryInput = class ProductCreateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateWithoutCategoryInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateNestedOneWithoutProductsInput, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateNestedManyWithoutProductInput, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductCreateWithoutCategoryInput.prototype, "collections", void 0);
ProductCreateWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateWithoutCategoryInput);
exports.ProductCreateWithoutCategoryInput = ProductCreateWithoutCategoryInput;
let ProductCreateWithoutCollectionsInput = class ProductCreateWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutCollectionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateWithoutCollectionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutCollectionsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutProductsInput, { nullable: false })
], ProductCreateWithoutCollectionsInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateNestedOneWithoutProductsInput, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateNestedManyWithoutProductInput, { nullable: true })
], ProductCreateWithoutCollectionsInput.prototype, "variants", void 0);
ProductCreateWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateWithoutCollectionsInput);
exports.ProductCreateWithoutCollectionsInput = ProductCreateWithoutCollectionsInput;
let ProductCreateWithoutOrderInput = class ProductCreateWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateWithoutOrderInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutOrderInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutProductsInput, { nullable: false })
], ProductCreateWithoutOrderInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateNestedManyWithoutProductInput, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductCreateWithoutOrderInput.prototype, "collections", void 0);
ProductCreateWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateWithoutOrderInput);
exports.ProductCreateWithoutOrderInput = ProductCreateWithoutOrderInput;
let ProductCreateWithoutVariantsInput = class ProductCreateWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutVariantsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateWithoutVariantsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateWithoutVariantsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutProductsInput, { nullable: false })
], ProductCreateWithoutVariantsInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateNestedOneWithoutProductsInput, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductCreateWithoutVariantsInput.prototype, "collections", void 0);
ProductCreateWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateWithoutVariantsInput);
exports.ProductCreateWithoutVariantsInput = ProductCreateWithoutVariantsInput;
let ProductCreateInput = class ProductCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCreateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCreateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductCreateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutProductsInput, { nullable: false })
], ProductCreateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateNestedOneWithoutProductsInput, { nullable: true })
], ProductCreateInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateNestedManyWithoutProductInput, { nullable: true })
], ProductCreateInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductCreateInput.prototype, "collections", void 0);
ProductCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateInput);
exports.ProductCreateInput = ProductCreateInput;
let ProductCreateimagesInput = class ProductCreateimagesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: false })
], ProductCreateimagesInput.prototype, "set", void 0);
ProductCreateimagesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCreateimagesInput);
exports.ProductCreateimagesInput = ProductCreateimagesInput;
let ProductGroupByArgs = class ProductGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], ProductGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductOrderByWithAggregationInput], { nullable: true })
], ProductGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarFieldEnum], { nullable: false })
], ProductGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductScalarWhereWithAggregatesInput, { nullable: true })
], ProductGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregateInput, { nullable: true })
], ProductGroupByArgs.prototype, "_max", void 0);
ProductGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductGroupByArgs);
exports.ProductGroupByArgs = ProductGroupByArgs;
let ProductGroupBy = class ProductGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductGroupBy.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductGroupBy.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductGroupBy.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductGroupBy.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountAggregate, { nullable: true })
], ProductGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgAggregate, { nullable: true })
], ProductGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumAggregate, { nullable: true })
], ProductGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinAggregate, { nullable: true })
], ProductGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxAggregate, { nullable: true })
], ProductGroupBy.prototype, "_max", void 0);
ProductGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ProductGroupBy);
exports.ProductGroupBy = ProductGroupBy;
let ProductListRelationFilter = class ProductListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductListRelationFilter.prototype, "none", void 0);
ProductListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductListRelationFilter);
exports.ProductListRelationFilter = ProductListRelationFilter;
let ProductMaxAggregateInput = class ProductMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMaxAggregateInput.prototype, "updatedAt", void 0);
ProductMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductMaxAggregateInput);
exports.ProductMaxAggregateInput = ProductMaxAggregateInput;
let ProductMaxAggregate = class ProductMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductMaxAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMaxAggregate.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMaxAggregate.prototype, "updatedAt", void 0);
ProductMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductMaxAggregate);
exports.ProductMaxAggregate = ProductMaxAggregate;
let ProductMaxOrderByAggregateInput = class ProductMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductMaxOrderByAggregateInput);
exports.ProductMaxOrderByAggregateInput = ProductMaxOrderByAggregateInput;
let ProductMinAggregateInput = class ProductMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductMinAggregateInput.prototype, "updatedAt", void 0);
ProductMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductMinAggregateInput);
exports.ProductMinAggregateInput = ProductMinAggregateInput;
let ProductMinAggregate = class ProductMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductMinAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductMinAggregate.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductMinAggregate.prototype, "updatedAt", void 0);
ProductMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductMinAggregate);
exports.ProductMinAggregate = ProductMinAggregate;
let ProductMinOrderByAggregateInput = class ProductMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductMinOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductMinOrderByAggregateInput);
exports.ProductMinOrderByAggregateInput = ProductMinOrderByAggregateInput;
let ProductOrderByRelationAggregateInput = class ProductOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByRelationAggregateInput.prototype, "_count", void 0);
ProductOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductOrderByRelationAggregateInput);
exports.ProductOrderByRelationAggregateInput = ProductOrderByRelationAggregateInput;
let ProductOrderByWithAggregationInput = class ProductOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCountOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductAvgOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMaxOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductMinOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSumOrderByAggregateInput, { nullable: true })
], ProductOrderByWithAggregationInput.prototype, "_sum", void 0);
ProductOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductOrderByWithAggregationInput);
exports.ProductOrderByWithAggregationInput = ProductOrderByWithAggregationInput;
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryOrderByWithRelationInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderOrderByWithRelationInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOrderByRelationAggregateInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionOrderByRelationAggregateInput, { nullable: true })
], ProductOrderByWithRelationInput.prototype, "collections", void 0);
ProductOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductOrderByWithRelationInput);
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
let ProductRelationFilter = class ProductRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true })
], ProductRelationFilter.prototype, "isNot", void 0);
ProductRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductRelationFilter);
exports.ProductRelationFilter = ProductRelationFilter;
let ProductScalarWhereWithAggregatesInput = ProductScalarWhereWithAggregatesInput_1 = class ProductScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
ProductScalarWhereWithAggregatesInput = ProductScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductScalarWhereWithAggregatesInput);
exports.ProductScalarWhereWithAggregatesInput = ProductScalarWhereWithAggregatesInput;
let ProductScalarWhereInput = ProductScalarWhereInput_1 = class ProductScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput_1], { nullable: true })
], ProductScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput_1], { nullable: true })
], ProductScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput_1], { nullable: true })
], ProductScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductScalarWhereInput.prototype, "updatedAt", void 0);
ProductScalarWhereInput = ProductScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductScalarWhereInput);
exports.ProductScalarWhereInput = ProductScalarWhereInput;
let ProductSumAggregateInput = class ProductSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductSumAggregateInput.prototype, "price", void 0);
ProductSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductSumAggregateInput);
exports.ProductSumAggregateInput = ProductSumAggregateInput;
let ProductSumAggregate = class ProductSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductSumAggregate.prototype, "price", void 0);
ProductSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductSumAggregate);
exports.ProductSumAggregate = ProductSumAggregate;
let ProductSumOrderByAggregateInput = class ProductSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductSumOrderByAggregateInput.prototype, "price", void 0);
ProductSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductSumOrderByAggregateInput);
exports.ProductSumOrderByAggregateInput = ProductSumOrderByAggregateInput;
let ProductUncheckedCreateNestedManyWithoutCategoryInput = class ProductUncheckedCreateNestedManyWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCategoryInput)
], ProductUncheckedCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCategoryInput)
], ProductUncheckedCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyCategoryInputEnvelope)
], ProductUncheckedCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
ProductUncheckedCreateNestedManyWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateNestedManyWithoutCategoryInput);
exports.ProductUncheckedCreateNestedManyWithoutCategoryInput = ProductUncheckedCreateNestedManyWithoutCategoryInput;
let ProductUncheckedCreateNestedManyWithoutCollectionsInput = class ProductUncheckedCreateNestedManyWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCollectionsInput)
], ProductUncheckedCreateNestedManyWithoutCollectionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCollectionsInput)
], ProductUncheckedCreateNestedManyWithoutCollectionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedCreateNestedManyWithoutCollectionsInput.prototype, "connect", void 0);
ProductUncheckedCreateNestedManyWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateNestedManyWithoutCollectionsInput);
exports.ProductUncheckedCreateNestedManyWithoutCollectionsInput = ProductUncheckedCreateNestedManyWithoutCollectionsInput;
let ProductUncheckedCreateNestedManyWithoutOrderInput = class ProductUncheckedCreateNestedManyWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutOrderInput)
], ProductUncheckedCreateNestedManyWithoutOrderInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutOrderInput)
], ProductUncheckedCreateNestedManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyOrderInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyOrderInputEnvelope)
], ProductUncheckedCreateNestedManyWithoutOrderInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedCreateNestedManyWithoutOrderInput.prototype, "connect", void 0);
ProductUncheckedCreateNestedManyWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateNestedManyWithoutOrderInput);
exports.ProductUncheckedCreateNestedManyWithoutOrderInput = ProductUncheckedCreateNestedManyWithoutOrderInput;
let ProductUncheckedCreateWithoutCategoryInput = class ProductUncheckedCreateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductUncheckedCreateWithoutCategoryInput.prototype, "collections", void 0);
ProductUncheckedCreateWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateWithoutCategoryInput);
exports.ProductUncheckedCreateWithoutCategoryInput = ProductUncheckedCreateWithoutCategoryInput;
let ProductUncheckedCreateWithoutCollectionsInput = class ProductUncheckedCreateWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, { nullable: true })
], ProductUncheckedCreateWithoutCollectionsInput.prototype, "variants", void 0);
ProductUncheckedCreateWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateWithoutCollectionsInput);
exports.ProductUncheckedCreateWithoutCollectionsInput = ProductUncheckedCreateWithoutCollectionsInput;
let ProductUncheckedCreateWithoutOrderInput = class ProductUncheckedCreateWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductUncheckedCreateWithoutOrderInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutOrderInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutOrderInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductUncheckedCreateWithoutOrderInput.prototype, "collections", void 0);
ProductUncheckedCreateWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateWithoutOrderInput);
exports.ProductUncheckedCreateWithoutOrderInput = ProductUncheckedCreateWithoutOrderInput;
let ProductUncheckedCreateWithoutVariantsInput = class ProductUncheckedCreateWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductUncheckedCreateWithoutVariantsInput.prototype, "collections", void 0);
ProductUncheckedCreateWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateWithoutVariantsInput);
exports.ProductUncheckedCreateWithoutVariantsInput = ProductUncheckedCreateWithoutVariantsInput;
let ProductUncheckedCreateInput = class ProductUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductUncheckedCreateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductUncheckedCreateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateimagesInput, { nullable: true })
], ProductUncheckedCreateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductUncheckedCreateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedCreateNestedManyWithoutProductInput, { nullable: true })
], ProductUncheckedCreateInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedCreateNestedManyWithoutProductsInput, { nullable: true })
], ProductUncheckedCreateInput.prototype, "collections", void 0);
ProductUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedCreateInput);
exports.ProductUncheckedCreateInput = ProductUncheckedCreateInput;
let ProductUncheckedUpdateManyWithoutCategoryNestedInput = class ProductUncheckedUpdateManyWithoutCategoryNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCategoryInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCategoryInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyCategoryInputEnvelope)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutCategoryInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
ProductUncheckedUpdateManyWithoutCategoryNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyWithoutCategoryNestedInput);
exports.ProductUncheckedUpdateManyWithoutCategoryNestedInput = ProductUncheckedUpdateManyWithoutCategoryNestedInput;
let ProductUncheckedUpdateManyWithoutCategoryInput = class ProductUncheckedUpdateManyWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCategoryInput.prototype, "updatedAt", void 0);
ProductUncheckedUpdateManyWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyWithoutCategoryInput);
exports.ProductUncheckedUpdateManyWithoutCategoryInput = ProductUncheckedUpdateManyWithoutCategoryInput;
let ProductUncheckedUpdateManyWithoutCollectionsNestedInput = class ProductUncheckedUpdateManyWithoutCollectionsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCollectionsInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCollectionsInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutCollectionsInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutCollectionsInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutCollectionsInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput.prototype, "deleteMany", void 0);
ProductUncheckedUpdateManyWithoutCollectionsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyWithoutCollectionsNestedInput);
exports.ProductUncheckedUpdateManyWithoutCollectionsNestedInput = ProductUncheckedUpdateManyWithoutCollectionsNestedInput;
let ProductUncheckedUpdateManyWithoutCollectionsInput = class ProductUncheckedUpdateManyWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutCollectionsInput.prototype, "updatedAt", void 0);
ProductUncheckedUpdateManyWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyWithoutCollectionsInput);
exports.ProductUncheckedUpdateManyWithoutCollectionsInput = ProductUncheckedUpdateManyWithoutCollectionsInput;
let ProductUncheckedUpdateManyWithoutOrderNestedInput = class ProductUncheckedUpdateManyWithoutOrderNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutOrderInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutOrderInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutOrderInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyOrderInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyOrderInputEnvelope)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutOrderInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutOrderInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUncheckedUpdateManyWithoutOrderNestedInput.prototype, "deleteMany", void 0);
ProductUncheckedUpdateManyWithoutOrderNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyWithoutOrderNestedInput);
exports.ProductUncheckedUpdateManyWithoutOrderNestedInput = ProductUncheckedUpdateManyWithoutOrderNestedInput;
let ProductUncheckedUpdateManyWithoutOrderInput = class ProductUncheckedUpdateManyWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyWithoutOrderInput.prototype, "updatedAt", void 0);
ProductUncheckedUpdateManyWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyWithoutOrderInput);
exports.ProductUncheckedUpdateManyWithoutOrderInput = ProductUncheckedUpdateManyWithoutOrderInput;
let ProductUncheckedUpdateManyInput = class ProductUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
ProductUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateManyInput);
exports.ProductUncheckedUpdateManyInput = ProductUncheckedUpdateManyInput;
let ProductUncheckedUpdateWithoutCategoryInput = class ProductUncheckedUpdateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUncheckedUpdateWithoutCategoryInput.prototype, "collections", void 0);
ProductUncheckedUpdateWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateWithoutCategoryInput);
exports.ProductUncheckedUpdateWithoutCategoryInput = ProductUncheckedUpdateWithoutCategoryInput;
let ProductUncheckedUpdateWithoutCollectionsInput = class ProductUncheckedUpdateWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUncheckedUpdateWithoutCollectionsInput.prototype, "variants", void 0);
ProductUncheckedUpdateWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateWithoutCollectionsInput);
exports.ProductUncheckedUpdateWithoutCollectionsInput = ProductUncheckedUpdateWithoutCollectionsInput;
let ProductUncheckedUpdateWithoutOrderInput = class ProductUncheckedUpdateWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUncheckedUpdateWithoutOrderInput.prototype, "collections", void 0);
ProductUncheckedUpdateWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateWithoutOrderInput);
exports.ProductUncheckedUpdateWithoutOrderInput = ProductUncheckedUpdateWithoutOrderInput;
let ProductUncheckedUpdateWithoutVariantsInput = class ProductUncheckedUpdateWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUncheckedUpdateWithoutVariantsInput.prototype, "collections", void 0);
ProductUncheckedUpdateWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateWithoutVariantsInput);
exports.ProductUncheckedUpdateWithoutVariantsInput = ProductUncheckedUpdateWithoutVariantsInput;
let ProductUncheckedUpdateInput = class ProductUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUncheckedUpdateInput.prototype, "collections", void 0);
ProductUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUncheckedUpdateInput);
exports.ProductUncheckedUpdateInput = ProductUncheckedUpdateInput;
let ProductUpdateManyMutationInput = class ProductUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateManyMutationInput.prototype, "updatedAt", void 0);
ProductUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyMutationInput);
exports.ProductUpdateManyMutationInput = ProductUpdateManyMutationInput;
let ProductUpdateManyWithWhereWithoutCategoryInput = class ProductUpdateManyWithWhereWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutCategoryInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyWithWhereWithoutCategoryInput);
exports.ProductUpdateManyWithWhereWithoutCategoryInput = ProductUpdateManyWithWhereWithoutCategoryInput;
let ProductUpdateManyWithWhereWithoutCollectionsInput = class ProductUpdateManyWithWhereWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutCollectionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutCollectionsInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyWithWhereWithoutCollectionsInput);
exports.ProductUpdateManyWithWhereWithoutCollectionsInput = ProductUpdateManyWithWhereWithoutCollectionsInput;
let ProductUpdateManyWithWhereWithoutOrderInput = class ProductUpdateManyWithWhereWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutOrderInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutOrderInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyWithWhereWithoutOrderInput);
exports.ProductUpdateManyWithWhereWithoutOrderInput = ProductUpdateManyWithWhereWithoutOrderInput;
let ProductUpdateManyWithoutCategoryNestedInput = class ProductUpdateManyWithoutCategoryNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCategoryInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCategoryInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyCategoryInputEnvelope)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutCategoryInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutCategoryNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyWithoutCategoryNestedInput);
exports.ProductUpdateManyWithoutCategoryNestedInput = ProductUpdateManyWithoutCategoryNestedInput;
let ProductUpdateManyWithoutCollectionsNestedInput = class ProductUpdateManyWithoutCollectionsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCollectionsInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutCollectionsInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutCollectionsInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutCollectionsInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutCollectionsInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutCollectionsInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithoutCollectionsNestedInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutCollectionsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyWithoutCollectionsNestedInput);
exports.ProductUpdateManyWithoutCollectionsNestedInput = ProductUpdateManyWithoutCollectionsNestedInput;
let ProductUpdateManyWithoutOrderNestedInput = class ProductUpdateManyWithoutOrderNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutOrderInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCreateOrConnectWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutOrderInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpsertWithWhereUniqueWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithWhereUniqueWithoutOrderInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateManyOrderInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateManyOrderInputEnvelope)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateWithWhereUniqueWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithWhereUniqueWithoutOrderInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductUpdateManyWithWhereWithoutOrderInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyWithWhereWithoutOrderInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductScalarWhereInput)
], ProductUpdateManyWithoutOrderNestedInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutOrderNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateManyWithoutOrderNestedInput);
exports.ProductUpdateManyWithoutOrderNestedInput = ProductUpdateManyWithoutOrderNestedInput;
let ProductUpdateOneRequiredWithoutVariantsNestedInput = class ProductUpdateOneRequiredWithoutVariantsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutVariantsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutVariantsInput)
], ProductUpdateOneRequiredWithoutVariantsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateOrConnectWithoutVariantsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCreateOrConnectWithoutVariantsInput)
], ProductUpdateOneRequiredWithoutVariantsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpsertWithoutVariantsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpsertWithoutVariantsInput)
], ProductUpdateOneRequiredWithoutVariantsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutVariantsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateToOneWithWhereWithoutVariantsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductUpdateToOneWithWhereWithoutVariantsInput)
], ProductUpdateOneRequiredWithoutVariantsNestedInput.prototype, "update", void 0);
ProductUpdateOneRequiredWithoutVariantsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateOneRequiredWithoutVariantsNestedInput);
exports.ProductUpdateOneRequiredWithoutVariantsNestedInput = ProductUpdateOneRequiredWithoutVariantsNestedInput;
let ProductUpdateToOneWithWhereWithoutVariantsInput = class ProductUpdateToOneWithWhereWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], ProductUpdateToOneWithWhereWithoutVariantsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutVariantsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutVariantsInput)
], ProductUpdateToOneWithWhereWithoutVariantsInput.prototype, "data", void 0);
ProductUpdateToOneWithWhereWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateToOneWithWhereWithoutVariantsInput);
exports.ProductUpdateToOneWithWhereWithoutVariantsInput = ProductUpdateToOneWithWhereWithoutVariantsInput;
let ProductUpdateWithWhereUniqueWithoutCategoryInput = class ProductUpdateWithWhereUniqueWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutCategoryInput)
], ProductUpdateWithWhereUniqueWithoutCategoryInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithWhereUniqueWithoutCategoryInput);
exports.ProductUpdateWithWhereUniqueWithoutCategoryInput = ProductUpdateWithWhereUniqueWithoutCategoryInput;
let ProductUpdateWithWhereUniqueWithoutCollectionsInput = class ProductUpdateWithWhereUniqueWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutCollectionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutCollectionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutCollectionsInput)
], ProductUpdateWithWhereUniqueWithoutCollectionsInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithWhereUniqueWithoutCollectionsInput);
exports.ProductUpdateWithWhereUniqueWithoutCollectionsInput = ProductUpdateWithWhereUniqueWithoutCollectionsInput;
let ProductUpdateWithWhereUniqueWithoutOrderInput = class ProductUpdateWithWhereUniqueWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutOrderInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutOrderInput)
], ProductUpdateWithWhereUniqueWithoutOrderInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithWhereUniqueWithoutOrderInput);
exports.ProductUpdateWithWhereUniqueWithoutOrderInput = ProductUpdateWithWhereUniqueWithoutOrderInput;
let ProductUpdateWithoutCategoryInput = class ProductUpdateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateOneWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutCategoryInput.prototype, "collections", void 0);
ProductUpdateWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithoutCategoryInput);
exports.ProductUpdateWithoutCategoryInput = ProductUpdateWithoutCategoryInput;
let ProductUpdateWithoutCollectionsInput = class ProductUpdateWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateOneWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUpdateWithoutCollectionsInput.prototype, "variants", void 0);
ProductUpdateWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithoutCollectionsInput);
exports.ProductUpdateWithoutCollectionsInput = ProductUpdateWithoutCollectionsInput;
let ProductUpdateWithoutOrderInput = class ProductUpdateWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutOrderInput.prototype, "collections", void 0);
ProductUpdateWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithoutOrderInput);
exports.ProductUpdateWithoutOrderInput = ProductUpdateWithoutOrderInput;
let ProductUpdateWithoutVariantsInput = class ProductUpdateWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateOneWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUpdateWithoutVariantsInput.prototype, "collections", void 0);
ProductUpdateWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateWithoutVariantsInput);
exports.ProductUpdateWithoutVariantsInput = ProductUpdateWithoutVariantsInput;
let ProductUpdateInput = class ProductUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateimagesInput, { nullable: true })
], ProductUpdateInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, { nullable: true })
], ProductUpdateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateOneWithoutProductsNestedInput, { nullable: true })
], ProductUpdateInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateManyWithoutProductNestedInput, { nullable: true })
], ProductUpdateInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionUpdateManyWithoutProductsNestedInput, { nullable: true })
], ProductUpdateInput.prototype, "collections", void 0);
ProductUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateInput);
exports.ProductUpdateInput = ProductUpdateInput;
let ProductUpdateimagesInput = class ProductUpdateimagesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductUpdateimagesInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductUpdateimagesInput.prototype, "push", void 0);
ProductUpdateimagesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpdateimagesInput);
exports.ProductUpdateimagesInput = ProductUpdateimagesInput;
let ProductUpsertWithWhereUniqueWithoutCategoryInput = class ProductUpsertWithWhereUniqueWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutCategoryInput)
], ProductUpsertWithWhereUniqueWithoutCategoryInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCategoryInput)
], ProductUpsertWithWhereUniqueWithoutCategoryInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpsertWithWhereUniqueWithoutCategoryInput);
exports.ProductUpsertWithWhereUniqueWithoutCategoryInput = ProductUpsertWithWhereUniqueWithoutCategoryInput;
let ProductUpsertWithWhereUniqueWithoutCollectionsInput = class ProductUpsertWithWhereUniqueWithoutCollectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutCollectionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutCollectionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutCollectionsInput)
], ProductUpsertWithWhereUniqueWithoutCollectionsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutCollectionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutCollectionsInput)
], ProductUpsertWithWhereUniqueWithoutCollectionsInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutCollectionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpsertWithWhereUniqueWithoutCollectionsInput);
exports.ProductUpsertWithWhereUniqueWithoutCollectionsInput = ProductUpsertWithWhereUniqueWithoutCollectionsInput;
let ProductUpsertWithWhereUniqueWithoutOrderInput = class ProductUpsertWithWhereUniqueWithoutOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutOrderInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutOrderInput)
], ProductUpsertWithWhereUniqueWithoutOrderInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutOrderInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutOrderInput)
], ProductUpsertWithWhereUniqueWithoutOrderInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutOrderInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpsertWithWhereUniqueWithoutOrderInput);
exports.ProductUpsertWithWhereUniqueWithoutOrderInput = ProductUpsertWithWhereUniqueWithoutOrderInput;
let ProductUpsertWithoutVariantsInput = class ProductUpsertWithoutVariantsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateWithoutVariantsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateWithoutVariantsInput)
], ProductUpsertWithoutVariantsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateWithoutVariantsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateWithoutVariantsInput)
], ProductUpsertWithoutVariantsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], ProductUpsertWithoutVariantsInput.prototype, "where", void 0);
ProductUpsertWithoutVariantsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductUpsertWithoutVariantsInput);
exports.ProductUpsertWithoutVariantsInput = ProductUpsertWithoutVariantsInput;
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput], { nullable: true })
], ProductWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryRelationFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderNullableRelationFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantListRelationFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionListRelationFilter, { nullable: true })
], ProductWhereUniqueInput.prototype, "collections", void 0);
ProductWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], ProductWhereUniqueInput);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductWhereInput_1], { nullable: true })
], ProductWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductWhereInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductWhereInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductWhereInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryRelationFilter, { nullable: true })
], ProductWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderNullableRelationFilter, { nullable: true })
], ProductWhereInput.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantListRelationFilter, { nullable: true })
], ProductWhereInput.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => CollectionListRelationFilter, { nullable: true })
], ProductWhereInput.prototype, "collections", void 0);
ProductWhereInput = ProductWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
let Product = class Product {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Product.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], Product.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Product.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Product.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategory, { nullable: false })
], Product.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => Order, { nullable: true })
], Product.prototype, "Order", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariant], { nullable: true })
], Product.prototype, "variants", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Collection], { nullable: true })
], Product.prototype, "collections", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCount, { nullable: false })
], Product.prototype, "_count", void 0);
Product = __decorate([
    (0, graphql_2.ObjectType)()
], Product);
exports.Product = Product;
let UpdateManyProductArgs = class UpdateManyProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateManyMutationInput)
], UpdateManyProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductWhereInput)
], UpdateManyProductArgs.prototype, "where", void 0);
UpdateManyProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyProductArgs);
exports.UpdateManyProductArgs = UpdateManyProductArgs;
let UpdateOneProductArgs = class UpdateOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateInput)
], UpdateOneProductArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], UpdateOneProductArgs.prototype, "where", void 0);
UpdateOneProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneProductArgs);
exports.UpdateOneProductArgs = UpdateOneProductArgs;
let UpsertOneProductArgs = class UpsertOneProductArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductWhereUniqueInput)
], UpsertOneProductArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCreateInput)
], UpsertOneProductArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductUpdateInput)
], UpsertOneProductArgs.prototype, "update", void 0);
UpsertOneProductArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneProductArgs);
exports.UpsertOneProductArgs = UpsertOneProductArgs;
let AggregateProductCategory = class AggregateProductCategory {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCountAggregate, { nullable: true })
], AggregateProductCategory.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMinAggregate, { nullable: true })
], AggregateProductCategory.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMaxAggregate, { nullable: true })
], AggregateProductCategory.prototype, "_max", void 0);
AggregateProductCategory = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProductCategory);
exports.AggregateProductCategory = AggregateProductCategory;
let CreateManyProductCategoryArgs = class CreateManyProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateManyInput)
], CreateManyProductCategoryArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyProductCategoryArgs.prototype, "skipDuplicates", void 0);
CreateManyProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyProductCategoryArgs);
exports.CreateManyProductCategoryArgs = CreateManyProductCategoryArgs;
let CreateOneProductCategoryArgs = class CreateOneProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateInput)
], CreateOneProductCategoryArgs.prototype, "data", void 0);
CreateOneProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneProductCategoryArgs);
exports.CreateOneProductCategoryArgs = CreateOneProductCategoryArgs;
let DeleteManyProductCategoryArgs = class DeleteManyProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], DeleteManyProductCategoryArgs.prototype, "where", void 0);
DeleteManyProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyProductCategoryArgs);
exports.DeleteManyProductCategoryArgs = DeleteManyProductCategoryArgs;
let DeleteOneProductCategoryArgs = class DeleteOneProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], DeleteOneProductCategoryArgs.prototype, "where", void 0);
DeleteOneProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneProductCategoryArgs);
exports.DeleteOneProductCategoryArgs = DeleteOneProductCategoryArgs;
let FindFirstProductCategoryOrThrowArgs = class FindFirstProductCategoryOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], FindFirstProductCategoryOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryOrderByWithRelationInput], { nullable: true })
], FindFirstProductCategoryOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true })
], FindFirstProductCategoryOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductCategoryOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductCategoryOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarFieldEnum], { nullable: true })
], FindFirstProductCategoryOrThrowArgs.prototype, "distinct", void 0);
FindFirstProductCategoryOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductCategoryOrThrowArgs);
exports.FindFirstProductCategoryOrThrowArgs = FindFirstProductCategoryOrThrowArgs;
let FindFirstProductCategoryArgs = class FindFirstProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], FindFirstProductCategoryArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryOrderByWithRelationInput], { nullable: true })
], FindFirstProductCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true })
], FindFirstProductCategoryArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductCategoryArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductCategoryArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarFieldEnum], { nullable: true })
], FindFirstProductCategoryArgs.prototype, "distinct", void 0);
FindFirstProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductCategoryArgs);
exports.FindFirstProductCategoryArgs = FindFirstProductCategoryArgs;
let FindManyProductCategoryArgs = class FindManyProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], FindManyProductCategoryArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryOrderByWithRelationInput], { nullable: true })
], FindManyProductCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true })
], FindManyProductCategoryArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductCategoryArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductCategoryArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarFieldEnum], { nullable: true })
], FindManyProductCategoryArgs.prototype, "distinct", void 0);
FindManyProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyProductCategoryArgs);
exports.FindManyProductCategoryArgs = FindManyProductCategoryArgs;
let FindUniqueProductCategoryOrThrowArgs = class FindUniqueProductCategoryOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], FindUniqueProductCategoryOrThrowArgs.prototype, "where", void 0);
FindUniqueProductCategoryOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductCategoryOrThrowArgs);
exports.FindUniqueProductCategoryOrThrowArgs = FindUniqueProductCategoryOrThrowArgs;
let FindUniqueProductCategoryArgs = class FindUniqueProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], FindUniqueProductCategoryArgs.prototype, "where", void 0);
FindUniqueProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductCategoryArgs);
exports.FindUniqueProductCategoryArgs = FindUniqueProductCategoryArgs;
let ProductCategoryAggregateArgs = class ProductCategoryAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryOrderByWithRelationInput], { nullable: true })
], ProductCategoryAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true })
], ProductCategoryAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductCategoryAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductCategoryAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCountAggregateInput, { nullable: true })
], ProductCategoryAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMinAggregateInput, { nullable: true })
], ProductCategoryAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMaxAggregateInput, { nullable: true })
], ProductCategoryAggregateArgs.prototype, "_max", void 0);
ProductCategoryAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductCategoryAggregateArgs);
exports.ProductCategoryAggregateArgs = ProductCategoryAggregateArgs;
let ProductCategoryCountAggregateInput = class ProductCategoryCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCountAggregateInput.prototype, "_all", void 0);
ProductCategoryCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCountAggregateInput);
exports.ProductCategoryCountAggregateInput = ProductCategoryCountAggregateInput;
let ProductCategoryCountAggregate = class ProductCategoryCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCountAggregate.prototype, "_all", void 0);
ProductCategoryCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCategoryCountAggregate);
exports.ProductCategoryCountAggregate = ProductCategoryCountAggregate;
let ProductCategoryCountOrderByAggregateInput = class ProductCategoryCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryCountOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryCountOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryCountOrderByAggregateInput.prototype, "parentCategoryId", void 0);
ProductCategoryCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCountOrderByAggregateInput);
exports.ProductCategoryCountOrderByAggregateInput = ProductCategoryCountOrderByAggregateInput;
let ProductCategoryCount = class ProductCategoryCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCount.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductCategoryCount.prototype, "subCategories", void 0);
ProductCategoryCount = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCategoryCount);
exports.ProductCategoryCount = ProductCategoryCount;
let ProductCategoryCreateManyParentCategoryInputEnvelope = class ProductCategoryCreateManyParentCategoryInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateManyParentCategoryInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateManyParentCategoryInput)
], ProductCategoryCreateManyParentCategoryInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryCreateManyParentCategoryInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCategoryCreateManyParentCategoryInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateManyParentCategoryInputEnvelope);
exports.ProductCategoryCreateManyParentCategoryInputEnvelope = ProductCategoryCreateManyParentCategoryInputEnvelope;
let ProductCategoryCreateManyParentCategoryInput = class ProductCategoryCreateManyParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateManyParentCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateManyParentCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateManyParentCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateManyParentCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateManyParentCategoryInput.prototype, "updatedAt", void 0);
ProductCategoryCreateManyParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateManyParentCategoryInput);
exports.ProductCategoryCreateManyParentCategoryInput = ProductCategoryCreateManyParentCategoryInput;
let ProductCategoryCreateManyInput = class ProductCategoryCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateManyInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateManyInput.prototype, "parentCategoryId", void 0);
ProductCategoryCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateManyInput);
exports.ProductCategoryCreateManyInput = ProductCategoryCreateManyInput;
let ProductCategoryCreateNestedManyWithoutParentCategoryInput = class ProductCategoryCreateNestedManyWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutParentCategoryInput)
], ProductCategoryCreateNestedManyWithoutParentCategoryInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
], ProductCategoryCreateNestedManyWithoutParentCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateManyParentCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
], ProductCategoryCreateNestedManyWithoutParentCategoryInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryCreateNestedManyWithoutParentCategoryInput.prototype, "connect", void 0);
ProductCategoryCreateNestedManyWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateNestedManyWithoutParentCategoryInput);
exports.ProductCategoryCreateNestedManyWithoutParentCategoryInput = ProductCategoryCreateNestedManyWithoutParentCategoryInput;
let ProductCategoryCreateNestedOneWithoutProductsInput = class ProductCategoryCreateNestedOneWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutProductsInput)
], ProductCategoryCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutProductsInput)
], ProductCategoryCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
ProductCategoryCreateNestedOneWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateNestedOneWithoutProductsInput);
exports.ProductCategoryCreateNestedOneWithoutProductsInput = ProductCategoryCreateNestedOneWithoutProductsInput;
let ProductCategoryCreateNestedOneWithoutSubCategoriesInput = class ProductCategoryCreateNestedOneWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutSubCategoriesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutSubCategoriesInput)
], ProductCategoryCreateNestedOneWithoutSubCategoriesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput)
], ProductCategoryCreateNestedOneWithoutSubCategoriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryCreateNestedOneWithoutSubCategoriesInput.prototype, "connect", void 0);
ProductCategoryCreateNestedOneWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateNestedOneWithoutSubCategoriesInput);
exports.ProductCategoryCreateNestedOneWithoutSubCategoriesInput = ProductCategoryCreateNestedOneWithoutSubCategoriesInput;
let ProductCategoryCreateOrConnectWithoutParentCategoryInput = class ProductCategoryCreateOrConnectWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryCreateOrConnectWithoutParentCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutParentCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutParentCategoryInput)
], ProductCategoryCreateOrConnectWithoutParentCategoryInput.prototype, "create", void 0);
ProductCategoryCreateOrConnectWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateOrConnectWithoutParentCategoryInput);
exports.ProductCategoryCreateOrConnectWithoutParentCategoryInput = ProductCategoryCreateOrConnectWithoutParentCategoryInput;
let ProductCategoryCreateOrConnectWithoutProductsInput = class ProductCategoryCreateOrConnectWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutProductsInput)
], ProductCategoryCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
ProductCategoryCreateOrConnectWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateOrConnectWithoutProductsInput);
exports.ProductCategoryCreateOrConnectWithoutProductsInput = ProductCategoryCreateOrConnectWithoutProductsInput;
let ProductCategoryCreateOrConnectWithoutSubCategoriesInput = class ProductCategoryCreateOrConnectWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryCreateOrConnectWithoutSubCategoriesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutSubCategoriesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutSubCategoriesInput)
], ProductCategoryCreateOrConnectWithoutSubCategoriesInput.prototype, "create", void 0);
ProductCategoryCreateOrConnectWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateOrConnectWithoutSubCategoriesInput);
exports.ProductCategoryCreateOrConnectWithoutSubCategoriesInput = ProductCategoryCreateOrConnectWithoutSubCategoriesInput;
let ProductCategoryCreateWithoutParentCategoryInput = class ProductCategoryCreateWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutCategoryInput, { nullable: true })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, { nullable: true })
], ProductCategoryCreateWithoutParentCategoryInput.prototype, "subCategories", void 0);
ProductCategoryCreateWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateWithoutParentCategoryInput);
exports.ProductCategoryCreateWithoutParentCategoryInput = ProductCategoryCreateWithoutParentCategoryInput;
let ProductCategoryCreateWithoutProductsInput = class ProductCategoryCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, { nullable: true })
], ProductCategoryCreateWithoutProductsInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, { nullable: true })
], ProductCategoryCreateWithoutProductsInput.prototype, "subCategories", void 0);
ProductCategoryCreateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateWithoutProductsInput);
exports.ProductCategoryCreateWithoutProductsInput = ProductCategoryCreateWithoutProductsInput;
let ProductCategoryCreateWithoutSubCategoriesInput = class ProductCategoryCreateWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutCategoryInput, { nullable: true })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, { nullable: true })
], ProductCategoryCreateWithoutSubCategoriesInput.prototype, "parentCategory", void 0);
ProductCategoryCreateWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateWithoutSubCategoriesInput);
exports.ProductCategoryCreateWithoutSubCategoriesInput = ProductCategoryCreateWithoutSubCategoriesInput;
let ProductCategoryCreateInput = class ProductCategoryCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryCreateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedManyWithoutCategoryInput, { nullable: true })
], ProductCategoryCreateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedOneWithoutSubCategoriesInput, { nullable: true })
], ProductCategoryCreateInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateNestedManyWithoutParentCategoryInput, { nullable: true })
], ProductCategoryCreateInput.prototype, "subCategories", void 0);
ProductCategoryCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryCreateInput);
exports.ProductCategoryCreateInput = ProductCategoryCreateInput;
let ProductCategoryGroupByArgs = class ProductCategoryGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryOrderByWithAggregationInput], { nullable: true })
], ProductCategoryGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarFieldEnum], { nullable: false })
], ProductCategoryGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryScalarWhereWithAggregatesInput, { nullable: true })
], ProductCategoryGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductCategoryGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductCategoryGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCountAggregateInput, { nullable: true })
], ProductCategoryGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMinAggregateInput, { nullable: true })
], ProductCategoryGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMaxAggregateInput, { nullable: true })
], ProductCategoryGroupByArgs.prototype, "_max", void 0);
ProductCategoryGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductCategoryGroupByArgs);
exports.ProductCategoryGroupByArgs = ProductCategoryGroupByArgs;
let ProductCategoryGroupBy = class ProductCategoryGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryGroupBy.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductCategoryGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductCategoryGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryGroupBy.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCountAggregate, { nullable: true })
], ProductCategoryGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMinAggregate, { nullable: true })
], ProductCategoryGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMaxAggregate, { nullable: true })
], ProductCategoryGroupBy.prototype, "_max", void 0);
ProductCategoryGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCategoryGroupBy);
exports.ProductCategoryGroupBy = ProductCategoryGroupBy;
let ProductCategoryListRelationFilter = class ProductCategoryListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryListRelationFilter.prototype, "none", void 0);
ProductCategoryListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryListRelationFilter);
exports.ProductCategoryListRelationFilter = ProductCategoryListRelationFilter;
let ProductCategoryMaxAggregateInput = class ProductCategoryMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMaxAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMaxAggregateInput.prototype, "parentCategoryId", void 0);
ProductCategoryMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryMaxAggregateInput);
exports.ProductCategoryMaxAggregateInput = ProductCategoryMaxAggregateInput;
let ProductCategoryMaxAggregate = class ProductCategoryMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMaxAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMaxAggregate.prototype, "parentCategoryId", void 0);
ProductCategoryMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCategoryMaxAggregate);
exports.ProductCategoryMaxAggregate = ProductCategoryMaxAggregate;
let ProductCategoryMaxOrderByAggregateInput = class ProductCategoryMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMaxOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMaxOrderByAggregateInput.prototype, "parentCategoryId", void 0);
ProductCategoryMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryMaxOrderByAggregateInput);
exports.ProductCategoryMaxOrderByAggregateInput = ProductCategoryMaxOrderByAggregateInput;
let ProductCategoryMinAggregateInput = class ProductCategoryMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMinAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductCategoryMinAggregateInput.prototype, "parentCategoryId", void 0);
ProductCategoryMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryMinAggregateInput);
exports.ProductCategoryMinAggregateInput = ProductCategoryMinAggregateInput;
let ProductCategoryMinAggregate = class ProductCategoryMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMinAggregate.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryMinAggregate.prototype, "parentCategoryId", void 0);
ProductCategoryMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCategoryMinAggregate);
exports.ProductCategoryMinAggregate = ProductCategoryMinAggregate;
let ProductCategoryMinOrderByAggregateInput = class ProductCategoryMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMinOrderByAggregateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryMinOrderByAggregateInput.prototype, "parentCategoryId", void 0);
ProductCategoryMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryMinOrderByAggregateInput);
exports.ProductCategoryMinOrderByAggregateInput = ProductCategoryMinOrderByAggregateInput;
let ProductCategoryNullableRelationFilter = class ProductCategoryNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryNullableRelationFilter.prototype, "isNot", void 0);
ProductCategoryNullableRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryNullableRelationFilter);
exports.ProductCategoryNullableRelationFilter = ProductCategoryNullableRelationFilter;
let ProductCategoryOrderByRelationAggregateInput = class ProductCategoryOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByRelationAggregateInput.prototype, "_count", void 0);
ProductCategoryOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryOrderByRelationAggregateInput);
exports.ProductCategoryOrderByRelationAggregateInput = ProductCategoryOrderByRelationAggregateInput;
let ProductCategoryOrderByWithAggregationInput = class ProductCategoryOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCountOrderByAggregateInput, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMaxOrderByAggregateInput, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryMinOrderByAggregateInput, { nullable: true })
], ProductCategoryOrderByWithAggregationInput.prototype, "_min", void 0);
ProductCategoryOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryOrderByWithAggregationInput);
exports.ProductCategoryOrderByWithAggregationInput = ProductCategoryOrderByWithAggregationInput;
let ProductCategoryOrderByWithRelationInput = ProductCategoryOrderByWithRelationInput_1 = class ProductCategoryOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductOrderByRelationAggregateInput, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryOrderByWithRelationInput_1, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryOrderByRelationAggregateInput, { nullable: true })
], ProductCategoryOrderByWithRelationInput.prototype, "subCategories", void 0);
ProductCategoryOrderByWithRelationInput = ProductCategoryOrderByWithRelationInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryOrderByWithRelationInput);
exports.ProductCategoryOrderByWithRelationInput = ProductCategoryOrderByWithRelationInput;
let ProductCategoryRelationFilter = class ProductCategoryRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true })
], ProductCategoryRelationFilter.prototype, "isNot", void 0);
ProductCategoryRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryRelationFilter);
exports.ProductCategoryRelationFilter = ProductCategoryRelationFilter;
let ProductCategoryScalarWhereWithAggregatesInput = ProductCategoryScalarWhereWithAggregatesInput_1 = class ProductCategoryScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], ProductCategoryScalarWhereWithAggregatesInput.prototype, "parentCategoryId", void 0);
ProductCategoryScalarWhereWithAggregatesInput = ProductCategoryScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryScalarWhereWithAggregatesInput);
exports.ProductCategoryScalarWhereWithAggregatesInput = ProductCategoryScalarWhereWithAggregatesInput;
let ProductCategoryScalarWhereInput = ProductCategoryScalarWhereInput_1 = class ProductCategoryScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereInput_1], { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereInput_1], { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereInput_1], { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductCategoryScalarWhereInput.prototype, "parentCategoryId", void 0);
ProductCategoryScalarWhereInput = ProductCategoryScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryScalarWhereInput);
exports.ProductCategoryScalarWhereInput = ProductCategoryScalarWhereInput;
let ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = class ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutParentCategoryInput)
], ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
], ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateManyParentCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
], ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput.prototype, "connect", void 0);
ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput);
exports.ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput;
let ProductCategoryUncheckedCreateWithoutParentCategoryInput = class ProductCategoryUncheckedCreateWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, { nullable: true })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, { nullable: true })
], ProductCategoryUncheckedCreateWithoutParentCategoryInput.prototype, "subCategories", void 0);
ProductCategoryUncheckedCreateWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedCreateWithoutParentCategoryInput);
exports.ProductCategoryUncheckedCreateWithoutParentCategoryInput = ProductCategoryUncheckedCreateWithoutParentCategoryInput;
let ProductCategoryUncheckedCreateWithoutProductsInput = class ProductCategoryUncheckedCreateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, { nullable: true })
], ProductCategoryUncheckedCreateWithoutProductsInput.prototype, "subCategories", void 0);
ProductCategoryUncheckedCreateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedCreateWithoutProductsInput);
exports.ProductCategoryUncheckedCreateWithoutProductsInput = ProductCategoryUncheckedCreateWithoutProductsInput;
let ProductCategoryUncheckedCreateWithoutSubCategoriesInput = class ProductCategoryUncheckedCreateWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, { nullable: true })
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput.prototype, "products", void 0);
ProductCategoryUncheckedCreateWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedCreateWithoutSubCategoriesInput);
exports.ProductCategoryUncheckedCreateWithoutSubCategoriesInput = ProductCategoryUncheckedCreateWithoutSubCategoriesInput;
let ProductCategoryUncheckedCreateInput = class ProductCategoryUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategoryUncheckedCreateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductCategoryUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryUncheckedCreateInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, { nullable: true })
], ProductCategoryUncheckedCreateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUncheckedCreateNestedManyWithoutParentCategoryInput, { nullable: true })
], ProductCategoryUncheckedCreateInput.prototype, "subCategories", void 0);
ProductCategoryUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedCreateInput);
exports.ProductCategoryUncheckedCreateInput = ProductCategoryUncheckedCreateInput;
let ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = class ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutParentCategoryInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateManyParentCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryScalarWhereInput)
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput.prototype, "deleteMany", void 0);
ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput);
exports.ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput;
let ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput = class ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput.prototype, "updatedAt", void 0);
ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput);
exports.ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput = ProductCategoryUncheckedUpdateManyWithoutParentCategoryInput;
let ProductCategoryUncheckedUpdateManyInput = class ProductCategoryUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateManyInput.prototype, "parentCategoryId", void 0);
ProductCategoryUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateManyInput);
exports.ProductCategoryUncheckedUpdateManyInput = ProductCategoryUncheckedUpdateManyInput;
let ProductCategoryUncheckedUpdateWithoutParentCategoryInput = class ProductCategoryUncheckedUpdateWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput.prototype, "subCategories", void 0);
ProductCategoryUncheckedUpdateWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateWithoutParentCategoryInput);
exports.ProductCategoryUncheckedUpdateWithoutParentCategoryInput = ProductCategoryUncheckedUpdateWithoutParentCategoryInput;
let ProductCategoryUncheckedUpdateWithoutProductsInput = class ProductCategoryUncheckedUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutProductsInput.prototype, "subCategories", void 0);
ProductCategoryUncheckedUpdateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateWithoutProductsInput);
exports.ProductCategoryUncheckedUpdateWithoutProductsInput = ProductCategoryUncheckedUpdateWithoutProductsInput;
let ProductCategoryUncheckedUpdateWithoutSubCategoriesInput = class ProductCategoryUncheckedUpdateWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, { nullable: true })
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput.prototype, "products", void 0);
ProductCategoryUncheckedUpdateWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateWithoutSubCategoriesInput);
exports.ProductCategoryUncheckedUpdateWithoutSubCategoriesInput = ProductCategoryUncheckedUpdateWithoutSubCategoriesInput;
let ProductCategoryUncheckedUpdateInput = class ProductCategoryUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput, { nullable: true })
], ProductCategoryUncheckedUpdateInput.prototype, "subCategories", void 0);
ProductCategoryUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUncheckedUpdateInput);
exports.ProductCategoryUncheckedUpdateInput = ProductCategoryUncheckedUpdateInput;
let ProductCategoryUpdateManyMutationInput = class ProductCategoryUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateManyMutationInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateManyMutationInput.prototype, "updatedAt", void 0);
ProductCategoryUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateManyMutationInput);
exports.ProductCategoryUpdateManyMutationInput = ProductCategoryUpdateManyMutationInput;
let ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput = class ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryScalarWhereInput)
], ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateManyMutationInput)
], ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput.prototype, "data", void 0);
ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput);
exports.ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput = ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput;
let ProductCategoryUpdateManyWithoutParentCategoryNestedInput = class ProductCategoryUpdateManyWithoutParentCategoryNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutParentCategoryInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryCreateOrConnectWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutParentCategoryInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateManyParentCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateManyParentCategoryInputEnvelope)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateManyWithWhereWithoutParentCategoryInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryScalarWhereInput)
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "deleteMany", void 0);
ProductCategoryUpdateManyWithoutParentCategoryNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateManyWithoutParentCategoryNestedInput);
exports.ProductCategoryUpdateManyWithoutParentCategoryNestedInput = ProductCategoryUpdateManyWithoutParentCategoryNestedInput;
let ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = class ProductCategoryUpdateOneRequiredWithoutProductsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutProductsInput)
], ProductCategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateOrConnectWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutProductsInput)
], ProductCategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpsertWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpsertWithoutProductsInput)
], ProductCategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateToOneWithWhereWithoutProductsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateToOneWithWhereWithoutProductsInput)
], ProductCategoryUpdateOneRequiredWithoutProductsNestedInput.prototype, "update", void 0);
ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateOneRequiredWithoutProductsNestedInput);
exports.ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = ProductCategoryUpdateOneRequiredWithoutProductsNestedInput;
let ProductCategoryUpdateOneWithoutSubCategoriesNestedInput = class ProductCategoryUpdateOneWithoutSubCategoriesNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutSubCategoriesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutSubCategoriesInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateOrConnectWithoutSubCategoriesInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpsertWithoutSubCategoriesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpsertWithoutSubCategoriesInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput)
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput.prototype, "update", void 0);
ProductCategoryUpdateOneWithoutSubCategoriesNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateOneWithoutSubCategoriesNestedInput);
exports.ProductCategoryUpdateOneWithoutSubCategoriesNestedInput = ProductCategoryUpdateOneWithoutSubCategoriesNestedInput;
let ProductCategoryUpdateToOneWithWhereWithoutProductsInput = class ProductCategoryUpdateToOneWithWhereWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryUpdateToOneWithWhereWithoutProductsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithoutProductsInput)
], ProductCategoryUpdateToOneWithWhereWithoutProductsInput.prototype, "data", void 0);
ProductCategoryUpdateToOneWithWhereWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateToOneWithWhereWithoutProductsInput);
exports.ProductCategoryUpdateToOneWithWhereWithoutProductsInput = ProductCategoryUpdateToOneWithWhereWithoutProductsInput;
let ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = class ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateWithoutSubCategoriesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithoutSubCategoriesInput)
], ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput.prototype, "data", void 0);
ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput);
exports.ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = ProductCategoryUpdateToOneWithWhereWithoutSubCategoriesInput;
let ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = class ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateWithoutParentCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithoutParentCategoryInput)
], ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput.prototype, "data", void 0);
ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput);
exports.ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = ProductCategoryUpdateWithWhereUniqueWithoutParentCategoryInput;
let ProductCategoryUpdateWithoutParentCategoryInput = class ProductCategoryUpdateWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutCategoryNestedInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, { nullable: true })
], ProductCategoryUpdateWithoutParentCategoryInput.prototype, "subCategories", void 0);
ProductCategoryUpdateWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateWithoutParentCategoryInput);
exports.ProductCategoryUpdateWithoutParentCategoryInput = ProductCategoryUpdateWithoutParentCategoryInput;
let ProductCategoryUpdateWithoutProductsInput = class ProductCategoryUpdateWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneWithoutSubCategoriesNestedInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, { nullable: true })
], ProductCategoryUpdateWithoutProductsInput.prototype, "subCategories", void 0);
ProductCategoryUpdateWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateWithoutProductsInput);
exports.ProductCategoryUpdateWithoutProductsInput = ProductCategoryUpdateWithoutProductsInput;
let ProductCategoryUpdateWithoutSubCategoriesInput = class ProductCategoryUpdateWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutCategoryNestedInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneWithoutSubCategoriesNestedInput, { nullable: true })
], ProductCategoryUpdateWithoutSubCategoriesInput.prototype, "parentCategory", void 0);
ProductCategoryUpdateWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateWithoutSubCategoriesInput);
exports.ProductCategoryUpdateWithoutSubCategoriesInput = ProductCategoryUpdateWithoutSubCategoriesInput;
let ProductCategoryUpdateInput = class ProductCategoryUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateManyWithoutCategoryNestedInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateOneWithoutSubCategoriesNestedInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateManyWithoutParentCategoryNestedInput, { nullable: true })
], ProductCategoryUpdateInput.prototype, "subCategories", void 0);
ProductCategoryUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpdateInput);
exports.ProductCategoryUpdateInput = ProductCategoryUpdateInput;
let ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = class ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateWithoutParentCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithoutParentCategoryInput)
], ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutParentCategoryInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutParentCategoryInput)
], ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput.prototype, "create", void 0);
ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput);
exports.ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = ProductCategoryUpsertWithWhereUniqueWithoutParentCategoryInput;
let ProductCategoryUpsertWithoutProductsInput = class ProductCategoryUpsertWithoutProductsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithoutProductsInput)
], ProductCategoryUpsertWithoutProductsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutProductsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutProductsInput)
], ProductCategoryUpsertWithoutProductsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryUpsertWithoutProductsInput.prototype, "where", void 0);
ProductCategoryUpsertWithoutProductsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpsertWithoutProductsInput);
exports.ProductCategoryUpsertWithoutProductsInput = ProductCategoryUpsertWithoutProductsInput;
let ProductCategoryUpsertWithoutSubCategoriesInput = class ProductCategoryUpsertWithoutSubCategoriesInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateWithoutSubCategoriesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateWithoutSubCategoriesInput)
], ProductCategoryUpsertWithoutSubCategoriesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateWithoutSubCategoriesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateWithoutSubCategoriesInput)
], ProductCategoryUpsertWithoutSubCategoriesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], ProductCategoryUpsertWithoutSubCategoriesInput.prototype, "where", void 0);
ProductCategoryUpsertWithoutSubCategoriesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryUpsertWithoutSubCategoriesInput);
exports.ProductCategoryUpsertWithoutSubCategoriesInput = ProductCategoryUpsertWithoutSubCategoriesInput;
let ProductCategoryWhereUniqueInput = class ProductCategoryWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereInput], { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereInput], { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereInput], { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryNullableRelationFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryListRelationFilter, { nullable: true })
], ProductCategoryWhereUniqueInput.prototype, "subCategories", void 0);
ProductCategoryWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryWhereUniqueInput);
exports.ProductCategoryWhereUniqueInput = ProductCategoryWhereUniqueInput;
let ProductCategoryWhereInput = ProductCategoryWhereInput_1 = class ProductCategoryWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereInput_1], { nullable: true })
], ProductCategoryWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereInput_1], { nullable: true })
], ProductCategoryWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategoryWhereInput_1], { nullable: true })
], ProductCategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductListRelationFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryNullableRelationFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryListRelationFilter, { nullable: true })
], ProductCategoryWhereInput.prototype, "subCategories", void 0);
ProductCategoryWhereInput = ProductCategoryWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductCategoryWhereInput);
exports.ProductCategoryWhereInput = ProductCategoryWhereInput;
let ProductCategory = ProductCategory_1 = class ProductCategory {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategory.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategory.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductCategory.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductCategory.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductCategory.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductCategory.prototype, "parentCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Product], { nullable: true })
], ProductCategory.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategory_1, { nullable: true })
], ProductCategory.prototype, "parentCategory", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductCategory_1], { nullable: true })
], ProductCategory.prototype, "subCategories", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCount, { nullable: false })
], ProductCategory.prototype, "_count", void 0);
ProductCategory = ProductCategory_1 = __decorate([
    (0, graphql_2.ObjectType)()
], ProductCategory);
exports.ProductCategory = ProductCategory;
let UpdateManyProductCategoryArgs = class UpdateManyProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateManyMutationInput)
], UpdateManyProductCategoryArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereInput)
], UpdateManyProductCategoryArgs.prototype, "where", void 0);
UpdateManyProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyProductCategoryArgs);
exports.UpdateManyProductCategoryArgs = UpdateManyProductCategoryArgs;
let UpdateOneProductCategoryArgs = class UpdateOneProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateInput)
], UpdateOneProductCategoryArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], UpdateOneProductCategoryArgs.prototype, "where", void 0);
UpdateOneProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneProductCategoryArgs);
exports.UpdateOneProductCategoryArgs = UpdateOneProductCategoryArgs;
let UpsertOneProductCategoryArgs = class UpsertOneProductCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryWhereUniqueInput)
], UpsertOneProductCategoryArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryCreateInput)
], UpsertOneProductCategoryArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCategoryUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductCategoryUpdateInput)
], UpsertOneProductCategoryArgs.prototype, "update", void 0);
UpsertOneProductCategoryArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneProductCategoryArgs);
exports.UpsertOneProductCategoryArgs = UpsertOneProductCategoryArgs;
let AggregateProductVariant = class AggregateProductVariant {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCountAggregate, { nullable: true })
], AggregateProductVariant.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantAvgAggregate, { nullable: true })
], AggregateProductVariant.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantSumAggregate, { nullable: true })
], AggregateProductVariant.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMinAggregate, { nullable: true })
], AggregateProductVariant.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMaxAggregate, { nullable: true })
], AggregateProductVariant.prototype, "_max", void 0);
AggregateProductVariant = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProductVariant);
exports.AggregateProductVariant = AggregateProductVariant;
let CreateManyProductVariantArgs = class CreateManyProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateManyInput)
], CreateManyProductVariantArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyProductVariantArgs.prototype, "skipDuplicates", void 0);
CreateManyProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyProductVariantArgs);
exports.CreateManyProductVariantArgs = CreateManyProductVariantArgs;
let CreateOneProductVariantArgs = class CreateOneProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateInput)
], CreateOneProductVariantArgs.prototype, "data", void 0);
CreateOneProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneProductVariantArgs);
exports.CreateOneProductVariantArgs = CreateOneProductVariantArgs;
let DeleteManyProductVariantArgs = class DeleteManyProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], DeleteManyProductVariantArgs.prototype, "where", void 0);
DeleteManyProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyProductVariantArgs);
exports.DeleteManyProductVariantArgs = DeleteManyProductVariantArgs;
let DeleteOneProductVariantArgs = class DeleteOneProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], DeleteOneProductVariantArgs.prototype, "where", void 0);
DeleteOneProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneProductVariantArgs);
exports.DeleteOneProductVariantArgs = DeleteOneProductVariantArgs;
let FindFirstProductVariantOrThrowArgs = class FindFirstProductVariantOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], FindFirstProductVariantOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOrderByWithRelationInput], { nullable: true })
], FindFirstProductVariantOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: true })
], FindFirstProductVariantOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarFieldEnum], { nullable: true })
], FindFirstProductVariantOrThrowArgs.prototype, "distinct", void 0);
FindFirstProductVariantOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductVariantOrThrowArgs);
exports.FindFirstProductVariantOrThrowArgs = FindFirstProductVariantOrThrowArgs;
let FindFirstProductVariantArgs = class FindFirstProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], FindFirstProductVariantArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOrderByWithRelationInput], { nullable: true })
], FindFirstProductVariantArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: true })
], FindFirstProductVariantArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarFieldEnum], { nullable: true })
], FindFirstProductVariantArgs.prototype, "distinct", void 0);
FindFirstProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductVariantArgs);
exports.FindFirstProductVariantArgs = FindFirstProductVariantArgs;
let FindManyProductVariantArgs = class FindManyProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], FindManyProductVariantArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOrderByWithRelationInput], { nullable: true })
], FindManyProductVariantArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: true })
], FindManyProductVariantArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductVariantArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductVariantArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarFieldEnum], { nullable: true })
], FindManyProductVariantArgs.prototype, "distinct", void 0);
FindManyProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyProductVariantArgs);
exports.FindManyProductVariantArgs = FindManyProductVariantArgs;
let FindUniqueProductVariantOrThrowArgs = class FindUniqueProductVariantOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], FindUniqueProductVariantOrThrowArgs.prototype, "where", void 0);
FindUniqueProductVariantOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductVariantOrThrowArgs);
exports.FindUniqueProductVariantOrThrowArgs = FindUniqueProductVariantOrThrowArgs;
let FindUniqueProductVariantArgs = class FindUniqueProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], FindUniqueProductVariantArgs.prototype, "where", void 0);
FindUniqueProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductVariantArgs);
exports.FindUniqueProductVariantArgs = FindUniqueProductVariantArgs;
let ProductVariantAggregateArgs = class ProductVariantAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], ProductVariantAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOrderByWithRelationInput], { nullable: true })
], ProductVariantAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: true })
], ProductVariantAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCountAggregateInput, { nullable: true })
], ProductVariantAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantAvgAggregateInput, { nullable: true })
], ProductVariantAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantSumAggregateInput, { nullable: true })
], ProductVariantAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMinAggregateInput, { nullable: true })
], ProductVariantAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMaxAggregateInput, { nullable: true })
], ProductVariantAggregateArgs.prototype, "_max", void 0);
ProductVariantAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductVariantAggregateArgs);
exports.ProductVariantAggregateArgs = ProductVariantAggregateArgs;
let ProductVariantAvgAggregateInput = class ProductVariantAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantAvgAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantAvgAggregateInput.prototype, "price", void 0);
ProductVariantAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantAvgAggregateInput);
exports.ProductVariantAvgAggregateInput = ProductVariantAvgAggregateInput;
let ProductVariantAvgAggregate = class ProductVariantAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], ProductVariantAvgAggregate.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], ProductVariantAvgAggregate.prototype, "price", void 0);
ProductVariantAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantAvgAggregate);
exports.ProductVariantAvgAggregate = ProductVariantAvgAggregate;
let ProductVariantAvgOrderByAggregateInput = class ProductVariantAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantAvgOrderByAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantAvgOrderByAggregateInput.prototype, "price", void 0);
ProductVariantAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantAvgOrderByAggregateInput);
exports.ProductVariantAvgOrderByAggregateInput = ProductVariantAvgOrderByAggregateInput;
let ProductVariantCountAggregateInput = class ProductVariantCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCountAggregateInput.prototype, "_all", void 0);
ProductVariantCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCountAggregateInput);
exports.ProductVariantCountAggregateInput = ProductVariantCountAggregateInput;
let ProductVariantCountAggregate = class ProductVariantCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCountAggregate.prototype, "_all", void 0);
ProductVariantCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantCountAggregate);
exports.ProductVariantCountAggregate = ProductVariantCountAggregate;
let ProductVariantCountOrderByAggregateInput = class ProductVariantCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantCountOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductVariantCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCountOrderByAggregateInput);
exports.ProductVariantCountOrderByAggregateInput = ProductVariantCountOrderByAggregateInput;
let ProductVariantCount = class ProductVariantCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCount.prototype, "options", void 0);
ProductVariantCount = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantCount);
exports.ProductVariantCount = ProductVariantCount;
let ProductVariantCreateManyProductInputEnvelope = class ProductVariantCreateManyProductInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateManyProductInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateManyProductInput)
], ProductVariantCreateManyProductInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantCreateManyProductInputEnvelope.prototype, "skipDuplicates", void 0);
ProductVariantCreateManyProductInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateManyProductInputEnvelope);
exports.ProductVariantCreateManyProductInputEnvelope = ProductVariantCreateManyProductInputEnvelope;
let ProductVariantCreateManyProductInput = class ProductVariantCreateManyProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantCreateManyProductInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantCreateManyProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCreateManyProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantCreateManyProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateManyProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateManyProductInput.prototype, "updatedAt", void 0);
ProductVariantCreateManyProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateManyProductInput);
exports.ProductVariantCreateManyProductInput = ProductVariantCreateManyProductInput;
let ProductVariantCreateManyInput = class ProductVariantCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCreateManyInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantCreateManyInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantCreateManyInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateManyInput.prototype, "updatedAt", void 0);
ProductVariantCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateManyInput);
exports.ProductVariantCreateManyInput = ProductVariantCreateManyInput;
let ProductVariantCreateNestedManyWithoutProductInput = class ProductVariantCreateNestedManyWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutProductInput)
], ProductVariantCreateNestedManyWithoutProductInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateOrConnectWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateOrConnectWithoutProductInput)
], ProductVariantCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateManyProductInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateManyProductInputEnvelope)
], ProductVariantCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
ProductVariantCreateNestedManyWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateNestedManyWithoutProductInput);
exports.ProductVariantCreateNestedManyWithoutProductInput = ProductVariantCreateNestedManyWithoutProductInput;
let ProductVariantCreateNestedOneWithoutOptionsInput = class ProductVariantCreateNestedOneWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateWithoutOptionsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutOptionsInput)
], ProductVariantCreateNestedOneWithoutOptionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateOrConnectWithoutOptionsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateOrConnectWithoutOptionsInput)
], ProductVariantCreateNestedOneWithoutOptionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantCreateNestedOneWithoutOptionsInput.prototype, "connect", void 0);
ProductVariantCreateNestedOneWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateNestedOneWithoutOptionsInput);
exports.ProductVariantCreateNestedOneWithoutOptionsInput = ProductVariantCreateNestedOneWithoutOptionsInput;
let ProductVariantCreateOrConnectWithoutOptionsInput = class ProductVariantCreateOrConnectWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantCreateOrConnectWithoutOptionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateWithoutOptionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutOptionsInput)
], ProductVariantCreateOrConnectWithoutOptionsInput.prototype, "create", void 0);
ProductVariantCreateOrConnectWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateOrConnectWithoutOptionsInput);
exports.ProductVariantCreateOrConnectWithoutOptionsInput = ProductVariantCreateOrConnectWithoutOptionsInput;
let ProductVariantCreateOrConnectWithoutProductInput = class ProductVariantCreateOrConnectWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantCreateOrConnectWithoutProductInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateWithoutProductInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutProductInput)
], ProductVariantCreateOrConnectWithoutProductInput.prototype, "create", void 0);
ProductVariantCreateOrConnectWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateOrConnectWithoutProductInput);
exports.ProductVariantCreateOrConnectWithoutProductInput = ProductVariantCreateOrConnectWithoutProductInput;
let ProductVariantCreateWithoutOptionsInput = class ProductVariantCreateWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantCreateWithoutOptionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantCreateWithoutOptionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCreateWithoutOptionsInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantCreateWithoutOptionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateWithoutOptionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateWithoutOptionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedOneWithoutVariantsInput, { nullable: false })
], ProductVariantCreateWithoutOptionsInput.prototype, "product", void 0);
ProductVariantCreateWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateWithoutOptionsInput);
exports.ProductVariantCreateWithoutOptionsInput = ProductVariantCreateWithoutOptionsInput;
let ProductVariantCreateWithoutProductInput = class ProductVariantCreateWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantCreateWithoutProductInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantCreateWithoutProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCreateWithoutProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantCreateWithoutProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateWithoutProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateWithoutProductInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateNestedManyWithoutProductVariantInput, { nullable: true })
], ProductVariantCreateWithoutProductInput.prototype, "options", void 0);
ProductVariantCreateWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateWithoutProductInput);
exports.ProductVariantCreateWithoutProductInput = ProductVariantCreateWithoutProductInput;
let ProductVariantCreateInput = class ProductVariantCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantCreateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantCreateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductCreateNestedOneWithoutVariantsInput, { nullable: false })
], ProductVariantCreateInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateNestedManyWithoutProductVariantInput, { nullable: true })
], ProductVariantCreateInput.prototype, "options", void 0);
ProductVariantCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantCreateInput);
exports.ProductVariantCreateInput = ProductVariantCreateInput;
let ProductVariantGroupByArgs = class ProductVariantGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], ProductVariantGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOrderByWithAggregationInput], { nullable: true })
], ProductVariantGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarFieldEnum], { nullable: false })
], ProductVariantGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantScalarWhereWithAggregatesInput, { nullable: true })
], ProductVariantGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCountAggregateInput, { nullable: true })
], ProductVariantGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantAvgAggregateInput, { nullable: true })
], ProductVariantGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantSumAggregateInput, { nullable: true })
], ProductVariantGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMinAggregateInput, { nullable: true })
], ProductVariantGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMaxAggregateInput, { nullable: true })
], ProductVariantGroupByArgs.prototype, "_max", void 0);
ProductVariantGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductVariantGroupByArgs);
exports.ProductVariantGroupByArgs = ProductVariantGroupByArgs;
let ProductVariantGroupBy = class ProductVariantGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantGroupBy.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantGroupBy.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantGroupBy.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariantGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariantGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCountAggregate, { nullable: true })
], ProductVariantGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantAvgAggregate, { nullable: true })
], ProductVariantGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantSumAggregate, { nullable: true })
], ProductVariantGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMinAggregate, { nullable: true })
], ProductVariantGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMaxAggregate, { nullable: true })
], ProductVariantGroupBy.prototype, "_max", void 0);
ProductVariantGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantGroupBy);
exports.ProductVariantGroupBy = ProductVariantGroupBy;
let ProductVariantListRelationFilter = class ProductVariantListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true })
], ProductVariantListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true })
], ProductVariantListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true })
], ProductVariantListRelationFilter.prototype, "none", void 0);
ProductVariantListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantListRelationFilter);
exports.ProductVariantListRelationFilter = ProductVariantListRelationFilter;
let ProductVariantMaxAggregateInput = class ProductVariantMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMaxAggregateInput.prototype, "updatedAt", void 0);
ProductVariantMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantMaxAggregateInput);
exports.ProductVariantMaxAggregateInput = ProductVariantMaxAggregateInput;
let ProductVariantMaxAggregate = class ProductVariantMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantMaxAggregate.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantMaxAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantMaxAggregate.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantMaxAggregate.prototype, "updatedAt", void 0);
ProductVariantMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantMaxAggregate);
exports.ProductVariantMaxAggregate = ProductVariantMaxAggregate;
let ProductVariantMaxOrderByAggregateInput = class ProductVariantMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductVariantMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantMaxOrderByAggregateInput);
exports.ProductVariantMaxOrderByAggregateInput = ProductVariantMaxOrderByAggregateInput;
let ProductVariantMinAggregateInput = class ProductVariantMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantMinAggregateInput.prototype, "updatedAt", void 0);
ProductVariantMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantMinAggregateInput);
exports.ProductVariantMinAggregateInput = ProductVariantMinAggregateInput;
let ProductVariantMinAggregate = class ProductVariantMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantMinAggregate.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantMinAggregate.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantMinAggregate.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantMinAggregate.prototype, "updatedAt", void 0);
ProductVariantMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantMinAggregate);
exports.ProductVariantMinAggregate = ProductVariantMinAggregate;
let ProductVariantMinOrderByAggregateInput = class ProductVariantMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantMinOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductVariantMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantMinOrderByAggregateInput);
exports.ProductVariantMinOrderByAggregateInput = ProductVariantMinOrderByAggregateInput;
let ProductVariantOrderByRelationAggregateInput = class ProductVariantOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByRelationAggregateInput.prototype, "_count", void 0);
ProductVariantOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOrderByRelationAggregateInput);
exports.ProductVariantOrderByRelationAggregateInput = ProductVariantOrderByRelationAggregateInput;
let ProductVariantOrderByWithAggregationInput = class ProductVariantOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCountOrderByAggregateInput, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantAvgOrderByAggregateInput, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMaxOrderByAggregateInput, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantMinOrderByAggregateInput, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantSumOrderByAggregateInput, { nullable: true })
], ProductVariantOrderByWithAggregationInput.prototype, "_sum", void 0);
ProductVariantOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOrderByWithAggregationInput);
exports.ProductVariantOrderByWithAggregationInput = ProductVariantOrderByWithAggregationInput;
let ProductVariantOrderByWithRelationInput = class ProductVariantOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductOrderByWithRelationInput, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionOrderByRelationAggregateInput, { nullable: true })
], ProductVariantOrderByWithRelationInput.prototype, "options", void 0);
ProductVariantOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOrderByWithRelationInput);
exports.ProductVariantOrderByWithRelationInput = ProductVariantOrderByWithRelationInput;
let ProductVariantRelationFilter = class ProductVariantRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true })
], ProductVariantRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true })
], ProductVariantRelationFilter.prototype, "isNot", void 0);
ProductVariantRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantRelationFilter);
exports.ProductVariantRelationFilter = ProductVariantRelationFilter;
let ProductVariantScalarWhereWithAggregatesInput = ProductVariantScalarWhereWithAggregatesInput_1 = class ProductVariantScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductVariantScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
ProductVariantScalarWhereWithAggregatesInput = ProductVariantScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantScalarWhereWithAggregatesInput);
exports.ProductVariantScalarWhereWithAggregatesInput = ProductVariantScalarWhereWithAggregatesInput;
let ProductVariantScalarWhereInput = ProductVariantScalarWhereInput_1 = class ProductVariantScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereInput_1], { nullable: true })
], ProductVariantScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereInput_1], { nullable: true })
], ProductVariantScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereInput_1], { nullable: true })
], ProductVariantScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantScalarWhereInput.prototype, "updatedAt", void 0);
ProductVariantScalarWhereInput = ProductVariantScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantScalarWhereInput);
exports.ProductVariantScalarWhereInput = ProductVariantScalarWhereInput;
let ProductVariantSumAggregateInput = class ProductVariantSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantSumAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantSumAggregateInput.prototype, "price", void 0);
ProductVariantSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantSumAggregateInput);
exports.ProductVariantSumAggregateInput = ProductVariantSumAggregateInput;
let ProductVariantSumAggregate = class ProductVariantSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantSumAggregate.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantSumAggregate.prototype, "price", void 0);
ProductVariantSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantSumAggregate);
exports.ProductVariantSumAggregate = ProductVariantSumAggregate;
let ProductVariantSumOrderByAggregateInput = class ProductVariantSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantSumOrderByAggregateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantSumOrderByAggregateInput.prototype, "price", void 0);
ProductVariantSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantSumOrderByAggregateInput);
exports.ProductVariantSumOrderByAggregateInput = ProductVariantSumOrderByAggregateInput;
let ProductVariantUncheckedCreateNestedManyWithoutProductInput = class ProductVariantUncheckedCreateNestedManyWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutProductInput)
], ProductVariantUncheckedCreateNestedManyWithoutProductInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateOrConnectWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateOrConnectWithoutProductInput)
], ProductVariantUncheckedCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateManyProductInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateManyProductInputEnvelope)
], ProductVariantUncheckedCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUncheckedCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
ProductVariantUncheckedCreateNestedManyWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedCreateNestedManyWithoutProductInput);
exports.ProductVariantUncheckedCreateNestedManyWithoutProductInput = ProductVariantUncheckedCreateNestedManyWithoutProductInput;
let ProductVariantUncheckedCreateWithoutOptionsInput = class ProductVariantUncheckedCreateWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantUncheckedCreateWithoutOptionsInput.prototype, "updatedAt", void 0);
ProductVariantUncheckedCreateWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedCreateWithoutOptionsInput);
exports.ProductVariantUncheckedCreateWithoutOptionsInput = ProductVariantUncheckedCreateWithoutOptionsInput;
let ProductVariantUncheckedCreateWithoutProductInput = class ProductVariantUncheckedCreateWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput, { nullable: true })
], ProductVariantUncheckedCreateWithoutProductInput.prototype, "options", void 0);
ProductVariantUncheckedCreateWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedCreateWithoutProductInput);
exports.ProductVariantUncheckedCreateWithoutProductInput = ProductVariantUncheckedCreateWithoutProductInput;
let ProductVariantUncheckedCreateInput = class ProductVariantUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantUncheckedCreateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantUncheckedCreateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantUncheckedCreateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput, { nullable: true })
], ProductVariantUncheckedCreateInput.prototype, "options", void 0);
ProductVariantUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedCreateInput);
exports.ProductVariantUncheckedCreateInput = ProductVariantUncheckedCreateInput;
let ProductVariantUncheckedUpdateManyWithoutProductNestedInput = class ProductVariantUncheckedUpdateManyWithoutProductNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutProductInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateOrConnectWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateOrConnectWithoutProductInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantUpsertWithWhereUniqueWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpsertWithWhereUniqueWithoutProductInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateManyProductInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateManyProductInputEnvelope)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantUpdateWithWhereUniqueWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateWithWhereUniqueWithoutProductInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantUpdateManyWithWhereWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateManyWithWhereWithoutProductInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantScalarWhereInput)
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput.prototype, "deleteMany", void 0);
ProductVariantUncheckedUpdateManyWithoutProductNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedUpdateManyWithoutProductNestedInput);
exports.ProductVariantUncheckedUpdateManyWithoutProductNestedInput = ProductVariantUncheckedUpdateManyWithoutProductNestedInput;
let ProductVariantUncheckedUpdateManyWithoutProductInput = class ProductVariantUncheckedUpdateManyWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyWithoutProductInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyWithoutProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyWithoutProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyWithoutProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyWithoutProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyWithoutProductInput.prototype, "updatedAt", void 0);
ProductVariantUncheckedUpdateManyWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedUpdateManyWithoutProductInput);
exports.ProductVariantUncheckedUpdateManyWithoutProductInput = ProductVariantUncheckedUpdateManyWithoutProductInput;
let ProductVariantUncheckedUpdateManyInput = class ProductVariantUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
ProductVariantUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedUpdateManyInput);
exports.ProductVariantUncheckedUpdateManyInput = ProductVariantUncheckedUpdateManyInput;
let ProductVariantUncheckedUpdateWithoutOptionsInput = class ProductVariantUncheckedUpdateWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutOptionsInput.prototype, "updatedAt", void 0);
ProductVariantUncheckedUpdateWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedUpdateWithoutOptionsInput);
exports.ProductVariantUncheckedUpdateWithoutOptionsInput = ProductVariantUncheckedUpdateWithoutOptionsInput;
let ProductVariantUncheckedUpdateWithoutProductInput = class ProductVariantUncheckedUpdateWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput, { nullable: true })
], ProductVariantUncheckedUpdateWithoutProductInput.prototype, "options", void 0);
ProductVariantUncheckedUpdateWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedUpdateWithoutProductInput);
exports.ProductVariantUncheckedUpdateWithoutProductInput = ProductVariantUncheckedUpdateWithoutProductInput;
let ProductVariantUncheckedUpdateInput = class ProductVariantUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput, { nullable: true })
], ProductVariantUncheckedUpdateInput.prototype, "options", void 0);
ProductVariantUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUncheckedUpdateInput);
exports.ProductVariantUncheckedUpdateInput = ProductVariantUncheckedUpdateInput;
let ProductVariantUpdateManyMutationInput = class ProductVariantUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateManyMutationInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateManyMutationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateManyMutationInput.prototype, "updatedAt", void 0);
ProductVariantUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateManyMutationInput);
exports.ProductVariantUpdateManyMutationInput = ProductVariantUpdateManyMutationInput;
let ProductVariantUpdateManyWithWhereWithoutProductInput = class ProductVariantUpdateManyWithWhereWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantScalarWhereInput)
], ProductVariantUpdateManyWithWhereWithoutProductInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateManyMutationInput)
], ProductVariantUpdateManyWithWhereWithoutProductInput.prototype, "data", void 0);
ProductVariantUpdateManyWithWhereWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateManyWithWhereWithoutProductInput);
exports.ProductVariantUpdateManyWithWhereWithoutProductInput = ProductVariantUpdateManyWithWhereWithoutProductInput;
let ProductVariantUpdateManyWithoutProductNestedInput = class ProductVariantUpdateManyWithoutProductNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutProductInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantCreateOrConnectWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateOrConnectWithoutProductInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantUpsertWithWhereUniqueWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpsertWithWhereUniqueWithoutProductInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateManyProductInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateManyProductInputEnvelope)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantUpdateWithWhereUniqueWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateWithWhereUniqueWithoutProductInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantUpdateManyWithWhereWithoutProductInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateManyWithWhereWithoutProductInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantScalarWhereInput)
], ProductVariantUpdateManyWithoutProductNestedInput.prototype, "deleteMany", void 0);
ProductVariantUpdateManyWithoutProductNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateManyWithoutProductNestedInput);
exports.ProductVariantUpdateManyWithoutProductNestedInput = ProductVariantUpdateManyWithoutProductNestedInput;
let ProductVariantUpdateOneRequiredWithoutOptionsNestedInput = class ProductVariantUpdateOneRequiredWithoutOptionsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateWithoutOptionsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutOptionsInput)
], ProductVariantUpdateOneRequiredWithoutOptionsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateOrConnectWithoutOptionsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateOrConnectWithoutOptionsInput)
], ProductVariantUpdateOneRequiredWithoutOptionsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpsertWithoutOptionsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpsertWithoutOptionsInput)
], ProductVariantUpdateOneRequiredWithoutOptionsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpdateOneRequiredWithoutOptionsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateToOneWithWhereWithoutOptionsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateToOneWithWhereWithoutOptionsInput)
], ProductVariantUpdateOneRequiredWithoutOptionsNestedInput.prototype, "update", void 0);
ProductVariantUpdateOneRequiredWithoutOptionsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateOneRequiredWithoutOptionsNestedInput);
exports.ProductVariantUpdateOneRequiredWithoutOptionsNestedInput = ProductVariantUpdateOneRequiredWithoutOptionsNestedInput;
let ProductVariantUpdateToOneWithWhereWithoutOptionsInput = class ProductVariantUpdateToOneWithWhereWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], ProductVariantUpdateToOneWithWhereWithoutOptionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateWithoutOptionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateWithoutOptionsInput)
], ProductVariantUpdateToOneWithWhereWithoutOptionsInput.prototype, "data", void 0);
ProductVariantUpdateToOneWithWhereWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateToOneWithWhereWithoutOptionsInput);
exports.ProductVariantUpdateToOneWithWhereWithoutOptionsInput = ProductVariantUpdateToOneWithWhereWithoutOptionsInput;
let ProductVariantUpdateWithWhereUniqueWithoutProductInput = class ProductVariantUpdateWithWhereUniqueWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateWithoutProductInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateWithoutProductInput)
], ProductVariantUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
ProductVariantUpdateWithWhereUniqueWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateWithWhereUniqueWithoutProductInput);
exports.ProductVariantUpdateWithWhereUniqueWithoutProductInput = ProductVariantUpdateWithWhereUniqueWithoutProductInput;
let ProductVariantUpdateWithoutOptionsInput = class ProductVariantUpdateWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateOneRequiredWithoutVariantsNestedInput, { nullable: true })
], ProductVariantUpdateWithoutOptionsInput.prototype, "product", void 0);
ProductVariantUpdateWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateWithoutOptionsInput);
exports.ProductVariantUpdateWithoutOptionsInput = ProductVariantUpdateWithoutOptionsInput;
let ProductVariantUpdateWithoutProductInput = class ProductVariantUpdateWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateManyWithoutProductVariantNestedInput, { nullable: true })
], ProductVariantUpdateWithoutProductInput.prototype, "options", void 0);
ProductVariantUpdateWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateWithoutProductInput);
exports.ProductVariantUpdateWithoutProductInput = ProductVariantUpdateWithoutProductInput;
let ProductVariantUpdateInput = class ProductVariantUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductUpdateOneRequiredWithoutVariantsNestedInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateManyWithoutProductVariantNestedInput, { nullable: true })
], ProductVariantUpdateInput.prototype, "options", void 0);
ProductVariantUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpdateInput);
exports.ProductVariantUpdateInput = ProductVariantUpdateInput;
let ProductVariantUpsertWithWhereUniqueWithoutProductInput = class ProductVariantUpsertWithWhereUniqueWithoutProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], ProductVariantUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateWithoutProductInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateWithoutProductInput)
], ProductVariantUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateWithoutProductInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutProductInput)
], ProductVariantUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
ProductVariantUpsertWithWhereUniqueWithoutProductInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpsertWithWhereUniqueWithoutProductInput);
exports.ProductVariantUpsertWithWhereUniqueWithoutProductInput = ProductVariantUpsertWithWhereUniqueWithoutProductInput;
let ProductVariantUpsertWithoutOptionsInput = class ProductVariantUpsertWithoutOptionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateWithoutOptionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateWithoutOptionsInput)
], ProductVariantUpsertWithoutOptionsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateWithoutOptionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateWithoutOptionsInput)
], ProductVariantUpsertWithoutOptionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], ProductVariantUpsertWithoutOptionsInput.prototype, "where", void 0);
ProductVariantUpsertWithoutOptionsInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantUpsertWithoutOptionsInput);
exports.ProductVariantUpsertWithoutOptionsInput = ProductVariantUpsertWithoutOptionsInput;
let ProductVariantWhereUniqueInput = class ProductVariantWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereInput], { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereInput], { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereInput], { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductRelationFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionListRelationFilter, { nullable: true })
], ProductVariantWhereUniqueInput.prototype, "options", void 0);
ProductVariantWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantWhereUniqueInput);
exports.ProductVariantWhereUniqueInput = ProductVariantWhereUniqueInput;
let ProductVariantWhereInput = ProductVariantWhereInput_1 = class ProductVariantWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereInput_1], { nullable: true })
], ProductVariantWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereInput_1], { nullable: true })
], ProductVariantWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantWhereInput_1], { nullable: true })
], ProductVariantWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductRelationFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionListRelationFilter, { nullable: true })
], ProductVariantWhereInput.prototype, "options", void 0);
ProductVariantWhereInput = ProductVariantWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantWhereInput);
exports.ProductVariantWhereInput = ProductVariantWhereInput;
let ProductVariant = class ProductVariant {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariant.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariant.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariant.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariant.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariant.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariant.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariant.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Product, { nullable: false })
], ProductVariant.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOption], { nullable: true })
], ProductVariant.prototype, "options", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCount, { nullable: false })
], ProductVariant.prototype, "_count", void 0);
ProductVariant = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariant);
exports.ProductVariant = ProductVariant;
let UpdateManyProductVariantArgs = class UpdateManyProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateManyMutationInput)
], UpdateManyProductVariantArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereInput)
], UpdateManyProductVariantArgs.prototype, "where", void 0);
UpdateManyProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyProductVariantArgs);
exports.UpdateManyProductVariantArgs = UpdateManyProductVariantArgs;
let UpdateOneProductVariantArgs = class UpdateOneProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateInput)
], UpdateOneProductVariantArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], UpdateOneProductVariantArgs.prototype, "where", void 0);
UpdateOneProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneProductVariantArgs);
exports.UpdateOneProductVariantArgs = UpdateOneProductVariantArgs;
let UpsertOneProductVariantArgs = class UpsertOneProductVariantArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantWhereUniqueInput)
], UpsertOneProductVariantArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantCreateInput)
], UpsertOneProductVariantArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantUpdateInput)
], UpsertOneProductVariantArgs.prototype, "update", void 0);
UpsertOneProductVariantArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneProductVariantArgs);
exports.UpsertOneProductVariantArgs = UpsertOneProductVariantArgs;
let AggregateProductVariantOption = class AggregateProductVariantOption {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCountAggregate, { nullable: true })
], AggregateProductVariantOption.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMinAggregate, { nullable: true })
], AggregateProductVariantOption.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMaxAggregate, { nullable: true })
], AggregateProductVariantOption.prototype, "_max", void 0);
AggregateProductVariantOption = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateProductVariantOption);
exports.AggregateProductVariantOption = AggregateProductVariantOption;
let CreateManyProductVariantOptionArgs = class CreateManyProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateManyInput)
], CreateManyProductVariantOptionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyProductVariantOptionArgs.prototype, "skipDuplicates", void 0);
CreateManyProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyProductVariantOptionArgs);
exports.CreateManyProductVariantOptionArgs = CreateManyProductVariantOptionArgs;
let CreateOneProductVariantOptionArgs = class CreateOneProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateInput)
], CreateOneProductVariantOptionArgs.prototype, "data", void 0);
CreateOneProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneProductVariantOptionArgs);
exports.CreateOneProductVariantOptionArgs = CreateOneProductVariantOptionArgs;
let DeleteManyProductVariantOptionArgs = class DeleteManyProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], DeleteManyProductVariantOptionArgs.prototype, "where", void 0);
DeleteManyProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyProductVariantOptionArgs);
exports.DeleteManyProductVariantOptionArgs = DeleteManyProductVariantOptionArgs;
let DeleteOneProductVariantOptionArgs = class DeleteOneProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], DeleteOneProductVariantOptionArgs.prototype, "where", void 0);
DeleteOneProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneProductVariantOptionArgs);
exports.DeleteOneProductVariantOptionArgs = DeleteOneProductVariantOptionArgs;
let FindFirstProductVariantOptionOrThrowArgs = class FindFirstProductVariantOptionOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], FindFirstProductVariantOptionOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionOrderByWithRelationInput], { nullable: true })
], FindFirstProductVariantOptionOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: true })
], FindFirstProductVariantOptionOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantOptionOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantOptionOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarFieldEnum], { nullable: true })
], FindFirstProductVariantOptionOrThrowArgs.prototype, "distinct", void 0);
FindFirstProductVariantOptionOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductVariantOptionOrThrowArgs);
exports.FindFirstProductVariantOptionOrThrowArgs = FindFirstProductVariantOptionOrThrowArgs;
let FindFirstProductVariantOptionArgs = class FindFirstProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], FindFirstProductVariantOptionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionOrderByWithRelationInput], { nullable: true })
], FindFirstProductVariantOptionArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: true })
], FindFirstProductVariantOptionArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantOptionArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstProductVariantOptionArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarFieldEnum], { nullable: true })
], FindFirstProductVariantOptionArgs.prototype, "distinct", void 0);
FindFirstProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstProductVariantOptionArgs);
exports.FindFirstProductVariantOptionArgs = FindFirstProductVariantOptionArgs;
let FindManyProductVariantOptionArgs = class FindManyProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], FindManyProductVariantOptionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionOrderByWithRelationInput], { nullable: true })
], FindManyProductVariantOptionArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: true })
], FindManyProductVariantOptionArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductVariantOptionArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyProductVariantOptionArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarFieldEnum], { nullable: true })
], FindManyProductVariantOptionArgs.prototype, "distinct", void 0);
FindManyProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyProductVariantOptionArgs);
exports.FindManyProductVariantOptionArgs = FindManyProductVariantOptionArgs;
let FindUniqueProductVariantOptionOrThrowArgs = class FindUniqueProductVariantOptionOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], FindUniqueProductVariantOptionOrThrowArgs.prototype, "where", void 0);
FindUniqueProductVariantOptionOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductVariantOptionOrThrowArgs);
exports.FindUniqueProductVariantOptionOrThrowArgs = FindUniqueProductVariantOptionOrThrowArgs;
let FindUniqueProductVariantOptionArgs = class FindUniqueProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], FindUniqueProductVariantOptionArgs.prototype, "where", void 0);
FindUniqueProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueProductVariantOptionArgs);
exports.FindUniqueProductVariantOptionArgs = FindUniqueProductVariantOptionArgs;
let ProductVariantOptionAggregateArgs = class ProductVariantOptionAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], ProductVariantOptionAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionOrderByWithRelationInput], { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCountAggregateInput, { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMinAggregateInput, { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMaxAggregateInput, { nullable: true })
], ProductVariantOptionAggregateArgs.prototype, "_max", void 0);
ProductVariantOptionAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductVariantOptionAggregateArgs);
exports.ProductVariantOptionAggregateArgs = ProductVariantOptionAggregateArgs;
let ProductVariantOptionCountAggregateInput = class ProductVariantOptionCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCountAggregateInput.prototype, "_all", void 0);
ProductVariantOptionCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCountAggregateInput);
exports.ProductVariantOptionCountAggregateInput = ProductVariantOptionCountAggregateInput;
let ProductVariantOptionCountAggregate = class ProductVariantOptionCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], ProductVariantOptionCountAggregate.prototype, "_all", void 0);
ProductVariantOptionCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantOptionCountAggregate);
exports.ProductVariantOptionCountAggregate = ProductVariantOptionCountAggregate;
let ProductVariantOptionCountOrderByAggregateInput = class ProductVariantOptionCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionCountOrderByAggregateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionCountOrderByAggregateInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionCountOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductVariantOptionCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCountOrderByAggregateInput);
exports.ProductVariantOptionCountOrderByAggregateInput = ProductVariantOptionCountOrderByAggregateInput;
let ProductVariantOptionCreateManyProductVariantInputEnvelope = class ProductVariantOptionCreateManyProductVariantInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateManyProductVariantInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateManyProductVariantInput)
], ProductVariantOptionCreateManyProductVariantInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionCreateManyProductVariantInputEnvelope.prototype, "skipDuplicates", void 0);
ProductVariantOptionCreateManyProductVariantInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateManyProductVariantInputEnvelope);
exports.ProductVariantOptionCreateManyProductVariantInputEnvelope = ProductVariantOptionCreateManyProductVariantInputEnvelope;
let ProductVariantOptionCreateManyProductVariantInput = class ProductVariantOptionCreateManyProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionCreateManyProductVariantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionCreateManyProductVariantInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreatevaluesInput, { nullable: true })
], ProductVariantOptionCreateManyProductVariantInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateManyProductVariantInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateManyProductVariantInput.prototype, "updatedAt", void 0);
ProductVariantOptionCreateManyProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateManyProductVariantInput);
exports.ProductVariantOptionCreateManyProductVariantInput = ProductVariantOptionCreateManyProductVariantInput;
let ProductVariantOptionCreateManyInput = class ProductVariantOptionCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionCreateManyInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreatevaluesInput, { nullable: true })
], ProductVariantOptionCreateManyInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateManyInput.prototype, "updatedAt", void 0);
ProductVariantOptionCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateManyInput);
exports.ProductVariantOptionCreateManyInput = ProductVariantOptionCreateManyInput;
let ProductVariantOptionCreateNestedManyWithoutProductVariantInput = class ProductVariantOptionCreateNestedManyWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateWithoutProductVariantInput)
], ProductVariantOptionCreateNestedManyWithoutProductVariantInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
], ProductVariantOptionCreateNestedManyWithoutProductVariantInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
], ProductVariantOptionCreateNestedManyWithoutProductVariantInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionCreateNestedManyWithoutProductVariantInput.prototype, "connect", void 0);
ProductVariantOptionCreateNestedManyWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateNestedManyWithoutProductVariantInput);
exports.ProductVariantOptionCreateNestedManyWithoutProductVariantInput = ProductVariantOptionCreateNestedManyWithoutProductVariantInput;
let ProductVariantOptionCreateOrConnectWithoutProductVariantInput = class ProductVariantOptionCreateOrConnectWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionCreateOrConnectWithoutProductVariantInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateWithoutProductVariantInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateWithoutProductVariantInput)
], ProductVariantOptionCreateOrConnectWithoutProductVariantInput.prototype, "create", void 0);
ProductVariantOptionCreateOrConnectWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateOrConnectWithoutProductVariantInput);
exports.ProductVariantOptionCreateOrConnectWithoutProductVariantInput = ProductVariantOptionCreateOrConnectWithoutProductVariantInput;
let ProductVariantOptionCreateWithoutProductVariantInput = class ProductVariantOptionCreateWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionCreateWithoutProductVariantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionCreateWithoutProductVariantInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreatevaluesInput, { nullable: true })
], ProductVariantOptionCreateWithoutProductVariantInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateWithoutProductVariantInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateWithoutProductVariantInput.prototype, "updatedAt", void 0);
ProductVariantOptionCreateWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateWithoutProductVariantInput);
exports.ProductVariantOptionCreateWithoutProductVariantInput = ProductVariantOptionCreateWithoutProductVariantInput;
let ProductVariantOptionCreateInput = class ProductVariantOptionCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreatevaluesInput, { nullable: true })
], ProductVariantOptionCreateInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantCreateNestedOneWithoutOptionsInput, { nullable: false })
], ProductVariantOptionCreateInput.prototype, "productVariant", void 0);
ProductVariantOptionCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreateInput);
exports.ProductVariantOptionCreateInput = ProductVariantOptionCreateInput;
let ProductVariantOptionCreatevaluesInput = class ProductVariantOptionCreatevaluesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: false })
], ProductVariantOptionCreatevaluesInput.prototype, "set", void 0);
ProductVariantOptionCreatevaluesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionCreatevaluesInput);
exports.ProductVariantOptionCreatevaluesInput = ProductVariantOptionCreatevaluesInput;
let ProductVariantOptionGroupByArgs = class ProductVariantOptionGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], ProductVariantOptionGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionOrderByWithAggregationInput], { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarFieldEnum], { nullable: false })
], ProductVariantOptionGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionScalarWhereWithAggregatesInput, { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCountAggregateInput, { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMinAggregateInput, { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMaxAggregateInput, { nullable: true })
], ProductVariantOptionGroupByArgs.prototype, "_max", void 0);
ProductVariantOptionGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], ProductVariantOptionGroupByArgs);
exports.ProductVariantOptionGroupByArgs = ProductVariantOptionGroupByArgs;
let ProductVariantOptionGroupBy = class ProductVariantOptionGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionGroupBy.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductVariantOptionGroupBy.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariantOptionGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariantOptionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCountAggregate, { nullable: true })
], ProductVariantOptionGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMinAggregate, { nullable: true })
], ProductVariantOptionGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMaxAggregate, { nullable: true })
], ProductVariantOptionGroupBy.prototype, "_max", void 0);
ProductVariantOptionGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantOptionGroupBy);
exports.ProductVariantOptionGroupBy = ProductVariantOptionGroupBy;
let ProductVariantOptionListRelationFilter = class ProductVariantOptionListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true })
], ProductVariantOptionListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true })
], ProductVariantOptionListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true })
], ProductVariantOptionListRelationFilter.prototype, "none", void 0);
ProductVariantOptionListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionListRelationFilter);
exports.ProductVariantOptionListRelationFilter = ProductVariantOptionListRelationFilter;
let ProductVariantOptionMaxAggregateInput = class ProductVariantOptionMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMaxAggregateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMaxAggregateInput.prototype, "updatedAt", void 0);
ProductVariantOptionMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionMaxAggregateInput);
exports.ProductVariantOptionMaxAggregateInput = ProductVariantOptionMaxAggregateInput;
let ProductVariantOptionMaxAggregate = class ProductVariantOptionMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionMaxAggregate.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionMaxAggregate.prototype, "updatedAt", void 0);
ProductVariantOptionMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantOptionMaxAggregate);
exports.ProductVariantOptionMaxAggregate = ProductVariantOptionMaxAggregate;
let ProductVariantOptionMaxOrderByAggregateInput = class ProductVariantOptionMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMaxOrderByAggregateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductVariantOptionMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionMaxOrderByAggregateInput);
exports.ProductVariantOptionMaxOrderByAggregateInput = ProductVariantOptionMaxOrderByAggregateInput;
let ProductVariantOptionMinAggregateInput = class ProductVariantOptionMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMinAggregateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ProductVariantOptionMinAggregateInput.prototype, "updatedAt", void 0);
ProductVariantOptionMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionMinAggregateInput);
exports.ProductVariantOptionMinAggregateInput = ProductVariantOptionMinAggregateInput;
let ProductVariantOptionMinAggregate = class ProductVariantOptionMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionMinAggregate.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionMinAggregate.prototype, "updatedAt", void 0);
ProductVariantOptionMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantOptionMinAggregate);
exports.ProductVariantOptionMinAggregate = ProductVariantOptionMinAggregate;
let ProductVariantOptionMinOrderByAggregateInput = class ProductVariantOptionMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMinOrderByAggregateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionMinOrderByAggregateInput.prototype, "updatedAt", void 0);
ProductVariantOptionMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionMinOrderByAggregateInput);
exports.ProductVariantOptionMinOrderByAggregateInput = ProductVariantOptionMinOrderByAggregateInput;
let ProductVariantOptionOrderByRelationAggregateInput = class ProductVariantOptionOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByRelationAggregateInput.prototype, "_count", void 0);
ProductVariantOptionOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionOrderByRelationAggregateInput);
exports.ProductVariantOptionOrderByRelationAggregateInput = ProductVariantOptionOrderByRelationAggregateInput;
let ProductVariantOptionOrderByWithAggregationInput = class ProductVariantOptionOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCountOrderByAggregateInput, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMaxOrderByAggregateInput, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionMinOrderByAggregateInput, { nullable: true })
], ProductVariantOptionOrderByWithAggregationInput.prototype, "_min", void 0);
ProductVariantOptionOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionOrderByWithAggregationInput);
exports.ProductVariantOptionOrderByWithAggregationInput = ProductVariantOptionOrderByWithAggregationInput;
let ProductVariantOptionOrderByWithRelationInput = class ProductVariantOptionOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOrderByWithRelationInput, { nullable: true })
], ProductVariantOptionOrderByWithRelationInput.prototype, "productVariant", void 0);
ProductVariantOptionOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionOrderByWithRelationInput);
exports.ProductVariantOptionOrderByWithRelationInput = ProductVariantOptionOrderByWithRelationInput;
let ProductVariantOptionScalarWhereWithAggregatesInput = ProductVariantOptionScalarWhereWithAggregatesInput_1 = class ProductVariantOptionScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereWithAggregatesInput_1], { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], ProductVariantOptionScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
ProductVariantOptionScalarWhereWithAggregatesInput = ProductVariantOptionScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionScalarWhereWithAggregatesInput);
exports.ProductVariantOptionScalarWhereWithAggregatesInput = ProductVariantOptionScalarWhereWithAggregatesInput;
let ProductVariantOptionScalarWhereInput = ProductVariantOptionScalarWhereInput_1 = class ProductVariantOptionScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereInput_1], { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereInput_1], { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereInput_1], { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantOptionScalarWhereInput.prototype, "updatedAt", void 0);
ProductVariantOptionScalarWhereInput = ProductVariantOptionScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionScalarWhereInput);
exports.ProductVariantOptionScalarWhereInput = ProductVariantOptionScalarWhereInput;
let ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput = class ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateWithoutProductVariantInput)
], ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
], ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
], ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput.prototype, "connect", void 0);
ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput);
exports.ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput = ProductVariantOptionUncheckedCreateNestedManyWithoutProductVariantInput;
let ProductVariantOptionUncheckedCreateWithoutProductVariantInput = class ProductVariantOptionUncheckedCreateWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionUncheckedCreateWithoutProductVariantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionUncheckedCreateWithoutProductVariantInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreatevaluesInput, { nullable: true })
], ProductVariantOptionUncheckedCreateWithoutProductVariantInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionUncheckedCreateWithoutProductVariantInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionUncheckedCreateWithoutProductVariantInput.prototype, "updatedAt", void 0);
ProductVariantOptionUncheckedCreateWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedCreateWithoutProductVariantInput);
exports.ProductVariantOptionUncheckedCreateWithoutProductVariantInput = ProductVariantOptionUncheckedCreateWithoutProductVariantInput;
let ProductVariantOptionUncheckedCreateInput = class ProductVariantOptionUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionUncheckedCreateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOptionUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreatevaluesInput, { nullable: true })
], ProductVariantOptionUncheckedCreateInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProductVariantOptionUncheckedCreateInput.prototype, "updatedAt", void 0);
ProductVariantOptionUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedCreateInput);
exports.ProductVariantOptionUncheckedCreateInput = ProductVariantOptionUncheckedCreateInput;
let ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput = class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateWithoutProductVariantInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionScalarWhereInput)
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput.prototype, "deleteMany", void 0);
ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput);
exports.ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput = ProductVariantOptionUncheckedUpdateManyWithoutProductVariantNestedInput;
let ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput = class ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput.prototype, "updatedAt", void 0);
ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput);
exports.ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput = ProductVariantOptionUncheckedUpdateManyWithoutProductVariantInput;
let ProductVariantOptionUncheckedUpdateManyInput = class ProductVariantOptionUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
ProductVariantOptionUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedUpdateManyInput);
exports.ProductVariantOptionUncheckedUpdateManyInput = ProductVariantOptionUncheckedUpdateManyInput;
let ProductVariantOptionUncheckedUpdateWithoutProductVariantInput = class ProductVariantOptionUncheckedUpdateWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateWithoutProductVariantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateWithoutProductVariantInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateWithoutProductVariantInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateWithoutProductVariantInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateWithoutProductVariantInput.prototype, "updatedAt", void 0);
ProductVariantOptionUncheckedUpdateWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedUpdateWithoutProductVariantInput);
exports.ProductVariantOptionUncheckedUpdateWithoutProductVariantInput = ProductVariantOptionUncheckedUpdateWithoutProductVariantInput;
let ProductVariantOptionUncheckedUpdateInput = class ProductVariantOptionUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUncheckedUpdateInput.prototype, "updatedAt", void 0);
ProductVariantOptionUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUncheckedUpdateInput);
exports.ProductVariantOptionUncheckedUpdateInput = ProductVariantOptionUncheckedUpdateInput;
let ProductVariantOptionUpdateManyMutationInput = class ProductVariantOptionUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUpdateManyMutationInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateManyMutationInput.prototype, "updatedAt", void 0);
ProductVariantOptionUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdateManyMutationInput);
exports.ProductVariantOptionUpdateManyMutationInput = ProductVariantOptionUpdateManyMutationInput;
let ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput = class ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionScalarWhereInput)
], ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateManyMutationInput)
], ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput.prototype, "data", void 0);
ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput);
exports.ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput = ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput;
let ProductVariantOptionUpdateManyWithoutProductVariantNestedInput = class ProductVariantOptionUpdateManyWithoutProductVariantNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateWithoutProductVariantInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionCreateOrConnectWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateOrConnectWithoutProductVariantInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateManyProductVariantInputEnvelope)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateManyWithWhereWithoutProductVariantInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionScalarWhereInput)
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput.prototype, "deleteMany", void 0);
ProductVariantOptionUpdateManyWithoutProductVariantNestedInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdateManyWithoutProductVariantNestedInput);
exports.ProductVariantOptionUpdateManyWithoutProductVariantNestedInput = ProductVariantOptionUpdateManyWithoutProductVariantNestedInput;
let ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput = class ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateWithoutProductVariantInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateWithoutProductVariantInput)
], ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput.prototype, "data", void 0);
ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput);
exports.ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput = ProductVariantOptionUpdateWithWhereUniqueWithoutProductVariantInput;
let ProductVariantOptionUpdateWithoutProductVariantInput = class ProductVariantOptionUpdateWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateWithoutProductVariantInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateWithoutProductVariantInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUpdateWithoutProductVariantInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateWithoutProductVariantInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateWithoutProductVariantInput.prototype, "updatedAt", void 0);
ProductVariantOptionUpdateWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdateWithoutProductVariantInput);
exports.ProductVariantOptionUpdateWithoutProductVariantInput = ProductVariantOptionUpdateWithoutProductVariantInput;
let ProductVariantOptionUpdateInput = class ProductVariantOptionUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdatevaluesInput, { nullable: true })
], ProductVariantOptionUpdateInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProductVariantOptionUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantUpdateOneRequiredWithoutOptionsNestedInput, { nullable: true })
], ProductVariantOptionUpdateInput.prototype, "productVariant", void 0);
ProductVariantOptionUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdateInput);
exports.ProductVariantOptionUpdateInput = ProductVariantOptionUpdateInput;
let ProductVariantOptionUpdatevaluesInput = class ProductVariantOptionUpdatevaluesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductVariantOptionUpdatevaluesInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductVariantOptionUpdatevaluesInput.prototype, "push", void 0);
ProductVariantOptionUpdatevaluesInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpdatevaluesInput);
exports.ProductVariantOptionUpdatevaluesInput = ProductVariantOptionUpdatevaluesInput;
let ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput = class ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateWithoutProductVariantInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateWithoutProductVariantInput)
], ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateWithoutProductVariantInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateWithoutProductVariantInput)
], ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput.prototype, "create", void 0);
ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput);
exports.ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput = ProductVariantOptionUpsertWithWhereUniqueWithoutProductVariantInput;
let ProductVariantOptionWhereUniqueInput = class ProductVariantOptionWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereInput], { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereInput], { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereInput], { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantRelationFilter, { nullable: true })
], ProductVariantOptionWhereUniqueInput.prototype, "productVariant", void 0);
ProductVariantOptionWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionWhereUniqueInput);
exports.ProductVariantOptionWhereUniqueInput = ProductVariantOptionWhereUniqueInput;
let ProductVariantOptionWhereInput = ProductVariantOptionWhereInput_1 = class ProductVariantOptionWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereInput_1], { nullable: true })
], ProductVariantOptionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereInput_1], { nullable: true })
], ProductVariantOptionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProductVariantOptionWhereInput_1], { nullable: true })
], ProductVariantOptionWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableListFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantRelationFilter, { nullable: true })
], ProductVariantOptionWhereInput.prototype, "productVariant", void 0);
ProductVariantOptionWhereInput = ProductVariantOptionWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], ProductVariantOptionWhereInput);
exports.ProductVariantOptionWhereInput = ProductVariantOptionWhereInput;
let ProductVariantOption = class ProductVariantOption {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOption.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOption.prototype, "productVariantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ProductVariantOption.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], ProductVariantOption.prototype, "values", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariantOption.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], ProductVariantOption.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariant, { nullable: false })
], ProductVariantOption.prototype, "productVariant", void 0);
ProductVariantOption = __decorate([
    (0, graphql_2.ObjectType)()
], ProductVariantOption);
exports.ProductVariantOption = ProductVariantOption;
let UpdateManyProductVariantOptionArgs = class UpdateManyProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateManyMutationInput)
], UpdateManyProductVariantOptionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereInput)
], UpdateManyProductVariantOptionArgs.prototype, "where", void 0);
UpdateManyProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyProductVariantOptionArgs);
exports.UpdateManyProductVariantOptionArgs = UpdateManyProductVariantOptionArgs;
let UpdateOneProductVariantOptionArgs = class UpdateOneProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateInput)
], UpdateOneProductVariantOptionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], UpdateOneProductVariantOptionArgs.prototype, "where", void 0);
UpdateOneProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneProductVariantOptionArgs);
exports.UpdateOneProductVariantOptionArgs = UpdateOneProductVariantOptionArgs;
let UpsertOneProductVariantOptionArgs = class UpsertOneProductVariantOptionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionWhereUniqueInput)
], UpsertOneProductVariantOptionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionCreateInput)
], UpsertOneProductVariantOptionArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductVariantOptionUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ProductVariantOptionUpdateInput)
], UpsertOneProductVariantOptionArgs.prototype, "update", void 0);
UpsertOneProductVariantOptionArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneProductVariantOptionArgs);
exports.UpsertOneProductVariantOptionArgs = UpsertOneProductVariantOptionArgs;
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], AggregateUser.prototype, "_max", void 0);
AggregateUser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
let CreateManyUserArgs = class CreateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [UserCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateManyInput)
], CreateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyUserArgs.prototype, "skipDuplicates", void 0);
CreateManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
let CreateOneUserArgs = class CreateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneUserArgs);
exports.DeleteOneUserArgs = DeleteOneUserArgs;
let FindFirstUserOrThrowArgs = class FindFirstUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "distinct", void 0);
FindFirstUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstUserOrThrowArgs);
exports.FindFirstUserOrThrowArgs = FindFirstUserOrThrowArgs;
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstUserArgs);
exports.FindFirstUserArgs = FindFirstUserArgs;
let FindManyUserArgs = class FindManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindManyUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
FindUniqueUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserOrThrowArgs);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneUserArgs);
exports.UpdateOneUserArgs = UpdateOneUserArgs;
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
UpsertOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneUserArgs);
exports.UpsertOneUserArgs = UpsertOneUserArgs;
let UserAggregateArgs = class UserAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], UserAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], UserAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_max", void 0);
UserAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UserAggregateArgs);
exports.UserAggregateArgs = UserAggregateArgs;
let UserCountAggregateInput = class UserCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "_all", void 0);
UserCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountAggregateInput);
exports.UserCountAggregateInput = UserCountAggregateInput;
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
let UserCountOrderByAggregateInput = class UserCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "updatedAt", void 0);
UserCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
let UserCount = class UserCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCount.prototype, "orders", void 0);
UserCount = __decorate([
    (0, graphql_2.ObjectType)()
], UserCount);
exports.UserCount = UserCount;
let UserCreateManyInput = class UserCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "updatedAt", void 0);
UserCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
let UserCreateNestedOneWithoutOrdersInput = class UserCreateNestedOneWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutOrdersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutOrdersInput)
], UserCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutOrdersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutOrdersInput)
], UserCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateNestedOneWithoutOrdersInput);
exports.UserCreateNestedOneWithoutOrdersInput = UserCreateNestedOneWithoutOrdersInput;
let UserCreateOrConnectWithoutOrdersInput = class UserCreateOrConnectWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutOrdersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutOrdersInput)
], UserCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
UserCreateOrConnectWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateOrConnectWithoutOrdersInput);
exports.UserCreateOrConnectWithoutOrdersInput = UserCreateOrConnectWithoutOrdersInput;
let UserCreateWithoutOrdersInput = class UserCreateWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutOrdersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutOrdersInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutOrdersInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutOrdersInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutOrdersInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutOrdersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
UserCreateWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateWithoutOrdersInput);
exports.UserCreateWithoutOrdersInput = UserCreateWithoutOrdersInput;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderCreateNestedManyWithoutUserInput, { nullable: true })
], UserCreateInput.prototype, "orders", void 0);
UserCreateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
let UserGroupByArgs = class UserGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithAggregationInput], { nullable: true })
], UserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: false })
], UserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserScalarWhereWithAggregatesInput, { nullable: true })
], UserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
let UserGroupBy = class UserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
let UserMaxAggregateInput = class UserMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "updatedAt", void 0);
UserMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMaxAggregateInput);
exports.UserMaxAggregateInput = UserMaxAggregateInput;
let UserMaxAggregate = class UserMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "updatedAt", void 0);
UserMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMaxAggregate);
exports.UserMaxAggregate = UserMaxAggregate;
let UserMaxOrderByAggregateInput = class UserMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
UserMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMaxOrderByAggregateInput);
exports.UserMaxOrderByAggregateInput = UserMaxOrderByAggregateInput;
let UserMinAggregateInput = class UserMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "updatedAt", void 0);
UserMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinAggregateInput);
exports.UserMinAggregateInput = UserMinAggregateInput;
let UserMinAggregate = class UserMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "updatedAt", void 0);
UserMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMinAggregate);
exports.UserMinAggregate = UserMinAggregate;
let UserMinOrderByAggregateInput = class UserMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "updatedAt", void 0);
UserMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinOrderByAggregateInput);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput;
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
UserOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithAggregationInput);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "orders", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
let UserRelationFilter = class UserRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "isNot", void 0);
UserRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], UserRelationFilter);
exports.UserRelationFilter = UserRelationFilter;
let UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
let UserUncheckedCreateWithoutOrdersInput = class UserUncheckedCreateWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutOrdersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutOrdersInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutOrdersInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutOrdersInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutOrdersInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutOrdersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
UserUncheckedCreateWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateWithoutOrdersInput);
exports.UserUncheckedCreateWithoutOrdersInput = UserUncheckedCreateWithoutOrdersInput;
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
], UserUncheckedCreateInput.prototype, "orders", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;
let UserUncheckedUpdateManyInput = class UserUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
UserUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateManyInput);
exports.UserUncheckedUpdateManyInput = UserUncheckedUpdateManyInput;
let UserUncheckedUpdateWithoutOrdersInput = class UserUncheckedUpdateWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutOrdersInput.prototype, "updatedAt", void 0);
UserUncheckedUpdateWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateWithoutOrdersInput);
exports.UserUncheckedUpdateWithoutOrdersInput = UserUncheckedUpdateWithoutOrdersInput;
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "orders", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateInput);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "updatedAt", void 0);
UserUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
let UserUpdateOneRequiredWithoutOrdersNestedInput = class UserUpdateOneRequiredWithoutOrdersNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutOrdersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutOrdersInput)
], UserUpdateOneRequiredWithoutOrdersNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutOrdersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutOrdersInput)
], UserUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpsertWithoutOrdersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpsertWithoutOrdersInput)
], UserUpdateOneRequiredWithoutOrdersNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateToOneWithWhereWithoutOrdersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpdateToOneWithWhereWithoutOrdersInput)
], UserUpdateOneRequiredWithoutOrdersNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutOrdersNestedInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateOneRequiredWithoutOrdersNestedInput);
exports.UserUpdateOneRequiredWithoutOrdersNestedInput = UserUpdateOneRequiredWithoutOrdersNestedInput;
let UserUpdateToOneWithWhereWithoutOrdersInput = class UserUpdateToOneWithWhereWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateToOneWithWhereWithoutOrdersInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutOrdersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutOrdersInput)
], UserUpdateToOneWithWhereWithoutOrdersInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateToOneWithWhereWithoutOrdersInput);
exports.UserUpdateToOneWithWhereWithoutOrdersInput = UserUpdateToOneWithWhereWithoutOrdersInput;
let UserUpdateWithoutOrdersInput = class UserUpdateWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutOrdersInput.prototype, "updatedAt", void 0);
UserUpdateWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateWithoutOrdersInput);
exports.UserUpdateWithoutOrdersInput = UserUpdateWithoutOrdersInput;
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUpdateInput.prototype, "orders", void 0);
UserUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
let UserUpsertWithoutOrdersInput = class UserUpsertWithoutOrdersInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutOrdersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutOrdersInput)
], UserUpsertWithoutOrdersInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutOrdersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutOrdersInput)
], UserUpsertWithoutOrdersInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpsertWithoutOrdersInput.prototype, "where", void 0);
UserUpsertWithoutOrdersInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpsertWithoutOrdersInput);
exports.UserUpsertWithoutOrdersInput = UserUpsertWithoutOrdersInput;
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "orders", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "orders", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: 'USER' })
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Order], { nullable: true })
], User.prototype, "orders", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCount, { nullable: false })
], User.prototype, "_count", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=index.js.map
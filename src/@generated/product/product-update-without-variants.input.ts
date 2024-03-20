import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductCategoryUpdateOneRequiredWithoutProductsNestedInput } from '../product-category/product-category-update-one-required-without-products-nested.input';
import { CollectionUpdateManyWithoutProductsNestedInput } from '../collection/collection-update-many-without-products-nested.input';
import { CartItemUpdateManyWithoutProductNestedInput } from '../cart-item/cart-item-update-many-without-product-nested.input';
import { OrderItemUpdateManyWithoutProductNestedInput } from '../order-item/order-item-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateWithoutVariantsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: ProductUpdateimagesInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: CollectionUpdateManyWithoutProductsNestedInput;

    @Field(() => CartItemUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: CartItemUpdateManyWithoutProductNestedInput;

    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput;
}

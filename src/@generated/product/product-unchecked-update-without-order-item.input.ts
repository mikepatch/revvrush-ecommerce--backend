import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductVariantUncheckedUpdateManyWithoutProductNestedInput } from '../product-variant/product-variant-unchecked-update-many-without-product-nested.input';
import { CollectionUncheckedUpdateManyWithoutProductsNestedInput } from '../collection/collection-unchecked-update-many-without-products-nested.input';
import { CartItemUncheckedUpdateManyWithoutProductNestedInput } from '../cart-item/cart-item-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutOrderItemInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: StringFieldUpdateOperationsInput;

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

    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => CollectionUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: CollectionUncheckedUpdateManyWithoutProductsNestedInput;

    @Field(() => CartItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
}

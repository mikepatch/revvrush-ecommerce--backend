import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OrderUpdateOneWithoutProductsNestedInput } from '../order/order-update-one-without-products-nested.input';
import { ProductVariantUpdateManyWithoutProductNestedInput } from '../product-variant/product-variant-update-many-without-product-nested.input';
import { CollectionUpdateManyWithoutProductsNestedInput } from '../collection/collection-update-many-without-products-nested.input';

@InputType()
export class ProductUpdateWithoutCategoryInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderUpdateOneWithoutProductsNestedInput, {nullable:true})
    Order?: OrderUpdateOneWithoutProductsNestedInput;

    @Field(() => ProductVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    variants?: ProductVariantUpdateManyWithoutProductNestedInput;

    @Field(() => CollectionUpdateManyWithoutProductsNestedInput, {nullable:true})
    collections?: CollectionUpdateManyWithoutProductsNestedInput;
}

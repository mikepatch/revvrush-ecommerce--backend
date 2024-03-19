import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
    CREATED = "CREATED",
    PAID = "PAID",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionScalarWhereInput } from './collection-scalar-where.input';
import { Type } from 'class-transformer';
import { CollectionUpdateManyMutationInput } from './collection-update-many-mutation.input';

@InputType()
export class CollectionUpdateManyWithWhereWithoutProductsInput {

    @Field(() => CollectionScalarWhereInput, {nullable:false})
    @Type(() => CollectionScalarWhereInput)
    where!: CollectionScalarWhereInput;

    @Field(() => CollectionUpdateManyMutationInput, {nullable:false})
    @Type(() => CollectionUpdateManyMutationInput)
    data!: CollectionUpdateManyMutationInput;
}

import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCartInput {
  @Field(() => ID, { description: 'User ID' })
  userId: string;
}

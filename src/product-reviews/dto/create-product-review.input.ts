import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateProductReviewInput {
  @Field(() => ID, { description: 'Review product id' })
  productId: string;

  @Field(() => String, { description: 'Review author' })
  name: string;

  @Field(() => String, { description: 'Review email' })
  email: string;

  @Field(() => Int, { description: 'Review rating' })
  rating: number;

  @Field(() => String, { description: 'Review headline' })
  headline: string;

  @Field(() => String, { description: 'Review content', nullable: true })
  content?: string;
}

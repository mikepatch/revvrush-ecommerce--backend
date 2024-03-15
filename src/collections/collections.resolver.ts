import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { Collection as CollectionClient } from '@prisma/client';

import { CollectionsService } from './collections.service';
import { Collection } from './entities/collection.entity';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';

@Resolver(() => Collection)
export class CollectionsResolver {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Mutation(() => Collection, { name: 'createCollection', nullable: true })
  async createCollection(
    @Args('createCollectionInput') createCollectionInput: CreateCollectionInput,
  ): Promise<CollectionClient> {
    return await this.collectionsService.create(createCollectionInput);
  }

  @Query(() => [Collection], { name: 'collections' })
  async getCollections(
    @Args('take', {
      defaultValue: 10,
      type: () => Int,
      nullable: true,
      name: 'Take',
    })
    take?: number,
    @Args('skip', {
      defaultValue: 0,
      type: () => Int,
      nullable: true,
      name: 'Skip',
    })
    skip?: number,
  ) {
    return await this.collectionsService.findAll({ skip, take });
  }

  @Query(() => Collection, { name: 'collection' })
  async getCollection(
    @Args('id', { type: () => ID, nullable: true, name: 'ID' }) id?: string,
    @Args('name', { nullable: true, name: 'Name' }) name?: string,
    @Args('slug', { nullable: true, name: 'Slug' }) slug?: string,
  ) {
    return await this.collectionsService.findOne({ id, name, slug });
  }

  @Mutation(() => Collection)
  async updateCollection(
    @Args('updateCollectionInput') updateCollectionInput: UpdateCollectionInput,
  ) {
    return await this.collectionsService.update(
      updateCollectionInput.id,
      updateCollectionInput,
    );
  }

  @Mutation(() => Collection)
  async removeCollection(@Args('id', { type: () => Int }) id: number) {
    return await this.collectionsService.remove(id);
  }
}

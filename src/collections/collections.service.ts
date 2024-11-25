import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';
import { Collection as CollectionClient } from '@prisma/client';
import { createSlug } from '../utils/createSlug';

@Injectable()
export class CollectionsService {
  private readonly logger = new Logger(CollectionsService.name);

  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(data: CreateCollectionInput): Promise<CollectionClient> {
    const { productIds, ...rest } = data;
    const slug = createSlug(data.name);

    return await this.prismaService.collection.create({
      data: {
        ...rest,
        slug,
        products: {
          connect: productIds.map((id) => ({ id })),
        },
      },
    });
  }

  async findAll(
    params: { skip?: number; take?: number } = { skip: 0, take: 10 },
  ): Promise<CollectionClient[]> {
    const { skip, take } = params;

    return await this.prismaService.collection.findMany({
      skip,
      take,
      include: {
        products: true,
      },
    });
  }

  async findOne(params: {
    id?: string;
    name?: string;
    slug?: string;
  }): Promise<CollectionClient | null> {
    const { id, name, slug } = params;

    return await this.prismaService.collection.findFirst({
      where: {
        id,
        name,
        slug,
      },
      include: {
        products: {
          include: {
            category: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    updateData: UpdateCollectionInput,
  ): Promise<CollectionClient> {
    this.logger.log(`Updating collection with id: ${id}`);
    return await this.prismaService.collection.update({
      where: { id },
      data: updateData,
      include: {
        products: true,
      },
    });
  }

  async remove(id: string): Promise<CollectionClient> {
    return await this.prismaService.collection.delete({
      where: { id },
    });
  }
}

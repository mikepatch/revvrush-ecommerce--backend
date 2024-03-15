import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { ProductsModule } from './products/products.module';
import { CollectionsModule } from 'src/collections/collections.module';
import { ProductVariantsModule } from './product-variants/product-variants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    SharedModule,
    ProductCategoriesModule,
    ProductsModule,
    CollectionsModule,
    ProductVariantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

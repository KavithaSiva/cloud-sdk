/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TestEntity } from './TestEntity';

/**
 * Request builder class for operations supported on the [[TestEntity]] entity.
 */
export class TestEntityRequestBuilder extends RequestBuilder<TestEntity> {
  /**
   * Returns a request builder for retrieving one `TestEntity` entity based on its keys.
   * @param keyPropertyInt Key property. See [[TestEntity.keyPropertyInt]].
   * @param keyPropertyString Key property. See [[TestEntity.keyPropertyString]].
   * @returns A request builder for creating requests to retrieve one `TestEntity` entity based on its keys.
   */
  getByKey(keyPropertyInt: number, keyPropertyString: string): GetByKeyRequestBuilderV4<TestEntity> {
    return new GetByKeyRequestBuilderV4(TestEntity, {
      KeyPropertyInt: keyPropertyInt,
      KeyPropertyString: keyPropertyString
    });
  }

  /**
   * Returns a request builder for querying all `TestEntity` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntity` entities.
   */
  getAll(): GetAllRequestBuilderV4<TestEntity> {
    return new GetAllRequestBuilderV4(TestEntity);
  }

  /**
   * Returns a request builder for creating a `TestEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntity`.
   */
  create(entity: TestEntity): CreateRequestBuilderV4<TestEntity> {
    return new CreateRequestBuilderV4(TestEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TestEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntity`.
   */
  update(entity: TestEntity): UpdateRequestBuilderV4<TestEntity> {
    return new UpdateRequestBuilderV4(TestEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TestEntity`.
   * @param keyPropertyInt Key property. See [[TestEntity.keyPropertyInt]].
   * @param keyPropertyString Key property. See [[TestEntity.keyPropertyString]].
   * @returns A request builder for creating requests that delete an entity of type `TestEntity`.
   */
  delete(keyPropertyInt: number, keyPropertyString: string): DeleteRequestBuilderV4<TestEntity>;
  /**
   * Returns a request builder for deleting an entity of type `TestEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TestEntity` by taking the entity as a parameter.
   */
  delete(entity: TestEntity): DeleteRequestBuilderV4<TestEntity>;
  delete(keyPropertyIntOrEntity: any, keyPropertyString?: string): DeleteRequestBuilderV4<TestEntity> {
    return new DeleteRequestBuilderV4(TestEntity, keyPropertyIntOrEntity instanceof TestEntity ? keyPropertyIntOrEntity : {
      KeyPropertyInt: keyPropertyIntOrEntity!,
      KeyPropertyString: keyPropertyString!
    });
  }
}

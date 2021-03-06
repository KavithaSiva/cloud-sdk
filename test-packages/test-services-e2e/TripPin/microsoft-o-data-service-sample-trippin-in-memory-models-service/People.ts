/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PeopleRequestBuilder } from './PeopleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { Location, LocationField } from './Location';
import { PersonGender } from './PersonGender';
import { Feature } from './Feature';
import { AllFields, BigNumberField, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "People" of service "Microsoft.OData.Service.Sample.TrippinInMemory.Models".
 */
export class People extends EntityV4 implements PeopleType {
  /**
   * Technical entity name for People.
   */
  static _entityName = 'People';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for People.
   */
  static _serviceName = 'Microsoft.OData.Service.Sample.TrippinInMemory.Models';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'TripPinRESTierService/(S(duh2c3dgb1c5lzc0bqwgyekc))/';
  /**
   * User Name.
   */
  userName!: string;
  /**
   * First Name.
   */
  firstName!: string;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: string;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: string;
  /**
   * Gender.
   */
  gender!: PersonGender;
  /**
   * Age.
   * @nullable
   */
  age?: BigNumber;
  /**
   * Emails.
   * @nullable
   */
  emails?: string[];
  /**
   * Address Info.
   * @nullable
   */
  addressInfo?: Location[];
  /**
   * Home Address.
   * @nullable
   */
  homeAddress?: Location;
  /**
   * Favorite Feature.
   */
  favoriteFeature!: Feature;
  /**
   * Features.
   */
  features!: Feature[];
  /**
   * One-to-many navigation property to the [[People]] entity.
   */
  friends!: People[];
  /**
   * One-to-one navigation property to the [[People]] entity.
   */
  bestFriend!: People;

  /**
   * Returns an entity builder to construct instances `People`.
   * @returns A builder that constructs instances of entity type `People`.
   */
  static builder(): EntityBuilderType<People, PeopleTypeForceMandatory> {
    return EntityV4.entityBuilder(People);
  }

  /**
   * Returns a request builder to construct requests for operations on the `People` entity type.
   * @returns A `People` request builder.
   */
  static requestBuilder(): PeopleRequestBuilder {
    return new PeopleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `People`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `People`.
   */
  static customField(fieldName: string): CustomFieldV4<People> {
    return EntityV4.customFieldSelector(fieldName, People);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface PeopleType {
  userName: string;
  firstName: string;
  lastName?: string;
  middleName?: string;
  gender: PersonGender;
  age?: BigNumber;
  emails?: string[];
  addressInfo?: Location[];
  homeAddress?: Location;
  favoriteFeature: Feature;
  features: Feature[];
  friends: PeopleType[];
  bestFriend: PeopleType;
}

export interface PeopleTypeForceMandatory {
  userName: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: PersonGender;
  age: BigNumber;
  emails: string[];
  addressInfo: Location[];
  homeAddress: Location;
  favoriteFeature: Feature;
  features: Feature[];
  friends: PeopleType[];
  bestFriend: PeopleType;
}

export namespace People {
  /**
   * Static representation of the [[userName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAME: StringField<People> = new StringField('UserName', People, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<People> = new StringField('FirstName', People, 'Edm.String');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<People> = new StringField('LastName', People, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<People> = new StringField('MiddleName', People, 'Edm.String');
  /**
   * Static representation of the [[gender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: EnumField<People> = new EnumField('Gender', People);
  /**
   * Static representation of the [[age]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGE: BigNumberField<People> = new BigNumberField('Age', People, 'Edm.Int64');
  /**
   * Static representation of the [[emails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAILS: CollectionField<People, 'Edm.String'> = new CollectionField('Emails', People, 'Edm.String');
  /**
   * Static representation of the [[addressInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_INFO: CollectionField<People, Location> = new CollectionField('AddressInfo', People, Location);
  /**
   * Static representation of the [[homeAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_ADDRESS: LocationField<People> = new LocationField('HomeAddress', People);
  /**
   * Static representation of the [[favoriteFeature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAVORITE_FEATURE: EnumField<People> = new EnumField('FavoriteFeature', People);
  /**
   * Static representation of the [[features]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEATURES: CollectionField<People, 'Edm.Enum'> = new CollectionField('Features', People, 'Edm.Enum');
  /**
   * Static representation of the one-to-many navigation property [[friends]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIENDS: OneToManyLink<People, People> = new OneToManyLink('Friends', People, People);
  /**
   * Static representation of the one-to-one navigation property [[bestFriend]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEST_FRIEND: OneToOneLink<People, People> = new OneToOneLink('BestFriend', People, People);
  /**
   * All fields of the People entity.
   */
  export const _allFields: Array<StringField<People> | EnumField<People> | BigNumberField<People> | CollectionField<People, 'Edm.String'> | CollectionField<People, Location> | LocationField<People> | CollectionField<People, 'Edm.Enum'> | OneToManyLink<People, People> | OneToOneLink<People, People>> = [
    People.USER_NAME,
    People.FIRST_NAME,
    People.LAST_NAME,
    People.MIDDLE_NAME,
    People.GENDER,
    People.AGE,
    People.EMAILS,
    People.ADDRESS_INFO,
    People.HOME_ADDRESS,
    People.FAVORITE_FEATURE,
    People.FEATURES,
    People.FRIENDS,
    People.BEST_FRIEND
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<People> = new AllFields('*', People);
  /**
   * All key fields of the People entity.
   */
  export const _keyFields: Array<Field<People>> = [People.USER_NAME];
  /**
   * Mapping of all key field names to the respective static field property People.
   */
  export const _keys: { [keys: string]: Field<People> } = People._keyFields.reduce((acc: { [keys: string]: Field<People> }, field: Field<People>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

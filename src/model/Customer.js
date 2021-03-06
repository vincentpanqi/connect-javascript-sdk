/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Address = require('./Address');
var Card = require('./Card');
var CustomerGroupInfo = require('./CustomerGroupInfo');
var CustomerPreferences = require('./CustomerPreferences');




/**
 * The Customer model module.
 * @module model/Customer
 * @version 2.5.4
 */

/**
 * Constructs a new <code>Customer</code>.
 * Represents one of a business&#39;s customers, which can have one or more cards on file associated with it.
 * @alias module:model/Customer
 * @class
 * @param id {String} The customer's unique ID.
 * @param createdAt {String} The time when the customer was created, in RFC 3339 format.
 * @param updatedAt {String} The time when the customer was last updated, in RFC 3339 format.
 */
var exports = function(id, createdAt, updatedAt) {
  var _this = this;

  _this['id'] = id;
  _this['created_at'] = createdAt;
  _this['updated_at'] = updatedAt;












};

/**
 * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Customer} obj Optional instance to populate.
 * @return {module:model/Customer} The populated <code>Customer</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('cards')) {
      obj['cards'] = ApiClient.convertToType(data['cards'], [Card]);
    }
      if (data.hasOwnProperty('given_name')) {
      obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
    }
      if (data.hasOwnProperty('family_name')) {
      obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
    }
      if (data.hasOwnProperty('nickname')) {
      obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
    }
      if (data.hasOwnProperty('company_name')) {
      obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
    }
      if (data.hasOwnProperty('email_address')) {
      obj['email_address'] = ApiClient.convertToType(data['email_address'], 'String');
    }
      if (data.hasOwnProperty('address')) {
      obj['address'] = Address.constructFromObject(data['address']);
    }
      if (data.hasOwnProperty('phone_number')) {
      obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('preferences')) {
      obj['preferences'] = CustomerPreferences.constructFromObject(data['preferences']);
    }
      if (data.hasOwnProperty('groups')) {
      obj['groups'] = ApiClient.convertToType(data['groups'], [CustomerGroupInfo]);
    }
    }
  return obj;
}

/**
 * The customer's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The time when the customer was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The time when the customer was last updated, in RFC 3339 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * The non-confidential details of the customer's cards on file.
 * @member {Array.<module:model/Card>} cards
 */
exports.prototype['cards'] = undefined;
/**
 * The customer's given (i.e., first) name.
 * @member {String} given_name
 */
exports.prototype['given_name'] = undefined;
/**
 * The customer's family (i.e., last) name.
 * @member {String} family_name
 */
exports.prototype['family_name'] = undefined;
/**
 * The customer's nickname.
 * @member {String} nickname
 */
exports.prototype['nickname'] = undefined;
/**
 * The name of the customer's company.
 * @member {String} company_name
 */
exports.prototype['company_name'] = undefined;
/**
 * The customer's email address.
 * @member {String} email_address
 */
exports.prototype['email_address'] = undefined;
/**
 * The customer's physical address.
 * @member {module:model/Address} address
 */
exports.prototype['address'] = undefined;
/**
 * The customer's phone number.
 * @member {String} phone_number
 */
exports.prototype['phone_number'] = undefined;
/**
 * A second ID you can set to associate the customer with an entity in another system.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * A note to associate with the customer.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The customer's preferences.
 * @member {module:model/CustomerPreferences} preferences
 */
exports.prototype['preferences'] = undefined;
/**
 * The groups the customer belongs to.
 * @member {Array.<module:model/CustomerGroupInfo>} groups
 */
exports.prototype['groups'] = undefined;



module.exports = exports;




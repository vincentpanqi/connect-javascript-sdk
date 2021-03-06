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
var Error = require('./Error');
var V1Money = require('./V1Money');




/**
 * The V1PaymentTax model module.
 * @module model/V1PaymentTax
 * @version 2.5.4
 */

/**
 * Constructs a new <code>V1PaymentTax</code>.
 * @alias module:model/V1PaymentTax
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>V1PaymentTax</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PaymentTax} obj Optional instance to populate.
 * @return {module:model/V1PaymentTax} The populated <code>V1PaymentTax</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = V1Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('rate')) {
      obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
    }
      if (data.hasOwnProperty('inclusion_type')) {
      obj['inclusion_type'] = ApiClient.convertToType(data['inclusion_type'], 'String');
    }
      if (data.hasOwnProperty('fee_id')) {
      obj['fee_id'] = ApiClient.convertToType(data['fee_id'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The merchant-defined name of the tax.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The amount of money that this tax adds to the payment.
 * @member {module:model/V1Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
 * @member {String} rate
 */
exports.prototype['rate'] = undefined;
/**
 * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax.
 * @member {module:model/V1PaymentTax.InclusionTypeEnum} inclusion_type
 */
exports.prototype['inclusion_type'] = undefined;
/**
 * The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
 * @member {String} fee_id
 */
exports.prototype['fee_id'] = undefined;


  /**
   * Allowed values for the <code>inclusion_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InclusionTypeEnum = {
    /**
     * value: "ADDITIVE"
     * @const
     */
    "ADDITIVE": "ADDITIVE",
    /**
     * value: "INCLUSIVE"
     * @const
     */
    "INCLUSIVE": "INCLUSIVE"  };


module.exports = exports;




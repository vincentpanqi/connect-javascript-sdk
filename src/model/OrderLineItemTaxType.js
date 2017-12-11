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


/**
 * Enum class OrderLineItemTaxType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "UNKNOWN_TAX"
   * @const
   */
  "UNKNOWN_TAX": "UNKNOWN_TAX",
  /**
   * value: "ADDITIVE"
   * @const
   */
  "ADDITIVE": "ADDITIVE",
  /**
   * value: "INCLUSIVE"
   * @const
   */
  "INCLUSIVE": "INCLUSIVE"};

/**
 * Returns a <code>OrderLineItemTaxType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/OrderLineItemTaxType} The enum <code>OrderLineItemTaxType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


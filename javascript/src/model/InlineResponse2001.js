/*
 * The Weather Company PWS API
 * APIs for Personal Weather Station Contributors. This is an unofficial Swagger 2.0 document for working with The Weather Company (Weather Underground) API data. At this time (24-06-2020) this document only covers 3 availible endpoints in observations domain portfolio.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Summaries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Summaries'));
  } else {
    // Browser globals (root is window)
    if (!root.TheWeatherCompanyPwsApi) {
      root.TheWeatherCompanyPwsApi = {};
    }
    root.TheWeatherCompanyPwsApi.InlineResponse2001 = factory(root.TheWeatherCompanyPwsApi.ApiClient, root.TheWeatherCompanyPwsApi.Summaries);
  }
}(this, function(ApiClient, Summaries) {
  'use strict';

  /**
   * The InlineResponse2001 model module.
   * @module model/InlineResponse2001
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('summaries'))
        obj.summaries = Summaries.constructFromObject(data['summaries']);
    }
    return obj;
  }

  /**
   * @member {module:model/Summaries} summaries
   */
  exports.prototype.summaries = undefined;

  return exports;

}));

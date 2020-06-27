/*
 * The Weather Company PWS API
 * APIs for Personal Weather Station Contributors. This is an unofficial Swagger 2.0 document for working with The Weather Company (Weather Underground) API data. At this time (24-06-2020) this document only covers 4 availible endpoints in observations domain portfolio.
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheWeatherCompanyPwsApi);
  }
}(this, function(expect, TheWeatherCompanyPwsApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Summaries', function() {
      beforeEach(function() {
        instance = new TheWeatherCompanyPwsApi.Summaries();
      });

      it('should create an instance of Summaries', function() {
        // TODO: update the code to test Summaries
        expect(instance).to.be.a(TheWeatherCompanyPwsApi.Summaries);
      });

    });
  });

}));

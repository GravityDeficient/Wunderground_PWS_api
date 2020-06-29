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

  beforeEach(function() {
    instance = new TheWeatherCompanyPwsApi.PWSObservationsApi();
  });

  describe('(package)', function() {
    describe('PWSObservationsApi', function() {
      describe('v2PwsObservationsAll1day', function() {
        it('should call v2PwsObservationsAll1day successfully', function(done) {
          // TODO: uncomment, update parameter values for v2PwsObservationsAll1day call and complete the assertions
          /*
          var stationId = "stationId_example";
          var units = "units_example";
          var format = "json";
          var opts = {};
          opts.numericPrecision = "numericPrecision_example";

          instance.v2PwsObservationsAll1day(stationId, units, format, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TheWeatherCompanyPwsApi.InlineResponse200);
            {
              let dataCtr = data.observations;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(TheWeatherCompanyPwsApi.Observations);
                expect(data.country).to.be.a('string');
                expect(data.country).to.be("US");
                expect(data.epoch).to.be.a('number');
                expect(data.epoch).to.be("0");
                expect(data.humidity).to.be.a('number');
                expect(data.humidity).to.be(0);
                expect(data.lat).to.be.a('number');
                expect(data.lat).to.be(0.0);
                expect(data.lon).to.be.a('number');
                expect(data.lon).to.be(0.0);
                expect(data.neighborhood).to.be.a('string');
                expect(data.neighborhood).to.be("WOW Arizona!");
                expect(data.obsTimeLocal).to.be.a(Date);
                expect(data.obsTimeLocal).to.be(new Date());
                expect(data.obsTimeUtc).to.be.a(Date);
                expect(data.obsTimeUtc).to.be(new Date());
                expect(data.qcStatus).to.be.a('number');
                expect(data.qcStatus).to.be(0);
                expect(data.realtimeFrequency).to.be.a('number');
                expect(data.realtimeFrequency).to.be(0);
                expect(data.softwareType).to.be.a('string');
                expect(data.softwareType).to.be("WS-1001 V2.2.9");
                expect(data.solarRadiation).to.be.a('number');
                expect(data.solarRadiation).to.be(0.0);
                expect(data.stationID).to.be.a('string');
                expect(data.stationID).to.be("KAZTUCSO539");
                expect(data.uv).to.be.a('number');
                expect(data.uv).to.be(0.0);
                expect(data.winddir).to.be.a('number');
                expect(data.winddir).to.be(0);
                expect(data.imperial).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.imperial.dewpt).to.be.a('number');
                  expect(data.imperial.dewpt).to.be(0);
                  expect(data.imperial.elev).to.be.a('number');
                  expect(data.imperial.elev).to.be(0);
                  expect(data.imperial.heatIndex).to.be.a('number');
                  expect(data.imperial.heatIndex).to.be(0);
                  expect(data.imperial.precipRate).to.be.a('number');
                  expect(data.imperial.precipRate).to.be();
                  expect(data.imperial.precipTotal).to.be.a('number');
                  expect(data.imperial.precipTotal).to.be();
                  expect(data.imperial.pressure).to.be.a('number');
                  expect(data.imperial.pressure).to.be(0.0);
                  expect(data.imperial.temp).to.be.a('number');
                  expect(data.imperial.temp).to.be(0);
                  expect(data.imperial.windChill).to.be.a('number');
                  expect(data.imperial.windChill).to.be(0);
                  expect(data.imperial.windGust).to.be.a('number');
                  expect(data.imperial.windGust).to.be(0);
                  expect(data.imperial.windSpeed).to.be.a('number');
                  expect(data.imperial.windSpeed).to.be(0);
                expect(data.metric).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.metric.dewpt).to.be.a('number');
                  expect(data.metric.dewpt).to.be(0);
                  expect(data.metric.elev).to.be.a('number');
                  expect(data.metric.elev).to.be(0);
                  expect(data.metric.heatIndex).to.be.a('number');
                  expect(data.metric.heatIndex).to.be(0);
                  expect(data.metric.precipRate).to.be.a('number');
                  expect(data.metric.precipRate).to.be();
                  expect(data.metric.precipTotal).to.be.a('number');
                  expect(data.metric.precipTotal).to.be();
                  expect(data.metric.pressure).to.be.a('number');
                  expect(data.metric.pressure).to.be(0.0);
                  expect(data.metric.temp).to.be.a('number');
                  expect(data.metric.temp).to.be(0);
                  expect(data.metric.windChill).to.be.a('number');
                  expect(data.metric.windChill).to.be(0);
                  expect(data.metric.windGust).to.be.a('number');
                  expect(data.metric.windGust).to.be(0);
                  expect(data.metric.windSpeed).to.be.a('number');
                  expect(data.metric.windSpeed).to.be(0);
                expect(data.metricSi).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.metricSi.dewpt).to.be.a('number');
                  expect(data.metricSi.dewpt).to.be(0);
                  expect(data.metricSi.elev).to.be.a('number');
                  expect(data.metricSi.elev).to.be(0);
                  expect(data.metricSi.heatIndex).to.be.a('number');
                  expect(data.metricSi.heatIndex).to.be(0);
                  expect(data.metricSi.precipRate).to.be.a('number');
                  expect(data.metricSi.precipRate).to.be();
                  expect(data.metricSi.precipTotal).to.be.a('number');
                  expect(data.metricSi.precipTotal).to.be();
                  expect(data.metricSi.pressure).to.be.a('number');
                  expect(data.metricSi.pressure).to.be(0.0);
                  expect(data.metricSi.temp).to.be.a('number');
                  expect(data.metricSi.temp).to.be(0);
                  expect(data.metricSi.windChill).to.be.a('number');
                  expect(data.metricSi.windChill).to.be(0);
                  expect(data.metricSi.windGust).to.be.a('number');
                  expect(data.metricSi.windGust).to.be(0);
                  expect(data.metricSi.windSpeed).to.be.a('number');
                  expect(data.metricSi.windSpeed).to.be(0);
                expect(data.ukHybrid).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.ukHybrid.dewpt).to.be.a('number');
                  expect(data.ukHybrid.dewpt).to.be(0);
                  expect(data.ukHybrid.elev).to.be.a('number');
                  expect(data.ukHybrid.elev).to.be(0);
                  expect(data.ukHybrid.heatIndex).to.be.a('number');
                  expect(data.ukHybrid.heatIndex).to.be(0);
                  expect(data.ukHybrid.precipRate).to.be.a('number');
                  expect(data.ukHybrid.precipRate).to.be();
                  expect(data.ukHybrid.precipTotal).to.be.a('number');
                  expect(data.ukHybrid.precipTotal).to.be();
                  expect(data.ukHybrid.pressure).to.be.a('number');
                  expect(data.ukHybrid.pressure).to.be(0.0);
                  expect(data.ukHybrid.temp).to.be.a('number');
                  expect(data.ukHybrid.temp).to.be(0);
                  expect(data.ukHybrid.windChill).to.be.a('number');
                  expect(data.ukHybrid.windChill).to.be(0);
                  expect(data.ukHybrid.windGust).to.be.a('number');
                  expect(data.ukHybrid.windGust).to.be(0);
                  expect(data.ukHybrid.windSpeed).to.be.a('number');
                  expect(data.ukHybrid.windSpeed).to.be(0);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2PwsObservationsCurrent', function() {
        it('should call v2PwsObservationsCurrent successfully', function(done) {
          // TODO: uncomment, update parameter values for v2PwsObservationsCurrent call and complete the assertions
          /*
          var xRequestID = "xRequestID_example";
          var stationId = "stationId_example";
          var units = "units_example";
          var format = "json";
          var opts = {};
          opts.numericPrecision = "numericPrecision_example";

          instance.v2PwsObservationsCurrent(xRequestID, stationId, units, format, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TheWeatherCompanyPwsApi.InlineResponse200);
            {
              let dataCtr = data.observations;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(TheWeatherCompanyPwsApi.Observations);
                expect(data.country).to.be.a('string');
                expect(data.country).to.be("US");
                expect(data.epoch).to.be.a('number');
                expect(data.epoch).to.be("0");
                expect(data.humidity).to.be.a('number');
                expect(data.humidity).to.be(0);
                expect(data.lat).to.be.a('number');
                expect(data.lat).to.be(0.0);
                expect(data.lon).to.be.a('number');
                expect(data.lon).to.be(0.0);
                expect(data.neighborhood).to.be.a('string');
                expect(data.neighborhood).to.be("WOW Arizona!");
                expect(data.obsTimeLocal).to.be.a(Date);
                expect(data.obsTimeLocal).to.be(new Date());
                expect(data.obsTimeUtc).to.be.a(Date);
                expect(data.obsTimeUtc).to.be(new Date());
                expect(data.qcStatus).to.be.a('number');
                expect(data.qcStatus).to.be(0);
                expect(data.realtimeFrequency).to.be.a('number');
                expect(data.realtimeFrequency).to.be(0);
                expect(data.softwareType).to.be.a('string');
                expect(data.softwareType).to.be("WS-1001 V2.2.9");
                expect(data.solarRadiation).to.be.a('number');
                expect(data.solarRadiation).to.be(0.0);
                expect(data.stationID).to.be.a('string');
                expect(data.stationID).to.be("KAZTUCSO539");
                expect(data.uv).to.be.a('number');
                expect(data.uv).to.be(0.0);
                expect(data.winddir).to.be.a('number');
                expect(data.winddir).to.be(0);
                expect(data.imperial).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.imperial.dewpt).to.be.a('number');
                  expect(data.imperial.dewpt).to.be(0);
                  expect(data.imperial.elev).to.be.a('number');
                  expect(data.imperial.elev).to.be(0);
                  expect(data.imperial.heatIndex).to.be.a('number');
                  expect(data.imperial.heatIndex).to.be(0);
                  expect(data.imperial.precipRate).to.be.a('number');
                  expect(data.imperial.precipRate).to.be();
                  expect(data.imperial.precipTotal).to.be.a('number');
                  expect(data.imperial.precipTotal).to.be();
                  expect(data.imperial.pressure).to.be.a('number');
                  expect(data.imperial.pressure).to.be(0.0);
                  expect(data.imperial.temp).to.be.a('number');
                  expect(data.imperial.temp).to.be(0);
                  expect(data.imperial.windChill).to.be.a('number');
                  expect(data.imperial.windChill).to.be(0);
                  expect(data.imperial.windGust).to.be.a('number');
                  expect(data.imperial.windGust).to.be(0);
                  expect(data.imperial.windSpeed).to.be.a('number');
                  expect(data.imperial.windSpeed).to.be(0);
                expect(data.metric).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.metric.dewpt).to.be.a('number');
                  expect(data.metric.dewpt).to.be(0);
                  expect(data.metric.elev).to.be.a('number');
                  expect(data.metric.elev).to.be(0);
                  expect(data.metric.heatIndex).to.be.a('number');
                  expect(data.metric.heatIndex).to.be(0);
                  expect(data.metric.precipRate).to.be.a('number');
                  expect(data.metric.precipRate).to.be();
                  expect(data.metric.precipTotal).to.be.a('number');
                  expect(data.metric.precipTotal).to.be();
                  expect(data.metric.pressure).to.be.a('number');
                  expect(data.metric.pressure).to.be(0.0);
                  expect(data.metric.temp).to.be.a('number');
                  expect(data.metric.temp).to.be(0);
                  expect(data.metric.windChill).to.be.a('number');
                  expect(data.metric.windChill).to.be(0);
                  expect(data.metric.windGust).to.be.a('number');
                  expect(data.metric.windGust).to.be(0);
                  expect(data.metric.windSpeed).to.be.a('number');
                  expect(data.metric.windSpeed).to.be(0);
                expect(data.metricSi).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.metricSi.dewpt).to.be.a('number');
                  expect(data.metricSi.dewpt).to.be(0);
                  expect(data.metricSi.elev).to.be.a('number');
                  expect(data.metricSi.elev).to.be(0);
                  expect(data.metricSi.heatIndex).to.be.a('number');
                  expect(data.metricSi.heatIndex).to.be(0);
                  expect(data.metricSi.precipRate).to.be.a('number');
                  expect(data.metricSi.precipRate).to.be();
                  expect(data.metricSi.precipTotal).to.be.a('number');
                  expect(data.metricSi.precipTotal).to.be();
                  expect(data.metricSi.pressure).to.be.a('number');
                  expect(data.metricSi.pressure).to.be(0.0);
                  expect(data.metricSi.temp).to.be.a('number');
                  expect(data.metricSi.temp).to.be(0);
                  expect(data.metricSi.windChill).to.be.a('number');
                  expect(data.metricSi.windChill).to.be(0);
                  expect(data.metricSi.windGust).to.be.a('number');
                  expect(data.metricSi.windGust).to.be(0);
                  expect(data.metricSi.windSpeed).to.be.a('number');
                  expect(data.metricSi.windSpeed).to.be(0);
                expect(data.ukHybrid).to.be.a(TheWeatherCompanyPwsApi.Measures);
                      expect(data.ukHybrid.dewpt).to.be.a('number');
                  expect(data.ukHybrid.dewpt).to.be(0);
                  expect(data.ukHybrid.elev).to.be.a('number');
                  expect(data.ukHybrid.elev).to.be(0);
                  expect(data.ukHybrid.heatIndex).to.be.a('number');
                  expect(data.ukHybrid.heatIndex).to.be(0);
                  expect(data.ukHybrid.precipRate).to.be.a('number');
                  expect(data.ukHybrid.precipRate).to.be();
                  expect(data.ukHybrid.precipTotal).to.be.a('number');
                  expect(data.ukHybrid.precipTotal).to.be();
                  expect(data.ukHybrid.pressure).to.be.a('number');
                  expect(data.ukHybrid.pressure).to.be(0.0);
                  expect(data.ukHybrid.temp).to.be.a('number');
                  expect(data.ukHybrid.temp).to.be(0);
                  expect(data.ukHybrid.windChill).to.be.a('number');
                  expect(data.ukHybrid.windChill).to.be(0);
                  expect(data.ukHybrid.windGust).to.be.a('number');
                  expect(data.ukHybrid.windGust).to.be(0);
                  expect(data.ukHybrid.windSpeed).to.be.a('number');
                  expect(data.ukHybrid.windSpeed).to.be(0);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2PwsObservationsHourly7day', function() {
        it('should call v2PwsObservationsHourly7day successfully', function(done) {
          // TODO: uncomment, update parameter values for v2PwsObservationsHourly7day call and complete the assertions
          /*
          var stationId = "stationId_example";
          var units = "units_example";
          var format = "json";
          var opts = {};
          opts.numericPrecision = "numericPrecision_example";

          instance.v2PwsObservationsHourly7day(stationId, units, format, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TheWeatherCompanyPwsApi.InlineResponse2001);
            expect(data.observations).to.be.a(TheWeatherCompanyPwsApi.Summaries);
    
            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));

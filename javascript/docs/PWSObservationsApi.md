# TheWeatherCompanyPwsApi.PWSObservationsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ShaneEaston/Wunderground_PWS_api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**observationsAllOneDay**](PWSObservationsApi.md#observationsAllOneDay) | **GET** /observations/all/1day | 
[**observationsCurrent**](PWSObservationsApi.md#observationsCurrent) | **GET** /observations/current | 


<a name="observationsAllOneDay"></a>
# **observationsAllOneDay**
> InlineResponse200 observationsAllOneDay(stationId, units, format, opts)



Personal Weather Station (PWS) Rapid Historical Observations returns the daily observations records in rapid frequency as frequent as every 5 minutes. Actual frequency of reports ranges and is dependent on how frequently an individual Personal Weather Station (PWS) reports data.

### Example
```javascript
var TheWeatherCompanyPwsApi = require('the_weather_company_pws_api');
var defaultClient = TheWeatherCompanyPwsApi.ApiClient.instance;

// Configure API key authorization: APIKeyQueryParam
var APIKeyQueryParam = defaultClient.authentications['APIKeyQueryParam'];
APIKeyQueryParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQueryParam.apiKeyPrefix = 'Token';

var apiInstance = new TheWeatherCompanyPwsApi.PWSObservationsApi();

var stationId = "stationId_example"; // String | The PWS station ID

var units = "units_example"; // String | Unit type

var format = "json"; // String | 

var opts = { 
  'numericPrecision': "numericPrecision_example" // String | Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.observationsAllOneDay(stationId, units, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | **String**| The PWS station ID | 
 **units** | **String**| Unit type | 
 **format** | **String**|  | [default to json]
 **numericPrecision** | **String**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="observationsCurrent"></a>
# **observationsCurrent**
> InlineResponse200 observationsCurrent(stationId, units, format, opts)



Personal Weather Stations (PWS) Current Conditions returns the current conditions observations for the current record.Current record is the last record reported within 60 minutes. If the station has not reported a current conditions in the past 60 minutes, the response will not return an expired observation record (older than 60 minutes); a 'Data Expired' message will be returned instead.

### Example
```javascript
var TheWeatherCompanyPwsApi = require('the_weather_company_pws_api');
var defaultClient = TheWeatherCompanyPwsApi.ApiClient.instance;

// Configure API key authorization: APIKeyQueryParam
var APIKeyQueryParam = defaultClient.authentications['APIKeyQueryParam'];
APIKeyQueryParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQueryParam.apiKeyPrefix = 'Token';

var apiInstance = new TheWeatherCompanyPwsApi.PWSObservationsApi();

var stationId = "stationId_example"; // String | The PWS station ID

var units = "units_example"; // String | Unit type

var format = "json"; // String | 

var opts = { 
  'numericPrecision': "numericPrecision_example" // String | Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.observationsCurrent(stationId, units, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | **String**| The PWS station ID | 
 **units** | **String**| Unit type | 
 **format** | **String**|  | [default to json]
 **numericPrecision** | **String**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


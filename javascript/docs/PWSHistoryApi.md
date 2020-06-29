# TheWeatherCompanyPwsApi.PWSHistoryApi

All URIs are relative to *https://api.weather.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2PwsHistoryAll**](PWSHistoryApi.md#v2PwsHistoryAll) | **GET** /v2/pws/history/all | 
[**v2PwsHistoryDaily**](PWSHistoryApi.md#v2PwsHistoryDaily) | **GET** /v2/pws/history/daily | 
[**v2PwsHistoryHourly**](PWSHistoryApi.md#v2PwsHistoryHourly) | **GET** /v2/pws/history/hourly | 


<a name="v2PwsHistoryAll"></a>
# **v2PwsHistoryAll**
> InlineResponse2001 v2PwsHistoryAll(stationId, _date, units, format, opts)



Personal Weather Stations (PWS) Historical Data returns the historical PWS data for a single date, returning hourly data, summary data for the entire day, or both.

### Example
```javascript
var TheWeatherCompanyPwsApi = require('the_weather_company_pws_api');
var defaultClient = TheWeatherCompanyPwsApi.ApiClient.instance;

// Configure API key authorization: APIKeyQueryParam
var APIKeyQueryParam = defaultClient.authentications['APIKeyQueryParam'];
APIKeyQueryParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQueryParam.apiKeyPrefix = 'Token';

var apiInstance = new TheWeatherCompanyPwsApi.PWSHistoryApi();

var stationId = "stationId_example"; // String | The PWS station ID

var _date = 56; // Number | The date parameter is used to call the specific date request, using format “YYYYMMDD”

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
apiInstance.v2PwsHistoryAll(stationId, _date, units, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | **String**| The PWS station ID | 
 **_date** | **Number**| The date parameter is used to call the specific date request, using format “YYYYMMDD” | 
 **units** | **String**| Unit type | 
 **format** | **String**|  | [default to json]
 **numericPrecision** | **String**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v2PwsHistoryDaily"></a>
# **v2PwsHistoryDaily**
> InlineResponse2001 v2PwsHistoryDaily(stationId, _date, units, format, opts)



Personal Weather Stations (PWS) Historical Data returns the historical PWS data for a single date, returning summary data for the entire day.

### Example
```javascript
var TheWeatherCompanyPwsApi = require('the_weather_company_pws_api');
var defaultClient = TheWeatherCompanyPwsApi.ApiClient.instance;

// Configure API key authorization: APIKeyQueryParam
var APIKeyQueryParam = defaultClient.authentications['APIKeyQueryParam'];
APIKeyQueryParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQueryParam.apiKeyPrefix = 'Token';

var apiInstance = new TheWeatherCompanyPwsApi.PWSHistoryApi();

var stationId = "stationId_example"; // String | The PWS station ID

var _date = 56; // Number | The date parameter is used to call the specific date request, using format “YYYYMMDD”

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
apiInstance.v2PwsHistoryDaily(stationId, _date, units, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | **String**| The PWS station ID | 
 **_date** | **Number**| The date parameter is used to call the specific date request, using format “YYYYMMDD” | 
 **units** | **String**| Unit type | 
 **format** | **String**|  | [default to json]
 **numericPrecision** | **String**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v2PwsHistoryHourly"></a>
# **v2PwsHistoryHourly**
> InlineResponse2001 v2PwsHistoryHourly(stationId, _date, units, format, opts)



Personal Weather Stations (PWS) Historical Data returns the historical PWS data for a single date, returning hourly data.

### Example
```javascript
var TheWeatherCompanyPwsApi = require('the_weather_company_pws_api');
var defaultClient = TheWeatherCompanyPwsApi.ApiClient.instance;

// Configure API key authorization: APIKeyQueryParam
var APIKeyQueryParam = defaultClient.authentications['APIKeyQueryParam'];
APIKeyQueryParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQueryParam.apiKeyPrefix = 'Token';

var apiInstance = new TheWeatherCompanyPwsApi.PWSHistoryApi();

var stationId = "stationId_example"; // String | The PWS station ID

var _date = 56; // Number | The date parameter is used to call the specific date request, using format “YYYYMMDD”

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
apiInstance.v2PwsHistoryHourly(stationId, _date, units, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | **String**| The PWS station ID | 
 **_date** | **Number**| The date parameter is used to call the specific date request, using format “YYYYMMDD” | 
 **units** | **String**| Unit type | 
 **format** | **String**|  | [default to json]
 **numericPrecision** | **String**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


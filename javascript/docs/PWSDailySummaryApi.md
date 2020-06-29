# TheWeatherCompanyPwsApi.PWSDailySummaryApi

All URIs are relative to *https://api.weather.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2PwsDailysummary7day**](PWSDailySummaryApi.md#v2PwsDailysummary7day) | **GET** /v2/pws/dailysummary/7day | 


<a name="v2PwsDailysummary7day"></a>
# **v2PwsDailysummary7day**
> InlineResponse2002 v2PwsDailysummary7day(stationId, units, format, opts)



Personal Weather Station (PWS) Daily Summary Historical Observations returns the daily summary of daily observations for each day's observations report.

### Example
```javascript
var TheWeatherCompanyPwsApi = require('the_weather_company_pws_api');
var defaultClient = TheWeatherCompanyPwsApi.ApiClient.instance;

// Configure API key authorization: APIKeyQueryParam
var APIKeyQueryParam = defaultClient.authentications['APIKeyQueryParam'];
APIKeyQueryParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyQueryParam.apiKeyPrefix = 'Token';

var apiInstance = new TheWeatherCompanyPwsApi.PWSDailySummaryApi();

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
apiInstance.v2PwsDailysummary7day(stationId, units, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | **String**| The PWS station ID | 
 **units** | **String**| Unit type | 
 **format** | **String**|  | [default to json]
 **numericPrecision** | **String**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


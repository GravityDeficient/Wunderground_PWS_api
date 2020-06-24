# Swagger\Client\PWSObservationsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ShaneEaston/Wunderground_PWS_api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**observationsAllOneDay**](PWSObservationsApi.md#observationsAllOneDay) | **GET** /observations/all/1day | 
[**observationsCurrent**](PWSObservationsApi.md#observationsCurrent) | **GET** /observations/current | 


# **observationsAllOneDay**
> \Swagger\Client\Model\InlineResponse200 observationsAllOneDay($station_id, $units, $format, $numeric_precision)



Personal Weather Station (PWS) Rapid Historical Observations returns the daily observations records in rapid frequency as frequent as every 5 minutes. Actual frequency of reports ranges and is dependent on how frequently an individual Personal Weather Station (PWS) reports data.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure API key authorization: APIKeyQueryParam
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('apiKey', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('apiKey', 'Bearer');

$apiInstance = new Swagger\Client\Api\PWSObservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$station_id = "station_id_example"; // string | The PWS station ID
$units = "units_example"; // string | Unit type
$format = "json"; // string | 
$numeric_precision = "numeric_precision_example"; // string | Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used.

try {
    $result = $apiInstance->observationsAllOneDay($station_id, $units, $format, $numeric_precision);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PWSObservationsApi->observationsAllOneDay: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station_id** | **string**| The PWS station ID |
 **units** | **string**| Unit type |
 **format** | **string**|  | [default to json]
 **numeric_precision** | **string**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

[APIKeyQueryParam](../../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **observationsCurrent**
> \Swagger\Client\Model\InlineResponse200 observationsCurrent($station_id, $units, $format, $numeric_precision)



Personal Weather Stations (PWS) Current Conditions returns the current conditions observations for the current record.Current record is the last record reported within 60 minutes. If the station has not reported a current conditions in the past 60 minutes, the response will not return an expired observation record (older than 60 minutes); a 'Data Expired' message will be returned instead.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure API key authorization: APIKeyQueryParam
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('apiKey', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('apiKey', 'Bearer');

$apiInstance = new Swagger\Client\Api\PWSObservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$station_id = "station_id_example"; // string | The PWS station ID
$units = "units_example"; // string | Unit type
$format = "json"; // string | 
$numeric_precision = "numeric_precision_example"; // string | Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used.

try {
    $result = $apiInstance->observationsCurrent($station_id, $units, $format, $numeric_precision);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PWSObservationsApi->observationsCurrent: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station_id** | **string**| The PWS station ID |
 **units** | **string**| Unit type |
 **format** | **string**|  | [default to json]
 **numeric_precision** | **string**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

[APIKeyQueryParam](../../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


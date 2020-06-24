# swagger_client.PWSObservationsApi

All URIs are relative to *https://api.weather.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**observations_all_one_day**](PWSObservationsApi.md#observations_all_one_day) | **GET** /v2/pws/observations/all/1day | 
[**observations_current**](PWSObservationsApi.md#observations_current) | **GET** /v2/pws/observations/current | 


# **observations_all_one_day**
> InlineResponse200 observations_all_one_day(station_id, units, format, numeric_precision=numeric_precision)



Personal Weather Station (PWS) Rapid Historical Observations returns the daily observations records in rapid frequency as frequent as every 5 minutes. Actual frequency of reports ranges and is dependent on how frequently an individual Personal Weather Station (PWS) reports data.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: APIKeyQueryParam
configuration = swagger_client.Configuration()
configuration.api_key['apiKey'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.PWSObservationsApi(swagger_client.ApiClient(configuration))
station_id = 'station_id_example' # str | The PWS station ID
units = 'units_example' # str | Unit type
format = 'json' # str |  (default to json)
numeric_precision = 'numeric_precision_example' # str | Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. (optional)

try:
    api_response = api_instance.observations_all_one_day(station_id, units, format, numeric_precision=numeric_precision)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PWSObservationsApi->observations_all_one_day: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station_id** | **str**| The PWS station ID | 
 **units** | **str**| Unit type | 
 **format** | **str**|  | [default to json]
 **numeric_precision** | **str**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **observations_current**
> InlineResponse200 observations_current(station_id, units, format, numeric_precision=numeric_precision)



Personal Weather Stations (PWS) Current Conditions returns the current conditions observations for the current record.Current record is the last record reported within 60 minutes. If the station has not reported a current conditions in the past 60 minutes, the response will not return an expired observation record (older than 60 minutes); a 'Data Expired' message will be returned instead.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: APIKeyQueryParam
configuration = swagger_client.Configuration()
configuration.api_key['apiKey'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.PWSObservationsApi(swagger_client.ApiClient(configuration))
station_id = 'station_id_example' # str | The PWS station ID
units = 'units_example' # str | Unit type
format = 'json' # str |  (default to json)
numeric_precision = 'numeric_precision_example' # str | Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. (optional)

try:
    api_response = api_instance.observations_current(station_id, units, format, numeric_precision=numeric_precision)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PWSObservationsApi->observations_current: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **station_id** | **str**| The PWS station ID | 
 **units** | **str**| Unit type | 
 **format** | **str**|  | [default to json]
 **numeric_precision** | **str**| Optional parameter.  Set to ‘decimal’ to ensure data is returned in decimal format when needed. Will return integers if this value is not used. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


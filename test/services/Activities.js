import httpClient from '../api/httpClient.js';  
import { getActivities, createActivity, getActivityById } from '../api/endpoints.js';

export async function getActivitiesData() {
    try {const response = await httpClient.get(getActivities.url);
       console.log('Fetched activities:', response.data);  
      return { status: response.status, data: response.data };
    } catch (error) {
        return error.response;
    }  
}

export async function createActivityData(activityData) {
    try {
      const response = await httpClient.post(createActivity.url, activityData);
      return { status: response.status, data: response.data };
    } catch (error) {
        return error.response;
    } 
}
export async function getActivityByIdData(id) {
    try {
      const endpointConfig = getActivityById(id);
      const response = await httpClient({
        method: endpointConfig.method,
        url: endpointConfig.url,
      });
      return { status: response.status, data: response.data };
    } catch (error) {
        return error.response;
    }
}
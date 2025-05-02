import httpClient from '../api/httpClient.js';  
import { getActivities } from '../api/endpoints.js';  

export async function getActivitiesData() {
    try {
      const response = await httpClient({
        method: getActivities.method,
        url: getActivities.url,  
      });
      console.log('Fetched activities:', response.data);  
      return { status: response.status, data: response.data };
    } catch (error) {
      console.error('Error fetching activities:', error.response);
      return { status: error.response?.status, data: error.response?.data };
    }
}
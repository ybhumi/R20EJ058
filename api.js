// api.js

const API_BASE_URL = 'http://104.211.219.98:80/train/trains'; 

// Function to register the company
export const registerCompany = async (companyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering the company:', error);
    throw error;
  }
};

// Function to obtain authorization token
export const getAuthorizationToken = async (companyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error obtaining authorization token:', error);
    throw error;
  }
};

// Function to fetch all trains
export const getAllTrains = async (authorizationToken) => {
  try {
    const response = await fetch(`${API_BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${authorizationToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all trains:', error);
    throw error;
  }
};

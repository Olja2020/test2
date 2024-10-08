import axios from 'axios';
//import { IOrder } from '../../react-app-env';

export const BASE_URL = 'http://localhost:5000';

export async function getFlowers() {
  try {
    const response = await axios.get(`${BASE_URL}/flowers`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getShops() {
  try {
    const response = await axios.get(`${BASE_URL}/shops`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function postOrder(data) {
  try {
    console.log('object to send', JSON.stringify(data));
    const response = await axios.post(`${BASE_URL}/orders`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getOrders() {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    return error;
  }
}

import axios from "axios"
import { baseUrl } from "../api/endPoints";

export function GET(end_point) {
    return axios.get(`${baseUrl}${end_point}`)
        .then(response => response?.data)
        .catch(err => {
            console.error('Error fetching data:', err);
            return { error: err.message };
        });
}
export function POST(end_point, userData) {
    return axios.post(`${baseUrl}${end_point}`, userData)
        .then(response => response.data)
        .catch(err => {
            console.error('Error sending data:', err);
            return { error: err.message };
        });
}
export function DELETE(end_point, id) {
    return axios.delete(`${baseUrl}${end_point}/${id}`)
        .then(response => response?.data)
        .catch(err => {
            console.error('Error deleting data:', err);
            return { error: err.message };
        });
}
export function PUT(end_point, id) {
    return axios.put(`${baseUrl}${end_point}/${id}`)
        .then(response => response?.data)
        .catch(err => {
            console.error('Error updating data:', err);
            return { error: err.message };
        });
}
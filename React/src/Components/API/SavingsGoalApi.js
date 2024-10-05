import axios from 'axios';

class SavingoalsApi {

    static BASE_URL = "http://localhost:8080/api/savingGoals";

    static async add(savingGoals, token,userId) { 
        try {
            const response = await axios.post(`${this.BASE_URL}/add/${userId}`, savingGoals, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    };

    static async getById(token,userId) {  
        try {
            const response = await axios.get(`${this.BASE_URL}/getByUser/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    };

}

export default SavingoalsApi;

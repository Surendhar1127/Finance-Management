import axios from 'axios';

class InvestmentApi {

    static BASE_URL = "http://localhost:8080/api/investment";

    static async add(investment, token,userId) { 
        try {
            const response = await axios.post(`${this.BASE_URL}/add/${userId}`, investment, {
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

export default InvestmentApi;

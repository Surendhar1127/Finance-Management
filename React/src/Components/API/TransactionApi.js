import axios from 'axios';

class Transaction {

    static BASE_URL = "http://localhost:8080/api/transaction";

    static async add(transaction,token,userId) {  
        try {
            const response = await axios.post(`${this.BASE_URL}/add/${userId}`, transaction, {
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

export default Transaction;

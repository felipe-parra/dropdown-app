import axios from "axios"
import { config } from "../config"

class DataService {
    async getAll({collection}){
        const response = await axios.get(`${config.apiUrl}/${collection}`)
        const data = await response.data
        return data
    }
    async getOne({collection, id}){
        const response = await axios.get(`${config.apiUrl}/${collection}/${id}`)
        const data = await response.data
        return data
    }
    async getSales({collection, id}){
        const response = await axios.get(`${config.apiUrl}/sales/${collection}/${id}`)
        const data = await response.data
        return data
    }
}

export default DataService
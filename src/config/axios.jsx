import axios from 'axios'
// axios.create crea una url de base - Dominio principal donde se pasan todas las peticiones
const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clienteAxios
import axios from 'axios'

const apiService = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
  },
)

apiService.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  }
  return config
})


const getData = async (url) => {
  try {
    const response = await apiService.get(url)
    return response.data
  } catch (e) {
    return Promise.reject(e)
  }
}
const postData = async (url, payload) => {
  try {
    const response = await apiService.post(url, { ...payload })
    return response.data
  } catch (e) {
    return Promise.reject(e)
  }
}
const deleteData = async (url) => {
  try {
    const response = await apiService.delete(url)
    return response.data
  } catch (e) {
    return Promise.reject(e)
  }
}
const editData = async (url, payload) => {
  try {
    const response = await apiService.put(url, { ...payload })
    return response.data
  } catch (e) {
    return Promise.reject(e)
  }
}

export { getData, postData, deleteData, editData, apiService }

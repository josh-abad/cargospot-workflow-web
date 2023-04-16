import axios from "axios";

const baseUrl = `http://localhost:8081/api/events`

const getEvents = async () => {
  const response = await axios.get<CargospotEvent[]>(baseUrl)
  return response.data
}

export default { getEvents }

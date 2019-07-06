import axios from 'axios'
import People from './people'

export const client = axios.create({
  baseURL: 'https://swapi.co/api/'
})

client.defaults.headers['Content-Type'] = 'application/json'
client.defaults.headers.Accept = 'application/json'

export default {
  people: People(client)
}

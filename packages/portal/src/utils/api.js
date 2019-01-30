// import axios from 'axios'
import { Auth } from 'utils'

const { DEV_API_URL, PROD_API_URL, NODE_ENV } = process.env
const API_URL = NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL

const api = query =>
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      Authorization: `bearer ${Auth.getToken()}`,
      'Content-Type': 'application/json',
    },
  })

export { api }

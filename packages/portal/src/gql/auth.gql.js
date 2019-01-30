import { api } from 'utils'

const AuthQueries = {
  login: (username, password) => {
    const loginQuery = {
      query: `
          query {
            login(username: "${username}", password: "${password}")
          }
        `,
    }
    return api(loginQuery)
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(res => res)
  },
  register: ({ forename, surname, username, password, email, avatar }) => {
    const registerQuery = {
      query: `
        mutation {
          register (
            forename: "${forename}"
            surname: "${surname}"
            email: "${email}"
            username: "${username}"
            password: "${password}"
            avatar: "${avatar}"
          )
        }
      `,
    }
    return api(registerQuery)
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(res => res)
  },
}

export { AuthQueries }

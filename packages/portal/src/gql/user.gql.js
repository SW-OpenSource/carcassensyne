import { api, Auth } from 'utils'

const UserQueries = {
  me: () => {
    const _id = Auth.getIdFromToken()
    const meQuery = {
      query: `
          query {
            me(_id: "${_id}") {
              _id
              forename
              surname
              email
              username
              avatar
              games {
                players {
                  user {
                    username
                  }
                }
                expansions
              }
              createdAt
              updatedAt
              scope
            }
          }
        `,
    }
    return api(meQuery)
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(res => res)
  },
}

export { UserQueries }

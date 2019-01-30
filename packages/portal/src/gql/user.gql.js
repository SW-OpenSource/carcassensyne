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
              lists {
                _id
                title
                icon
                creator {
                  _id
                  username
                  forename
                }
                items {
                  _id
                  title
                  icon
                  creator {
                    _id
                    username
                    forename
                  }
                  tags {
                    _id
                    title
                    color
                    creator {
                      _id
                      username
                      forename
                    }
                    createdAt
                    updatedAt
                  }
                  note
                  done
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
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

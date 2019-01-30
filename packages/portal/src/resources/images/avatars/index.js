import user1 from './users-1.svg'
import user2 from './users-2.svg'
import user3 from './users-3.svg'
import user4 from './users-4.svg'
import user5 from './users-5.svg'
import user6 from './users-6.svg'
import user7 from './users-7.svg'
import user8 from './users-8.svg'
import user9 from './users-9.svg'
import user10 from './users-10.svg'
import user11 from './users-11.svg'
import user12 from './users-12.svg'
import user13 from './users-13.svg'
import user14 from './users-14.svg'
import user15 from './users-15.svg'
import user16 from './users-16.svg'
import placeholder from './placeholder.png'

const avatars = [
  { name: 'placeholder', image: placeholder },
  { name: 'user1', image: user1 },
  { name: 'user2', image: user2 },
  { name: 'user3', image: user3 },
  { name: 'user4', image: user4 },
  { name: 'user5', image: user5 },
  { name: 'user6', image: user6 },
  { name: 'user7', image: user7 },
  { name: 'user8', image: user8 },
  { name: 'user9', image: user9 },
  { name: 'user10', image: user10 },
  { name: 'user11', image: user11 },
  { name: 'user12', image: user12 },
  { name: 'user13', image: user13 },
  { name: 'user14', image: user14 },
  { name: 'user15', image: user15 },
  { name: 'user16', image: user16 },
]

const getAvatarByName = name => {
  if (!name || avatars.filter(avatar => avatar.name === name).length === 0) {
    return avatars[0].image
  }
  return avatars.find(avatar => avatar.name === name).image
}

export default avatars
export { getAvatarByName }

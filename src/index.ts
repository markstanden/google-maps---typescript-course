import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user1 = new User()
const company = new Company()
console.log(user1, company)

setTimeout(() => {
  let myMap = new CustomMap('map')
  myMap.addMarker(user1)
  myMap.addMarker(company)
}, 2000)

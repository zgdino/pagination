const paginate = (followers) => {
  // setting up how many items per page we want to see
  const itemsPerPage = 10
  // using Math.ceil to round up the number
  const pages = Math.ceil(followers.length / itemsPerPage)
  // Array.from is allowing us to create a new array from other types of data
  // setting up the length of newFollowers to be equal to followers
  const newFollowers = Array.from({ length: pages }, (_, index) => {
   const start = index * itemsPerPage
   // pulling it from followers from start to start + itemsPerPage
   return followers.slice(start, start + itemsPerPage)
  })
}

export default paginate

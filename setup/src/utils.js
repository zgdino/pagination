const paginate = (followers) => {
 const itemsPerPage = 10
 // using Math.ceil to round up the number
 const pages = Math.ceil(followers.length / itemsPerPage)
 console.log(pages);
}

export default paginate

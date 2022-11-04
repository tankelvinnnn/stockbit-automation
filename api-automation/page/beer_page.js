const supertest = require('supertest')
require('dotenv').config()

const api = supertest('https://api.punkapi.com/v2')

const getBeer = (pageNumber, numberData)=>
  api
    .get(`/beers`)
	  .query({page: pageNumber , per_page:numberData})

const getAllBeer = ()=>
  api
    .get(`/beers`)

module.exports = {
	getBeer,
  getAllBeer
};
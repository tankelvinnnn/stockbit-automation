const chai = require('chai')
const assert = require('chai').expect
chai.use(require('chai-json-schema'))

const beerPage = require('../page/beer_page.js')
const schema = require('../data/beer_schema.json')

const testCase={
	describe: 'Get Beer',
	getData :{
		get1Data : 'As a User, I want to be able see 1 beer data',
		get5Data : 'As a User, I want to be able see 5 beer data',
		get20Data : 'As a User, I want to be able see 20 beer data',
		getAllData: 'As a User, I wanto to be able see all beer data'
	}
}

describe(`@beer ${testCase.describe}`, () => {
	it(`@beer ${testCase.getData.get1Data}`, async () => {
		const response = await beerPage.getBeer(2,1);
		assert(response.status).to.equals(200);
		assert(response.body.length).to.equal(1);
	})
	it(`@beer ${testCase.getData.get5Data}`, async () => {
		const response = await beerPage.getBeer(2,5);
		assert(response.status).to.equals(200);
		assert(response.body.length).to.equal(5);
	})
	it(`@beer ${testCase.getData.get20Data}`, async () => {
		const response = await beerPage.getBeer(2,20);
		assert(response.status).to.equals(200);
		assert(response.body.length).to.equal(20);
	})
	it(`@beer ${testCase.getData.getAllData}`, async () => {
		const response = await beerPage.getAllBeer();
		const jsonData = JSON.parse(JSON.stringify(response.body));
		assert(response.status).to.equals(200);
		assert(response.body).to.be.jsonSchema(schema);
		let i = 0;
		do{
			console.log(jsonData[i].name)
			i++
		}
		while(i < jsonData.length)
	})
})
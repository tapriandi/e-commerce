const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
chai.use(chaiHttp)

describe("User Test", function () {
    describe("POST api/user/register", function () {

        it('should success register with code 201, no error', function (done) {
            let user = {
                name: 'budi',
                email: 'budi@mail.com',
                password: 12345
            }
            chai
                .request(app)
                .post('/api/user/register')
                .send(user)
                .end(function (err, res) {
                    console.log(JSON.stringify(res.body, null, 3));
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.a('object')
                    expect(res.body.name).to.equal('budi')
                    expect(res.body).to.have.keys(['token', 'name', 'email', 'password'])
                })
        })
        describe('POST /api/user/login', function () {

            it('should success login with code 200, no error', function(done){
                let user = {
                    email: 'budi@mail.com',
                    password: 12345
                }
                chai
                    .request(app)
                    .post('/api/user/login')
                    .send(user)
                    .end( function(err, res) {
                        // console.log(JSON.stringify(res.body, null, 3));
                        expect(err).to.be.null
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.a("object")
                        expect(res.body.password).not.equal(12345)//cause bcrypt
                        done()
                    })
            })
        })
    })
})
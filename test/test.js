let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Insertar usuario: ',()=>{
    it('Deberia insertar un usuario', (done) => {
        chai.request(url)
            .post('/register')
            .send({name: "prueba", email: "prueba@gmail.com", password: "prueba"})
            .end( function(err,res){
                done();
            });
    });
});

describe('Insertar post: ',()=>{
    it('Deberia insertar un post', (done) => {
        let post = {
            title: "prueba de post", 
            content: "Esto es una prueba"
        }
        chai.request(url)
            .post('/newPost')
            .send(post)
            .end(function(err,res){
                done();
            });
    });
});

describe('Obtener sesion de usuario: ',()=>{
    it('Deberia obtener sesion de usuario', (done) => {
        chai.request(url)
            .get('/profile')
            .end(function(err,res){
                done();
            });
    });
});

describe('Obtener posts: ',()=>{
    it('Deberia obtener todos los posts', (done) => {
        chai.request(url)
            .post('/allPosts')
            .end(function(err,res){
                done();
            });
    });
});
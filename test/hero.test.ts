import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require("chai-http");

import app from '../src/App';
import {Hero} from "../src/models/Hero";

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/heroes', () => {
    it('responds with JSON array', () => {
        return chai.request(app).get('/api/v1/heroes')
        .then(res => {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(5);
        });
    });
    it('should include Wolverine', () => {
        return chai.request(app).get('/api/v1/heroes')
        .then(res => {
            let heroes:Array<Hero> = res.body;
            let Wolverine = heroes.find(hero => hero.name === 'Wolverine');
            expect(Wolverine).to.exist;
            expect(Wolverine).to.have.all.keys([
                'id',
                'name',
                'aliases',
                'occupation',
                'gender',
                'height',
                'hair',
                'eyes',
                'powers'
            ]);
        });
    });
});

describe('GET api/v1/heroes/:id', () => {
    it('responds with single JSON object', () => {
        return chai.request(app).get('/api/v1/heroes/1')
        .then(res => {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
        });
    });

    it('should return Luke Cage', () => {
        return chai.request(app).get('/api/v1/heroes/1')
        .then(res => {
            expect(res.body.hero.name).to.equal('Luke Cage');
        });
    });

    it('should return 404', () => {
        return chai.request(app).get('/api/v1/heroes/51')
        .then(res => {
            expect(res.status).to.equal(404);
        }).catch(err => {
            if (err.response) {
                expect(err.response.status).to.equal(404);
                expect(err.response.body.message).to.eql('No hero found with the given id.');
            } else {
                throw err;
            }
        });
    });
    
});
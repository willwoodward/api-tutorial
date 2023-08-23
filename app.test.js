/* eslint-disable */

const request = require('supertest');
const app = require('./app');

describe('Testing the test methods', () => {
    test('GET /test/get succeeds', () => {
        return request(app)
        .get('/test/get')
        .expect(200);
    });

    test('GET /test/get/:index succeeds', () => {
        return request(app)
        .get('/test/get/0')
        .expect(200);
    });

    test('POST /test/new succeeds', () => {
        return request(app)
        .post('/test/new')
        .send({
            message: 'Hello World!'
        })
        .expect(200);
    });

    test('POST /test/remove succeeds', () => {
        return request(app)
        .post('/test/remove')
        .send({
            index: -1
        })
        .expect(200);
    });
});
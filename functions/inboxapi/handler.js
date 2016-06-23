'use strict';

var http = require('http');

function display(object) {
    try {
        return JSON.stringify(object, null, 2);
    } catch(e) {
        return object;
    }
}

module.exports.handler = function(event, context, cb) {
    var operation = event.operation || 'default';
    var WEBHOOK_URL = process.env.WEBHOOK_URL;
    console.log('operation', operation);
    console.log('Payload: ', display(event.payload));

    switch (operation) {
        case 'sendResume':
            var request = require('request');

            var message = `
                【新的履歷事件】\n
                姓名：${event.payload.name}\n
                應徵職缺：${event.payload.job}\n
                電話：${event.payload.phone}\n
                信箱：${event.payload.email}\n
                履歷：${event.payload.resume}
            `;

            request.post({
                url: WEBHOOK_URL,
                json: {
                    text: message
                }
            }, function optionalCallback(err, httpResponse, body) {
                if (err || body !== 'ok') {
                    return context.fail(err);
                }
                context.succeed({
                    message: 'ok, it works',
                    payload: event.payload
                });
            });

            break;
        default:
            return cb(null, {
                message: 'Go Serverless! Your Lambda function executed successfully!'
            });
    }
    //
};

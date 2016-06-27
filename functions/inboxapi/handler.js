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

            if (!event.sourceIP) {
                return cb(null, {
                    message: '嗨，網路有點問題，換個環境再試試看吧！'
                });
            }

            var content = `
                【新的履歷事件】\n
                姓名：${event.payload.name}\n
                應徵職缺：${event.payload.job}\n
                電話：${event.payload.phone}\n
                信箱：${event.payload.email}\n
                履歷：${(event.payload.resume + '').substring(0, 500)}\n
                IP：${event.sourceIP}
            `;

            request.post({
                url: WEBHOOK_URL,
                json: {
                    text: content
                }
            }, function optionalCallback(err, httpResponse, body) {
                if (err || body !== 'ok') {
                    return context.fail(err);
                }
                context.succeed({
                    message: 'ok, it works',
                    content: content,
                    ip: event.sourceIP,
                    payload: event.payload
                });
            });

            break;
        default:
            return cb(null, {
                message: '嗨，看到這個訊息代表中間一定有什麼誤會，再試試看吧！'
            });
    }
    //
};

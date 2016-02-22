Meteor.startup(function() {
    if (Messages.find().count() === 0) {
        var messageList = [{
            'author': 'Mikki',
            'message': 'Hello Team'
        }, {
            'author': 'Max',
            'message': 'I Love D3'
        }, {
            'author': 'Eugene',
            'message': 'I Love HTML'
        }, {
            'author': 'Zaika',
            'message': 'I Love Git'
        }];
        for (var i = 0; i < messageList.length; i++) {
            Messages.insert(messageList[i]);
        }
    }
    if (Targets.find().count() === 0) {
        var targetList = [{
            'name': 'Feedback chat Activity',
            'goalValue': 1000,
            'metric': 'messages',
            'metricShort': 'm',
            'startDate': new Date(),
            'goalDate': new Date('2016-03-15'),
            'frequency': 60 * 24,
            'progress': [
                { 'date': new Date('2016-02-20T01:10:21Z'), 'value': 20 }
            ],
            'status': 'active'
        }, {
            'name': 'Read JS books',
            'goalValue': 1000,
            'metric': 'pages',
            'metricShort': 'p',
            'startDate': new Date(),
            'goalDate': new Date('2016-03-01'),
            'frequency': 60 * 24,
            'progress': [{
                "date": new Date('2016-03-31T04:55:37-03:00'),
                "value": 22
            }, {
                "date": new Date('2016-03-20T10:39:17-02:00'),
                "value": 79
            }, {
                "date": new Date('2016-04-23T02:45:32-03:00'),
                "value": 86
            }, {
                "date": new Date('2016-04-19T02:11:18-03:00'),
                "value": 63
            }, {
                "date": new Date('2016-03-20T08:35:37-02:00'),
                "value": 94
            }, {
                "date": new Date('2016-04-16T09:06:26-03:00'),
                "value": 80
            }, {
                "date": new Date('2016-03-27T12:16:35-02:00'),
                "value": 97
            }, {
                "date": new Date('2016-04-22T07:44:55-03:00'),
                "value": 79
            }, {
                "date": new Date('2016-04-24T03:55:09-03:00'),
                "value": 44
            }, {
                "date": new Date('2016-03-20T07:26:33-02:00'),
                "value": 98
            }, {
                "date": new Date('2016-04-14T03:41:34-03:00'),
                "value": 40
            }, {
                "date": new Date('2016-04-12T10:36:37-03:00'),
                "value": 71
            }, {
                "date": new Date('2016-03-26T04:34:27-02:00'),
                "value": 65
            }, {
                "date": new Date('2016-04-19T05:34:45-03:00'),
                "value": 62
            }],
            'status': 'active'
        }, {
            'name': 'Push ups',
            'goalValue': 750,
            'metric': 'times',
            'metricShort': '',
            'startDate': new Date(),
            'goalDate': new Date('2016-03-20'),
            'frequency': 60 * 24,
            'progress': [{
                "date": new Date('2016-03-31T01:05:09-03:00'),
                "value": 41
            }, {
                "date": new Date('2016-03-06T08:37:19-02:00'),
                "value": 60
            }, {
                "date": new Date('2016-03-20T05:22:05-02:00'),
                "value": 28
            }, {
                "date": new Date('2016-03-14T04:44:47-02:00'),
                "value": 63
            }, {
                "date": new Date('2016-03-13T01:25:13-02:00'),
                "value": 45
            }, {
                "date": new Date('2016-03-09T04:27:16-02:00'),
                "value": 80
            }, {
                "date": new Date('2016-04-11T06:37:28-03:00'),
                "value": 31
            }, {
                "date": new Date('2016-04-20T02:52:49-03:00'),
                "value": 16
            }, {
                "date": new Date('2016-04-16T10:28:03-03:00'),
                "value": 58
            }, {
                "date": new Date('2016-04-12T01:15:23-03:00'),
                "value": 33
            }, {
                "date": new Date('2016-03-01T12:57:58-02:00'),
                "value": 31
            }, {
                "date": new Date('2016-04-22T04:29:37-03:00'),
                "value": 20
            }, {
                "date": new Date('2016-03-11T10:12:53-02:00'),
                "value": 4
            }, {
                "date": new Date('2016-03-16T08:11:39-02:00'),
                "value": 2
            }, {
                "date": new Date('2016-04-09T08:08:35-03:00'),
                "value": 26
            }],
            'status': 'active'
        }, {
            'name': 'Drink more',
            'goalValue': 100,
            'metric': 'litres',
            'metricShort': 'l',
            'startDate': new Date(),
            'goalDate': new Date('2016-04-01'),
            'frequency': 60,
            'progress': [{
                "date": new Date('2016-03-31T07:25:02-03:00'),
                "value": 2.7
            }, {
                "date": new Date('2016-04-07T05:16:07-03:00'),
                "value": 2.9
            }, {
                "date": new Date('2016-04-25T09:31:48-03:00'),
                "value": 2
            }, {
                "date": new Date('2016-04-07T10:54:11-03:00'),
                "value": 1.8
            }, {
                "date": new Date('2016-04-29T04:10:54-03:00'),
                "value": 2.7
            }, {
                "date": new Date('2016-04-13T07:01:21-03:00'),
                "value": 2.7
            }, {
                "date": new Date('2016-03-28T10:08:22-03:00'),
                "value": 2.6
            }, {
                "date": new Date('2016-03-22T11:42:23-02:00'),
                "value": 0.6
            }, {
                "date": new Date('2016-04-17T01:59:22-03:00'),
                "value": 1.1
            }, {
                "date": new Date('2016-04-25T01:30:48-03:00'),
                "value": 2.7
            }, {
                "date": new Date('2016-03-27T11:20:57-03:00'),
                "value": 2.2
            }],
            'status': 'done'
        }, {
            'name': 'Play more games',
            'metric': 'hours',
            'metricShort': 'h',
            'startDate': new Date(),
            'frequency': 60 * 24,
            'progress': [{
                "date": new Date('2016-04-03T04:49:18-03:00'),
                "value": 7.2
            }, {
                "date": new Date('2016-03-25T06:08:31-02:00'),
                "value": 2.3
            }, {
                "date": new Date('2016-04-11T02:40:43-03:00'),
                "value": 7.9
            }, {
                "date": new Date('2016-04-02T12:47:21-03:00'),
                "value": 5.5
            }, {
                "date": new Date('2016-04-22T07:12:42-03:00'),
                "value": 6.6
            }, {
                "date": new Date('2016-04-14T01:13:30-03:00'),
                "value": 2.4
            }, {
                "date": new Date('2016-04-03T04:36:58-03:00'),
                "value": 4.9
            }],
            'status': 'active'
        }, {
            'name': 'Eat cookies',
            'metric': '',
            'metricShort': '',
            'startDate': new Date(),
            'frequency': 60 * 24,
            'progress': [{
                "date": new Date('2016-03-31T11:21:15-03:00'),
                "value": 4
            }, {
                "date": new Date('2016-04-02T12:56:58-03:00'),
                "value": 12
            }, {
                "date": new Date('2016-04-08T12:29:15-03:00'),
                "value": 12
            }, {
                "date": new Date('2016-04-13T11:32:43-03:00'),
                "value": 13
            }, {
                "date": new Date('2016-04-30T02:20:11-03:00'),
                "value": 1
            }, {
                "date": new Date('2016-03-28T03:56:29-03:00'),
                "value": 2
            }, {
                "date": new Date('2016-04-15T04:43:44-03:00'),
                "value": 6
            }, {
                "date": new Date('2016-04-29T06:37:16-03:00'),
                "value": 9
            }, {
                "date": new Date('2016-04-24T10:30:11-03:00'),
                "value": 3
            }, {
                "date": new Date('2016-04-16T10:24:36-03:00'),
                "value": 3
            }],
            'status': 'archive'
        }, {
            'name': 'Night walks',
            'goalValue': 20,
            'metric': 'kilometres',
            'metricShort': 'km',
            'startDate': new Date(),
            'goalDate': new Date('2016-05-01'),
            'frequency': 60 * 24 * 7,
            'progress': [
                { 'date': new Date('2016-02-22T01:10:21Z'), 'value': 1.9 },
                { 'date': new Date('2016-02-29T01:10:21Z'), 'value': 2 },
                { 'date': new Date('2016-03-04T01:10:21Z'), 'value': 3.1 },
                { 'date': new Date('2016-03-06T01:10:21Z'), 'value': 2.1 },
                { 'date': new Date('2016-03-10T01:10:21Z'), 'value': 1 },
                { 'date': new Date('2016-03-12T01:10:21Z'), 'value': 3 },
                { 'date': new Date('2016-03-15T01:10:21Z'), 'value': 3 },
                { 'date': new Date('2016-03-19T01:10:21Z'), 'value': 2 },
                { 'date': new Date('2016-03-25T01:10:21Z'), 'value': 1.5 },
                { 'date': new Date('2016-03-28T01:10:21Z'), 'value': 1.2 },
                { 'date': new Date('2016-04-01T01:10:21Z'), 'value': 1 },
                { 'date': new Date('2016-04-03T01:10:21Z'), 'value': 2.7 },
                { 'date': new Date('2016-04-10T01:10:21Z'), 'value': 2.3 },
                { 'date': new Date('2016-04-13T01:10:21Z'), 'value': 1.7 },
                { 'date': new Date('2016-04-18T01:10:21Z'), 'value': 3 },
                { 'date': new Date('2016-04-24T02:00:13Z'), 'value': 1.2 }
            ],
            'status': 'active'
        }];
        Targets.insert({ owner: 1, targets: targetList });
    }
});

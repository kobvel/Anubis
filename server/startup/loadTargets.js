Meteor.startup(function () {
    if (Messages.find().count() === 0) {
        var messageList = [
            {
                'author': 'Mikki',
                'message': 'Hello Team'
            },
            {
                'author': 'Max',
                'message': 'I Love D3'
            }, {
                'author': 'Eugene',
                'message': 'I Love HTML'
            }, {
                 'author': 'Zaika',
                'message': 'I Love Git'}
                ];
            Messages.insert(messageList);    
    }
    if (Targets.find().count() === 0) {
        var targetList = [
            {
                'name': 'Read JS books',
                'goalValue': 1000,
                'metric': 'pages',
                'metricShort': 'p',
                'startDate': new Date(),
                'goalDate': new Date('2016-03-01'),
                'frequency': 60 * 24,
                'progress': [
                    { 'date': new Date('2016-02-20T01:10:21Z'), 'value': 20 },
                    { 'date': new Date('2016-02-20T02:00:13Z'), 'value': 5 }
                ],
                'status': 'active'
            },
            {
                'name': 'Push ups',
                'goalValue': 750,
                'metric': 'times',
                'metricShort': '',
                'startDate': new Date(),
                'goalDate': new Date('2016-03-20'),
                'frequency': 60 * 24,
                'progress': [],
                'status': 'active'
            },
            {
                'name': 'Drink more',
                'goalValue': 100,
                'metric': 'litres',
                'metricShort': 'l',
                'startDate': new Date(),
                'goalDate': new Date('2016-04-01'),
                'frequency': 60,
                'progress': [
                    { 'date': new Date('2016-02-20T03:10:21Z'), 'value': 0.5 },
                    { 'date': new Date('2016-02-20T03:40:13Z'), 'value': 0.33 }
                ],
                'status': 'done'
            },
            {
                'name': 'Play more games',
                'metric': 'hours',
                'metricShort': 'h',
                'startDate': new Date(),
                'frequency': 60 * 24,
                'progress': [
                    { 'date': new Date('2016-02-20T04:10:21Z'), 'value': 1.2 },
                    { 'date': new Date('2016-02-20T23:51:48Z'), 'value': 2 },
                    { 'date': new Date('2016-02-21T08:05:33Z'), 'value': 0.5 }
                ],
                'status': 'active'
            },
            {
                'name': 'Eat cookies',
                'metric': '',
                'metricShort': '',
                'startDate': new Date(),
                'frequency': 60 * 24,
                'progress': [
                    { 'date': new Date('2016-02-20T04:10:21Z'), 'value': 5 },
                    { 'date': new Date('2016-02-20T23:51:48Z'), 'value': 10 },
                    { 'date': new Date('2016-02-21T08:05:33Z'), 'value': 2 },
                    { 'date': new Date('2016-02-22T04:10:21Z'), 'value': 3 },
                    { 'date': new Date('2016-02-22T23:51:48Z'), 'value': 3 },
                    { 'date': new Date('2016-02-23T08:05:33Z'), 'value': 1 },
                    { 'date': new Date('2016-02-24T04:10:21Z'), 'value': 4 },
                    { 'date': new Date('2016-02-24T23:51:48Z'), 'value': 2 },
                    { 'date': new Date('2016-02-25T08:05:33Z'), 'value': 12 },
                    { 'date': new Date('2016-02-26T04:10:21Z'), 'value': 2 },
                    { 'date': new Date('2016-02-26T23:51:48Z'), 'value': 4 },
                    { 'date': new Date('2016-02-27T08:05:33Z'), 'value': 8 }
                ],
                'status': 'archive'
            },
            {
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
            }
        ];
        Targets.insert({ owner: 1, targets: targetList });
    }
});
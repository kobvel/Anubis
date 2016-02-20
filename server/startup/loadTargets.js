Meteor.startup(function () {
    if (Targets.find().count() === 0) {
        var targets = [
            {
                'name' : 'Read JS books',
                'goalValue' : 1000,
                'metric' : 'pages',
                'metricShort' : 'p',
                'startDate' : new Date(),
                'goalDate' : new Date('2016-03-01'),
                'frequency' : 60 * 24,
                'progress' : [
                	{'date' : new Date('2016-02-20T01:10:21Z'), 'value' : 20},
                	{'date' : new Date('2016-02-20T02:00:13Z'), 'value' : 5}
                ],
                'status' : 'active'
            },
            {
                'name' : 'Push ups',
                'goalValue' : 750,
                'metric' : 'times',
                'metricShort' : '',
                'startDate' : new Date(),
                'goalDate' : new Date('2016-03-20'),
                'frequency' : 60 * 24,
                'progress' : [],
                'status' : 'active'
            },
            {
                'name' : 'Drink more',
                'goalValue' : 100,
                'metric' : 'leitres',
                'metricShort' : 'l',
                'startDate' : new Date(),
                'goalDate' : new Date('2016-04-01'),
                'frequency' : 60,
                'progress' : [
                	{'date' : new Date('2016-02-20T03:10:21Z'), 'value' : 0.5},
                	{'date' : new Date('2016-02-20T03:40:13Z'), 'value' : 0.5}
                ],
                'status' : 'done'
            }
        ];
        for (var i = 0; i < targets.length; i++)
            Targets.insert({name: targets[i].name, description: targets[i].description});
    }
});
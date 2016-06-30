import Ember from 'ember';

export default Ember.Component.extend({
  	init: function() {
  		this._super(...arguments);
  		this.originalModel = this.get("model");
		console.log(this.originalModel);
  	},


  	chartOptions: {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Number of paying customers'
        },
        subtitle: {
            text: 'divided per year'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Number of customers'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        }
    },

  	chartData: [{
        name: 'Year 2012',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [Date.UTC(1970, 0, 11), 0.79],
            [Date.UTC(1970, 0, 26), 0.72],
            [Date.UTC(1970, 1, 3), 1.02],
            [Date.UTC(1970, 1, 11), 1.12],
            [Date.UTC(1970, 1, 25), 1.2],
            [Date.UTC(1970, 2, 11), 1.18],
            [Date.UTC(1970, 3, 11), 1.19],
            [Date.UTC(1970, 4, 1), 1.85],
            [Date.UTC(1970, 4, 5), 2.22],
            [Date.UTC(1970, 4, 19), 1.15],
            [Date.UTC(1970, 5, 3), 0],
            [Date.UTC(1970, 6, 21), 0],
            [Date.UTC(1970, 7, 4), 0.28],
            [Date.UTC(1970, 8, 9), 0.25],
            [Date.UTC(1970, 9, 27), 0.2],
            [Date.UTC(1970, 10, 2), 0.28],
            [Date.UTC(1970, 11, 26), 0.28],
            [Date.UTC(1970, 11, 29), 0.47]
        ]
    }, {
        name: 'Year 2013',
        data: [
            [Date.UTC(1970, 0, 1), 1.66],
            [Date.UTC(1970, 0, 10), 1.8],
            [Date.UTC(1970, 1, 19), 1.76],
            [Date.UTC(1970, 2, 25), 2.62],
            [Date.UTC(1970, 3, 19), 2.41],
            [Date.UTC(1970, 3, 30), 2.05],
            [Date.UTC(1970, 4, 14), 1.7],
            [Date.UTC(1970, 4, 24), 1.1],
            [Date.UTC(1970, 5, 10), 0],
            [Date.UTC(1970, 9, 29), 0],
            [Date.UTC(1970, 10, 9), 0.4],
            [Date.UTC(1970, 11, 1), 0.25]
        ]
    }, {
        name: 'Year 2014',
        data: [
            [Date.UTC(1970, 0, 4), 1.6],
            [Date.UTC(1970, 0, 17), 2.55],
            [Date.UTC(1970, 0, 24), 2.62],
            [Date.UTC(1970, 1, 4), 2.5],
            [Date.UTC(1970, 1, 14), 2.42],
            [Date.UTC(1970, 2, 6), 2.74],
            [Date.UTC(1970, 2, 14), 2.62],
            [Date.UTC(1970, 2, 24), 2.6],
            [Date.UTC(1970, 3, 2), 2.81],
            [Date.UTC(1970, 3, 12), 2.63],
            [Date.UTC(1970, 3, 28), 2.77],
            [Date.UTC(1970, 4, 5), 2.68],
            [Date.UTC(1970, 4, 10), 2.56],
            [Date.UTC(1970, 4, 15), 2.39],
            [Date.UTC(1970, 4, 20), 2.3],
            [Date.UTC(1970, 5, 5), 2],
            [Date.UTC(1970, 5, 10), 1.85],
            [Date.UTC(1970, 5, 15), 1.49],
            [Date.UTC(1970, 5, 23), 1.08],
           	[Date.UTC(1970, 10, 25), 0],
            [Date.UTC(1970, 11, 6), 0.25],
            [Date.UTC(1970, 11, 20), 1.41],
            [Date.UTC(1970, 11, 25), 1.64]
        ]
    }]

});
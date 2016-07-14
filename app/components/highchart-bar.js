import Ember from 'ember';

export default Ember.Component.extend({

  chartOptions: {
	chart: {
        type: 'column'
        },
        title: {
            text: 'Number of issues'
        },
        subtitle: {
            text: 'divided per year'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of issues'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
  }


});

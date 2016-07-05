import Ember from 'ember';

export default Ember.Component.extend({
  	init: function() {
  		this._super(...arguments);
  		this.chartData = this.get("model");
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        				'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
        },
        yAxis: {
            title: {
                text: 'Number of customers'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        }
    }


});
#Corporate dashboard

This is a corporate dashboard application using `Ember`,  as front-end MVC framework, `JQuery` and `Bootstrap` for facilitate JS and responsiveness. `PapaParse` is used to parse the .CSV file and `Highchart` to display nice charts. 

The dashboard application contains a header (with the currently selected dashboard’s name); a menu, allowing the user to navigate between dashboards; and the primary dashboard display area. The provided data to the dashboards  are CSV and JSON files. There are 3 main views:

-A **geospatial view**, identifying the number of employees at various company locations.

-A **“summary” view**, containing components displaying: 

    -the number of open issues, 
    -a line chart reflecting number of paying customers over a period of time,
    -and a bar chart reflecting number of reported issues over a period of time.

-A **“data view”** of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable.

##Data files
The data files are served from `public/assets/data` folder, even from production mode.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone` [this repository](https://github.com/lhellborg/CorporateDashboard)
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server --live-reload=false` to serve app in development mode without the reload function when a file is changed/saved.
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment=production` (production)

## Running / Production

* `ember server --environment=production --live-reload=false` to serve app in production mode without reloading page when data file is changed/saved.
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


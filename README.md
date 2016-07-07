# Project4

This is a corporate dashboard application using `Ember`,  as front-end MVC framework, `JQuery` and `Bootstrap` for facilitate JS and responsiveness. `PapaParse` is used to parse the .CSV file and `Highchart` to display nice charts. 

The dashboard application contains a header (with the currently selected dashboard’s name); a menu, allowing the user to navigate between dashboards; and the primary dashboard display area. The provided data to the dashboards  are CSV and JSON files. There are 3 main views:

-A **geospatial view**, identifying the number of employees at various company locations.

-A **“summary” view**, containing components displaying: 

    -the number of open issues, 
    -a line chart reflecting number of paying customers over a period of time,
     -and a bar chart reflecting number of reported issues over a period of time.

-A **“data view”** of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


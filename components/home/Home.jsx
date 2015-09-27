var React = require('react');
var Router = require('react-router');
var {Link} = Router;

var actions = require('../../scripts/actions');

var MainContent = require('../common/MainContent');
var ProjectList = require('../projects/ProjectList');
var TagList = require('../tags/TagList');
var SearchForm = require('./SearchForm');
var SearchResultList = require('./SearchResultList');
var ErrorMessage = require('./../common/utils/ErrorMessage');

var SearchContainer = require('./SearchContainer');

require('../../stylesheets/grid.styl');

var Home = React.createClass({

  render: function() {
    return (
      <MainContent>
        { this.props.errorMessage && <ErrorMessage text={ this.props.errorMessage } /> }
        <h2>Welcome to bestof.js.org!</h2>
        <p>Check out the most popular projects and the latest tendancies about JavaScript world:
          {' '}
          <Link to="tags" params={{ id: '5568e47e355ea6282ecae9b9' }}>MV* frameworks</Link>,
          {' '}
          <Link to="tags" params={{ id: '5568e488355ea6282ecae9e4' }}>React tools</Link>,
          ...
        </p>

        {false && <SearchContainer {...this.props} />}

        { this.props.allProjects && (
          <div className="row">
            <div className="col-sm-6">
              <div className="box">
                <h3>Most popular projects</h3>
                <ProjectList
                  projects = {this.props.popularProjects.slice(0,20)}
                  maxStars = {this.props.maxStars}
                  showStars = { true }
                  showDelta = { false }
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box">
                <h3>Hot projects since yesterday</h3>
                <ProjectList
                  projects = {this.props.hotProjects.slice(0,20)}
                  maxStars = {this.props.maxStars}
                  showDelta={ true }
                  showStars={ false }
                />
              </div>
            </div>
          </div>
        )}
      </MainContent>
    );
  }

});

module.exports = Home;

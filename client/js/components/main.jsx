var React      = require('react');
var App        = require('../app/tasks-app');
var TasksTable = require('./tasks-table.jsx');

var MainComponent = React.createClass({

  getInitialState: function() {
    return {
      status: App.getStatus(),
      tasks: App.getTasks()
    };
  },

  componentDidMount: function() {
    App.addStatusChangeListener(this._onStatusChange);
  },

  componentWillUnmount: function() {
    App.removeStatusChangeListener(this._onStatusChange);
  },

  _onStatusChange: function() {
    this.setState({ 
      status: App.getStatus(),
      tasks: App.getTasks() 
    });
  },

  getContent: function() {
    if(this.state.status === 'loading') {
      /* jshint ignore:start */
      return (
        <p>Loading...</p>
      );
      /* jshint ignore:end */
    } else {
      /* jshint ignore:start */
      return (
        <TasksTable tasks={this.state.tasks} />
      );
      /* jshint ignore:end */
    }
  },

  render: function() {

    var content = this.getContent();

    /* jshint ignore:start */
    return (
      <div class=".col-md-12">
        {content}
      </div>
    );
    /* jshint ignore:end */
  }
});

module.exports = MainComponent;
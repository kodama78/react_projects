var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore, 'OnChange')
    ],
    getInitialState: function () {
        return {
            image: null
        }
    },
    componentWillMount: function(){
      Actions.getImage(this.props.params.id);
    },
   render: function() {
       return <div>
           {this.state.image ? this.renderContent() : null}
       </div>
   },
    renderContent: function () {
      return <div className="panel panel-default">
        <div className="panel-heading">
            <h4>{this.state.image.title}</h4>
        </div>
      </div>
    },
    onChange: function () {
        this.setState({
           image: ImageStore.find(this.props.params.id)
        });
    }
});
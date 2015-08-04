var React = require('react');
var ThumbnailList = require('./thumbnail_list');
var options = {
    	thumbnailData: [
	    	{ 
		    	title: 'See Tutorials', 
		    	number: 300, 
		    	header: 'Learn React', 
		    	description: 'React is awesome for making fast and dynamic descriptions', 
		    	imageUrl:'http://formatjs.io/img/react.svg' 
			},
			{ 
		    	title: 'Show Courses', 
		    	number: 25, 
		    	header: 'Learn Gulp', 
		    	description: 'Gulp is awesome for speeding shit up', 
		    	imageUrl:'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400' 
			}
		]
	};  
	console.log('yo');
    var element = React.createElement(ThumbnailList, options); 
    React.render(element, document.querySelector('.target'));
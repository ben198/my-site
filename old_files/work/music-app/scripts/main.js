(function() {

'use strict';

var key         = '&api_key=f653af8ded9747f3a6704d2125ab2d2b&format=json',
    searchBtn   = document.getElementById( 'searchBtn' );

searchBtn.onclick = function( e ) {
  e.preventDefault();
  var searchValue = document.getElementById( 'searchBox' ).value;
  document.getElementById( 'searchBox' ).value = '';
  createMainArtist( searchValue, function( result ) {
    getSimilarArtists( searchValue, result );
  });
};

function createMainArtist( input, callback ) {
	var artistUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=',
	    hero        = document.getElementById( 'hero-unit' ),
	    placeholder = document.getElementById( 'placeholder' );
	if ( document.getElementById( 'main-artist' ) ) {
		$( '#main-artist' ).remove();
	}
	$.ajax({
	  url: artistUrl + input + key,
	  dataType: 'json',
	  success: function( data ) {
	  	$( placeholder).remove();
	  	var mainArtist = data.artist,
	  	    element    = createMainArtistElement( mainArtist );
		$( hero ).prepend( element );
		if( mainArtist == undefined ) { return; }
		document.getElementById( 'main-artist' ).addEventListener( 'click', function( e ) {
			var targetParent = e.target.parentNode;
			if( targetParent.className == 'similar-artist' ) {
				e.preventDefault();
				createMainArtist( targetParent.name, function( result ) {
					getSimilarArtists( targetParent.name, result );
				});
			}
		});
		callback( element );
	  }
	});
};

function getSimilarArtists( artist, container ) {
  var similarUrl  = 'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=';
  $.ajax({
  	url: similarUrl + artist + key,
  	dataType: 'json',
  	success: function( data ) {
		for ( var i = 0; i < 12; i += 1 ) {
		  var similarArtist = data.similarartists.artist[i],
		      element = createSimilarArtistElement( similarArtist );
		  placeSimilarArtistElement( element, container, i);
		}
	},
	error: function() {
	  	$( container ).append( '<p>"I\'m sorry but we were unable to find an artist or group named"' + artist + '</p>' );
	}
  });
};

function getSize( howSimilar ) {
	var parentSize = 300,
		childSize;
	if( howSimilar > 0.79) {
		childSize = parentSize / 2;
		return childSize.toString() + 'px';
	} else if ( howSimilar > 0.59 && howSimilar < 0.80 ) {
		childSize = parentSize / 3;
		return childSize.toString() + 'px';
	} else if ( howSimilar > 0.39 && howSimilar < 0.60 ) {
		childSize = parentSize / 5;
		return childSize.toString() + 'px';
	} else if ( howSimilar > 0.19 && howSimilar < 0.40 ) {
		childSize = parentSize / 6;
		return childSize.toString() + 'px';
	} else if ( howSimilar < 0.20 ) {
		childSize = parentSize / 10;
		return childSize.toString() + 'px';
	}
};

function createMainArtistElement( artist ) {
	var node = $( '<div id="main-artist"></div>' );
	if( artist == undefined ) {
		$( node ).append( "<p>I'm sorry but we were unable to find an artist by that name</p>" );
		return node;
	}
	$( node ).append( '<a class="main-artist-link" href="' + artist.url + '"></a>' );
	$( node ).append( '<p>' + artist.name + '</p>');
	if ( artist.image[4]['#text'] == '' ) {
		$( node ).css( 'background-image', 'url( logo.jpg )' );
		$( node ).append( '<p>Sorry, no image is available</p>');
	} else {
		$( node ).css( 'background-image', 'url(' + artist.image[4]['#text'] + ')' );
	}
	return node;
}

function createSimilarArtistElement( artist ) {
	var container = document.createElement( 'div' ),
	    size = getSize( Number( artist.match ) );
    container.className = 'similar-artist';
    container.name = artist.name;
    container.style.width = size;
    container.style.height = size;
    $( container ).append( '<a href="http://' + artist.url + '"></a>' );
    $( container ).css( 'background-image', 'url(' + artist.image[3]['#text'] + ')' );
    $( container ).attr( 'title', artist.name );
    return container;
};

function placeSimilarArtistElement( child, parent, index ) {
	var coordinates = [[-150,-170],[410,170],[250,-120],[-120,70],[500,10],[-190,10],[190,-190],[320,40],[120,-100],[440,-120],[-120,200],[-210,160]];
	child.style.left = coordinates[index][0] + 'px';
    child.style.top = coordinates[index][1] + 'px';
    $( parent ).append( child );
}

function Grid() {

	var gridWidth = 400,
	    squareWidth = 25,
	    x = 0,
	    y = 0,
	    spaces = [];

	var divider = gridWidth / squareWidth;

	for( var i = 0; i <= divider; i += 1 ) {
		for( var j = 0; j <= divider; j += 1 ) {
			var singleSquare = {};
			singleSquare.x = x;
			singleSquare.y = y;
			singleSquare.occupied = false;
			spaces.push( singleSquare );
			y += squareWidth;
		}
		x += squareWidth;
		y = 0;
	}

	return spaces; 

}

function findRandomSquare( grid ) {

	var square = grid[Math.floor( Math.random() * grid.length )];
	if( square.occupied === true ) {
		findRandomSquare( grid );
	} else {
		return square;
	}

}

function isSquareEmpty( grid, x, y ) {

	for( var i = 0; i < grid.length; i += 1 ) {
		if( grid[i].x === x && grid[i].y === y ) {
			if ( grid[i].occupied == false ) {
				return true;
			} else {
				return false;
			}
		}
	}

}

function willItFit( grid, elementWidth, squareWidth ) {

	var start 		   = findRandomSquare( grid ),
	currentSquare 	   = JSON.parse( JSON.stringify( start ) ),
	section 		   = [];

	for( var y = 0; y < elementWidth / squareWidth; y += 1 ) {
		for( var x = 0; x < elementWidth / squareWidth; x += 1 ) {
			for( var k = 0; k < grid.length; k += 1 ) {
				if ( grid[k].x === currentSquare.x && grid[k].y === currentSquare.y ) {
					section.push( grid[k] );
				}
			}
			currentSquare.x += squareWidth;
		}
		currentSquare.y += squareWidth;
		currentSquare.x = start.x;
	}

	return section;

}

var biggsie = new Grid();

}());

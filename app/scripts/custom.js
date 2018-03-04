// store the bacon
var bacon = document.getElementsByClassName('bacon_wrapper')[0].cloneNode(true)

// clone the bacon onclick 
var cloneBacon = function () {
	document.getElementById('overview').appendChild(bacon)
}
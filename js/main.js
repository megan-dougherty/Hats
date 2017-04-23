
function Hat(name,size,color,stock,image, button){
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
	this.button = button
}

var redHat  = new Hat("Red Hat", "medium", "Red", 70, "img/red.jpg")
var blackHat  = new Hat("Black Hat", "medium", "Black", 30, "img/black.jpg")
var blueHat  = new Hat("Blue Hat", "large", "Blue", 55, "img/blue.jpg")
var yellowHat  = new Hat("Yellow Hat", "medium", "Yellow", 80, "img/yellow.jpg")
var greenHat  = new Hat("Green Hat", "large", "Green", 68, "img/green.jpg")
var orangeHat = new Hat("Orange Hat", "large", "Orange", 87, "img/orange.jpg")

// create an array to add products to
var hatArray = []

// add products to array of products
hatArray.push(redHat)
hatArray.push(blackHat)
hatArray.push(blueHat)
hatArray.push(yellowHat)
hatArray.push(greenHat)
hatArray.push(orangeHat)

// loop through products array
for(i= 0; i < hatArray.length; i++) {
	
	// create new elements for each product
	var newItem = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH1 = document.createElement('h1')
	var sizeH4 = document.createElement('h4')
	var colorH4 = document.createElement('h4')
	var stockH4 = document.createElement('h4')
	var btn = document.createElement('button')
	var image = document.createElement('img')

	var modalnameH1 = document.createElement('h1')
	var modalsizeH4 = document.createElement('h4')
	var modalcolorH4 = document.createElement('h4')
	var modalstockH4 = document.createElement('h4')
	var modalbtn = document.createElement('button')
	var modalimage = document.createElement('img')

	var modal = document.createElement('div')
	var modalContent = document.createElement('div')
	var modalHeader = document.createElement('div')
	var modalBody = document.createElement('div')
	var modalFooter = document.createElement('div')
	
	// create text for new elements
	var hatName = document.createTextNode(hatArray[i].name)
	var hatSize = document.createTextNode('Available size: ' + hatArray[i].size)
	var hatColor = document.createTextNode('color: ' + hatArray[i].color)
	var hatStock = document.createTextNode('In Stock: ' + hatArray[i].stock)
	var hatButton = document.createTextNode('Buy Now!')

	var modalhatName = document.createTextNode(hatArray[i].name)
	var modalhatSize = document.createTextNode('Available size: ' + hatArray[i].size)
	var modalhatColor = document.createTextNode('color: ' + hatArray[i].color)
	var modalhatStock = document.createTextNode('In Stock: ' + hatArray[i].stock)
	var modalhatButton = document.createTextNode('Buy Now!')
	
	// update source attribute
	image.src = hatArray[i].image

	modalimage.src = hatArray[i].image
	
	// update class attributes

	image.className= "img-responsive"
	btn.className = "btn btn-primary btn-lg"


	modalimage.className = "img-responsive"
	modalbtn.className = "btn btn-primary btn-lg"


	newItem.className = "col-sm-4"
	newDiv.className = "hatDiv hatName" + [i] + "thumbnail"
	modal.className = "modal fade"
	modalContent.className = "modal-content"
	modalHeader.className = "modal-header"

	// add text to elements
	nameH1.appendChild(hatName)
	sizeH4.appendChild(hatSize)
	colorH4.appendChild(hatColor)
	stockH4.appendChild(hatStock)
	btn.appendChild(hatButton)

	modalnameH1.appendChild(modalhatName)
	modalsizeH4.appendChild(modalhatSize)
	modalcolorH4.appendChild(modalhatColor)
	modalbtn.appendChild(modalhatButton)

	//add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)
	modalHeader.appendChild(modalnameH1)
	modalBody.appendChild(modalimage)
	modalBody.appendChild(modalsizeH4)
	modalBody.appendChild(modalcolorH4)
	modalBody.appendChild(modalstockH4)
	modalFooter.appendChild(modalbtn)

	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalBody)
	modalContent.appendChild(modalFooter)
	modal.appendChild(modalContent)


	/*$(btn).click(function(){
		$(modal).modal();
	});*/

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)

}










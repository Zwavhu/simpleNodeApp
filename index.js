'use strict';

const button = document.getElementById('addButton') // if you're trying to find a function make sure its document.

// NB: Event listeners are fro interactive things like buttons and check boxes to keep track
button.addEventListener(
  'click',
  function () {
    const paragraph = document.createElement('p') // creating <p> element
    let text = document.createTextNode('This is a student') // create text code
    paragraph.appendChild(text) // append text to <p>
    document.body.appendChild(paragraph) // append <p> to body
  },
  false
)

// creating a hyperlink - getting an image at the click of a button
const imgButton = document.getElementById('addImg')

imgButton.addEventListener(
  'click',
  function () {
    const randomImg = document.createElement('img') // creating <p> element
    randomImg.src =
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

    document.body.appendChild(randomImg) // append <p> to body
  },
  false
)

// creating other elements: headers, links, images and checkboxes
const header = document.createElement('addHeaderText')
const headerText = document.createTextNode('  THIS IS A HEADER  ')
header.appendChild(headerText)
document.body.appendChild(header)

const inputElem = document.createElement('input')

// inputElem.addEventListener(
//   'input',
//   function () {
//     inputElem.type = 'checkbox';
//     const labelElem = document.createElement('label')
//     const labelText = document.createTextNode('Click me')
//     labelElem.appendChild(labelText)
//     labelElem.appendChild(inputElem)
//     document.body.appendChild(labelElem)
//   },
//   false
// )

inputElem.type = 'checkbox';

const labelElem = document.createElement('label')

const labelText = document.createTextNode('Click me')

labelElem.appendChild(labelText)

labelElem.appendChild(inputElem)

document.body.appendChild(labelElem)

// Dynamically adding elements
const button1 = document.getElementById('myButton')
button1.addEventListener(
  'click',
  function () {
    const headerElement = document.getElementById('heading')
    headerElement.innerHTML = 'My New Heading';
  },
  false
)






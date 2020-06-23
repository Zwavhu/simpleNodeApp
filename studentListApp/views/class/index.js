let button = document.getElementById('addStudentButton')

button.addEventListener('click', function () {
  let paragraph = document.createElement('p')
  let text = document.createTextNode('This is a student')
  paragraph.appendChild(text)
  document.body.appendChild(paragraph)
}, false)
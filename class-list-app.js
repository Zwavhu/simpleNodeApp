//1.1-Creating class list filter




//   TASK2: Filtering
const searchBar = document.forms['search-container'].querySelector('input')

searchBar.addEventListener('keyup',function(e){

  const student = e.target.value.toLowerCase()
  console.log(student)
  const students = document.getElementById("student-list").getElementsByTagName('li')
  // const students = document.querySelectorAll('#student-list>ol>li')
  
   let res = Array.from(students).filter(s => s.firstElementChild.innerHTML === student )
  console.log(res)

  Array.from(students).forEach(function(stu){
    const name = stu.firstElementChild.innerHTML

    if(name.toLowerCase().indexOf(student) != -1){
      stu.style.display = 'block'
    } else{
      stu.style.display = 'none'
    }

  })

})



function showList() {
  let x = document.getElementById("student-list");
  if(x.style.display === "block"){
          x.style.display = "none";
  }
  else{
      x.style.display = "block";
  }
}

function deleteList(){
  const list = document.getElementById('list');
  list.parentNode.removeChild(list);

  const buttn =  document.getElementById('remove');
  buttn.parentNode.removeChild(buttn);
}
  
    // Exercise 3
   //TASK 1-Dynamically add a a students list, add An entire list with one button click
  // const studentNameButton= document.getElementById('add-student')
  
  // studentNameButton.addEventListener(
  //   'click',
  //   function() {
  //     let ul = document.getElementById('list') 
  //     let student = document.getElementById('new-student-text') 
  //     let li = document.createElement('li')
  //     li.setAttribute('id',student.value)
  //     let text = document.createTextNode(student.value)
  //     li.appendChild(text)
  //     ul.appendChild(li)
  //     document.body.appendChild(ul) // append <p> to body
  //   },
  //   false
  // )
 






function showStudentList(students){

  students.forEach(function(element){

    console.log('phakati: ',element['name'])

    var name = element['name'];
    var number = element['studentNumber'];
    var surname = element['surname']  ;

    var s = ' ';
     s += `

      <div class="student-details">
      <span id="students" class="name"> ${name} </span>
      <span class="surname">${surname}</span>
      <span class="student-num">${number}</span>
      <button id="1b" class="std1">Edit</button>
       </div>
    
    `
    // document.querySelector('.student-details').innerHTML += s;
    document.querySelector('.student-details').innerHTML += s;
    // TO-DO: fix bug here -- it's always appending


  })
}


function showList() {
  let x = document.getElementById("student-list");
  if(x.style.display === "block"){
          x.style.display = "none";
  }
  else{
      x.style.display = "block";
      showStudentList(students)
  }
}


function deleteList(){
  const list = document.getElementById('student-list');
  list.parentNode.removeChild(list);

  const buttn =  document.getElementById('remove');
  buttn.parentNode.removeChild(buttn);
}


document.querySelector('#new-student-text').addEventListener('keyup', function (e) {

  var student_list = []

  const student = e.target.value.toLowerCase()
  console.log(student)
  // const students = document.getElementById("student-list").getElementsByTagName('li')
  // const students = document.querySelectorAll('#student-list>ol>li')
  
  let x = document.getElementById("students");
  // console.log(x,'x')

  // if(x.style.display === "block"){
  //         x.style.display = "none";
  // }
  // else{
  //     x.style.display = "block";
  //     // showStudentList(students)
  // }
  student_list = students.filter(s =>  s.name.toLowerCase().includes(student.toLowerCase()))

  student_list.forEach(function(entry) {

      if(!student){
          // x.style.visibility = 'hidden';
          // x.hidden = true;


          // showStudentList(student_list)
      }
      else {
        // x.style.display = "none";
        console.log('hi',entry)
        // x.hidden = false;
        showStudentList(student_list)


        // showStudentList(null)
        // x.style.display = "none";
        // x.style.display === "block"

      }
   });
  


  // students.forEach(function(stu){
  //   const name = stu.name
  //   console.log(name)

  //   if(name.toLowerCase().indexOf(student) != -1){
  //     stu.style.display = 'block'
  //   } else{
  //     stu.style.display = 'none'
  //   }

  // })

})





// const searchBar = document.forms['search-container'].querySelector('#new-student-text')

// searchBar.addEventListener('keyup',function(e){

//   const student = e.target.value.toLowerCase()
//   console.log(student)
//   // const students = document.getElementById("student-list").getElementsByTagName('li')
//   // const students = document.querySelectorAll('#student-list>ol>li')
  
//    let res = students.filter(s => s.firstElementChild.innerHTML === student )
//   console.log('hi',res)

//   students.forEach(function(stu){
//     const name = stu.firstElementChild.innerHTML

//     if(name.toLowerCase().indexOf(student) != -1){
//       stu.style.display = 'block'
//     } else{
//       stu.style.display = 'none'
//     }

//   })

// })




// document.querySelector('#new-student-text').addEventListener('input', function () {

//   var searchItem = document.getElementById('new-student-text').value; 
//   var studentlist = [ ];
// if(searchItem){
//   studentlist = students.filter(x => x.name.toLowerCase().includes(searchItem.toLowerCase()))
//   console.log('filt', studentlist)

//   showStudentList(studentlist);
//   document.getElementsById('student-list').display = 'none'

// }
// else{
//   showStudentList(null);

//   }

//   })

  




  





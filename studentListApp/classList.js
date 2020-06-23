'use strict'

let studentlist = []

module.exports = {
  add: function (student) {
    studentlist.push(student)
  },
  edit: function (student, index) {
    studentlist[index] = student
  },
  get: function (index) {
    return studentlist[index]
  },
  delete: function (index) {
    studentlist.splice(index, 1)
  },
  Size: function () {
    return studentlist.length
  }
 
}

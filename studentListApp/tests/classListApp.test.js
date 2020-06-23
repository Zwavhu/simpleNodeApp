'use strict'

let classList = require('../classList.js')


// Addition a student
describe('addStudent', () => {
  test('It should add a student', () => {

    let input = {
        name: 'Zwavhudi',
        studentNumber: '1110574',
        electives: 'ELEN4010, ELEN4020, ELEN4019'
      }

    classList.add(input)
    expect(classList.Size()).toEqual(1)
  })

})

describe('addStudent plus 1', () => {

  test('it should add more than one student', () => {
      
      let input2 = {
        name: 'Ivhani',
        studentNumber: '112346',
        electives: 'MECN4020, ELEN4019, ELEN4020'
      
      }

    classList.add(input2)
    expect(classList.Size()).toEqual(2)
  })
  
})

describe('editStudent', () => {

  test('it should edit a student', () => {

    let input = {
        name: 'Mure',
        studentNumber: '177269',
        electives: 'ELEN4020, ELEN4010, ELEN4016'
      }

    let output = {
        name: 'Mure',
        studentNumber: '177269',
        electives: 'ELEN4020, ELEN4010, ELEN4016'
    }
  
    classList.edit(input, 1)  
    expect(classList.get(1)).toEqual(output)

  })
 
  
})

// remove a student
describe('removeStudent', () => {

  test('it should remove a student', () => {
    
    let input = {
        name: 'Mure',
        studentNumber: '177269',
        electives: 'ELEN4020, ELEN4010, ELEN4016'
      }

    let output = 1
    classList.delete(input,3)
    expect(classList.Size()).toEqual(output)

  })
 
})








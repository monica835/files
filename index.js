


var studentinfo= require('./person.js')
var input = require('readline-sync')

do {
  student = new studentinfo();
  console.log("==studentsinfo== ")
  student.setname(input.question("name : "))
  student.setage(input.question("Age : "))
  student.setaddress(input.question("address: "))
  student.setidnumber(input.question("idnumber : "))
  console.log("==Add Course == ")
  student.addCourse(input.question("CCourse : "), input.question("Year : "))
  console.log("==Add Schedule==")
  student.addschedule(input.question("CDay : "), input.question("Time : "))
  student.addStudent(student);
  console.log("*student was added!*")
} while (input.question("exit? : ") != "yes");
  student.displayinfo();
  console.log("==Remove Student==")
if (input.question("Are you sure you want to remove  student: ") == "yes") {
  student.removedStudent(input.question("What index you want to remove?: "), input.question("Number of students you want to remove: "));
};
  student.displayinfo();
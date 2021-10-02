class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
    //Check if array contains anything
    if (this.students.length === 0) {
      //Push student object if possible
      console.log("I was here");
      this.students.push(student);
    } else {
      //Run forEach to check if email is used or available
      this.students.filter((person) => {
        if (person.email === student.email) {
          console.log(`The email ${student.email} is already registered`);
        } else {
          console.log(
            `Registering ${student.email} to the bootcamp Web Dev Fundamentals`
          );
          //Push student object if possible
          this.students.push(student);
        }
      });
    }
    return this.students;
  }
}
//Bootcamp
const boot1 = new Bootcamp("Nucamp", "FullStack");
//Three different students
//Original student
const student1 = new Student("Daniel", "email@email.com", "Irvine");
//Different student, same email
const student2 = new Student("Kat", "email@email.com", "Irvine");
//Different student, different email
const student3 = new Student("Mark", "different@email.com", "OC");
//Register all students
boot1.registerStudent(student1);
boot1.registerStudent(student2);
boot1.registerStudent(student3);

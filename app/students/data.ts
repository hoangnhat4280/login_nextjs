const students = [
    { id: 1, name: "Hoang Nhat" },
    { id: 2, name: "Hoang Long" },
    { id: 3, name: "Hoang Son" },
    { id: 4, name: "Hoang Vuong" },
    { id: 5, name: "Hoang Phu" },
    { id: 6, name: "Van Manh" }
  ];
  
  export function getStudents() {
    return students;
  }
  
  export function getStudentById(id: number) {
    return students.find(student => student.id === id);
  }
  
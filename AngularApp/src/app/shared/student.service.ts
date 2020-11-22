import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of, from } from 'rxjs';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  readonly baseURL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  postStudent(stud: Student)
  {
     return this.http.post(this.baseURL, stud);
  }

  getStudentList() {
   return this.http.get(this.baseURL);
   }

  putStudent(stud : Student) {
     return this.http.put(this.baseURL + `/${stud._id}`, stud);
   }

   deleteStudent(_id: string) {
     return this.http.delete(this.baseURL + `/${_id}`);
   }
}

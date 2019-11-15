import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-applicant-student-list',
  templateUrl: './applicant-student-list.component.html',
  styleUrls: ['./applicant-student-list.component.css']
})
export class ApplicantStudentListComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  studentArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      list => {
        this.studentArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) 
  {
    if (confirm('KarmaYoga : Are you sure to disapprove this profile ?')) 
    {
      this.studentService.deleteStudent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

}

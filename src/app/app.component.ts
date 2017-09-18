import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rForm: FormGroup;
  post: any;
  name: string = '';
  subject: string = '';
  message: string = '';
  email: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : null,
      'email' : null,
      'subject' : null,
      'message' : null
    });
  }

  title = 'Bisnis Bermentor Indonesia';

  // onKeyName(value: any) { // without type info
  //   this.data.name = value ;
  // }
  //
  // keyupSubject(value: any) { // without type info
  //   this.data.subject = value ;
  // }
  //
  // keyupMessage(value: any) { // without type info
  //   this.data.message = value ;
  // }

  addPost(post) {
    const data = ({
      name : post.name,
      email : post.email,
      subject : post.subject,
      message : post.message
    });

    // console.log(data);

    this.http.post('api/sendmail.php', data).subscribe(data => console.log(data));
  }

  // sendFC() {
  //   this.http.post('api/sendmail.php', this.data).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}

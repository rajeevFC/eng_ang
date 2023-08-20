import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.css']
})
export class PagePostComponent implements OnInit {
  constructor(private postForm: PostService) { }

  genders = ['male', 'female'];
  signupForm: FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl('Rajeev Kumar', Validators.required),
        'email': new FormControl('rk933510@gmail.com', [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
    })
  }
  onSubmit() {
    console.log(this.signupForm.value);
    this.postForm.postDataJson(this.signupForm.value)
  }
}

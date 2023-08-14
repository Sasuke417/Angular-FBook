import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  textArea = '';
  showTextArea = false;
  isPosted: string = '';
  postList: any;
  constructor(private _ps: PostsService) {}
  ngOnInit(): void {
    this.fillPostsBox()
  }
  postLinkClick() {
    this.showTextArea = true;
  }
  postButtonClick() {
    this._ps.create(this.textArea).subscribe(
      (data) => {
        console.log({ data });
        this.isPosted = 'Post added sussesfully';
      },
      (error) => {
        this.isPosted = 'Some error occurred is Posting!!!';
        console.error(error);
      }
    );
  }

  fillPostsBox() {
    this._ps.getAll().subscribe(
      (data) => {
        this.postList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

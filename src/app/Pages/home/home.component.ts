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
  status = 'Loading....';
  showStatus = true;
  constructor(private _ps: PostsService) {}
  ngOnInit(): void {
    this.fillPostsBox();
  }
  postLinkClick() {
    this.showTextArea = true;
  }
  postButtonClick() {
    this._ps.create(this.textArea).subscribe(
      (data) => {
        // console.log({ data });
        this.isPosted = 'Post added sussesfully';
      },
      (error) => {
        this.isPosted = 'An error occurred while Posting!!!';
        console.error(error);
      }
    );
  }

  fillPostsBox() {
    this._ps.getAll().subscribe(
      (data) => {
        this.showStatus = false;
        this.status = '';
        this.postList = data;
      },
      (error) => {
        this.status = 'An error occurred while fetching the posts list!!!';
        console.error(error);
      }
    );
  }
}

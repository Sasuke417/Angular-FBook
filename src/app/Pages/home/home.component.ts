import { Component } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  textArea = '';
  showTextArea = false;
  constructor(private _ps: PostsService) {}
  postLinkClick() {
    this.showTextArea = true;
  }
  postButtonClick() {
    this._ps.create(this.textArea).subscribe(
      (data) => {
        console.log({ data });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/Services/files.service';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  textArea = '';
  showTextArea = false;
  showPicSelectionArea = false;
  isPosted: string = '';
  postList: any;
  status = 'Loading....';
  showStatus = true;
  file: File | undefined;
  status1: string = '';
  showStatus1: boolean = false;
  constructor(private _ps: PostsService, private _fs: FilesService) {}
  ngOnInit(): void {
    this.fillPostsBox();
  }
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }
  uploadPicLinkClick() {
    this.showPicSelectionArea = true;
    this.showTextArea = false;
  }
  postLinkClick() {
    this.showPicSelectionArea = false;
    this.showTextArea = true;
  }
  postButtonClick() {
    if (this.showTextArea) {
      this._ps
        .create({
          post: this.textArea,
        })
        .subscribe(
          (data) => {
            this.isPosted = 'Post added sussesfully';
          },
          (error) => {
            this.isPosted = 'An error occurred while Posting!!!';
            console.error(error);
          }
        );
    } else if (this.showPicSelectionArea) {
      if (this.file) {
        this._fs.uploadFile(this.file).subscribe(
          (data) => {
            this._ps
              .create({
                postImageId: data.uploadId,
              })
              .subscribe(
                (data) => {
                  this.isPosted = 'Post added sussesfully';
                },
                (error) => {
                  this.isPosted = 'An error occurred while Posting!!!';
                  console.error(error);
                }
              );
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.status1 = 'Please select a file first';
        this.showStatus1 = true;
      }
    } else {
      this.status1 = 'Please click on any of the left links first';
      this.showStatus1 = true;
    }
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

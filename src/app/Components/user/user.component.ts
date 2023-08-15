import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/Services/files.service';
import { UsersService } from 'src/app/Services/users.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userImage: any;
  imageBlob: any;
  constructor(
    private _fs: FilesService,
    private _us: UsersService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.fetchProfileImage();
  }
  fetchProfileImage() {
    this._fs.getFile(this._us.getUserData().photoId).subscribe(
      (blob) => {
        this.imageBlob = blob;
        this.userImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.imageBlob));
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

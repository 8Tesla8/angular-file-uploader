import { Component } from '@angular/core';
import { UploadModel } from './upload/model/upload.model';
import { MimeFileName } from './upload/model/upload-file-type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  model: UploadModel = {
    apiUrl: 'test-url',
    allowedFilesType: [MimeFileName.PDF, MimeFileName.CSV],
  };
}

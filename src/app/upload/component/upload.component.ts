import { Component, Input, OnInit } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { FileInfo, FileInfoFactory } from '../model/upload-file-type.model';
import { UploadModel } from '../model/upload.model';

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

    @Input()
    public model: UploadModel;

    private readonly _fileInfoFactory = new FileInfoFactory();
    public fileExtension: string[] = [];
    public mimeTypeString: string;
    public mimeType: string[];

    public uploader?: FileUploader;

    public downloadFinished = false;
    public filesWithError: FileItem[] = [];

    constructor(
    ) {
    }

    ngOnInit(): void {
        this.setExtensionAndMimeType();
        this.initFileUploader();
    }



    private setExtensionAndMimeType(): void {
        const filesInfo:FileInfo[] = [];
        this.model.allowedFilesType.forEach((fileType) => {
            const info =
                this._fileInfoFactory.getFileInfoByMimeFileName(fileType);
            filesInfo.push(info);
        });

        this.mimeTypeString = filesInfo.map((fi) => fi.fileType).toString();
        this.mimeType = filesInfo.map((fi) => fi.fileType);

        this.fileExtension = filesInfo.map((fi) => fi.extension);
    }

    private initFileUploader(): void {
        this.uploader = new FileUploader({
            url: this.model.apiUrl,
            allowedMimeType: this.mimeType,
            maxFileSize: this.model.maxFileSize,
            queueLimit: this.model.fileLimit,
        });

        this.uploader.onCompleteAll = () => {
            this.downloadFinished = true;
        };

        this.uploader.onErrorItem = (item, response, status, headers) => {
            
            this.filesWithError.push(item);

            console.error({ item, response, status, headers });
        };
    }

    //#region files count
    public getFilesCount(): number {
        if (this.uploader.queue?.length > 0) {
            return this.uploader.queue?.length;
        }

        return 0;
    }

    public getNotUploadedFilesCount(): number {
        if (this.uploader.queue?.length > 0) {
            return (
                this.uploader.queue?.length -
                this.uploader.getNotUploadedItems()?.length
            );
        }

        return 0;
    }
    //#endregion

    public stop():void{
        this.uploader.cancelAll();
    }

    public upload():void{
        this.downloadFinished = false;
        this.uploader.uploadAll();
    }

    //#region drag and drop
    public hasFileOnWindow: boolean = false;
    public fileOverWindow(e: any): void {
        if (e !== this.hasFileOnWindow) {
            this.hasFileOnWindow = e;
        }
    }

    public hasFileOnDropZone: boolean = false;
    public fileOverDropZone(e: any): void {
        this.hasFileOnDropZone = e;
    }
    //#endregion

    public convertSize(sizeInBytes: number): string {
        if (sizeInBytes < 0) {
            throw new Error('Size must be non-negative');
        }

        const units = ['bytes', 'KB', 'MB', 'GB'];
        let index = 0;

        while (sizeInBytes >= 1024 && index < units.length - 1) {
            sizeInBytes /= 1024;
            index++;
        }

        // return `${sizeInBytes.toFixed(2)} ${units[index]}`; show 2 number after dot
        return `${Math.round(sizeInBytes)} ${units[index]}`;
    }

    //#region items
    public removeItem(item: FileItem): void {
        item.remove();

        const index = this.filesWithError.indexOf(item);
        if (index > -1) {
            this.filesWithError.splice(index, 1);
        }
    }

    public showCancelBtn(item: FileItem): boolean {
        if (item.isUploaded === true) {
            return false;
        }

        if (item.isUploading === true) {
            return true;
        }

        return false;
    }

    public showProgresValue(item: FileItem): boolean {
        if (item.isUploading === true) {
            return true;
        }

        if (item.isUploaded === true) {
            return true;
        }

        return false;
    }

    //#endregion
}

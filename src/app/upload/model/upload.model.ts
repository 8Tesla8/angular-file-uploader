import { MimeFileName } from "./upload-file-type.model";

export class UploadModel {
    public apiUrl: string;
    public allowedFilesType: MimeFileName[];
    public maxFileSize?:number;
    public fileLimit?:number;
}

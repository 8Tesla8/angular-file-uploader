export interface FileInfo {
    name: string;
    fileType: string;
    extension: string;
}

export enum MimeFileName {
    //Images
    JPEG,
    PNG,
    GIF,
    SVG,
    BMP,
    WebP,
    ICO,
    TIFF,

    //Audio
    MP3,
    WAV,
    OGG,
    WebMAudio,
    AAC,
    FLAC,
    MIDI,

    //Video
    MP4,
    WebM,
    OGV,
    MOV,
    AVI,
    MPEG,

    //Documents
    PDF,
    Word,
    WordLegacy,
    Excel,
    ExcelLegacy,
    PowerPoint,
    PowerPointLegacy,
    CSV,
    JSON,
    XML,
    XMLAlternative,
    ZIP,
    GZIP,
    TAR,
    RAR,
    SevenZ,

    //Text
    PlainText, //txt
    HTML,
    CSS,
    JavaScript,

    //Fonts
    TTF,
    OTF,
    WOFF,
    WOFF2,
    EOT,
}

export class FileInfoFactory {
    public getFileInfoByMimeFileName(mimeFileName: MimeFileName): FileInfo {
        switch (mimeFileName) {
            case MimeFileName.JPEG:
                return {
                    name: 'JPEG',
                    fileType: 'image/jpeg',
                    extension: 'jpg',
                };
            case MimeFileName.PNG:
                return {
                    name: 'PNG',
                    fileType: 'image/png',
                    extension: 'png',
                };
            case MimeFileName.GIF:
                return {
                    name: 'GIF',
                    fileType: 'image/gif',
                    extension: 'gif',
                };
            case MimeFileName.SVG:
                return {
                    name: 'SVG',
                    fileType: 'image/svg+xml',
                    extension: 'svg',
                };
            case MimeFileName.BMP:
                return {
                    name: 'BMP',
                    fileType: 'image/bmp',
                    extension: 'bmp',
                };
            case MimeFileName.WebP:
                return {
                    name: 'WebP',
                    fileType: 'image/webp',
                    extension: 'webp',
                };
            case MimeFileName.ICO:
                return {
                    name: 'ICO',
                    fileType: 'image/x-icon',
                    extension: 'ico',
                };
            case MimeFileName.TIFF:
                return {
                    name: 'TIFF',
                    fileType: 'image/tiff',
                    extension: 'tiff',
                };
            case MimeFileName.MP3:
                return {
                    name: 'MP3',
                    fileType: 'audio/mpeg',
                    extension: 'mp3',
                };
            case MimeFileName.WAV:
                return {
                    name: 'WAV',
                    fileType: 'audio/wav',
                    extension: 'wav',
                };
            case MimeFileName.OGG:
                return {
                    name: 'OGG',
                    fileType: 'audio/ogg',
                    extension: 'ogg',
                };
            case MimeFileName.WebMAudio:
                return {
                    name: 'WebM Audio',
                    fileType: 'audio/webm',
                    extension: 'weba',
                };
            case MimeFileName.AAC:
                return {
                    name: 'AAC',
                    fileType: 'audio/aac',
                    extension: 'aac',
                };
            case MimeFileName.FLAC:
                return {
                    name: 'FLAC',
                    fileType: 'audio/flac',
                    extension: 'flac',
                };
            case MimeFileName.MIDI:
                return {
                    name: 'MIDI',
                    fileType: 'audio/midi',
                    extension: 'midi',
                };

            case MimeFileName.MP4:
                return {
                    name: 'MP4',
                    fileType: 'video/mp4',
                    extension: 'mp4',
                };
            case MimeFileName.WebM:
                return {
                    name: 'WebM',
                    fileType: 'video/webm',
                    extension: 'webm',
                };
            case MimeFileName.OGV:
                return {
                    name: 'OGG',
                    fileType: 'video/ogg',
                    extension: 'ogv',
                };
            case MimeFileName.MOV:
                return {
                    name: 'MOV',
                    fileType: 'video/quicktime',
                    extension: 'mov',
                };
            case MimeFileName.AVI:
                return {
                    name: 'AVI',
                    fileType: 'video/x-msvideo',
                    extension: 'avi',
                };
            case MimeFileName.MPEG:
                return {
                    name: 'MPEG',
                    fileType: 'video/mpeg',
                    extension: 'mpeg',
                };
            case MimeFileName.PDF:
                return {
                    name: 'PDF',
                    fileType: 'application/pdf',
                    extension: 'pdf',
                };

            case MimeFileName.PDF:
                return {
                    name: 'PDF',
                    fileType: 'application/pdf',
                    extension: 'pdf',
                };
            case MimeFileName.Word:
                return {
                    name: 'Microsoft Word',
                    fileType:
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    extension: 'docx',
                };
            case MimeFileName.WordLegacy:
                return {
                    name: 'Microsoft Word (legacy)',
                    fileType: 'application/msword',
                    extension: 'doc',
                };
            case MimeFileName.Excel:
                return {
                    name: 'Microsoft Excel',
                    fileType:
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    extension: 'xlsx',
                };
            case MimeFileName.ExcelLegacy:
                return {
                    name: 'Microsoft Excel (legacy)',
                    fileType: 'application/vnd.ms-excel',
                    extension: 'xls',
                };
            case MimeFileName.PowerPoint:
                return {
                    name: 'Microsoft PowerPoint',
                    fileType:
                        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    extension: 'pptx',
                };
            case MimeFileName.PowerPointLegacy:
                return {
                    name: 'Microsoft PowerPoint (legacy)',
                    fileType: 'application/vnd.ms-powerpoint',
                    extension: 'ppt',
                };
            case MimeFileName.CSV:
                return { name: 'CSV', fileType: 'text/csv', extension: 'csv' };
            case MimeFileName.JSON:
                return {
                    name: 'JSON',
                    fileType: 'application/json',
                    extension: 'json',
                };
            case MimeFileName.XML:
                return {
                    name: 'XML',
                    fileType: 'application/xml',
                    extension: 'xml',
                };
            case MimeFileName.XMLAlternative:
                return {
                    name: 'XML (alternative)',
                    fileType: 'text/xml',
                    extension: 'xml',
                };
            case MimeFileName.ZIP:
                return {
                    name: 'ZIP',
                    fileType: 'application/zip',
                    extension: 'zip',
                };
            case MimeFileName.GZIP:
                return {
                    name: 'GZIP',
                    fileType: 'application/gzip',
                    extension: 'gz',
                };
            case MimeFileName.TAR:
                return {
                    name: 'TAR',
                    fileType: 'application/x-tar',
                    extension: 'tar',
                };
            case MimeFileName.RAR:
                return {
                    name: 'RAR',
                    fileType: 'application/vnd.rar',
                    extension: 'rar',
                };
            case MimeFileName.SevenZ:
                return {
                    name: '7z',
                    fileType: 'application/x-7z-compressed',
                    extension: '7z',
                };
            case MimeFileName.PlainText:
                return {
                    name: 'Plain Text',
                    fileType: 'text/plain',
                    extension: 'txt',
                };
            case MimeFileName.HTML:
                return {
                    name: 'HTML',
                    fileType: 'text/html',
                    extension: 'html',
                };
            case MimeFileName.CSS:
                return { name: 'CSS', fileType: 'text/css', extension: 'css' };
            case MimeFileName.JavaScript:
                return {
                    name: 'JavaScript',
                    fileType: 'application/javascript',
                    extension: 'js',
                };
            case MimeFileName.TTF:
                return { name: 'TTF', fileType: 'font/ttf', extension: 'ttf' };
            case MimeFileName.OTF:
                return { name: 'OTF', fileType: 'font/otf', extension: 'otf' };
            case MimeFileName.WOFF:
                return {
                    name: 'WOFF',
                    fileType: 'font/woff',
                    extension: 'woff',
                };
            case MimeFileName.WOFF:
                return {
                    name: 'WOFF',
                    fileType: 'font/woff',
                    extension: 'woff',
                };

            case MimeFileName.EOT:
                return {
                    name: 'EOT',
                    fileType: 'application/vnd.ms-fontobject',
                    extension: 'eot',
                };

            default:
                throw new Error('Invalid MimeFileName enum value');
        }
    }
}

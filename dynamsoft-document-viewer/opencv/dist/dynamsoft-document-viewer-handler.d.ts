import { DocumentScanner } from ".";
declare const Dynamsoft: any;
export declare class OpenCVDocumentDetectHandler extends Dynamsoft.DDV.DocumentDetect {
    private documentScanner;
    constructor(documentScanner: DocumentScanner);
    detect(image: any, detectConfig: any): Promise<any>;
    compress(imageData: any, imageWidth: number, imageHeight: number, newWidth: number, newHeight: number): Uint8ClampedArray | Uint8Array;
}
export {};

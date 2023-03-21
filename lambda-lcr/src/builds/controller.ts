import { LcrService } from '../builds/service';
const lcrService = new LcrService();
export class LcrController {

    async playLCR(payload: any): Promise<string> {
        console.log("Controller");
        console.log(payload);
        return lcrService.playLCR(payload.detail);
    }
}
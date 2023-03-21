import { LcrService } from '../builds/service';
import { DataLcrDto } from './dto/data-lcr.dto';
const lcrService = new LcrService();
export class LcrController {

    async playLCR(payload: DataLcrDto): Promise<string> {
        console.log("Controller");
        console.log(payload);
        return lcrService.playLCR(payload.detail);
    }
}
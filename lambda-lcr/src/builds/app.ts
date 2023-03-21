
import { APIGatewayProxyEvent } from "aws-lambda";
import { LcrController } from '../builds/controller';
const lcrController = new LcrController();
export const game = async (event: any) => {
    console.log("App");
    console.log(JSON.stringify(event, null, 2));
    const payload = JSON.stringify(event, null, 2);
    return lcrController.playLCR(payload);
};
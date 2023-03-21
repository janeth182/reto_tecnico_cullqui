
import { APIGatewayProxyEvent, DynamoDBStreamEvent } from "aws-lambda";
import { LcrController } from '../builds/controller';
import { DataLcrDto } from './dto/data-lcr.dto';
const lcrController = new LcrController();
export const game = async (event: any) => {
    console.log("App");
    console.log(JSON.stringify(event, null, 2));
    const payload: DataLcrDto = JSON.parse(JSON.stringify(event, null, 2));
    return lcrController.playLCR(payload);
};
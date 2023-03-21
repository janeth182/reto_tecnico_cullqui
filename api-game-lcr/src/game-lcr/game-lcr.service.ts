import { Injectable } from '@nestjs/common';
import { DataLcrDto } from './dto/data-lcr.dto';
import { EventBridgeClient, PutEventsCommand } from "@aws-sdk/client-eventbridge";

@Injectable()
export class GameLcrService {
  async sendDataToEventBridge(data: DataLcrDto) {
    const client = new EventBridgeClient({
      credentials: {
        accessKeyId: "AKIATAE6EWVTCJF7SHFH",
        secretAccessKey: "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",
      },
      region: "us-east-1"
    });
    const params = {
      Entries: [
        {
          Source: "play-lcr",
          DetailType: 'Saludos desde Nest JS',
          Detail: JSON.stringify(data),
        }
      ],
    };

    try {
      const command = new PutEventsCommand(params);
      const event = await client.send(command);
      console.info(event);
      return { success: true, event };
    } catch (error) {
      console.info(error);
      return { success: false, error };
    }
  }
}

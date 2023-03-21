import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { v4 as uuid } from 'uuid';

export class LctDataAccess {
    async saveResult(data: any) {
        console.log("Data-Access");
        console.log(data);
        const client = new DynamoDBClient({
            credentials: {
                accessKeyId: "AKIATAE6EWVTCJF7SHFH",
                secretAccessKey: "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",
            },
            region: "us-east-1"
        });
        const ddbDocClient = DynamoDBDocument.from(client);
        const TableName = "results";
        await ddbDocClient.put(
            {
                TableName,
                Item: {
                    id: uuid(),
                    content: data,
                },
            }
        );
        ddbDocClient.destroy();
    }
}
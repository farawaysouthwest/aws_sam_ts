import {
  APIGatewayEvent,
  APIGatewayEventRequestContext,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
} from "aws-lambda";

export const lambdaHandler = async (
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext
): Promise<APIGatewayProxyResult | string> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify("hello world!"),
    };
  } catch (err) {
    console.log(err);
    return err as string;
  }
};

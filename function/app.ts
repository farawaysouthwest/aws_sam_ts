import {
  APIGatewayEvent,
  APIGatewayEventRequestContext,
  APIGatewayProxyResultV2,
} from "aws-lambda";

export const lambdaHandler = async (
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify("hello world!"),
    } as APIGatewayProxyResultV2;
  } catch (err) {
    console.log(err);
    return err as string;
  }
};

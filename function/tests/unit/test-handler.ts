import { lambdaHandler } from "../../app";
import { expect } from "chai";
import { APIGatewayProxyResult, APIGatewayProxyResultV2 } from "aws-lambda";
let event: any, context: any;

describe("Tests index", function () {
  it("verifies successful response", async () => {
    const result = (await lambdaHandler(
      event,
      context
    )) as APIGatewayProxyResult;

    expect(result).to.be.an("Object");
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an("string");

    let response = JSON.parse(result.body);

    expect(response).to.be.an("string");
  });
});

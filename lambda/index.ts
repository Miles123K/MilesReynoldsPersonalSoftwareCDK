import { APIGatewayProxyEvent } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent) => {
  const { name, email, message } = JSON.parse(event.body || "{}");
  console.log(`Received message from ${name} <${email}>: ${message}`);
  return {
    statusCode: 200,
    header: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    body: JSON.stringify({
      message: "Message received!",
    }),
  };
};

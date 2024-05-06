import * as api from "reverse-api";
import * as shared from "shared";

export const reverse: api.ReverseOperationHandler<{}> = async (incomingRequest) => {
  // get the text we want to reverse
  const originalText = await incomingRequest.value();

  // reverse the text
  const reversedText = shared.reverse(originalText);

  // return the reversed text to the client
  return {
    status: 200,
    contentType: "text/plain",
    value: () => reversedText,
  };
};
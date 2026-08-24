export function defineCancelApiObject(apiObject) {
  //object contains cancellation handler tied to each API property name int her apiObject API object
  const cancelApiObject = {};

  // loop iteration over each API property name
  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject = {
      controller: undefined,
    };

    //connecting the request cancellation with API property name
    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        //if controller exists, cancel request
        if (cancellationControllerObject.controller) {
          //cancel requeest and return custom message
          cancellationControllerObject.controller.abort();
        }

        // generate new controller with AbortController factory
        cancellationControllerObject.controller = new AbortController();

        return cancellationControllerObject.controller;
      },
    };
  });

  return cancelApiObject;
}

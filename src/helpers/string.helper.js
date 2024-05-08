const firstUppercase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getErrorMessage = (error) => {
  const {
    data: {
      errors: { body },
    },
  } = error.response;

  //Optional Chaining Operator ES6
  const message = body[0]?.message;
  return firstUppercase(message);
  //return message[0].toUpperCase() + message.substring(1);
};

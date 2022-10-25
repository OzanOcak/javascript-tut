const makeError = () => {
  try {
    if (something) {
      // throw new Error("this is a error!");
      throw new customError("this is a custom error");
    }
  } catch (err) {
    console.error(err);
    console.warn(err);
    console.table(err);
    console.error(err.stack); //detailed
    console.error(err.message);
    console.error(err.name);
  } finally {
    console.log(".......finally");
  }
};
makeError();

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}:${this.message}`;
}

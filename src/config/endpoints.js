if (process.env.NODE_ENV === "production") {
  // production
  console.log(
    "!!!Tylko do deploymentu. Usuń poniższy komunikat niezwłocznie!!!"
  );
  console.log("[***production***]", process.env.NODE_ENV);
  module.exports = require("./prod");
} else {
  // development
  console.log("[***development***]");
  module.exports = require("./dev");
}

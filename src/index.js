const connectToDB = require("./config/database");
const { PORT } = require("./config/environments");
const app = require("./config/express");

app.listen(PORT, () => {
  console.log(`App Running at port ${PORT}`);
});

connectToDB();
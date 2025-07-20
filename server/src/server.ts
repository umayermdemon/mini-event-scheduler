import app from "./app";
import config from "./app/config";

const port = config.port;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

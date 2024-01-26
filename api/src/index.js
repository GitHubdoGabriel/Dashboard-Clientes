const app = require("express")();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());

routes.load(app);

app.listen(3000, () => {
  console.log(`API running at :3000`);
});

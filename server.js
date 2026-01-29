const express = require("express");
const cors = require("cors");
const app = express();
const port = 3006;
const allowedOrigin = [
  "http://localhost:5173",
  "https://[your-username].github.io",
];
const apiRouter = require("./src/routes");

const corsOption = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigin.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS`));
    }
  },
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOption));
app.get("/", (req, res) => {
  res.json({ message: "CORS đã được cấu hình thành công!" });
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});

const express = require("express");
const router = express.Router();
const Caesar = require("caesar-salad").Caesar;

const password = "pass";
router.post("/encode", (req, res) => {
  if (req.body.password === password) {
    const decodedMsg = Caesar.Cipher(req.body.password).crypt(req.body.message);
    res.send(decodedMsg);
  } else res.send("Wrong password");
});
router.post("/decode", (req, res) => {
  if (req.body.password === password) {
    const encodedMsg = Caesar.Decipher(req.body.password).crypt(
      req.body.message
    );
    res.send(encodedMsg);
  } else res.send("Wrong password");
});

module.exports = router;

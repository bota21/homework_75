const express = require("express");
const router = express.Router();
const Caesar = require("caesar-salad").Caesar;

const createRouter = (db) => {
  router.get("/encode/", (req, res) => {
    const text = db.getItemsEncode();
    const textCipher = Caesar.Cipher("c").crypt(text[0].text);
    res.send({ text: textCipher });
  });
  router.get("/decode/", (req, res) => {
    const text = db.getItemsDecode();
    const textDecipher = Caesar.Decipher("c").crypt(text[0].text);
    res.send({ text: textDecipher });
  });
  router.post("/encode", (req, res) => {
    const item = { ...req.body };
    res.send(item);
    db.addItemEncode(item);
  });
  router.post("/decode", (req, res) => {
    const item = { ...req.body };
    res.send(item);
    db.addItemDecode(item);
  });
  return router;
};

module.exports = createRouter;

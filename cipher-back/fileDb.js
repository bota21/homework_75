const fs = require("fs");

let dataDecode = [];
let dataEncode = [];
const fileNameEncode = "./cipher.json";
const fileNameDecode = "./decipher.json";

module.exports = {
  init() {
    try {
      const fileContentDecode = fs.readFileSync(fileNameDecode);
      const fileContentEncode = fs.readFileSync(fileNameEncode);
      dataDecode = JSON.parse(fileContentDecode.toString());
      dataEncode = JSON.parse(fileContentEncode.toString());
    } catch (e) {
        dataDecode = [];
        dataEncode = [];
    }
  },
  getItemsDecode() {
    return dataDecode;
  },
  getItemsEncode() {
    return dataEncode;
  },
  addItemDecode(item) {
    dataDecode.push(item);
    this.saveDecode();
  },
  addItemEncode(item) {
    dataEncode.push(item);   
    this.saveEncode();
  },
  saveDecode() {
    fs.writeFileSync(fileNameDecode, JSON.stringify(dataDecode));
  },
  saveEncode() {
    fs.writeFileSync(fileNameEncode, JSON.stringify(dataEncode));
  },
};

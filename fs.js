// fs file system,node 官方提供的文件管理系统
const fs = require("fs");

/**
 * path: 文件路径
 * options: 可选参数，比如文件编码格式，utf8 等等
 * cb: 回调函数 参数是 err 和 dataStr
 */
// fs.readFile(path[options],cb); 读取文件
fs.readFile("./123/exe1.js", "utf8", (err, dataStr) => {
  console.log("err", err, Object.prototype.toString.call(err).slice(8, -1));
  console.log("--------");
  console.log(
    "dataStr",
    dataStr,
    Object.prototype.toString.call(dataStr).slice(8, -1)
  );
  if (Object.prototype.toString.call(err).slice(8, -1) !== "Null") {
    return console.log("读取文件失败", err.message);
  }
  console.log("读取文件成功", dataStr);
});
// fs.writeFile(path[options],cb); 写入文件

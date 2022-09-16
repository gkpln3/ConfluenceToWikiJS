//requiring path and fs modules
const path = require('path');
const fs = require('fs');
var HTMLParser = require('node-html-parser');

const directoryPath = process.argv[2];
const outDirectoryPath = process.argv[3];
fs.mkdirSync(outDirectoryPath)

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    //listing all files using forEach
    files.forEach(function (file) {
        if (file.endsWith(".html")) {
            fs.readFile(path.join(directoryPath, file), "utf8", function(err, data) {
                parsedHtml = HTMLParser.parse(data)

                page_title = parsedHtml.querySelector("head").querySelector("title").rawText
                page_title = page_title.substr(page_title.search(" : ") + 3)

                page_data = "<!--\ntitle: " + page_title + "\n-->"
                page_data = page_data + parsedHtml.querySelector("#main-content").innerHTML;

                fs.writeFileSync(path.join(outDirectoryPath, file), page_data)
            });
        }
    });
});

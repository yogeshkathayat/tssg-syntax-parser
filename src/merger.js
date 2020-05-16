const path = require("path");
const fs = require("fs");

const initContent = fs.readFileSync(path.resolve(__dirname, "init.js"), {
  encoding: "utf-8",
});
const coreContent = fs.readFileSync(path.resolve(__dirname, "core.pegjs"), {
  encoding: "utf-8",
});

const combinedContent = `
////////////////////////////////////////
// DO NOT UPDATE THIS FILE MANUALLY
// THIS FILE WAS AUTOGENERATED BY MERGER
////////////////////////////////////////


{
    ${initContent}
}

${coreContent}
`;

fs.writeFileSync(
  path.resolve(__dirname, "parser-auto-gen.pegjs"),
  combinedContent
);

const fs = require("fs");
const assert = require("assert");

function test() {
  assert.strictEqual(
    fs.existsSync("./userData.json"),
    true,
    "❌ userData.json does not exist"
  );
  console.log("✅ userData.json exists");
  assert.strictEqual(
    Buffer.byteLength(fs.readFileSync("./userData.json", "utf-8")),
    72448177,
    "❌ userData.json does not have the right size."
  );
  console.log("✅ userData.json has the correct size (72448177 bytes)");
  console.log("\n\nWell done! 🔥");
}

test();

const { WebSocket } = require("ws");
const { encode, decode } = require("msgpack-lite");
const ws = new WebSocket("wss://mohmoh.onrender.com/");ws.binaryType = "arraybuffer";
function emit(...a) {
  const name = a.shift();
  const packet = encode([name, a]);
  ws.send(packet);
}
ws.onmessage = function(e) {
  const [packet, data] = decode(e.data);
  console.log(packet, data);
  switch(packet) {
    case "io-init":
      emit("sp", {name: "ZoleSBots", skin: "__proto__", moofoll: 1});
      break;
    case "id":
      pid = data[0];
      break;
    case "33":
      emit("c", 1, Number.MAX_VALUE);
      emit("33", Number.MAX_VALUE);
      break;
    case "h":
      setTimeout(() => {
        let i = 3;
        while (i--) {
          emit("5", 0, false);
          emit("c", 1);
          emit("5", 0, true);
        };
      });
      break;
  }
}


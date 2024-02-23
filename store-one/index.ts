const socketOne = new WebSocket("ws://localhost:3000")

socketOne.addEventListener("close", () => {
    console.log("Websocket Connection Closed")
    process.exit(1)
})

socketOne.addEventListener("message", (message) => {
    console.log("Received message from server:", message)
})
Bun.serve({
    fetch(req, server) {
        if (server.upgrade(req)) {
            return
        }

        return new Response("Upgrade failed :(", { status: 500 })
    },
    websocket: {
        open(ws) {
            ws.subscribe("general")
        },
        message(ws, message) {
            console.log(`Received the following message:`, message)
        }
    }
})
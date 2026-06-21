import { Hono } from "hono";
import { cors } from "hono/cors"
import { logger } from "hono/logger";
import products from "./routes/products.route";
import { config } from "./config";


const app = new Hono();

app.use("*", logger())
app.use("*", cors());

app.get("/health", (c) => { 
    return c.json({
        status: "ok"
    })
});

app.route("/products", products)

export default {
    port: config.port,
    fetch: app.fetch
}

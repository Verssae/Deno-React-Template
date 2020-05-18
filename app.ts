import { Application, Router } from "https://deno.land/x/oak/mod.ts"
import hello from "./hello.tsx"

const app = new Application()
const router = new Router()
const port = 8000

router.get('/', ctx => {
    ctx.response.body = hello({text: "asdfa"})
})

app.use(router.routes())

app.use(ctx => {
    ctx.response.status = 404
    ctx.response.body = "Page not found :("
})

app.addEventListener("error", e => {
    console.log(e.error)
})

console.log(`server running on ${port}`)
await app.listen({port : port})
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import api from './apis/index'

const app = new Hono()

app.route('/api', api)

app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))


const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})



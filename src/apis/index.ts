
import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  USERNAME: string
  PASSWORD: string
}

const api = new Hono<{ Bindings: Bindings }>()
api.use('/items/*', cors())

api.get('/', (c) => {
  // content-type:text/plain;charset=UTF-8
  return c.text('Hello Hono!')
})

api.get('/hello', (c) => {
  // content-type:application/json;charset=UTF-8
  return c.json({
    ok: true,
    message: 'Hello Hono!',
  })
})
api.delete('/items/:id', (c) => {
  // 插入 response header 字段
  c.header('X-Message', 'Hi!')
  return c.text(`${c.req.param('id')} is deleted!`)
})

api.get('/items/:id', (c) => {
  // 获取 query 和 param
  const page = c.req.query('page')
  const id = c.req.param('id')
  return c.text(`You want see  ${id} in page ${page}`)
})


export default api
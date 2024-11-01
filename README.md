
# Getting Started
```
pnpm install
pnpm  dev
```
If you see this message, you are good to go.
```
Server is running on http://localhost:3000
```

# Roadmap
为了支持 server 独立发布并运行在多个 runtime(Bun, Cloudflare Worker,Node) 中，因此架构设计为 monorepo.需要具备以下特性：
> 为了快速验证是否可行，API 和 UI 早期原型可以很简陋，后续再逐步完善
- [] web fullstack
- [] 不需要借助 API 文档，客户端也可以在调用接口时获得类型提示
- [] 支持 server 独立发布并运行在多个 runtime(Bun, Cloudflare Worker,Node) 中
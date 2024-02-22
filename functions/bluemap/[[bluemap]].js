export async function onRequest(context) {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const { url } = new URL(request.url);
  const newReq = new Request(request);
  newReq.headers.delete("Host");
  newReq.headers.append("Host", "minecraft.sglorch.de");
  newReq.url = new URL("https://zora.sglorch.de/"+url.pathname)
  return await fetch(newReq);
}
// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname === "/blog") {
    return Response.redirect(`${url.origin}/blog/1`, 301);
  }

  return next();
});

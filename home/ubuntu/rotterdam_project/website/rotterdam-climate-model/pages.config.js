# This file contains the configuration for deploying to Cloudflare Pages

[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20.18.0"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

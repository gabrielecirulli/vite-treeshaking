# Issue description

When bundling Web Worker code with Vite, some of the dependencies that are used
by both the worker and the main thread are duplicated in the final bundle, even
though they should be shared.

This repository demonstrates the issue: when bundling with `pnpm run build`, the
list of generated modules contains duplicates:

```
❯ pnpm run build

> pixi-max-recommended-textures-worker-crash@0.0.0 build /Users/mars/Work/2048/other/repro/vite-pixi-bundling
> tsc && vite build

vite v5.2.11 building for production...
✓ 616 modules transformed.
dist/assets/batchSamplersUniformGroup-esTw4NqZ.js    0.23 kB
dist/index.html                                      0.38 kB │ gzip:  0.27 kB
dist/assets/CanvasPool-DAAltsjf.js                   0.69 kB
dist/assets/colorToUniform-PMjxk6y4.js              24.37 kB
dist/assets/WebGPURenderer-C4GTSOc9.js              35.19 kB
dist/assets/browserAll-s_Odv2Zz.js                  37.24 kB
dist/assets/SharedSystems-Dmf2ic5s.js               43.80 kB
dist/assets/WebGLRenderer-DSs9dsMu.js               59.35 kB
dist/assets/webworkerAll-CBdqNP-U.js                77.34 kB
dist/assets/worker-wXglRUk2.js                     228.69 kB
dist/assets/batchSamplersUniformGroup-BJBcGol3.js    0.23 kB │ gzip:  0.21 kB
dist/assets/CanvasPool-P9anc0rq.js                   0.69 kB │ gzip:  0.38 kB
dist/assets/colorToUniform-DdNNl6bf.js              24.37 kB │ gzip:  7.84 kB
dist/assets/WebGPURenderer-D2rAnSo4.js              35.19 kB │ gzip:  9.73 kB
dist/assets/browserAll-Qg6UHUQs.js                  37.24 kB │ gzip:  9.96 kB
dist/assets/SharedSystems-DviRLSqg.js               43.79 kB │ gzip: 12.25 kB
dist/assets/WebGLRenderer-D69Oodqk.js               59.35 kB │ gzip: 16.33 kB
dist/assets/webworkerAll-B3O_29JZ.js                77.34 kB │ gzip: 22.81 kB
dist/assets/index-DaWpJUK9.js                      174.57 kB │ gzip: 55.57 kB
✓ built in 3.02s
```

With some exceptions, all the duplicated modules have the same file size, which
suggests that they are identical.

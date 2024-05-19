# Issue description

When running `vite build` with tree-shaking, it's not apparent whether it's working or not.

When setting `rollupOptions.treeshake` to `"smallest"`, the build results in all program code being removed.

## Steps to reproduce

- Check `vite.config.js` to see whether `rollupOptions.treeshake` is set to `"smallest"` or not.
- Run `vite build` with the above configuration.
- Observe the size of the generated `index` file.
- Open the generated `index` file and observe the code.

## Expected behavior

The build should remove all unused code and the generated `index` file should be
smaller, but not all program code should be removed.

## Actual behavior

All program code is removed from the generated `index` file.

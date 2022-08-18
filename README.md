## Issue report

https://github.com/vercel/next.js/issues/39722

## To reproduce

1- `npm run build`

2- `npm run copy`

3- `npx serve -C -p 3006` and in another tab: `npm run start`

4- open http://localhost:3000

5- Debug network requests. Observe that font is preloaded from localhost:3000 and then loaded from localhost:3006

# setup steps

1. npm init -y
2. npm i -g typescript
3. npm i -D ts-node ts-node-dev
4. npm i -S express
5. npm i @types/express @types/node -D
5. npx tsc --init
6. create src and dist folder in your root directory
7. update script in your package.json
    "dev": "ts-node-dev --respawn ./src/app.ts",
    "start": "node ./dist/app.ts",
8. 
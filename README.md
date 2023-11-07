# Recreation of Holidaze

## Run the project
Use pnpm
```bash
# Install dependencies
pnpm i

# Run the project 
pnpm dev
```

Use npm
```bash
# Install dependencies
npm install
# Run project
npm dev
```


## Run the DB in a Docker container

```bash
docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres
```

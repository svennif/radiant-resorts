# Recreation of Holidaze

This is a fullstack app created by Sven Ingar Frantzen.

## How to run the project

### Run the DB in a Docker container

```bash
docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres
```

### Migrate and seed the DB

Migrate the schema

```bash
npx prisma migrate dev
```

Seed the DB with dummy data

```bash
npx prisma db seed
```

### Run the project

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
npm i
# Run project
npm dev
```

# Radian Resorts: 
## *Your Premier Destination for Unforgettable Stays*

Welcome to Radian Resorts, a comprehensive hotel and BnB booking platform crafted by Sven Ingar Frantzen. Whether you're seeking a tranquil retreat or an adventurous getaway, Radian Resorts offers a seamless experience to discover, search, and book your dream accommodations. Follow the steps below to set up and run the project effortlessly.

## Getting Started

### 1. Run the Database in a Docker Container

Ensure Docker is installed on your machine, then execute the following command to initialize the PostgreSQL database:

```bash
docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres
```
### 2. Migrate and Seed the Database
Generate Prisma Client: 
```bash
npx prisma generate
```

Migrate the database schema using Prisma:
```bash
npx prisma migrate dev
```
Seed the database with enticing dummy data to enhance the user experience:
```bash
npx prisma db seed
```
### 3. Run the Project
Select your preferred package manager - pnpm or npm - and proceed with the corresponding commands:

Using pnpm
```bash
# Install dependencies
pnpm i

# Run the project
pnpm dev
```
Using npm
```bash
# Install dependencies
npm i

# Run the project
npm dev
```

## Explore Radian Resorts
After successfully launching the project, open your preferred web browser and navigate to http://localhost:3000 to embark on a journey of exploration with Radian Resorts.

## Tech stack 

## Key Features
- **Effortless Search:** Find your ideal resort with ease through our intuitive search functionality.
- **Secure Booking:** Experience a seamless and secure booking process for your preferred accommodations.
- **Personalized Experience:** Tailor your stay with diverse options and amenities to suit your preferences.

## Contribution and Support
We encourage contributions from the community! Feel free to submit bug reports, feature requests, or pull requests to enhance the Radian Resorts experience.

For any issues or support, visit our [Issue Tracker](https://github.com/svennif/radiant-resorts/issues) or create a new one.

Experience the exceptional hospitality of Radian Resorts. Enjoy your stay!


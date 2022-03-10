# prismatutorial

## Database
- tables
    - jokes
    - categories
    - user (joker)
- a user is the creator of many jokes (one user to many jokes mapping)
- multiple jokes have multiple categories (many jokes to many categories, vice versa), relationships summarised using a pivot table that is separate from the jokes and categories tables. 

1. `npm i express` 
2. install the client(the way to interact with the database) `npm i @prisma/client`
3. install the dev dependencies: `npm i -D typescript @types/node @types/express prisma ts-node-dev`
4. create the typescript config file `npx tsc --init` or `npx typescript --init` (if you encounter `could not find executable to run` for the second cmd, could be that typescript was not installed globally, which is not a big deal.)
5. create server.ts with a function that prints sth. in `package.json`, under `"scripts"`, create a `"dev"` cmd with the value `"ts-node-dev server.ts`
6. `npm run dev`, should not give errors
7. `npx prisma init` (creates your `schema.prisma` file
8. define your models (tables in your relational database)
9. run db migrations `npx prisma migrate dev`
   1. If you face auth issues: go to your digital ocean --> click on the database --> `Users & Databases` tab --> create a shadow database instance under `Databases`. Then update update your `schema.prisma` file as follows:
   ```
   datasource db {
     provider = "postgresql"
    url      = env("DATABASE_URL")
    shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
   }
   ```
10. `npx prisma db push` pushes your migrations on the shadowdatabase to your prod db.

Give prisma a schema, prisma will give you a generated typesafe client to access your database. You could write raw sql and Prisma will catch your mistakes at runtime

Prisma is built in rust. 

### Tools used
- [postgresql 14.2]()
- download vsc prisma extension
- 
  

### Trivia
- connection pooling: good for serverless
- `Prisma` package: cli for running initialising client, running migrations etc. Installed as a dev dependency because you don't need to run migrations when running production. As a BE server all you need is BE client(`Prisma-client`) which enables your FE client to interact with your db through your endpoints 
- `npx`: node package execute. Cmd goes into your package.json, if don't have, cmd executes package from the remote node.js lib directly 
- in postgresql, you can a json type as a field 
- when defining fields that have a relation to another field, you need to define an opposite relation field in the other field too
- `schema.prisma`: where you define your database structure through defining models. The modelling layer in relational database skills. If you )
- migration step in backend dev basically creates your tables in your database. Note: DO NOT edit the generate schema files directly. Everytime there is a change in the db schema, run the migration command `npx prisma migrate dev`
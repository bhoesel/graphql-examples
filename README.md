# graphql-examples

This an example exercise in getting a 2 GraphQL servers running on a local PostgreSQL database and on top of that a federated server with Wundergraph Cosmo

Resource of information.

For the GraphQL yoga server:
https://the-guild.dev/graphql/yoga-server/tutorial

For the Wundergraph cosmo server:
https://docs.wundergraph.com/docs/getting-started/quickstart

DCAT graphql will run on http://localhost:4001/graphql.
WOZ graphql will run on http://localhost:4002/graphql.
Wundergraph graphql will run on http://localhost:9991/graphql.

# Databases need to be create and populated.
Creation can be done with prisma is user has the proper rights.
Population needs to be done with your own data.

# A short instruction on getting started for the directories **dcat** and **woz** GraphQL servers.

cd [dir]
# init node.js
npm init -y

# add typescript
npm i -D --save-exact typescript @types/node ts-node ts-node-dev cross-env

# init typescript
npx tsc --init

# add config
vi package.json

  "scripts": {
    "dev": "cross-env NODE_ENV=development ts-node-dev --exit-child --respawn src/main.ts",
    "start": "ts-node src/main.ts"
  },

# install graphql and tooling
npm i @graphql-tools/schema graphql

# install yoga server
npm i --save-exact graphql-yoga

# add prisma
npm i -D --save-exact prisma @prisma/client

# init prisma
npx prisma init

# create prisma configuration
cp prisma.source/* to prisma

# *if needed* the database tables can be created
npx prisma migrate dev

# prisma update db info
npx prisma generate

# start the server
npm run start


# A short instruction om getting the wundergraphserver running.

# Init a new project
npx create-wundergraph-app wgraph --example simple

# Move to the project directory
cd wgraph

# Install dependencies
npm i

# save initial config
mv .wundergraph/ dot.wundergraph.org

# copy demo config
cp -rpf ../wgraph.source/dot.wundergraph/ .wundergraph

# start the server
npm run start


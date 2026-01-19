FROM node

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

#RUN npm install @prisma/adapter-pg
#RUN npm install @prisma/client

RUN npx prisma generate

#CMD npx prisma migrate deploy && npm test
CMD npx prisma db push && npm test

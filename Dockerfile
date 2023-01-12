FROM node:18-alpine

WORKDIR /projets/demo1/lucf/hello-action
COPY ./ /projets/demo1/lucf/hello-action

RUN touch .env
RUN ls -a

RUN npm install

RUN npm run build

RUN --mount=type=secret,id=MY_SECRET,dst=/.env

EXPOSE 3006

CMD ["npm", "run", "start"]
FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

EXPOSE 6006

CMD ["npm", "run", "storybook"]

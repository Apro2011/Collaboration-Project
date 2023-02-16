# Select reference image
FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 3030

# run storybook app
CMD ["npm", "run", "storybook"]

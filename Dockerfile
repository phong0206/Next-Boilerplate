#Dockerfile
FROM node:18

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN npm install --ignore-scripts

COPY . .

# start app
CMD ["npm", "run", "dev"]

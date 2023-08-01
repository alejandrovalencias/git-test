FROM node:alpine

# donde se va a guardar mi proyecto en una ruta del contenedor
# Create app directory
WORKDIR /home/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

# puerto que vamos a exponer para que nuestra app funcione
EXPOSE 30000

CMD [ "node" ,"src/index.js"]

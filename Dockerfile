#copy base image
FROM node:alpine

WORKDIR './app'

#move files
COPY '/' '/'

#install dependencies
RUN npm install

#dfault command to run
CMD ["npm", "start"]
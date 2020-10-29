FROM node:12.13.0-stretch
ENV NODE_OPTIONS="--max_old_space_size=4096"
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
WORKDIR /app
RUN npm install
COPY . /app
RUN yarn build
EXPOSE 3000
CMD ["node", "app.js"]

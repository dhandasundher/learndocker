FROM node

WORKDIR /usr/app

# Copy only package.json now
# Cos any change in any other js files will invalidate the cache and will rerun npm install.
# npm install is required to install the dependencies. Hence copy only package.json now and all files later.
COPY ./package.json ./
RUN npm install

# Any change in any other file, will affect only below instructions. And all the above instructions will be loaded
# from cache while building the image.
COPY ./ ./

CMD ["npm", "start"]
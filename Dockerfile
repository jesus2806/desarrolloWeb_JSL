# Selecciona la imagen de Node 
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Exponer el puerto en el que corre React
EXPOSE 5200

CMD ["npm", "start"]

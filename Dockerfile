# Selecciona la imagen oficial de Node 
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias y los instala
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto de tu código fuente
COPY . .

# Exponer el puerto en el que corre react-scripts
EXPOSE 4200

# Comando por defecto para iniciar la app en modo desarrollo
CMD ["npm", "start"]

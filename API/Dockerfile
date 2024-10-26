# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Da permisos de ejecución a `tsc` después de la instalación
RUN chmod +x ./node_modules/.bin/tsc

# Copia el resto de la aplicación
COPY . .

# Ejecuta el script de construcción
RUN npm run build

# Comando de inicio
CMD ["npm", "start"]

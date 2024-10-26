# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala dependencias
RUN npm install

# Instala TypeScript globalmente
RUN npm install -g typescript

# Da permisos de ejecución a TypeScript en los node_modules
RUN chmod +x ./node_modules/.bin/tsc

# Compila el proyecto
RUN npm run build

# Expone el puerto de la app (ajústalo al puerto que usas)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]

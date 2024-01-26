# Use uma imagem Node.js para construir a aplicação Angular
FROM node:14 as builder

WORKDIR /usr/src/app

# Copie apenas os arquivos necessários para instalar as dependências
COPY package*.json ./
RUN npm install

# Copie todos os arquivos
COPY . .

# Construa o aplicativo Angular
RUN npm run build

# Use uma imagem nginx leve como base para servir o aplicativo Angular
FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/app /usr/share/nginx/html

EXPOSE 80


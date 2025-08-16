# Usar Node oficial
FROM node:18

#criar diretorio de trabalho
WORKDIR /app

#copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

#copiar o resto do código
COPY . .

#expor a porta ( Render cuida disso via $PORT)
EXPOSE 3000

#Roda servidor
CMD ["npm", "start"]

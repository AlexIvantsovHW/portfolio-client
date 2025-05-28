FROM node:20-slim

WORKDIR /web-app

# Установим зависимости системы
RUN apt-get update && apt-get install -y python3 make g++ \
  && apt-get clean

# Копируем зависимости
COPY package.json yarn.lock ./

# Установка зависимостей
RUN yarn install

# Копируем весь проект
COPY . .

# Сборка приложения
RUN yarn build

EXPOSE 4173
CMD ["yarn", "dev"]

# [Udemy, Oleksandr Kocherhin] Vue и Vuex - пишем реальный проект с нуля [RUS, 2020]

<br/>

# Разработка по шагам

<br/>

## 01. Подготовка инструментов

<br/>

### 001. Подготавливаем проект

https://cli.vuejs.org/

    $ npm install -g @vue/cli
    $ vue --version
    @vue/cli 4.5.9

<br/>

    $ cd app
    $ vue create client

```
❯ Manually select features
```

<br/>

![Application](/img/pic-m01-p01.png?raw=true)

<br/>

![Application](/img/pic-m01-p02.png?raw=true)

<br/>

```
? Use history mode for router? (Requires proper server setup for index fallback
in production) (Y/n) n
```

<br/>

```
❯ ESLint with error prevention only
```

<br/>

```
❯ Lint on save
```

```
? Where do you prefer placing config for Babel, ESLint, etc.?

❯ In dedicated confi
g files
```

<br/>

```
? Save this as a preset for future projects? (y/N) n
```

<br/>

    $ cd client
    $ npm run serve

<br/>

![Application](/img/pic-m01-p03.png?raw=true)

<br/>

![Application](/img/pic-m01-p04.png?raw=true)

<br/>

### 002. Настройка локального API

<br/>
**Backend от Oleksandr:**
https://github.com/EJIqpEP/koa-knex-realworld-example

<br/>

    $ mkdir -p ~/projects/dev/js/vue/ && cd ~/projects/dev/js/vue/
    $ git clone https://github.com/EJIqpEP/koa-knex-realworld-example
    $ cd koa-knex-realworld-example
    $ npm install
    $ npm run db:migrate
    $ npm run db:load
    $ npm start

<br/>

browser: localhost:3000/api/articles

<br/>

### 003. Установка Prettier

<br/>

### 004. Обновление Vue до версии 3

    // Просто для демонстрации, на будущее!
    // Обновлю как паеты зарелизятся
    // $ npm install vue@next
    // $ npm install vuex@next
    // $ npm install vue-router@next
    // $ npm install --save-dev @vue/compiler-sfc

    // Обновить код

    // Обновить расширение для браузера

<br/>

### 005. Структура проекта

<br/>

## 02. Регистрация

<br/>

### 001. Разметка страницы регистрации

<br/>

![Application](/img/pic-m02-p01.png?raw=true)

<br/>

### 002. Redux и Vuex 

<br/>

### 003. Создание Vuex модуля авторизации


![Application](/img/pic-m02-p02.png?raw=true)


<br/>

### 004. Vuex actions

<br/>
 
### 005. Добавляем API запрос на регистрацию

    $ npm install axios

<br/>

### 006. Улучшение страницы регистрации

![Application](/img/pic-m02-p03.png?raw=true)


<br/>

### 007. Сохранение токена авторизации

![Application](/img/pic-m02-p04.png?raw=true)


<br/>

### 008. Отрисовываем ошибки валидации

![Application](/img/pic-m02-p05.png?raw=true)


<br/>

## 03. Авторизация

<br/>

### 001. Рефакторизируем именование

<br/>

### 002. Добавляем страницу логина

![Application](/img/pic-m03-p01.png?raw=true)


<br/>

### 003. Создаем верхнее меню


![Application](/img/pic-m03-p02.png?raw=true)


<br/>

### 004. Getters в Vuex


![Application](/img/pic-m03-p03.png?raw=true)


<br/>

### 005. Получение текущего пользователя от API


<br/>

## 04. Фид 

<br/>

### 001. Подготавливаем фид

![Application](/img/pic-m04-p01.png?raw=true)


<br/>

### 002. Отрисовываем фид

![Application](/img/pic-m04-p02.png?raw=true)


<br/>

### 003. Реализуем пагинацию 

![Application](/img/pic-m04-p03.png?raw=true)


<br/>

### 004. Высчитываем offset

    $ npm install -y query-string

<br/>

### 005. Реализуем популярные теги

![Application](/img/pic-m04-p04.png?raw=true)


<br/>

### 006. Добавляем вспомогательные компоненты


<br/>

### 007. Создаем мой фид и тег фид

![Application](/img/pic-m04-p05.png?raw=true)

<br/>

### 008. Добавляем переключатель между фидами

![Application](/img/pic-m04-p06.png?raw=true)


<br/>

## 05. Страницы поста 

<br/>

### 001. Создаем страницу отдельного поста

![Application](/img/pic-m05-p01.png?raw=true)


<br/>

### 002. Добавляем удаление поста


<br/>

### 003. Добавляем список тегов


![Application](/img/pic-m05-p02.png?raw=true)



<br/>

### 004. Создаем форму поста

![Application](/img/pic-m05-p03.png?raw=true)


<br/>

### 005. Добавляем страницу создания поста

<br/>

![Application](/img/pic-m05-p04.png?raw=true)

<br/>

![Application](/img/pic-m05-p05.png?raw=true)

<br/>


---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

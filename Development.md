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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

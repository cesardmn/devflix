# <h1 style="color: #ff0043; font-family: 'Arial', sans-serif; font-weight: bold; filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5)); height: auto; width: auto; padding: 0 0.2rem; display: flex; align-items: center; justify-content: center;">DEVFLIX</h1>

<p>This platform allows users to log in using their GitHub account and store their favorite YouTube links.</p>

<p>It has been developed using JavaScript and NextJs, utilizing the Prisma library as an ORM to seamlessly integrate with a PostgreSQL database. </p>

<p> NextAuth has been incorporated for convenient social login with GitHub, while the YouTube API is utilized to retrieve information about the registered videos.</p>

<br>

## preview

![home preview](./public/preview.gif)

<br>

## tools

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NextJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)
![Mui](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

<br>

## [>> DEPLOY <<](https://cesardmn.github.io/devflix)

<br>

## cloning and running

<br>

### Required

- NodeJs v16.+
- Docker 20.10. +
- Docker Compose 1.29.2

<hr>
<br>

### \* .env and .env.example

<p>Create a .env file like the .env.example file, making sure to include your credentials, yo.</p>

<hr>
<br>

### \* Up postgresSQL db

```bash
$ docker-compose up
```

<hr>
<br>

### \* Next App

<p>Open up a fresh terminal and follow these steps, dude:</p>

```bash
$ git clone https://github.com/cesardmn/devflix.git
$ cd devflix
$ npm i
$ npx prisma db push
```

run:

```bash
$ npm run dev
```

<br>
<br>

## Developed by Cesar Dimi.

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cesardmn/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5521982399315)

<br>
<br>

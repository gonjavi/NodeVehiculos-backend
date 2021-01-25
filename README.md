# Node Express Vehiculos Backend

Este es un proyecto backend de registro de automoviles, utilizando Node, Express y SQLServer.

### Prerequisitos
- npm 6.14.8
- node 14.10.1

#### Backend
- Correr $npm install    en el directorio raiz  para instalar todas las dependencias de el package.json 
- Corra en backend en la: $npm start
- El backend iniciará en el pruerto 5000, podrá ser visto en el terminal.

Crear la base de datos llamada carros SQLServer y luego crear la tabla ejecutando en Azure Data studio:

![screenshot](./img/creartabla.png)

create table vehiculos (
    id int PRIMARY KEY IDENTITY(1,1),
    linea VARCHAR (50) NOT NULL,
    marca VARCHAR (50) NOT NULL,
    modelo VARCHAR (50),
    color VARCHAR (50),
    foto text
);

- En el archivo backend/server.js, cambiar las credenciales de usuario en const config.

## Construido con

- React 16.13.1
- Redux 4.0.5
- React-Bootstrap 1.0.1
- Visual Code

## Autor:
👤 **Gonza Javier Mancilla**

- Github: [@gonjavi](https://github.com/gonjavi)
- Linkedin: [@g-javier-mancilla](https://www.linkedin.com/in/g-mancillla)

## 🤝 Contribución

Contribuciones, problemas y solicitud de caracteristicas son bienvenidas!


## Muestra tu apoyo

Da una ⭐️ si te gusta el proyecto!


## 📝 Licencia

Este proyecto tiene licencia [MIT](lic.url).



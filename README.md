# Advice Generator Application por la Comu de Mermelada.tech

# Contribuye con tu solución! 🥰♥💞🥰

## ¿ Cómo participar? 💭
Necesitarás tener instalado [Visual Studio Code](https://code.visualstudio.com/download), [Node.js 16+](https://nodejs.org/en/download/) y la extensión de Astro, la puedes encontrar [aquí](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

## Proyecto en el que vamos a trabajar
Seguiremos el ejemplo de [Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Es realizar un simple fetch a una api y traer un resultado. Puedes usar JavaScript o cualquier liobrería que quieras (React, Vue, Solid, Preact, etc). Puedes seguir el diseño estipulado o crear el tuyo. La innovación queda de tu parte!


## ¿Cómo empezar? 🛑

1. Crea un fork de este repositorio

2. Clona el repositorio

```
git clone git clone git@github.com:TU_USUARIO/advice-generator-app.git
```

3. Instala las dependecias

```
npm install
# o
pnpm install
# o
yarn install
```

4. Crea una página en:

```
/pages/entry/<tu-nombre-de-usuario-en-github>/index.astro
```

5. Ejeuta el proyecto:

```
npm run dev
# o
pnpm run dev
# o
yarn dev
```

6. Tienes que saber:

Astro para crear componentes dinámicos tiene directivas especiales. Si tu componente lleva un botón, deberás indicarle a Astro que dicho componente es interactivo y que tiene que ser hidratado en el navegador. Dicha hidratación se realiza de la siguiente manera:

```
<AdviceGeneratorApp client:load>{children}</AdviceGeneratorApp>
```

Debemos recordar que Astro es un framework SSG con cero Javascript por defecto, a menos que nosotrxs indiquemos lo contrario


## 👀 ¿Tienes dudas y no sabes cómo seguir?

Entra a nuestro servidor de [Discord](https://discord.gg/4nGWM7eh) y comenta en el canal de 👩💻open-source cuál es tu duda. ¡Entre la comunidad nos ayudaremos a despejar todas las dudas! 

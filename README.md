![This is header image](/public/favicon.ico)

# Space Tourism

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)

#

### Prerequisites

- <img src="readme/nodejs.png" width="25" style="top: 8px" /> Node JS @16.X and up
- <img src="readme/npm.png" width="25" style="top: 8px" /> npm @8 and up
- <img src="readme/typescript.png" width="25" style="top: 8px" /> typescript @4.9.4 and up

#

### Tech Stack

- <img src="readme/react.png" width="25" style="top: 8px" /> React @18.2.0 - front-end framework
- <img src="readme/react-router.png" width="25" style="top: 8px" /> React-router @6.4.5 - library for routing
- <img src="readme/sass.png" width="25" style="top: 8px" /> Scss - is the most mature, stable, and powerful professional grade CSS extension language in the world.

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/nikanoza/space-tourism.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm start
```

#

### Project Structure

```
|--- src
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- pages # page components
|   |--- svg # svg components folder
- package.json     # dependency manager configurations
```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

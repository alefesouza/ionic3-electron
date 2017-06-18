Meetup Angular
=====

Esse é um simples aplicativo utilizando a API do Meetup para exibir eventos, desenvolvido em Angular 4.1.3 e Ionic 3.4.0.

Desenvolvi ele com o intuito de dar palestras sobre aplicativos híbridos utilizando Ionic e Electron, atingindo 6 plataformas diferentes apenas com linguagens web, seguindo as interfaces mobile nativas.

Pré-requisitos
-----

Aqui nesse repositório há o aplicativo final, porém pretendo fazer um live code explicando passo a passo cada parte em palestras, como o tempo de uma palestra é normalmente 50 minutos - 1 hora, é necessário você fazer algumas coisas antes para pular o tempo de instalação dos pacotes necessários, que é algo que pode demorar mais ou menos 2 horas.

Os requisitos são:

- NodeJS 7.10.0, no dia que eu estava desenvolvendo (17/06/2017) estava havendo problemas com o node-sass no NodeJS 8+, portanto não posso garantir que vai funcionar quando você testar, você pode baixar para o seu sistema [clicando aqui](https://nodejs.org/dist/v7.10.0/) ou utilizar o NVM.
- Android SDK, é necessário para compilar aplicativos Android, o mais fácil é você baixar o [Android Studio](https://developer.android.com/studio/index.html) pois ele já deixa tudo configurado.
- Xcode, caso você tenha um Mac e queira compilar pra iOS, só baixá-lo atráves da App Store.

Comandos que você precisa executar antes da palestra, os @versão são opcionais, são apenas as versões que eu utilizei quando desenvolvi o app:

- Instalar o Cordova e Ionic globalmente atráves do NPM:

```
    npm install -g cordova@7.0.1
    npm install -g ionic@3.4.1
```

- Iniciar um projeto simples do Ionic:

```
    ionic start blank meetup-angular
    cd ./meetup-angular
```

- Instalar o pacote do electron e electron builder:

```
    npm install electron@1.6.11
    npm install electron-builder@19.4.2
```

Android
---

- Adicionar o projeto Android:

```
    ionic cordova platform add android
```

Vai pedir para você instalar o pacote @ionic/cli-plugin-cordova, digite Y e enter.

- Rodar ou emular o projeto Android:

```
    ionic cordova run android
```

ou

```
    ionic cordova emulate android
```

iOS
---
- Adicionar o projeto iOS:

```
    ionic cordova platform add ios
```

Vai pedir para você instalar o pacote @ionic/cli-plugin-cordova, digite Y e enter.

- Rodar ou emular o projeto iOS:

```
    ionic cordova run ios
```

ou

```
    ionic cordova emulate ios
```

Minha palestra começará depois de ter feito tuuuuudo isso. Também recomendo você baixar o ~~melhor editor~~ [Visual Studio Code](https://code.visualstudio.com/) por possuir um melhor suporte a TypeScript ficando mais fácil de me acompanhar.
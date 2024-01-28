# Fresh Dev Workshop

**Hackea y aprende con amigos mientras construyes cosas divertidas**

Bienvenido a Frutero Club, una comunidad de constructores apasionados por la tecnología.

## ¡Conoce Scaffold-ETH 2!

🧪 Un toolkit actualizado, open-source, para construir aplicaciones descentralizadas (dApps) en la blockchain de Ethereum. Está diseñado para facilitar a los desarrolladores la creación y despliegue de contratos inteligentes y a construir interfaces para interactuar con estos contratos.

⚙️ Construido con NextJS, RainbowKit, Hardhat, Wagmi, Viem, y Typescript.

#### Requisitos

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) o [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

### Configuración inicial:

Clona este repositorio

```
  git clone https://github.com/fruteroclub/fresh-dev-workshop
```

Cambia al directorio del proyecto

```
  cd fresh-dev-workshop
```

Instala las dependencias

```
  yarn install
```

### Inicia la aplicación

Necesitaremos al menos 2 terminales para utilizar Scaffold-ETH 2

Corre el siguiente comando para iniciar una red local de Ethereum, utilizando Hardhat. Esta red corre localmente en tu equipo y es un ambiente de desarrollo que permite hacer pruebas. Puedes cambiar la configuración en `hardhat.config.ts` para utilizar una red alternativa.

```
  yarn chain
```

En otra terminal, podrás ejecutar el siguiente comando para desplegar el contrato de prueba:

```
yarn deploy
```

Este comando despliega el contrato inteligente de prueba en la red local que iniciamos en el paso anterior. Este contrato se encuentra ubicado en `packages/hardhat/contracts`, el cual podrás modificar de acuerdo a tus necesidades. El comando `yarn deploy` utiliza el script de despliegue localizado en `packages/hardhat/deploy` para desplegar el contrato a la red. También puedes modificar el script de despliegue.

En una tercera terminal, inicia la aplicación de NextJS con este comando:

```
yarn start
```

La aplicación iniciará en `http://localhost:3000`.

Puedes interactuar con tu contrato inteligente en la página "Debug Contracts". Puedes cambiar la configuración de la aplicación en `packages/nextjs/scaffold.config.ts`.

Puedes correr los tests de tus contratos inteligentes con `yarn hardhat:test`

- Edita el contrato inteligente `YourContract.sol` en `packages/hardhat/contracts`
- Edita el frontend en `packages/nextjs/pages`
- Edita los scripts de despliegue en `packages/hardhat/deploy`

## Documentación

Visita la [documentación oficial](https://docs.scaffoldeth.io) para empezar a construir con Scaffold-ETH 2.

Para conocer más sobre esta increíble herramienta, puedes visitar el [website de Scaffold-ETH 2](https://scaffoldeth.io).

# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/1171422a-0ce4-4203-bcd4-d2d1941d198b)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.

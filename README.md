
# TicketBuy

TicketBuy is a decentralized application (dApp) for managing and purchasing event tickets on the Ethereum blockchain. This project ensures secure and transparent transactions, providing users with a seamless experience for buying and managing event tickets.

## Features

- **Ticket Sales**: Securely buy tickets using Ethereum.
- **User Dashboard**: Track your purchases and view event details.
-  **Withdraw**: Owner can withdraw money.

## Technologies Used

- **Ethereum**: Smart contract deployment and management.
- **Scaffold-ETH**: Development framework for Ethereum dApps.
- **Next.js**: Front-end user interface.
- **Tailwind CSS**: Styling framework for a responsive design.

## Getting Started

To get a local copy up and running, follow these simple steps.


## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
git clone https://github.com/kocaemre/ticketbuy.git
cd ticketbuy
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.
Also you need to change `packages\nextjs\scaffold.config.ts:targetNetworks` to hardhat

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to project

We welcome contributions

Email : emrekoca2003@hotmail.com

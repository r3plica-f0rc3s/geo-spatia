# GeoSpatia

the project requires you to connect your Metamask to Harmony.ONE Testnet network - https://docs.harmony.one/home/network/wallets/browser-extensions-wallets/metamask-wallet. 

![Screenshot 1](https://cloud.ipv8.pl/s/RtwoRrnGekqWzYY/preview)
![Screenshot 2](https://cloud.ipv8.pl/s/f288fLfngLWtQgj/preview)

Map-based NFT Marketplace

This is a submission for Harmony Hackathon (Harmony-One-Love-2). ONE World: Geospatial NFT Marketplace.

[![VIDEO DEMO](https://img.youtube.com/vi/WV7UHb4XQ6Q/0.jpg)](https://www.youtube.com/watch?v=WV7UHb4XQ6Q)


[APP DEMO](https://thecyberd3m0n.gitlab.io/geo-spatia/)

[CONTRACT REPO](https://thecyberd3m0n.gitlab.io/geo-spatia/)

## Features

- Admin creates NFT using Remix (CreateNew method, see example NFTS)
- User can bid and outbid each other
- Desktop and mobile UI (mobile UI requires some fixes)
- User can resale NFTs to each other
- Realtime UI updates, route switches, timers. No need to refresh the app
- Map usage. 3D Camera animations.
- Layering. You can add NFTs to deeper layers. They'll be visible after zooming in the map, but you should always see them on the right.
- Mapbox supports Augmented Reality (https://www.mapbox.com/augmented-reality), so we can do it too.

## Libraries

- Mapbox
- Vanta.js (for intro animation)
- Angular with Angular Material
- Three.js
- Web3

## Roadmap

- Move from layers approach to just storing "z" coordinate, and place NFT in natural 3d space. That will make animations and graphics much more awesome.
- IPFS integration
- Add some introducing information to Curtain
- Allowing upload 3D Models as NFTs (fbx graphics). Maybe animated one?
- Administrator options (adding)
- layering filters
- Cancel resale, resign from retrieve.
- Selling areas, not just objects
- More controls, map perspectives for game-like experience


## Adding NFTs

- go to Remix, load our Smart Contract
- put well formatted NFTs using CreateNew method

3 example NFTs

```
[["RandomLocation","54.229676,22.012229","1","2500000000000000000",1]],["%3Csvg%20viewBox%3D%220%200%2090%2090%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cmask%20id%3D%22mask__ring%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2290%22%20height%3D%2290%22%3E%3Crect%20width%3D%2290%22%20height%3D%2290%22%20rx%3D%22180%22%20fill%3D%22white%22%3E%3C%2Frect%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url%28%23mask__ring%29%22%3E%3Cpath%20d%3D%22M0%200h90v45H0z%22%20fill%3D%22%23ffc978%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M0%2045h90v45H0z%22%20fill%3D%22%23c9c987%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M83%2045a38%2038%200%2000-76%200h76z%22%20fill%3D%22%23c9c987%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M83%2045a38%2038%200%2001-76%200h76z%22%20fill%3D%22%23d1a664%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M77%2045a32%2032%200%2010-64%200h64z%22%20fill%3D%22%23d1a664%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M77%2045a32%2032%200%2011-64%200h64z%22%20fill%3D%22%23c27b57%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M71%2045a26%2026%200%2000-52%200h52z%22%20fill%3D%22%23c27b57%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M71%2045a26%2026%200%2001-52%200h52z%22%20fill%3D%22%23ffc978%22%3E%3C%2Fpath%3E%3Ccircle%20cx%3D%2245%22%20cy%3D%2245%22%20r%3D%2223%22%20fill%3D%22%23ffe7bf%22%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E"],[3600]


[["Very Nice place","56.229676,24.012229","1","1500000000000000000",1]],["%3Csvg%20viewBox%3D%220%200%2080%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cmask%20id%3D%22mask__bauhaus%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20rx%3D%22160%22%20fill%3D%22white%22%3E%3C%2Frect%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url%28%23mask__bauhaus%29%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22%23ec6c2b%22%3E%3C%2Frect%3E%3Crect%20x%3D%2210%22%20y%3D%2230%22%20width%3D%2280%22%20height%3D%2210%22%20fill%3D%22%23feae4b%22%20transform%3D%22translate%2810%2010%29%20rotate%28196%2040%2040%29%22%3E%3C%2Frect%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20fill%3D%22%23bdbf90%22%20r%3D%2216%22%20transform%3D%22translate%280%200%29%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%2280%22%20y2%3D%2240%22%20stroke-width%3D%222%22%20stroke%3D%22%2335352b%22%20transform%3D%22translate%2812%20-12%29%20rotate%2832%2040%2040%29%22%3E%3C%2Fline%3E%3C%2Fg%3E%3C%2Fsvg%3E"],[300]




[["34vtu84m8vt","51.229676,30.012229","1","1000000000000000000",1]],["%3Csvg%20viewBox%3D%220%200%2090%2090%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cmask%20id%3D%22mask__ring%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2290%22%20height%3D%2290%22%3E%3Crect%20width%3D%2290%22%20height%3D%2290%22%20rx%3D%22180%22%20fill%3D%22white%22%3E%3C%2Frect%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url%28%23mask__ring%29%22%3E%3Cpath%20d%3D%22M0%200h90v45H0z%22%20fill%3D%22%23a0ded6%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M0%2045h90v45H0z%22%20fill%3D%22%23c7ede8%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M83%2045a38%2038%200%2000-76%200h76z%22%20fill%3D%22%23c7ede8%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M83%2045a38%2038%200%2001-76%200h76z%22%20fill%3D%22%231693a5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M77%2045a32%2032%200%2010-64%200h64z%22%20fill%3D%22%231693a5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M77%2045a32%2032%200%2011-64%200h64z%22%20fill%3D%22%2345b5c4%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M71%2045a26%2026%200%2000-52%200h52z%22%20fill%3D%22%2345b5c4%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M71%2045a26%2026%200%2001-52%200h52z%22%20fill%3D%22%23a0ded6%22%3E%3C%2Fpath%3E%3Ccircle%20cx%3D%2245%22%20cy%3D%2245%22%20r%3D%2223%22%20fill%3D%22%237ececa%22%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E"],[600]

```

Svgs should have width and height set to 100%, and should be urlencoded.

You'll see new NFT in the app without refreshing.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Improve Performance

App will load faster if connected to dedicated Harmony node.

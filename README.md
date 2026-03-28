# Ohjelmistojen testaus ja ylläpito - Task 8 - Deployment

## Tarkoitus

Testataan testikirjastoa (AT00BY10) yksikkötesteilllä. Yksikkötestit on toteutettu mocha- ja chai-kirjastoilla. Tarkoituksena on käynnistää GitHub actionsin workflow kun repositorion main branchiin tehdään push tai pull request. C8-ohjelmalla saadaan koodikattavuusraportti, joka lähetetään Coverallsiin. Kattavuustulokset ovat nähtävissä Coverallsista, sekä projektin README.md:ssä.

## Käytetyt teknologiat

- Node.js: 22.20.0
- Mocha: 11.7.5
- Chai: 6.2.2
- c8: 11.0.0

## Ajaminen lokaalisti

```bash
1. Kloonaa projekti

2. Asenna riippuvuudet:
- npm install

3. Aja testit ja coverage-raportti
- npm run coverage

```

## Coverallsin kattavuus Badge

[![Coverage Status](https://coveralls.io/repos/github/Kotvau/AT00BY10_t8/badge.svg)](https://coveralls.io/github/Kotvau/AT00BY10_t8)

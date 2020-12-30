# scrpjs

Using Cypress for testing and scraping

## General requirements:

1. create a private configuration .js file. it will contain different pieces of data for the tests/scrapers. file name should be **.cprs-private-conf.json**

2. Set env vars: `export CYPRESS_PRIVATE_CONF_LOCATION=<directory containing the file>`

## Hilan Fill Hours
1. To use this scraper you need to :
        `export CYPRESS_HILAN_URL=<url to hilan login page>`
- By default start -> end hours are 08:00 -> 17:00. 
- In your private configuration file you should have this stucture:
    ```
    {
        "pages": {
            "hilan": {
                "user": <your hilan username>,
                "pw": "<your hilan pw>"
            }
        }
    }
    ```
- to run headless: `npx cypress run --headless --spec cypress/integration/hilan.js`

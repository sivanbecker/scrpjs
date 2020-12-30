# scrpjs

Using Cypress for testing and scraping

## General requirements
    - create a private configuration .js file. it will contain different pieces of data for the tests/scrapers. 
    file name should be `.cprs-private-conf.json`
    - set env vars:
        - `export CYPRESS_PRIVATE_CONF_LOCATION=<directory containing the file>`
## Hilan Fill Hours
    - to use this scraper you need to :
        - `export CYPRESS_HILAN_URL=<url to hilan login page>`
    - by default start -> end hours are 08:00 -> 17:00. 
    - in your private configuration file you should have this stucture:
        `
        {
            "pages": {
                "hilan": {
                    "user": <your hilan username>,
                    "pw": "<your hilan pw>"
                }
            }
        }
        `
    
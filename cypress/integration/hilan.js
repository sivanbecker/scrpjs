describe('Hilan Test', () => {
    it('Visits Hilan', () => {

        cy.visit(Cypress.env('HILAN_URL'))
        cy.readFile(Cypress.env('PRIVATE_CONF_LOCATION') + Cypress.env('private_cypress_conf_file'))
            .its('pages')
            .its('hilan')
            .then(obj => {
                cy.expect(obj).to.have.all.keys('user', 'pw')

                cy.get('#user_nm')
                    .type(obj.user)

                cy.get('#password_nm')
                    .type(obj.pw, { log: false })
            }
            )
        cy.get('.form-container')
            .find('button')
            .click()

        // Working Hours
        cy.get('.HourReportBox > ul > li > a').first().click()
        cy.get('.HReportsGrid > tbody')
            .within(() => {
                cy.get('table[id$="innerBody"]')
                    .within(() => {
                        cy.get('td[class=" ItemBorder"]')
                            .eq(1)
                            .within(() => {
                                cy.get('td')
                                    .first()
                                    .within(() => {
                                        cy.get('input')
                                            .clear()
                                            .type(Cypress.env('hilan').start)
                                            .type('00')
                                    })
                                cy.get('td')
                                    .eq(1)
                                    .within(() => {
                                        cy.get('input')
                                            .clear()
                                            .type(Cypress.env('hilan').end)
                                            .type('00')
                                    })
                                cy.get('td')
                                    .eq(2)
                                    .within(() => {
                                        cy.get('span').should('have.text', '09:00')
                                    })
                            })
                    })

            })
        cy.get('input[value="שמור"]').click()

        // Projects
        if ('project' in obj) {
            cy.visit(Cypress.env('HILAN_URL'))
            cy.get('.HourReportBox > ul > li')
                .eq(1)
                .within(() => {
                    cy.get('a').click()
                })
            cy.get('.HReportsGrid > tbody')
                .within(() => {
                    cy.get('table[id$="innerBody"]')
                        .within(() => {
                            cy.get('td[class=" ItemBorder"]')
                                .eq(1)
                                .within(() => {
                                    cy.get('table > tbody > tr > td')
                                        .eq(7)
                                        .type(Cypress.env('hilan').proj_num, { delay: 4000 })

                                })
                        })
                })
            cy.get('input[value="שמור"]').click()
        }
    })



})

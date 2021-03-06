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

                cy.get('input[class="h-input-password"]')
                    .type(obj.pw)
            }
            )
        cy.get('.form-container')
            .find('button')
            .click()


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


    })


})
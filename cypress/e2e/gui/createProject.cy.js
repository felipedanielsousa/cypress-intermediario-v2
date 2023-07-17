import { faker } from '@faker-js/faker'

describe('Create project', () => {
    beforeEach( () => {
        cy.api_deleteAllProjects()
        cy.login()
        cy.visit('/')
    })

    it('sucessfully', () => {
        
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.word(5)
        }
        cy.gui_createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')

    })

})

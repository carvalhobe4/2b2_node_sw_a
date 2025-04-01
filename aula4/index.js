const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')

function operation(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que deseja fazer?',
                choices: [
                    'Criar Conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair',
                ],
            }
        ]).then((answer) => {
            const action = answer['action']

            if(action === 'Criar Conta'){
                console.log('Criando Consta...')
            }else if(action === 'Depositar'){
                console.log('Depositando...')
            }else if(action === 'Consultar Saldo'){
                console.log('Consultando Saldo...')
            }else if(action === 'Sacar'){
                console.log('Sacando Dinheiro...')
            }else if(action === 'Sair'){
                console.log('Saindo do Sistema...')
                process.exit()
            }else {
                console.log('Nao e valido')
            }
        })
}
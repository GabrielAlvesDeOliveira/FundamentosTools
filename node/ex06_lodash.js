const _ = require('lodash')

const alunos =[
    {
        nome:"Jao",
        nota: 7.6
    },
    {
        nome: "Marie",
        nota: 8.6
    },
    {
        nome: "Pedro",
        nota: 8.1
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)
process.stdout.write("Esta gostando")
process.stdin.on('data', function(data){
    process.stdout.write(`Sua resposta foi ${data.toString()}, obrigado\n`)
    process.exit()
})
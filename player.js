class Player{
    constructor(){
    }
   //pegar a quantidade de jogadores
    getCount(){
        database.ref("playerCount").on("value", (data)=>{
            playerCount = data.val()
        })
    }

     //atualizar a quantidade
    updateCount(count){
        //diz o endereço do valor no banco de dados
        database.ref("/").update({
            playerCount: count
        })
    }

}
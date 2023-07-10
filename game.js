class Game{
    constructor(){

    }
    start(){
        //cria o objeto form da classe Form
        form = new Form();
        //chama o método exibir do formulário
        form.exibir();

        //cria uma instância de novo jogador
        player = new Player();
        player.getCount();

        car1 = createSprite(width/2-100, height-100)
        car1.addImage("carro", carimg1);
        car1.scale = 0.07;

        car2 = createSprite(width/2+100, height-100)
        car2.addImage("carro", carimg2);
        car2.scale = 0.07;
    }

    


    play(){
        form.esconder();
      
        image (pista, 0, -height*4.5, width, height*6)
        drawSprites()
    }

    //lê no banco de dados e copia o valor de gameState
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }

    //atualiza o valor de gameState 
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
 

}
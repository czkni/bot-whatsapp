const venom = require('venom-bot');
const os = require('os');
const db = require('./helpers/mysql.js');
const hostname = os.hostname();
const userinfo = os.userInfo();

venom
 .create({
    session: 'rava_zap',
    multidevice: true,
    headless: false
 })
 .then((client) => start(client))
 .catch((erro) => (
    console.log(erro)
 ));

 function start(client){
    console.log('Iniciando o whatsapp...');
    client.onMessage(async (msg) => {
        try {
            if (getUserFrom === false){
                const replyMessageWelcome = await db.getReply(keyword);
                client.sendText(msg.from, 'Mensagem Inicial de Contato ');
                
                function msgInicial()  {
                    client.sendText(msg.from, 'Opções para o usuário clicar.');                         
                }
                setTimeout(msgInicial, 3000);
                await db.setUser(user);                
            } else {
                if (msg.body === '5') {
                    try {
                      await db.setStatusOff(user);
                      client.sendText(msg.from, '🌐 Redirecionamento humano.🧑‍💼')
                      client.sendText(msg.from, 'Você está sendo atendido por: ' + userinfo['username'] +' 🎉')
                    } catch (error) {
                      console.error('Erro ao definir o status off:', error);                    
                    }
               } else if (msg.body === "4"){
                    client.sendText(msg.from, "Modo automático de mensagens");
                    await db.setStatusOn(user);
    
                }
                else if (msg.body === "cancelar"){               
                    client.sendText(msg.from, "Cliente excluido: " + msg.from);
                }
                else if (replyMessage !== false && getuserStatus === "on"){
                    client.sendText(msg.from, replyMessage);
                } else{
                    client.sendText(msg.from, 'Mensagem caso o bot não entenda a mensagem! ⬆️')
                    function msgEncerramento(){
                        client.sendText(msg.from, 'Mensagem de inatividade!')                
                        db.deleteUser(user);                    
                    }
                  setTimeout(msgEncerramento, 9000);               
                }
            }         
        
        } catch (e){
            console.log(e);
        }
    });
 }

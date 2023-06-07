# bot-whatsapp
Bot para automatizar o atendimento do Whatsapp, utilizando a API Venom.

Importações necessárias: 

Utilizaremos a API Venom, que possui diversas funções pré-definidas, seja para captar as mensagens
digitadas pelo usuário, ou para definir estruturas que irão funcionar de acordo com a interação do
usuário.

![code2](https://github.com/czkni/bot-whatsapp/assets/127226763/94ae2d47-9f7a-4a15-99a7-60c9909e8b00)


Vou apresentar algumas funções utilizadas e como elas funcionam durante a interação do usuário:

A função abaixo faz uma consulta de acordo com a opção digitada pelo usuário, e retorna do banco de
dados (Utilizado o PhpMyAdmin neste exemplo - Mysql). Esta função é boa para ser utilizada após o 
menu de opções ser exibido ao cliente, onde cada um dos números digitados redirecionara o usuário
para uma outra árvore de rotinas.

![code](https://github.com/czkni/bot-whatsapp/assets/127226763/0b23739d-91d7-4250-b449-39c2d8fba26a)

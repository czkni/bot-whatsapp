# bot-whatsapp

🕷️ Bot para automatizar o atendimento do Whatsapp, utilizando a API Venom 🎉

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

Para usufruir das funções e métodos disponibilizados pela API Venom, é importante utilizar algumas 
funcionalidades, dispostas na documentação, como a definição de usuário ativo/inativo . Muitas funções
exigem que parâmetros de identificação sejam passados durante a chamada, portanto se faz necessária
a função a seguir, que insere o usuário que iniciou os serviços do BOT em uma tabela do banco de dados.

![user](https://github.com/czkni/bot-whatsapp/assets/127226763/c1af29b1-8e99-426a-81f0-045041057789)

Durante minha jornada configurando este bot de atendimento, notei que uma das funcionalidades mais comuns
em automações deste tipo, é um sistema que finalize o atendimento, em casos onde o problema foi sanado, ou
por inatividade do usuário. 

A função a seguir, ao contrário da citada anteriormente, realiza a exclusão de um usuário da tabela de usuários
ativos/inativos. Essa função pode ser adaptada para ao invés de excluir um registro, realizar apenas a alteração
de uma flag para validar os atendimentos que estão acontecendo ou que já acabaram.

![delete](https://github.com/czkni/bot-whatsapp/assets/127226763/b0362c34-4f70-43d0-a119-2946dc4a48fd)

Agora partindo para o arquivo que irá interagir diretamente com a API e suas requisições.

A condição a seguir realiza uma verificação se o usuário já está com uma sessão de atendimento ativa, caso a resposta
seja não, irá enviar uma sequência de mensagens de boas-vindas/apresentações.

![getuser](https://github.com/czkni/bot-whatsapp/assets/127226763/f4d78450-abab-4d2f-8814-ab48a6116096)

O seguinte trecho de código realiza a validação do comando digitado pelo cliente, com o objetivo de redreciona-lo
para o menu desejado.

![condicao](https://github.com/czkni/bot-whatsapp/assets/127226763/81602492-1f6f-4a14-ac69-81c758f487ed)

Na imagem acima o número 5 é definido como um demarcador para transferir o atendimento para um atendente real, 
finalizando assim os métodos automáticos do código.

Podem ser definidos X valores para as interações do usuário, mas ressalto que para um bot de atendimento, é importante
definir com clareza os menus e as opções que o usuário tem disponível, para que a experiência torne-se intuitiva e objetiva.

Segue abaixo uma breve demonstração do funcionamento do chatbot.

https://github.com/czkni/bot-whatsapp/assets/127226763/f5bbd4bd-1145-4d54-84b4-07bbaf0025a2

Obs: A API é riquíssima em funções, é possível enviar imagens, aúdios, localização, documentos e todo tipo de arquivo que 
o Whatsapp permite o envio. Fica a critério do desenvolvedor/cliente quais funcionalidades implementar nesta solução, afim
de resolver questões de interação nas redes sociais.

Obrigado por ter lido até aqui. Fique a vontade para entrar em contato comigo caso tenha alguma dúvida sobre a implantação 
de um ChatBot utilizando a API Venom, caso seja de meu conhecimento, ficarei feliz em ajudar.





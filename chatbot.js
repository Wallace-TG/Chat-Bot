// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + 'Sou o assistente virtual da empresa SoftForce. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona, Valores dos planos\n2 - Agendar visita técnica \n3 - Problemas com a internet\n4 - Desejo falar com um atendente\n5 - Outro duvida'); //Primeira mensagem de texto
      
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nosso serviço oferecemos planos de internet com preços acessíveis e atendimento 24 horas por dia.\n\n*Planos disponíveis:*\n1 - Basico:\n300MB por  R$100/Mês\n2 - Intermediário:\n500MB por R$120/Mês\n3 - Premium:\n700MB por R$160/Mês \n\n*Benefícios:*\n- Atendimento 24 horas por dia\n- Suporte técnico especializado\n- Internet de alta velocidade\n- Sem taxa de instalação\n- Sem fidelidade\n- Sem burocracia');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro e escolha o plano que desejar.\n\n2º Passo\nApós efetuar o pagamento do plano escolhido você já terá acesso a nossa área exclusiva para começar seu atendimento na mesma hora.\n\n3º Passo\nSempre que precisar');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://SoftForce/cadastro.com');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Agendar visita técnica é muito simples.\n\n1º Passo\nEscolha o dia e horário que deseja agendar a visita técnica.\n\n2º Passo\nApós escolher o dia e horário, você receberá uma confirmação de agendamento no seu email cadastrado.\n\n3º Passo\nAguarde a visita técnica no dia e horário agendado.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para agendar sua visita: https://SoftForce/vtecnica.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você está enfrentando problemas com a internet, siga os passos abaixo:\n\n1º Passo\nVerifique se o seu modem está ligado e conectado corretamente.\n\n2º Passo\nReinicie o modem e aguarde alguns minutos.\n\n3º Passo\nCaso o problema persista, entre em contato com o nosso suporte técnico pelo WhatsApp ou pelo telefone.');
        

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você deseja falar com um atendente, siga os passos abaixo:\n\n1º Passo\nDigite o número do seu protocolo de atendimento.\nCaso você tenha um número ignore esse passo\n2º Passo\nAguarde a confirmação do atendente.\n\n3º Passo\nO atendente irá entrar em contato com você pelo WhatsApp ou pelo telefone.');
       
        // Novo passo: Verifica se nenhuma das etapas resolveu
        await delay(5000); // Espera um pouco antes de continuar
        await chat.sendStateTyping()
        await delay(2000);
        await client.sendMessage(msg.from, 'Se mesmo após seguir os passos acima o problema continuar, por favor, envie "suporte" para falar diretamente com um atendente.');
        
    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


    }








});
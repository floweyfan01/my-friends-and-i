/* ============================================================
   EDITE AQUI: troque os textos de cada personagem.
   - imagem: caminho ou link da foto (ex.: "img/maria.jpg").
     Deixe "" para usar o espaço clicável de preview.
   - cor: cor de destaque do personagem.
   ============================================================ */
function mk(n, nome, cor, prox, extra){
  return Object.assign({
    id:'p'+n, nome:nome, cor:cor, imagem:'',
    apelido:'Nome completo do personagem',
    idade:'00 anos',
    ocupacao:'Ocupação ou o que faz da vida',
    frase:'Uma frase marcante deste personagem.',
    gostos:['Gosto 1','Gosto 2','Gosto 3','Gosto 4'],
    desgostos:['Não suporta 1','Não suporta 2','Não suporta 3'],
    historia:'Escreva aqui a história do personagem: de onde ele veio, o que viveu e o que o move.\n\nUse parágrafos separados por uma linha em branco.',
    grupo:'Como e por que esse personagem entrou na turma? Deixe uma pista, mas guarde parte da história para despertar a curiosidade.',
    curiosidades:['Curiosidade 1','Curiosidade 2','Curiosidade 3'],
    relacoes:[{com:prox, texto:'Como ele se dá com este amigo da turma.'}],
    ficha:[], secoes:[], tituloDesgostos:'Não suporta', oi:''
  }, extra||{});
}
const LIZ={
  apelido:'Liziane Oliveira',
  idade:'11 a 17 anos',
  ocupacao:'Dançarina',
  oi:'Oii!! Eu sou a Liz, eu danço qualquer coisa que tocar! Ballet, samba, street dance… Fica à vontade para olhar tudo, conhecer a turma e deixar um recado no livro de visitas. ♡',
  frase:'“A mami queria criar uma menina, mas o papi ganhou e criou uma lagosta.”',
  ficha:[
    ['Aniversário','6 de dezembro'],['Signo','Sagitário'],['Origem','Meio brasileira, meio mexicana'],
    ['Etnia','Latina, parda'],['Classe','Trabalhadora'],['Altura','1,69 m'],['Tipo sanguíneo','B'],['MBTI','ESFP'],
    ['Sexualidade','Lésbica'],['Idiomas','Português brasileiro, inglês avançado e um pouco de espanhol'],
    ['Voz','Bem alta']
  ],
  gostos:['Dançar','Cantar','Torcer','Filosofar','Coelhos','Churros','Pêssegos','Guaraná Antarctica','Festas neon e baladas'],
  tituloDesgostos:'Defeitos',
  desgostos:['Ignorante às vezes','Julga o que não entende','Muito teimosa'],
  secoes:[
    ['Aparência e estilo','Cabelo comprido, liso e com franja, laranja neon e rosa pastel, preso em um rabo de cavalo com um laço rosa neon. A pele clareia no inverno e escurece no verão, é naturalmente áspera e por isso ela usa bastante hidratante. Tem corpo retangular e atlético, dentes de coelho que pedem aparelho e maquiagem mínima, como gloss e rímel.\n\nOs looks vão de roupas de festa inspiradas nos anos 80 a visuais butch. Nos bolsos cargo, carrega várias pulseiras e chaveiros pendurados.'],
    ['Personalidade','Percebe rápido quando algo está errado ou alguém está para baixo, e quer ajudar. É empática, talvez demais: acredita que até uma pessoa ruim merece pelo menos uma segunda chance. O humor é absurdista e combina com o do Louis.\n\nQuando o assunto tem a ver com algo de que gosta, ela se concentra muito e abre tangentes. Do contrário, tem dificuldade de entender por que deveria se importar. Tem TDAH. Aprende melhor vendo os outros fazerem e se adapta a situações novas e complexas como um camaleão.'],
    ['Talentos','Dança praticamente qualquer estilo, com mais familiaridade em ballet, samba e street dance, e pega rápido qualquer passo novo. Canta muito bem: foi convidada para ser soprano do coral da escola, mas escolheu focar só na carreira de dançarina. Tem ouvido ótimo, reconhece qualquer nota musical e mantém o ritmo com firmeza.'],
    ['Sonho e filosofia','Quer se tornar uma bailarina famosa e dançar em uma companhia de balé russa.\n\nPara ela, esperar por estabilidade é um luxo que não tem, então prefere um progresso bagunçado a planos perfeitos que nunca saem do papel.'],
    ['O que ela guarda pra si','Mantém a máscara de quem é resiliente e não se abala com as circunstâncias, o pilar que segura tudo, ou melhor, todos, para não desabarem. Por isso quase nunca se permite ser vulnerável, principalmente perto dos outros.\n\nO que mais a envergonha é quando apontam como ela age de forma infantil, quando tudo o que ela quer é voltar a um certo período da vida. Lida com isso com humor e movimento: piadas, vídeos bobos, dança e treino.']
  ],
  curiosidades:['Acredita que encontrar objetos perdidos tem um significado especial','Recusou ser soprano do coral da escola para focar na dança','Adora coelhos, e tem dentes de coelho'],
  relacoes:[
    {com:'Mavis',tag:'Melhor amiga / futura namorada??',texto:'Mavis é o travesseiro de conforto da Liz. Com ela, a Liz sente que finalmente pode deixar de ser o sol para todo mundo e simplesmente sossegar…'},
    {com:'Thomas',tag:'Amigo!',texto:'Foi a Liz quem tentou o primeiro contato com ele e quem insistiu para que fossem amigos. O Thomas…'},
    {com:'Louis',tag:'Amizade',texto:'O humor absurdista dos dois combina.'},
    {com:'Elle',tag:'Amizade',texto:'Faz parte da turma.'},
    {com:'Daniel',tag:'Família',texto:'Irmão e primo adotivo.'},
    {com:'Pai',tag:'Família',texto:'Família.'}
  ]
};
const DANIEL={
  apelido:'Daniel Oliveira',
  idade:'11 a 17 anos',
  ocupacao:'Jogador de futebol',
  oi:'E aí! Eu sou o Daniel. Jogo bola, cozinho e topo qualquer desafio de xadrez. Este é o meu cantinho: entra, olha à vontade e deixa um recado no livro de visitas.',
  frase:'“Todo mundo deveria ajudar os outros, mesmo sem ganhar nada com isso.”',
  aviso:'Aviso de conteúdo: esta história fala de luto e suicídio.',
  historia:'Perdeu a tia, mãe da Liz, para o câncer. Algum tempo depois, a mãe dele tirou a própria vida e ele foi adotado pelo pai da Liz.',
  ficha:[
    ['Aniversário','1º de janeiro'],['Signo','Capricórnio'],['Origem','Brasil'],['Etnia','Afro-latino'],
    ['Classe','Média-baixa'],['Altura','1,73 m'],['Tipo sanguíneo','A'],['MBTI','ISTP'],
    ['Sexualidade','Bissexual confuso'],['Transtorno','TEPT'],
    ['Idiomas','Português brasileiro, espanhol e inglês'],['Sotaque','Forte sotaque do português']
  ],
  gostos:['Futebol','Tênis','Xadrez','Cartas','Videogames','Cozinhar','História','Geografia','Música','Onça-pintada','Estrogonofe','Feijoada','Suco de maracujá'],
  desgostos:['Crueldade','Injustiça','Ambiguidade e caos','Aranhas'],
  secoes:[
    ['Aparência e estilo','Cabelo preto e crespo, quase sempre em dreadlocks e às vezes em finger locks. Olhos castanho-claros e puxados, pele bem macia e algumas sardas no rosto. É musculoso, principalmente nas pernas, por causa dos esportes, sobretudo futebol.\n\nO estilo é streetwear inspirado em meados dos anos 80 e nos anos 90. Usa um crucifixo que o pai lhe deu e algumas contas douradas, e a jaqueta é o seu item de conforto.'],
    ['Personalidade','Tem um senso de justiça profundo: odeia crueldade e injustiça e acredita que as pessoas devem ajudar os outros, mesmo sem ganhar nada com isso. É fleumático, persistente, calmo, de princípios e razoável, e lidera naturalmente, pela confiança e pelo respeito.\n\nÉ muito empático e não entende quem não é. Analisa os próprios sentimentos e os dos outros com cuidado, mas, quando está ferido ou de luto, pode descontar nos outros e agir sem pensar. Seu humor é de trocadilhos sem graça e humor político. Aprende fazendo e costuma analisar as opções: quando não tem muito a perder, mergulha de cabeça. Não tem nenhuma tolerância à ambiguidade.'],
    ['Talentos e interesses','Cozinha, cuida de cabelo (pinta, modela e corta) e faz cosplay. Gosta de história, geografia, esportes (físicos e intelectuais), culinária e música. Faz embaixadinha, aprende rápido por tentativa e erro e dá conta de reparos básicos em casa.\n\nUsa tecnologia quase só para jogar. Quando os jogos online surgiram, achou tudo muito inovador, mas não usa muito além disso.'],
    ['Sonho e filosofia','Quer jogar pela seleção brasileira e ganhar uma Copa do Mundo ao menos uma vez na vida. Está sempre buscando ser o melhor que consegue em qualquer situação.\n\nAcredita que a vida não tem ponto nem sentido, e por isso transforma tudo em competição: isso lhe dá uma razão, nem que seja por um breve instante, para viver.'],
    ['O que ele guarda pra si','Carrega a culpa pela morte da mãe. Fica envergonhado quando alguém menciona o trauma dele e quando lembram o quanto é impotente diante da força imponente e imparável do destino.\n\nQuer conhecer gente nova, mas tem pavor do que acontece se perder essas pessoas. Seus maiores medos são perder quem ama, não conseguir melhorar no que gosta, aranhas e o Louis. Lida com tudo isso jogando videogame ou xadrez até desmaiar de cansaço.']
  ],
  curiosidades:['Faz embaixadinha','Uma senhora estranha leu a sorte dele nas cartas e previu algo terrível para um certo dia. Ele passou todos os dias até lá aterrorizado e, quando o dia chegou, nem saiu de casa. O terrível era uma aranha grávida no quintal','Não trapaceia nem em um joguinho offline de quebra-cabeça no celular','Animal favorito: onça-pintada'],
  relacoes:[
    {com:'Liz',tag:'Família',texto:'Irmã e prima adotiva. A mãe dela era tia do Daniel.'},
    {com:'Pai da Liz',tag:'Família',texto:'Pai e tio adotivo, o homem que o adotou.'},
    {com:'Mavis',tag:'Amizade',texto:'Cozinham receitas juntos.'},
    {com:'Thomas',tag:'Amizade',texto:'Jogam xadrez e cozinham receitas juntos.'},
    {com:'Elle',tag:'Amizade',texto:'Jogam tênis juntos.'},
    {com:'Louis',tag:'Amizade complicada',texto:'Jogam xadrez e cartas juntos, mas o Daniel não lida bem com a ambiguidade e o caos do Louis.'}
  ]
};
const PERSONAGENS=[
  mk(1,'Liz','#FFC8DD','p2',LIZ),
  mk(2,'Daniel','#C9DB8C','p3',DANIEL),
  mk(3,'Mavis','#E2CCFF','p4'),
  mk(4,'Thomas','#D5DAE1','p5'),
  mk(5,'Louis','#FFF27A','p6'),
  mk(6,'Elle','#CFEBC8','p1')
];
PERSONAGENS.forEach(p=>{p.imagem=CHIBIS[p.id]||''});
const TEXTO_HOME={
  titulo:'Seis amigos. Seis mundos diferentes.',
  sub:'Eles não deveriam ter nada em comum, mas estão sempre juntos. Conheça cada um e descubra como isso aconteceu.'
};
/* ============================================================ */

const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const porId=id=>PERSONAGENS.find(p=>p.id===id);
const imgs={};
PERSONAGENS.forEach(p=>{try{const v=localStorage.getItem('img:'+p.id);if(v)imgs[p.id]=v}catch(e){}});
const fonte=p=>imgs[p.id]||p.imagem||'';

const TEMAS={
 home:{bg:'#F8F7F2',papel:'#FFFFFF',tinta:'#241F3A',a:'#B79CFF',b:'#FFC93C',c:'#FFE9A8',f:'"Pixelify Sans"',d:'✿',r:'0px',sh:'5px 5px 0 var(--b)',tilt:'0deg',pat:'linear-gradient(rgba(36,31,58,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(36,31,58,.07) 1px,transparent 1px)',sz:'28px 28px'},
 p1:{bg:'#FFD3C4',papel:'#FFF6EE',tinta:'#4A1130',a:'#FF5A6E',b:'#FF9F1C',c:'#FFC2B3',f:'"Bungee"',d:'▲',k:['🩰'],r:'0px',sh:'6px 6px 0 var(--b)',tilt:'0deg',pat:'radial-gradient(rgba(255,90,110,.5) 3px,transparent 3.5px),linear-gradient(135deg,transparent 0 44%,rgba(255,159,28,.35) 44% 56%,transparent 56%)',sz:'38px 38px,76px 76px',
  mascote:'(\\_/)\n(•ᴗ•)\n/ >♡',falas:['Quer dançar comigo?','Churros e pêssegos, sempre!','Guaraná Antarctica é vida!','Neon combina com tudo!','Achou algo perdido? Isso tem um significado!']},
 p2:{bg:'#13202A',papel:'#E9E7D0',tinta:'#1E2A1A',a:'#4E6B3A',b:'#FF4FA0',c:'#C9DB8C',f:'"VT323"',d:'◆',k:['⚽','♞'],r:'10px',sh:'5px 5px 0 rgba(0,0,0,.45)',tilt:'0deg',pat:'linear-gradient(rgba(201,219,140,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(201,219,140,.07) 1px,transparent 1px)',sz:'26px 26px',oi:'E aí!',oiEn:'Hey!',onda:1,mascote:'NOW PLAYING\n♪ sinal.mp3\n▮▮▮▮▯▯',falas:['Bora um xadrez?','Aceita um desafio? Tudo vira competição.','Hoje o cardápio é feijoada.','Cuidado com as aranhas!','Embaixadinha? Eu faço.']},
 p3:{bg:'#F5DDEB',papel:'#FFFDF3',tinta:'#4A1D42',a:'#C0508F',b:'#FFE27A',c:'#F1CDE2',f:'"DotGothic16"',d:'☆',k:['🎵','🎶'],r:'10px',sh:'3px 3px 0 var(--b)',tilt:'0deg',pat:'radial-gradient(rgba(192,80,143,.35) 1.6px,transparent 2px),repeating-linear-gradient(45deg,rgba(255,226,122,.35) 0 9px,transparent 9px 18px)',sz:'14px 14px,auto',mascote:'(˶ᵔ ᵕ ᵔ˶)\n ☁ ♡ ☁'},
 p4:{bg:'#EEE9FB',papel:'#FFFFFF',tinta:'#4B4468',a:'#B7A6E8',b:'#DCD1FA',c:'#E9E2FD',f:'"Playfair Display"',ff:'Georgia,"Times New Roman",serif',d:'✧',k:['✎'],r:'28px',sh:'0 0 26px rgba(183,166,232,.6)',tilt:'0deg',pat:'radial-gradient(circle at 18% 12%,rgba(183,166,232,.55),transparent 38%),radial-gradient(circle at 85% 40%,rgba(255,255,255,.95),transparent 42%),radial-gradient(circle at 30% 85%,rgba(214,200,250,.7),transparent 40%)',sz:'100% 100%',mascote:'(•_•)\n ✎____'},
 p5:{bg:'#111111',papel:'#FFFDF5',tinta:'#111111',a:'#C8102E',b:'#E6B422',c:'#F2D675',f:'"Rye"',d:'⚓',k:['🔥'],r:'0px',sh:'0 0 0 3px var(--b),7px 7px 0 3px var(--a)',tilt:'1.2deg',pat:'repeating-linear-gradient(-45deg,rgba(0,0,0,.55) 0 14px,transparent 14px 28px),repeating-linear-gradient(45deg,#C8102E 0 14px,#111 14px 28px)',sz:'auto',cpat:'repeating-linear-gradient(45deg,rgba(200,16,46,.3) 0 10px,transparent 10px 20px)',csz:'auto',mascote:'<(•o•)>\n ???'},
 p6:{bg:'#0F0F14',papel:'#FFFFFF',tinta:'#14141C',a:'#2447E0',b:'#FFB6D9',c:'#E3D7FF',f:'"UnifrakturCook"',ff:'Georgia,serif',d:'♱',k:['💀'],r:'6px',sh:'6px 6px 0 var(--a)',tilt:'0deg',pat:'radial-gradient(circle at 50% 0,rgba(36,71,224,.45),transparent 50%),radial-gradient(rgba(255,255,255,.17) 1.5px,transparent 2px)',sz:'100% 560px,22px 22px',mascote:'(｡•ᴗ•｡)\n ♱ ♡ ♱'}
};
const ONDA='<svg class="onda" viewBox="0 0 300 60" role="img" aria-label="Decoração: monitor de sinal"><rect width="300" height="60" fill="#25360F"/><g stroke="#3C5A2A"><path d="M0 15H300M0 30H300M0 45H300M50 0V60M100 0V60M150 0V60M200 0V60M250 0V60"/></g><polyline fill="none" stroke="#C6F26B" stroke-width="2" points="0,30 20,30 30,12 40,48 50,30 80,30 95,8 110,52 125,30 170,30 180,20 190,40 200,30 240,30 252,10 264,50 276,30 300,30"/></svg>';
let lang='en';try{const l=localStorage.getItem('lang');if(l==='pt'||l==='en')lang=l}catch(e){}
const UI={
en:{site:'My friends and I',sub:'the blog of six friends who shouldn’t have anything in common',marq:'✿ welcome to the blog ✿ every profile has its own look ✿ click the cards to meet each one ✿ sign the guestbook ✿',foot:'made with ♥ for the crew · visits in this browser:',profiles:'Profiles',home:'Home',hT:'Six friends. Six different worlds.',hS:'They shouldn’t have anything in common, but they’re always together. Meet each one and find out how that happened.',addImg:'Click to add an image of ',addAria:'Add image of ',soon:'Photo coming soon',ficha:'Profile sheet',noFicha:'The profile sheet hasn’t been filled in yet.',hist:'Story',grupo:'How they joined the crew',cur:'Fun facts',rels:'Relationships',livro:'Guestbook',gb1:'Leave a message for ',gb2:'! Messages are saved only in this browser.',gbN:'Your name',gbM:'Message',sign:'Sign',msgs:'Messages',anon:'anonymous',oiDef1:'Write the welcome message for ',oiDef2:', in the character’s voice.',visitor:'visitor number',likes:'I like…',full:'Full name:',age:'Age:',occ:'Occupation:',rmImg:'Back to the original illustration',talk:'Talk to the mascot',browse:'Browse characters',prev:'Previous: ',next:'Next: ',alt:'Chibi illustration of ',t_oi:'Hi!',t_ficha:'Profile sheet',t_historia:'Story',t_sobre:'About me',t_rels:'Relationships',t_livro:'Guestbook',btn:'Ler em português',btnA:'Traduzir o site para português'},
pt:{site:'Meus amigos e eu',sub:'o blog de seis amigos que não deveriam ter nada em comum',marq:'✿ bem-vindo ao blog ✿ cada perfil tem o seu próprio visual ✿ clique nas figurinhas ✿ deixe um recado no livro de visitas ✿',foot:'feito com ♥ para a turma · visitas neste navegador:',profiles:'Perfis',home:'Início',hT:'Seis amigos. Seis mundos diferentes.',hS:'Eles não deveriam ter nada em comum, mas estão sempre juntos. Conheça cada um e descubra como isso aconteceu.',addImg:'Clique para adicionar a imagem de ',addAria:'Adicionar imagem de ',soon:'Foto em breve',ficha:'Ficha',noFicha:'A ficha ainda não foi preenchida.',hist:'História',grupo:'Como entrou na turma',cur:'Curiosidades',rels:'Relações',livro:'Livro de visitas',gb1:'Deixe um recado para ',gb2:'! Os recados ficam salvos só neste navegador.',gbN:'Seu nome',gbM:'Recado',sign:'Assinar',msgs:'Recados',anon:'anônimo',oiDef1:'Escreva aqui a mensagem de boas-vindas de ',oiDef2:', na voz do personagem.',visitor:'visitante número',likes:'Gosto de…',full:'Nome completo:',age:'Idade:',occ:'Ocupação:',rmImg:'Voltar à ilustração original',talk:'Conversar com o mascote',browse:'Navegar entre personagens',prev:'Anterior: ',next:'Próximo: ',alt:'Ilustração chibi de ',t_oi:'Oi!',t_ficha:'Ficha',t_historia:'História',t_sobre:'Sobre mim',t_rels:'Relações',t_livro:'Livro de visitas',btn:'Read in English',btnA:'Translate the site to English'}
};
const u=k=>UI[lang][k];
const FALAS_EN={def:['Hi! Click me again.','This line is just an example.','Soon I’ll say something more like me!'],
p1:['Wanna dance with me?','Churros and peaches, always!','Guaraná Antarctica is life!','Neon goes with everything!','Found something lost? That means something!'],
p2:['Up for a game of chess?','Take a challenge? Everything’s a competition.','Today’s menu is feijoada.','Watch out for spiders!','Keepy-uppies? I can do that.']};
const falasDe=k=>lang==='en'?(FALAS_EN[k]||FALAS_EN.def):((TEMAS[k]||{}).falas||FALAS);
const EN_DEF={apelido:'Character’s full name',idade:'00 years old',ocupacao:'Occupation or what they do',frase:'A memorable quote from this character.',ficha:[],gostos:['Like 1','Like 2','Like 3','Like 4'],tituloDesgostos:'Can’t stand',desgostos:['Dislike 1','Dislike 2','Dislike 3'],historia:'Write the character’s story here: where they come from, what they’ve lived through and what drives them.\n\nSeparate paragraphs with a blank line.',grupo:'How and why did this character join the crew? Drop a hint, but save part of the story to spark curiosity.',secoes:[],curiosidades:['Fun fact 1','Fun fact 2','Fun fact 3'],oi:'',aviso:''};
const EN={
p1:{apelido:'Elizabeth Oliveira',idade:'11 to 17 years old',ocupacao:'Dancer',
 oi:'Hi!! I’m Liz, Brazilian with one foot in Mexico, and I dance to anything that plays! Ballet, samba, street dance… Make yourself at home, meet the crew and leave a message in the guestbook. ♡',
 frase:'“Mami wanted to raise a girl, but papi won and raised a lobster.”',
 ficha:[['Birthday','December 6th'],['Sign','Sagittarius'],['Origin','Half Brazilian, half Mexican'],['Ethnicity','Latina, parda (mixed)'],['Class','Middle class'],['Height','1.69 m (5 ft 5 in)'],['Blood type','B'],['MBTI','ESFP'],['Sexuality','Lesbian'],['Languages','Fluent in Brazilian Portuguese and Mexican Spanish, advanced English'],['Accent','Strong Brazilian accent'],['Voice','Very loud']],
 gostos:['Dancing','Singing','Cheering for whatever she’s watching','Getting philosophical','Dressing up and doing makeup','Bunnies','Churros','Peaches','Guaraná Antarctica','Any neon color'],
 tituloDesgostos:'Flaws',desgostos:['Can be ignorant','Judges what she doesn’t understand','Very stubborn'],
 secoes:[
  ['Look and style','Very long, straight hair with bangs, bright neon red with a few neon orange and pink stripes, all up in a ponytail with a neon pink bow. Her skin gets lighter in winter and darker in summer, and it’s naturally rough, so she uses lots of lotion. She has a rectangular, very athletic frame, bunny-like teeth that need braces, and minimal makeup, like lip gloss and mascara.\n\nHer outfits range from 80s-inspired party looks to butch outfits. A bunch of wristbands and keychains hang from her cargo pockets.'],
  ['Personality','She can tell very quickly when something is off or someone is feeling down, and she’s eager to help. She’s very empathetic, maybe too much: she believes even a bad person deserves at least one second chance. Her humor is absurdist and matches Louis’.\n\nWhen something ties to what she likes, she can focus hard and open tangents. Otherwise, she struggles to understand why she should care. She has ADHD. She learns best by watching others do things and adapts to new, complex situations like a chameleon.'],
  ['Talents','She can dance practically any style, knows ballet, samba and street dance best, and picks up new moves fast. She sings amazingly: she was asked to be the soprano of her school chorus, but chose to focus only on her dance career. She also has great hearing, recognizing any musical note and keeping a steady rhythm.'],
  ['Dream and philosophy','She wants to become a famous ballerina and dance in a Russian ballet company.\n\nTo her, waiting for stability is a luxury she doesn’t have, so she’d rather make messy progress than perfect plans that never start.'],
  ['What she keeps to herself','She wears a mask of being resilient and unaffected by her circumstances, the pillar that keeps everything, or rather everyone, from falling apart. That’s why she almost never lets herself be vulnerable, especially around others.\n\nWhat shames her most is when someone points out how childish she acts, when all she longs for is to go back to a certain period of time. She copes with humor and movement: jokes, silly videos, dancing and working out.']
 ],
 curiosidades:['She believes finding lost objects has a special meaning','She turned down being her school chorus soprano to focus on dance','She loves bunnies, and has bunny-like teeth'],
 relacoes:[
  {com:'Mavis',tag:'Best friend / future girlfriend??',texto:'Mavis is her comfort pillow, she feels as if she can finally quit being the sunshine around everyone and just settle down…'},
  {com:'Thomas',tag:'Friend!',texto:'She’s the first one who tried to make contact with him, and also was the one who insisted they should be friends. Thomas…'},
  {com:'Louis',tag:'Friendship',texto:'Their absurdist senses of humor match.'},
  {com:'Elle',tag:'Friendship',texto:'Part of the crew.'},
  {com:'Daniel',tag:'Family',texto:'Adopted brother and cousin.'},
  {com:'Dad',tag:'Family',texto:'Family.'}
 ]},
p2:{apelido:'Daniel Oliveira',idade:'11 to 17 years old',ocupacao:'Football player',
 oi:'Hey! I’m Daniel. I play ball, cook, and take on any chess challenge. This is my corner: come in, look around and leave a message in the guestbook.',
 frase:'“Everybody should help others, even when there’s nothing in it for them.”',
 aviso:'Content note: this story deals with grief and suicide.',
 historia:'He lost his aunt, Liz’s mother, to cancer. Some time later, his own mother took her own life and he was adopted by Liz’s dad.',
 ficha:[['Birthday','January 1st'],['Sign','Capricorn'],['Origin','Brazil'],['Ethnicity','Afro-Latino'],['Class','Lower-middle class'],['Height','1.73 m (5 ft 6 in)'],['Blood type','A'],['MBTI','ISTP'],['Sexuality','Confused bisexual'],['Disorder','PTSD'],['Languages','Brazilian Portuguese, Spanish and English'],['Accent','Strong Portuguese accent']],
 gostos:['Football','Tennis','Chess','Cards','Video games','Cooking','History','Geography','Music','Jaguars','Strogonoff','Feijoada','Passion fruit juice'],
 desgostos:['Cruelty','Unfairness','Ambiguity and chaos','Spiders'],
 secoes:[
  ['Look and style','Black, coily hair, mostly in dreadlocks and sometimes in finger locks. Slanted, light brown eyes, very soft skin and some freckles on his face. He’s muscular, especially his legs, from playing sports, mostly football.\n\nHis style is mid-80s to 90s-inspired streetwear. He wears a crucifix his dad gave him and a few golden beads, and his jacket is his comfort item.'],
  ['Personality','He has a deep sense of justice: he hates cruelty and unfairness and believes people should help others, even when they don’t benefit from it. He’s phlegmatic, persistent, calm, principled and reasonable, and a natural leader who leads through trust and respect.\n\nHe’s very empathetic and can’t understand people who aren’t. He’s analytical about his own and other people’s feelings, but when he’s hurt or grieving he can lash out at others and act without thinking. His humor is unfunny puns and political jokes. He learns by doing and weighs his options: if he doesn’t have much to lose, he dives in. He has no tolerance for ambiguity.'],
  ['Talents and interests','He cooks, does hair (coloring, styling, cutting) and cosplays. He’s into history, geography, sports (physical and intellectual), cooking and music. He can do keepy-uppies, learns fast through trial and error, and handles basic house repairs.\n\nHe uses technology mostly for gaming. When online games became a thing he found them very innovative, but he doesn’t use it for much else.'],
  ['Dream and philosophy','He wants to play for the Brazilian national team and win a World Cup at least once in his life. He’s always striving to be the best he can be in any situation.\n\nHe believes life has no point or meaning, which is why he turns everything into a competition: it gives him a reason, even if just for a brief moment, to live.'],
  ['What he keeps to himself','He carries guilt over his mother’s death. He feels ashamed when someone mentions his trauma, and when he’s reminded how powerless he is before the imposing and unstoppable force of destiny.\n\nHe wants to meet new people but is deathly afraid of what comes if he loses them. His biggest fears are losing the people he loves, not getting better at things he likes, spiders and Louis. He copes by playing video games or chess until he passes out from exhaustion.']
 ],
 curiosidades:['He can do keepy-uppies','A strange old lady read his fortune in the cards and predicted something terrible on a certain day. He spent every day leading up to it terrified and, when the day came, didn’t even leave his house. The terrible thing was a pregnant spider in his backyard','He wouldn’t cheat even in an offline mobile puzzle game','Favorite animal: jaguar'],
 relacoes:[
  {com:'Liz',tag:'Family',texto:'Adopted sister and cousin. Her mother was Daniel’s aunt.'},
  {com:'Liz’s dad',tag:'Family',texto:'Adopted father and uncle, the man who adopted him.'},
  {com:'Mavis',tag:'Friendship',texto:'They cook recipes together.'},
  {com:'Thomas',tag:'Friendship',texto:'They play chess and cook recipes together.'},
  {com:'Elle',tag:'Friendship',texto:'They play tennis together.'},
  {com:'Louis',tag:'Complicated friendship',texto:'They play chess and cards together, but Daniel can’t handle Louis’ ambiguity and chaos.'}
 ]}
};
function D(p){if(lang!=='en')return p;const e=EN[p.id],o=Object.assign({},p,EN_DEF,e||{});if(!(e&&e.relacoes))o.relacoes=p.relacoes.map(r=>({com:r.com,texto:'How they get along with this friend from the crew.'}));return o}
function estatico(k){document.documentElement.lang=lang==='en'?'en':'pt-BR';
 const T=TEMAS[k]||TEMAS.home,m=$('#marca');m.setAttribute('aria-label',u('site'));if(k==='p5')m.innerHTML='<span class="rn">'+[...u('site')].map(c=>c===' '?' ':'<span>'+esc(c)+'</span>').join('')+'</span>';else m.textContent=T.d+' '+u('site')+' '+T.d;$('#sub').textContent=u('sub');$('#marq').textContent=u('marq');$('#rod').textContent=u('foot');$('#menu').setAttribute('aria-label',u('profiles'));
 const b=$('#lang');b.textContent=u('btn');b.setAttribute('aria-label',u('btnA'));b.setAttribute('lang',lang==='en'?'pt-BR':'en')}
const FALAS=['Oi! Clique em mim de novo.','Esta fala é só um exemplo.','Em breve vou dizer algo mais a minha cara!'];
const ABAS=[['oi','Oi!'],['ficha','Ficha'],['historia','História'],['sobre','Sobre mim'],['rels','Relações'],['livro','Livro de visitas']];
let aba='oi',fi=0,pag='';
function tema(k){const t=TEMAS[k]||TEMAS.home,s=document.documentElement.style;document.documentElement.dataset.t=k;
 [['--bg',t.bg],['--papel',t.papel],['--tinta',t.tinta],['--a',t.a],['--b',t.b],['--c',t.c],['--f',t.f+','+(t.ff||'Verdana,sans-serif')],['--r',t.r],['--sh',t.sh],['--tilt',t.tilt],['--pat',t.pat],['--sz',t.sz]].forEach(v=>s.setProperty(v[0],v[1]))}
const orn=d=>'<div class="orn" aria-hidden="true">'+d.repeat(40)+'</div>';
const chips=a=>'<ul class="chips">'+a.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>';
const caixa=(t,c)=>'<section class="caixa"><h2>'+esc(t)+'</h2>'+c+'</section>';
function gbLer(id){try{return JSON.parse(localStorage.getItem('gb:'+id))||[]}catch(e){return []}}
function foto(p,ed){
  const src=fonte(p),ch=src===p.imagem;
  const c=src?'<img src="'+esc(src)+'" alt="'+u('alt')+esc(p.nome)+'" loading="lazy" decoding="async" width="400" height="400">':'<span class="vazio">'+(ed?u('addImg')+esc(p.nome):u('soon'))+'</span>';
  const inp=ed?'<input type="file" accept="image/*" data-id="'+p.id+'" aria-label="'+u('addAria')+esc(p.nome)+'">':'';
  return '<div class="foto'+(src?' tem':'')+(ch?' chibi':'')+'" style="--c:'+p.cor+'">'+c+inp+'</div>';
}
function home(){
  document.title=u('site');
  $('#app').innerHTML='<section class="caixa boas"><h2>'+u('hT')+'</h2><p>'+u('hS')+'</p></section><div class="grade">'+
  PERSONAGENS.map(p0=>{const p=D(p0),t=TEMAS[p.id];return '<a class="card" href="#'+p.id+'" style="--a:'+t.a+';--b:'+t.b+';--papel:'+t.papel+';--tinta:'+t.tinta+';--r:'+t.r+';--sh:'+t.sh+';--pat:'+(t.cpat||t.pat)+';--sz:'+(t.csz||t.sz)+'">'+foto(p,false)+'<h2 style="font-family:'+t.f+','+(t.ff||'Verdana,sans-serif')+'">'+esc(p.nome)+'</h2><p>'+esc(p.apelido)+'</p></a>'}).join('')+'</div>';
}
function conteudo(p,t){
  if(aba==='ficha')return caixa(u('ficha'),p.ficha.length?'<dl class="ficha">'+p.ficha.map(f=>'<div><dt>'+esc(f[0])+'</dt><dd>'+esc(f[1])+'</dd></div>').join('')+'</dl>':'<p>'+u('noFicha')+'</p>');
  if(aba==='historia')return caixa(u('hist'),(p.aviso?'<p class="aviso">'+esc(p.aviso)+'</p>':'')+'<p class="texto">'+esc(p.historia)+'</p>')+caixa(u('grupo'),'<p class="texto">'+esc(p.grupo)+'</p>');
  if(aba==='sobre')return p.secoes.map(s=>caixa(s[0],'<p class="texto">'+esc(s[1])+'</p>')).join('')+caixa(u('cur'),'<ul class="lista">'+p.curiosidades.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>');
  if(aba==='rels')return caixa(u('rels'),'<ul class="rels">'+p.relacoes.map(r=>{const o=porId(r.com)||PERSONAGENS.find(x=>x.nome===r.com),n=o?o.nome:r.com;
    return '<li style="--cc:'+(o?o.cor:p.cor)+'"><div class="av" aria-hidden="true">'+esc(n.charAt(0))+'</div><div><b>'+(o?'<a href="#'+o.id+'">'+esc(n)+'</a>':esc(n))+'</b>'+(r.tag?'<span class="tag">'+esc(r.tag)+'</span>':'')+'<p>'+esc(r.texto)+'</p></div></li>'}).join('')+'</ul>');
  if(aba==='livro'){const L=gbLer(p.id);
    return caixa(u('livro'),'<p class="info">'+u('gb1')+esc(p.nome)+u('gb2')+'</p><label class="gl">'+u('gbN')+'<input id="gbn" maxlength="30"></label><label class="gl">'+u('gbM')+'<textarea id="gbm" rows="3" maxlength="300"></textarea></label><button class="bt" style="width:auto" type="button" data-assinar="'+p.id+'">'+u('sign')+'</button>')+
    (L.length?caixa(u('msgs'),'<ul class="gb">'+L.map(x=>'<li><b>'+esc(x.n)+'</b> <span class="info">'+esc(x.d)+'</span><br>'+esc(x.m)+'</li>').join('')+'</ul>'):'')}
  return '<section class="caixa">'+(t.onda?ONDA:'')+'<div class="hello" aria-hidden="true">'+(lang==='en'?(t.oiEn||'Hi!!'):(t.oi||'Oi!!'))+'</div><p>'+esc(p.oi||u('oiDef1')+p.nome+u('oiDef2'))+'</p><blockquote class="frase">'+esc(p.frase)+'</blockquote>'+orn(t.d)+'<p class="info">'+u('visitor')+' <span class="num">'+String(vis).padStart(4,'0')+'</span></p></section>'+
    caixa(u('likes'),chips(p.gostos))+caixa(p.tituloDesgostos,chips(p.desgostos));
}
function perfil(p,i){p=D(p);
  document.title=p.nome+' | '+u('site');
  const t=TEMAS[p.id],F=falasDe(p.id),ant=PERSONAGENS[(i+5)%6],prox=PERSONAGENS[(i+1)%6];
  const esq='<div class="esq"><div class="caixa"><figure class="polaroid">'+foto(p,true)+'</figure><h1 class="nomeh">'+esc(p.nome)+'</h1>'+orn(t.d)+'<p class="info"><b>'+u('full')+'</b> '+esc(p.apelido)+'<br><b>'+u('age')+'</b> '+esc(p.idade)+'<br><b>'+u('occ')+'</b> '+esc(p.ocupacao)+'</p>'+(imgs[p.id]?'<button class="rm" type="button" data-remover="'+p.id+'">'+u('rmImg')+'</button>':'')+'</div></div>';
  const dir='<div class="dir"><div class="caixa">'+orn(t.d)+'<div class="abas">'+ABAS.map(a=>'<button class="bt" type="button" data-aba="'+a[0]+'" aria-pressed="'+(a[0]===aba)+'">'+t.d+' '+u('t_'+a[0])+'</button>').join('')+'</div>'+orn(t.d)+'<button class="mascote" type="button" data-mascote aria-label="'+u('talk')+'">'+esc(t.mascote)+'</button><div class="fala" aria-live="polite">'+esc(F[fi%F.length])+'</div></div></div>';
  $('#app').innerHTML='<div class="tres">'+esq+'<div class="centro">'+conteudo(p,t)+'</div>'+dir+'</div><nav class="nav" aria-label="'+u('browse')+'"><a class="btn" href="#'+ant.id+'">'+u('prev')+esc(ant.nome)+'</a><a class="btn" href="#'+prox.id+'">'+u('next')+esc(prox.nome)+'</a></nav>';
}
function route(){
  const id=location.hash.slice(1),i=PERSONAGENS.findIndex(p=>p.id===id),k=i<0?'home':id;
  if(k!==pag){pag=k;aba='oi';fi=0}
  tema(k);estatico(k);
  if(i<0)home();else perfil(PERSONAGENS[i],i);
  const pill=(h,n,t,cur)=>'<a href="'+h+'" style="--k:'+t.c+';--kb:'+t.a+'"'+(cur?' aria-current="page"':'')+'>'+esc(n)+'</a>';
  $('#menu').innerHTML=pill('#inicio',u('home'),TEMAS.home,i<0)+PERSONAGENS.map(p=>pill('#'+p.id,p.nome,TEMAS[p.id],p.id===id)).join('');
}

function salvar(id,file){
  const r=new FileReader();
  r.onload=()=>{const im=new Image();im.onload=()=>{
    const s=Math.min(1,900/Math.max(im.width,im.height)),c=document.createElement('canvas');
    c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);
    c.getContext('2d').drawImage(im,0,0,c.width,c.height);
    const u=c.toDataURL('image/jpeg',.85);imgs[id]=u;
    try{localStorage.setItem('img:'+id,u)}catch(e){}
    route();
  };im.src=r.result};
  r.readAsDataURL(file);
}
document.addEventListener('change',e=>{const t=e.target;if(t.matches('input[type=file][data-id]')&&t.files[0])salvar(t.dataset.id,t.files[0])});
document.addEventListener('click',e=>{const b=e.target.closest('[data-remover]');if(!b)return;const id=b.dataset.remover;delete imgs[id];try{localStorage.removeItem('img:'+id)}catch(x){}route()});
window.addEventListener('hashchange',()=>{route();window.scrollTo(0,0)});
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-aba],[data-mascote],[data-assinar],[data-lang]');
  if(t&&t.hasAttribute('data-lang')){lang=lang==='en'?'pt':'en';try{localStorage.setItem('lang',lang)}catch(x){}route()}
  else if(t&&t.dataset.aba){aba=t.dataset.aba;route();if(matchMedia('(max-width:860px)').matches)document.querySelector('.centro').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'})}
  else if(t&&t.hasAttribute('data-mascote')){const F=falasDe(pag);fi=(fi+1)%F.length;document.querySelector('.fala').textContent=F[fi]}
  else if(t&&t.dataset.assinar){const m=$('#gbm').value.trim();if(m){const L=gbLer(t.dataset.assinar);L.unshift({n:$('#gbn').value.trim()||u('anon'),m:m,d:new Date().toLocaleDateString(lang==='en'?'en-US':'pt-BR')});try{localStorage.setItem('gb:'+t.dataset.assinar,JSON.stringify(L.slice(0,30)))}catch(x){}route()}}
  if(!matchMedia('(prefers-reduced-motion:reduce)').matches){const b=document.createElement('span');b.className='brilho';b.setAttribute('aria-hidden','true');const Q=TEMAS[pag]||TEMAS.home,K=Q.k||[Q.d];b.textContent=K[Math.floor(Math.random()*K.length)];b.style.left=e.clientX+'px';b.style.top=e.clientY+'px';document.body.appendChild(b);setTimeout(()=>b.remove(),800)}
});
let vis=1;try{vis=(+localStorage.getItem('visitas')||0)+1;localStorage.setItem('visitas',vis)}catch(e){}
$('#visitas').textContent=String(vis).padStart(4,'0');
route();

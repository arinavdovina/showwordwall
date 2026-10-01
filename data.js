const GAMES=[
['match','Найди пару','Animal voices','Match up','6–8','A1','Animals',9,3,'cat|↔|meow'],
['quiz','Викторина','A day at school','Quiz','9–12','A1','Daily routines',10,9,'A|B|C'],
['gap','Пропущенное слово','Life online','Missing word','13–17','A2','Present simple',13,12,'I|___|online'],
['order','Собери предложение','At the café','Unjumble','18+','A2','Polite requests',10,5,'could|I|have'],
['sort','Распредели по группам','Snack or animal?','Group sort','6–8','A1','Food & animals',2,3,'Food|Animals'],
['memory','Найди совпадения','Opposite twins','Matching pairs','9–12','A1','Opposites',11,1,'?|?|?'],
['anagram','Анаграмма','Weekend plans','Anagram','13–17','A2','Activities',4,4,'T|R|A|V|E|L'],
['truefalse','Правда или ложь','Work words','True or false','18+','B1','Work vocabulary',13,12,'True|False'],
['wheel','Колесо тем','My little world','Random wheel','6–8','A1','Speaking',9,3,'↻|Talk!'],
['cards','Разговорные карточки','Would you rather?','Speaking cards','13–17','B1','Speaking',11,1,'Tell|me|why'],
['boxes','Открой коробку','Secret missions','Open the box','9–12','A1','Questions',4,4,'1|2|3'],
['flashcards','Флеш-карточки','Travel essentials','Flash cards','18+','A2','Travel',10,5,'word|↔|meaning'],
['type','Напечатай ответ','Animal detective','Type the answer','6–8','A1','Animals',9,3,'c|a|t'],
['wordsearch','Поиск слов','Nature hunt','Wordsearch','9–12','A1','Nature',9,5,'T|R|E|E'],
['crossword','Кроссворд','Tiny word puzzle','Crossword','9–12','A1','Everyday words',2,1,'C|A|T'],
['rank','Верный порядок','The perfect email','Rank order','18+','B1','Email structure',13,12,'1|2|3'],
['find','Найдите ответ','Meaning matters','Find the match','13–17','B1','Adjectives',11,1,'clue|✓'],
['gameshow','Игровое шоу','Big ideas quiz','Gameshow quiz','13–17','B1','Science & language',4,4,'100|200|300'],
['maze','Лабиринт','Find the colour','Maze chase','6–8','A1','Colours',9,3,'S|▥|A'],
['airplane','Самолёт','Fly to the verb','Airplane','9–12','A2','Past simple',4,4,'flew|fly'],
['whack','Поймай верное','Verb pop!','Whack-a-mole','9–12','A1','Parts of speech',2,1,'run|hat|jump'],
['balloon','Воздушные шары','Noun balloons','Balloon pop','6–8','A1','Food',11,3,'apple|ball'],
['hangman','Угадайте слово','Mystery job','Hangman','13–17','A2','Jobs',13,12,'_|_|_|_'],
['imagequiz','Узнайте картинку','Fruit detective','Image quiz','6–8','A1','Fruit',10,9,'🍋|?'],
['diagram','Подпишите схему','Around town','Labelled diagram','9–12','A2','Places in town',10,5,'A|B|C|D'],
['watch','Смотрите и запоминайте','The memory tray','Watch and memorize','6–8','A1','School objects',11,3,'look|remember'],
['speed','Быстрая сортировка','Fact or opinion?','Speed sorting','13–17','B1','Critical reading',13,12,'Fact|Opinion'],
['spell','Правописание','Confusing words','Spell the word','18+','B1','Spelling',2,1,'r|e|c|e|i|v|e'],
['riskquiz','Раунд на очки','Choose your challenge','Win or lose quiz','18+','B2','Grammar',4,12,'100|200|300'],
['pairno','Пара или не пара','Do they go together?','Pair or no pair','18+','B1','Collocations',11,5,'make|a decision']
].map(([id,name,en,mechanic,age,level,topic,bg,hero,mini])=>({id,name,en,mechanic,age,level,topic,bg,hero,mini:mini.split('|').map(t=>`<b>${t}</b>`).join('')}));
const QUESTIONS={
quiz:[['I ___ my homework after school.','do',['do','make','go'],'We say “do homework”.'],['She ___ breakfast at seven.','has',['has','have','do'],'Use “has” with she.'],['We go to school ___ Monday.','on',['on','in','at'],'Use “on” with days.'],['Which is a school subject?','science',['science','sandwich','bedroom'],'Science is a subject.']],
gap:[['My brother ___ videos every evening.','watches',['watch','watches','watching'],'He / she / it: add -s or -es.'],['I ___ use my phone during lessons.','do not',['does not','do not','am not'],'Use “do not” with I.'],['___ you play games online?','Do',['Do','Does','Are'],'Use “Do you…?” with an action verb.'],['She ___ her password with anyone.','does not share',['do not share','does not shares','does not share'],'After “does not”, use the base form.']],
truefalse:[['A deadline is the latest time to finish something.',true],['A colleague is a person you work with.',true],['To postpone a meeting means to hold it earlier.',false],['A part-time job always takes 40 hours a week.',false]],
find:[['Someone who keeps trying, even when something is difficult.','determined',['careless','determined','shy','ordinary'],'Determined people do not give up easily.'],['Something you can trust to work well.','reliable',['reliable','noisy','rude','ancient'],'Reliable means dependable.'],['Someone who likes giving or sharing.','generous',['jealous','generous','nervous','lazy'],'Generous people give willingly.']],
gameshow:[['If we heat ice, it ___.','melts',['melts','will melted','melted'],'Zero conditional: present + present.'],['Solar energy comes from the ___.','sun',['moon','sun','wind'],'Solar means related to the sun.'],['A person who studies science is a ___.','scientist',['scientific','science','scientist'],'A scientist is a person.']],
imagequiz:[['🍋','lemon',['lemon','orange','pear'],'A lemon is usually yellow.'],['🍓','strawberry',['cherry','strawberry','apple'],'A strawberry has tiny seeds on its surface.'],['🍍','pineapple',['pineapple','banana','peach'],'A pineapple has a spiky crown.']],
pairno:[['make','a decision',true],['do','a mistake',false],['take','a break',true],['make','homework',false],['pay','attention',true]],
};
const PAIRS={match:[['cat','meow'],['dog','woof'],['cow','moo'],['duck','quack']],memory:[['hot','cold'],['big','small'],['fast','slow'],['happy','sad']]};
const SPEAK={wheel:['Name three colours.','Talk about your favourite animal.','What food do you like?','Name two things in your bag.','What can you do?','Describe your family.'],cards:['Would you rather explore space or the ocean? Why?','Would you rather live without music or without films? Explain.','Would you rather travel to the past or the future?','Would you rather work alone or in a team? Give an example.']};
const WRITE={type:[['I say “meow”.','cat'],['I have a long trunk.','elephant'],['I can swim and say “quack”.','duck']],anagram:[['Visit new places','travel'],['Move to music','dance'],['Prepare food','cook']],spell:[['To get something: “I hope to ___ your email.”','receive'],['A place to stay on holiday: “We booked our ___.”','accommodation'],['Needed or essential: “Is a passport ___?”','necessary']]};

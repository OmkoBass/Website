const language = document.getElementById('language');

let home = document.getElementById('home');
let oet = document.getElementById('oet');
let prog = document.getElementById('prog');
let mech = document.getElementById('mech');
let resources = document.getElementById('resources');
let main = document.getElementById('main');
let toknowheader = document.getElementById('toknowheader');
let toknowtext = document.getElementById('toknowtext');
let mostpayed = document.getElementById('mostpayed');
let programminglanguage = document.getElementById('programminglanguage');
let salary = document.getElementById('salary');
let thinkingheader = document.getElementById('thinkingheader');
let thinkingtext = document.getElementById('thinkingtext');
let pointerheader = document.getElementById('pointerheader');
let pointertext = document.getElementById('pointertext');
let kingimg = document.getElementById('kingimg');
let importantpeople = document.getElementById('importantpeople');
let ritchietext = document.getElementById('ritchietext');
let linustext = document.getElementById('linustext');
let linuxwhy = document.getElementById('linuxwhy');
let linuxp1 = document.getElementById('linuxp1');
let linuxp2 = document.getElementById('linuxp2');
let linuxp3 = document.getElementById('linuxp3');
let linuxp4 = document.getElementById('linuxp4');


let english = true;

function changeLanguage()
{
    if(english)
    {
        home.innerHTML = 'Home';
        oet.innerHTML = 'Electrical Engineering';
        prog.innerHTML = 'Programming';
        mech.innerHTML = 'Mechanical Engineering';
        resources.innerHTML = 'Resources';
        main.innerHTML = 'PROGRAMMING';
        toknowheader.innerHTML = 'What you need to know';
        toknowtext.innerHTML = `In order to be a good programmer you need a fine tuned logical unit in your brain. <br>
        Efficient thinking seperates a coder from a programmer.`;
        programminglanguage.innerHTML = 'Programming Languages';
        mostpayed.innerHTML = 'Most payed programming languages'
        salary.innerHTML = 'Salary';
        thinkingheader.innerHTML = 'Thinking';
        thinkingtext.innerHTML = `It's all about thinking. Knowing the syntax and keeping up to date with new technologies is a huge plus but without knowing the low level stuff, without efficiency, without comprehension of the core aspect a programmer is nothing and easily replacable.`;
        pointerheader.innerHTML = 'Pointers are easy and fun';
        pointertext.innerHTML = `Most people start with the C programming language, which is for the best. <br>
        C is a low level language, which means that it doesn't have many already implemented things that make our lives easier. <br>
        That sounds bad but it's not bad att all. That means that we can shape stuff on our own terms and to learn in the process of doing so.`;
        kingimg.innerHTML = 'The king of all programming languages';
        importantpeople.innerHTML = 'Very Important People';
        ritchietext.innerHTML = 'American scientist that graduated physics and math from Harvard. The creator of the C programming language and the operating system UNIX. C is today still the fastest programming language and UNIX is also the fastest operating system. A Legend in the programming world.';
        linustext.innerHTML = `Software engineer from Finland that created the Linux operating system, the best operating system of our times.`;
        linuxwhy.innerHTML = 'Why Linux?';
        linuxp1.innerHTML = `Because it's open source. Linux is totally open source which means that you can do with it whatever you want. <br>
        You can also contribute to Linux and help out other people by upating or implementing new stuff.`;
        linuxp2.innerHTML = `Becuase it's safe. Widnows is full of exploits that people use to harm your PC. There's lot's of forced updates by Windows that fix a new exploit. <br>
        Linux is not invulnerable to this stuff but it's 100 times more safe than Windows.`;
        linuxp3.innerHTML = `Because it's fast. Linux can revive an old PC so much that it's not recognizable, it doesn't force anything on your and it has a much better privacy.`;
        linuxp4.innerHTML = `Because it's the best system for programmers. Linux supports all the popular and important programming languages, on Linux there's no problems about finding a compiler and other time-wasting problems. <br>
        From the first startup you can write, compile and run a huge ammount of languages.`;

        english = false;
    }
    else
    {
        home.innerHTML = 'Početna';
        oet.innerHTML = 'Elektrotehnika';
        prog.innerHTML = 'Programiranje';
        mech.innerHTML = 'Mašinstvo';
        resources.innerHTML = 'Resursi';
        main.innerHTML = 'PROGRAMIRANJE';
        toknowheader.innerHTML = 'Šta treba da znate';
        toknowtext.innerHTML = `Za programiranje je potrebna izvrsna matematičko-logička jedinica. <br>
        Efikasno razmisljanje razdvaja kodera or pravog programera.`;
        mostpayed.innerHTML = 'Najplaćeniji programski jezici';
        programminglanguage.innerHTML = 'Programski Jezik';
        salary.innerHTML = 'Plata';
        thinkingheader.innerHTML = 'Razmišljanje';
        thinkingtext.innerHTML = `Sve se vrti oko razmišljanja. Poznavanje sintakse i novih tehnologija je veliki plus ali bez poznavanja "low-level" stvari, bez efikasnosti, bez razumevanja funkcionisanja koda programer je beskoristan i lako zamenljiv.`;
        pointerheader.innerHTML = 'Pokazivači su laki i intersantni';
        pointertext.innerHTML = `Većina ljudi počinje sa programskim jezikom C, što je i najbolje. <br>
        C je "low-level" jezik, što znači da on nema dosta već implementiranih stvari koje nam olakšavaju život. <br>
        To zvuči loše al' nije ni malo. To znači da mi možemo sami da oblikujemo stvari kako je nama zgodno i da naučimo usput.`;
        kingimg.innerHTML = 'Kralj svih jezika';
        importantpeople.innerHTML = 'Mnogo bitni ljudi';
        ritchietext.innerHTML = `Američki naučnik koji je diplomirao fiziku i matematiku na Harvardu. Tvorac programskog jezika C i operativnog sistema UNIX. C je dan danas najbrži programskih jezik a UNIX isto najbrži operativni sistem. Legenda programerskog sveta.`;
        linustext.innerHTML = `Softverski inženjer iz Finske koji je stvorio Linux operativni sistem, najbolji operativni sistem današnjice.`;
        linuxwhy.innerHTML = 'Što Linux?';
        linuxp1.innerHTML = `Zato što je open source, linux je totalno open source projekat što znači da možete da radite sa njim šta god hoćete, menjate i gledate kako to radi. <br>
        Možete i da doprinesete Linux operativnom sistemu tako sto ćete ga nadograditi.`;
        linuxp2.innerHTML = `Zato što je bezbedan. Windows je pun exploita koje ljudi koriste da vam oštete računar. Svaki put dolaze prisilna ažuriranja koja popravljaju neki novi exploit. <br>
        Linux nije otporan na apsolutno sve ali je MNOGO bezbedniji od Windowsa.`;
        linuxp3.innerHTML = `Zato što je brz. Linux može stari računar da oživi toliko da se taj računar ne prepoznaje, ne prisiljava vas ni na šta i ima izuzetno bolju privatnost.`;
        linuxp4.innerHTML = `Zato što je najbolji sistem za programere. Linux podržava sve popularne i bitne programske jezike, na Linux-u nema problema oko nalazenja kompajlera i ostalog. <br>
        Od prvog paljenja računara možete da pišete, kompajlujete i pokrenete veliku većinu jezika.`;

        english = true;
    }
}

function appear()
{
    let toKnowText = document.querySelector('.toknow-text');
    let toKnowPosition = toKnowText.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.4;

    if(toKnowPosition < screenPosition)
        toKnowText.classList.add('appear');
    if(toKnowPosition > screenPosition * 1.4)
        toKnowText.classList.remove('appear');
}

window.addEventListener('load', () => {
    scroll(0,0);
    setTimeout(() => {
        const preload = document.querySelector('.preload');
        preload.classList.add('loaded');
        const overflow = document.querySelector('*');
        overflow.classList.add('overflowadded');
    }, 250);
});

changeLanguage();
language.addEventListener('click', changeLanguage);
window.addEventListener('scroll', appear);
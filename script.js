'use strict';
// Notre univers : site statique, autonome, sans collecte de données.
const translations = {
  navStory:'Our story',navPhotos:'Our photos',navWords:'Little things',navLetter:'My letter',musicOn:'Music',
  heroEyebrow:'A LITTLE WEBSITE FOR MY BIGGEST LOVE',heroTitleOne:'My wife.',heroTitleTwo:'My person.',heroTitleThree:'My forever.',
  heroDesc:'Of all the stories life could have written, my favorite is the one where I find you, again and again.',
  seeMemories:'Explore our memories',readLetter:'Read my letter',heroSignature:'For Ariana, with all my love.<br>— Saifeddine',sticker:'you, me, us',scroll:'Scroll to discover',
  chapterStory:'OUR STORY',storyTitle:'Some encounters become <em>an entire lifetime.</em>',
  storyP1:'At first, there were two lives, two worlds, and that strange feeling: somewhere, someone was about to become everything.',
  storyP2:'Then the messages, the laughter, the simple moments and the promises found their way. Until one day, “you and me” became <strong>“us”.</strong>',
  storyP3:'Today, I no longer just dream about our future. I get to live it with you.',stamp1:'Two horizons',stamp2:'One story',
  journeyLabel:'A LITTLE ANIMATION FROM OUR FIRST WEBSITE',journeyTitle:'From two paths to <em>one beautiful us.</em>',journeyDesc:'Distance never got the last word. Love found its own: together.',journeyBtn:'Let our hearts travel',journeyHint:'A little symbolic journey…',journeyDone:'Arrived at our forever ♡',journeyFrom:'Where the story began',journeyTo:'Where our hearts meet',
  chapterPhotos:'OUR LITTLE UNIVERSE',galleryTitle:'Photos. Smiles. <em>Everything we love.</em>',galleryDesc:'No need for perfect captions. Every picture belongs here simply because it is part of us.',photoCount:'PHOTOS<br>TO EXPLORE',galleryBottom:'Even the simplest moments become precious when they are ours.',
  chapterWords:'THE LITTLE THINGS',promiseTitle:'Love is also about <em>every single day.</em>',promiseDesc:'Not just the big moments. All the small ones, especially.',
  promise1T:'More laughter, always.',promise1P:'For the bright days, the ordinary days, and the days when we need to find our smiles again.',
  promise2T:'More tenderness.',promise2P:'In our words, our silences, and the little gestures that say “I love you” without a sound.',
  promise3T:'More of us.',promise3P:'We do not need a perfect world as long as we keep choosing our favorite team: us.',
  ourSoundtrack:'OUR SOUNDTRACK',soundTitle:'A melody for <em>our forever.</em>',soundDesc:'A little tune to accompany our own little universe.',playerSong:'Our melody ♡',softWords:'SOFT WORDS',newQuote:'Another sweet thought',
  chapterLetter:'A LETTER FOR YOU',letterTitle:'Some feelings deserve <em>to be written down.</em>',letterDesc:'I saved a few words just for you. You can open this envelope whenever you want.',letterTiny:'FROM SAIFEDDINE · FOR ARIANA',envelopeHint:'Tap to open my letter ↗',
  funEyebrow:'A LITTLE LOVE, A LOT OF SMILES',funTitle:'Would you choose me <em>again?</em>',funDesc:'A very serious question with two excellent answers.',chooseYes:'Yes, forever ♡',chooseAlways:'Obviously!',funSticker:'ALWAYS, AGAIN AND AGAIN',funAnswer:'I would choose you in every lifetime. ♡',
  finalEyebrow:'THE BEST CHAPTER IS THE ONE WE ARE LIVING',finalTitle:'In a thousand lives,<br>I would <em>choose you</em><br>a thousand times.',finalDesc:'Thank you for being my wife, my love, and my favorite place in this world.',finalSign:'I love you, Ariana.<br><span>Forever yours, Saifeddine ♡</span>',surpriseBtn:'One last surprise',footerText:'A little website, made with an enormous amount of love.',backTop:'Back to the beginning ↑',lightboxCaption:'One memory among so many ♡',
  paperOverline:'A LETTER TO READ WHENEVER YOU WANT',paperTitle:'My Ariana,',
  paperP1:'If I could stop time for a moment, it would be just to look at you and remember how lucky I am that our paths found each other.',
  paperP2:'I love the big things we dream of building, but I love the little ones just as much: an unexpected laugh, a conversation that never ends, the peace of simply being near you.',
  paperP3:'I cannot promise that every day will be perfect. I promise something that matters more: to keep loving you with patience, respect, tenderness, and the desire to make our story a beautiful place to live.',
  paperP4:'You are no longer only the person I hoped to see again. You are my wife, my present, and the person with whom I want to invent every tomorrow.',
  paperP5:'And if I could begin all over, I would choose the road that brings me to you every single time.',paperSignature:'Your husband, forever',
};
const originals = new Map();
document.querySelectorAll('[data-t]').forEach(el => { if (!originals.has(el.dataset.t)) originals.set(el.dataset.t, el.innerHTML); });
let language = 'fr';
const quoteSets = {
  fr:[
    '« Tu es ma pensée préférée, même dans les journées les plus remplies. »',
    '« Le plus beau mot du monde, c’est nous. »',
    '« Avec toi, les jours ordinaires deviennent mes préférés. »',
    '« Il y a mille façons de dire je t’aime. Je veux toutes les apprendre avec toi. »',
    '« Mon endroit préféré n’est pas un lieu. C’est près de toi. »',
    '« Ce que j’aime le plus de demain, c’est que tu en fais partie. »',
    '« Je te choisirai les jours faciles et les jours moins simples. »',
  ],
  en:[
    '“You are my favorite thought, even on the busiest days.”',
    '“The most beautiful word in the world is us.”',
    '“With you, ordinary days become my favorite ones.”',
    '“There are a thousand ways to say I love you. I want to learn them all with you.”',
    '“My favorite place is not a place. It is next to you.”',
    '“The best thing about tomorrow is that you are in it.”',
    '“I will choose you on the easy days and the difficult ones.”',
  ]
};
let quoteIndex=0;
const $ = id => document.getElementById(id);
function translate(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang=language;
  document.title=language==='fr'?'Ariana & Saifeddine — Pour toujours ♡':'Ariana & Saifeddine — Forever ♡';
  document.querySelectorAll('[data-t]').forEach(el => { const key=el.dataset.t; el.innerHTML=language==='en' && translations[key]!==undefined ? translations[key] : originals.get(key) || ''; });
  $('langIndicator').textContent=language==='fr'?'EN':'FR';
  $('langBtn').setAttribute('aria-label',language==='fr'?'Switch to English':'Passer en français');
  $('quoteText').textContent=quoteSets[language][quoteIndex];
  document.querySelectorAll('.memory').forEach((el,index)=>{el.setAttribute('aria-label',(language==='fr'?'Ouvrir le souvenir ':'Open memory ')+(index+1)); el.querySelector('img').alt=(language==='fr'?'Souvenir personnel ':'Personal memory ')+(index+1);});
  $('menuBtn').setAttribute('aria-label',language==='fr'?'Ouvrir le menu':'Open menu');
  $('soundBtn').setAttribute('aria-label',language==='fr'?'Lancer ou arrêter la musique':'Play or pause music');
  $('envelopeBtn').setAttribute('aria-label',language==='fr'?"Ouvrir la lettre d’amour":'Open the love letter');
  $('lightboxClose').setAttribute('aria-label',language==='fr'?'Fermer':'Close');
  $('letterClose').setAttribute('aria-label',language==='fr'?'Fermer':'Close');
  $('lbPrev').setAttribute('aria-label',language==='fr'?'Photo précédente':'Previous photo');
  $('lbNext').setAttribute('aria-label',language==='fr'?'Photo suivante':'Next photo');
  $('lightbox').setAttribute('aria-label',language==='fr'?'Galerie photo':'Photo gallery');
  $('playBtn').setAttribute('aria-label',language==='fr'?'Lire ou mettre en pause la musique':'Play or pause music');
  if(document.querySelector('.journey-graphic')?.classList.contains('done')) $('journeyResult').textContent=language==='fr'?'Arrivé à notre pour toujours ♡':translations.journeyDone;
  if($('funAnswer').dataset.answered==='yes') $('funAnswer').textContent=language==='fr'?'Je te choisirais dans chaque vie. ♡':translations.funAnswer;
  try{localStorage.setItem('ariana-language',language)}catch(_){}
}
$('langBtn').addEventListener('click',()=>translate(language==='fr'?'en':'fr'));
try { if(localStorage.getItem('ariana-language')==='en') translate('en'); }catch(_){}

// Mobile menu.
$('menuBtn').addEventListener('click',()=>{
 const menu=$('mobileNav'),open=menu.hidden;
 menu.hidden=!open;
 $('menuBtn').classList.toggle('is-open',open);
 $('menuBtn').setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('#mobileNav a').forEach(a=>a.addEventListener('click',()=>{
 $('mobileNav').hidden=true;$('menuBtn').classList.remove('is-open');$('menuBtn').setAttribute('aria-expanded','false');
}));

// Page progress and scroll entrance.
let ticking=false;
window.addEventListener('scroll',()=>{
 if(ticking)return;
 ticking=true;
 requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight; $('pageProgress').style.width=(max>0?Math.max(0,Math.min(100,window.scrollY/max*100)):0)+'%'; ticking=false;});
},{passive:true});
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}})},{threshold:.09,rootMargin:'0px 0px -15px 0px'});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}

// All 25 images from all 3 submitted ZIPs. The gallery avoids invented photo-specific captions.
const photos=[...document.querySelectorAll('.memory')];
let activePhoto=0,modalReturnFocus=null;
function openModal(node,trigger){modalReturnFocus=trigger||document.activeElement;node.hidden=false;node.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');let first=node.querySelector('button');first?.focus();}
function closeModal(node){node.hidden=true;node.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(modalReturnFocus?.focus)modalReturnFocus.focus();}
function lightboxDisplay(index){activePhoto=(index+photos.length)%photos.length;const image=photos[activePhoto].querySelector('img');const full=$('lightboxImage');full.src=image.src;full.alt=language==='fr'?'Souvenir agrandi '+(activePhoto+1):'Expanded memory '+(activePhoto+1);$('lightboxNumber').textContent=String(activePhoto+1).padStart(2,'0')+' / '+photos.length;}
photos.forEach((photo,index)=>{photo.addEventListener('click',()=>{lightboxDisplay(index);openModal($('lightbox'),photo);});});
$('lightboxClose').addEventListener('click',()=>closeModal($('lightbox')));
$('lbNext').addEventListener('click',()=>lightboxDisplay(activePhoto+1));
$('lbPrev').addEventListener('click',()=>lightboxDisplay(activePhoto-1));
$('lightbox').addEventListener('click',e=>{if(e.target===$('lightbox'))closeModal($('lightbox'));});
$('envelopeBtn').addEventListener('click',()=>openModal($('letterModal'),$('envelopeBtn')));
$('letterClose').addEventListener('click',()=>closeModal($('letterModal')));
$('letterModal').addEventListener('click',e=>{if(e.target===$('letterModal'))closeModal($('letterModal'));});
document.addEventListener('keydown',e=>{
 const lb=$('lightbox'),letter=$('letterModal');
 if(!lb.hidden && e.key==='ArrowLeft'){e.preventDefault();lightboxDisplay(activePhoto-1);}
 if(!lb.hidden && e.key==='ArrowRight'){e.preventDefault();lightboxDisplay(activePhoto+1);}
 if(e.key==='Escape'){if(!lb.hidden)closeModal(lb);else if(!letter.hidden)closeModal(letter);}
 const opened=!lb.hidden?lb:(!letter.hidden?letter:null);
 if(opened && e.key==='Tab'){
  const focusable=[...opened.querySelectorAll('button:not([disabled])')];const first=focusable[0],last=focusable.at(-1);
  if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
  if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
 }
});
// Mobile swipe for the gallery.
let touchStartX=null;
$('lightbox').addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});
$('lightbox').addEventListener('touchend',e=>{if(touchStartX===null)return;const diff=e.changedTouches[0].screenX-touchStartX;if(Math.abs(diff)>55)lightboxDisplay(activePhoto+(diff>0?-1:1));touchStartX=null;},{passive:true});

// Flight animation: a symbolic journey, not a claim about any particular photo.
const graphic=document.querySelector('.journey-graphic');
let flightTimer;
$('journeyBtn').addEventListener('click',()=>{
 clearTimeout(flightTimer);graphic.classList.remove('is-traveling','done');void graphic.offsetWidth;
 graphic.classList.add('is-traveling');$('journeyBtn').disabled=true;
 $('journeyResult').textContent=language==='fr'?'Direction : notre bonheur… ♡':'Destination: our happiness… ♡';
 flightTimer=setTimeout(()=>{graphic.classList.add('done');$('journeyResult').textContent=language==='fr'?'Arrivé à notre pour toujours ♡':translations.journeyDone;$('journeyBtn').disabled=false;createHearts(15,innerWidth*.7,innerHeight*.55);},2500);
});

// Quote generator, independent of photographs.
$('newQuoteBtn').addEventListener('click',()=>{
 quoteIndex=(quoteIndex+1)%quoteSets[language].length;const quote=$('quoteText');quote.animate([{opacity:.3,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:400,easing:'ease-out'});quote.textContent=quoteSets[language][quoteIndex];
});

// Original instrumental melody created for the prior version, not the copyrighted audio in source ZIPs.
const audio=$('audio'),playBtn=$('playBtn'),soundBtn=$('soundBtn'),equalizer=$('equalizer');
function refreshPlayer(){const playing=!audio.paused;playBtn.textContent=playing?'Ⅱ':'▶';$('soundSymbol').textContent=playing?'♫':'♪';soundBtn.classList.toggle('playing',playing);equalizer.classList.toggle('active',playing);}
async function toggleAudio(){if(audio.paused){try{await audio.play();}catch(_){/* Some browsers block audio until user interaction. */}}else{audio.pause();}refreshPlayer();}
playBtn.addEventListener('click',toggleAudio);soundBtn.addEventListener('click',toggleAudio);
audio.addEventListener('play',refreshPlayer);audio.addEventListener('pause',refreshPlayer);
function displayTime(t){if(!Number.isFinite(t))return'0:00';return Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0');}
audio.addEventListener('loadedmetadata',()=>{$('duration').textContent=displayTime(audio.duration);});
audio.addEventListener('timeupdate',()=>{$('elapsed').textContent=displayTime(audio.currentTime);$('audioFill').style.width=(audio.duration?100*audio.currentTime/audio.duration:0)+'%';});
document.querySelector('.player-track').addEventListener('click',e=>{if(Number.isFinite(audio.duration)&&audio.duration>0){const r=e.currentTarget.getBoundingClientRect();audio.currentTime=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*audio.duration;}});

// A gentle, optional heart shower + surprise confetti (respects reduced-motion setting).
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function createHearts(amount=35,x=innerWidth/2,y=innerHeight*.54){
 if(reduced.matches)amount=Math.min(amount,7);
 const layer=$('heartLayer');
 for(let i=0;i<amount;i++){
  const item=document.createElement('span');item.className='heart-particle';item.textContent=['♥','♡','✦','❤'][Math.floor(Math.random()*4)];
  const px=x+(Math.random()-.5)*Math.min(340,innerWidth*.75),py=y+(Math.random()-.5)*105;
  item.style.left=px+'px';item.style.top=py+'px';item.style.fontSize=(15+Math.random()*24)+'px';item.style.color=['#f5b9c5','#eaa3bc','#fff1ee','#d18da5'][i%4];
  item.style.setProperty('--dx',((Math.random()-.5)*360)+'px');item.style.setProperty('--dy',(-110-Math.random()*340)+'px');item.style.setProperty('--dur',(1.3+Math.random()*1.3)+'s');
  layer.append(item);item.addEventListener('animationend',()=>item.remove(),{once:true});setTimeout(()=>item.remove(),3500);
 }
}
function createConfetti(amount=90){
 if(reduced.matches)amount=15;
 const layer=$('heartLayer');
 for(let i=0;i<amount;i++){
  const item=document.createElement('i');item.className='confetti';
  item.style.left=(innerWidth*.5+(Math.random()-.5)*130)+'px';item.style.top=(innerHeight*.48+(Math.random()-.5)*45)+'px';
  const colors=['#f4b9c9','#df8aaa','#ffeed9','#c77897','#e7c196'];item.style.setProperty('--color',colors[i%colors.length]);
  item.style.setProperty('--dx',((Math.random()-.5)*Math.min(innerWidth,1100))+'px');item.style.setProperty('--dy',((Math.random()-.4)*Math.min(innerHeight,850))+'px');item.style.setProperty('--spin',(Math.random()*1200-600)+'deg');item.style.setProperty('--dur',(1.6+Math.random()*1.5)+'s');
  layer.append(item);item.addEventListener('animationend',()=>item.remove(),{once:true});setTimeout(()=>item.remove(),4000);
 }
}
document.querySelectorAll('.choose-btn').forEach(btn=>btn.addEventListener('click',()=>{
 $('funAnswer').dataset.answered='yes';$('funAnswer').textContent=language==='fr'?'Je te choisirais dans chaque vie. ♡':translations.funAnswer;
 createHearts(45,innerWidth*.54,innerHeight*.55);
}));
$('surpriseBtn').addEventListener('click',()=>{createConfetti();createHearts(42);});

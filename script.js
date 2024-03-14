
const main=document.getElementById('box');
const pElem=document.getElementById('quo');
const pname=document.getElementById('name');
const bt=document.getElementById('but');

const quotes=[
            ['Galileo Galilei.',"In my studies of astronomy and philosophy I hold this opinion about the universe, that the Sun remains fixed in the centre of the circle of heavenly bodies, without changing its place; and the Earth, turning upon itself, moves round the Sun.",'#fe8dc6','7f00ff'],
            ['Marcus Tullius Cicero.',"The contemplation of celestial things will make a man both speak and think more sublimely and magnificently when he descends to human affairs",'#fed1c7','#fbb040'],
            ["Michio Kaku.","Chances are, when we meet intelligent life forms in outer space they're going to be descended from predators.",'#ef4136','#00aeef'],
            ['John Calvin',"For astronomy is not only pleasant, but also very useful to be known: it cannot be denied that this art unfolds the admirable wisdom of God.",'#fdeb71','#f8d800'],
            ['Stephen Hawking',"I don’t think the human race will survive the next 1,000 years, unless we spread into space... But I’m an optimist. We will reach out to the stars.",'#abdcff','#0396ff'],
            ['Stephen Hawking.',"One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn’t exist.",'#feb692','#ea5455'],
            ['Alexi Leonov.',"The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic.",'#28c76f','#32ccbc'],
            ['Buzz Aldrin.',"I know the sky is not the limit because there are footprints on the Moon — and I made some of them!",'#abdcff','#ef4136'],
            ['Mae Jemison.',"Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",'#623aa2','#f97794'],
            ['Christa McAuliffe.',"Space is for everybody. It’s not just for a few people in science or math, or for a select group of astronauts.",'#f55555','#8c1bab'],
            ['Jacob Bronowski.',"Astronomy is not the apex of science or of invention. But it is a test of the cast of temperament and mind that underlies a culture.",'#9708cc','#fff6b7'],
            ['Lawrence Krauss.',"Every atom in your body came from a star that exploded...It really is the most poetic thing I know about physics: You are all stardust.",'#f6416c','#ef4136'],
            ["Isaac D'Israeli","It does not at first appear that an astronomer rapt in abstraction, while he gazes on a star, must feel more exquisite delight than a farmer who is conducting his team.",'#fbb040','#fdeb71'],
            ['Carl Sagan.',"It is far better to grasp the universe as it is than to persist in delusion, however satisfying it may be.",'#f55555','#abdcff'],
            ['Neil Armstrong.',"It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth.",'#f8d800','#fe8dc6'],
            ['Albert Einstein.',"Time and space and gravitation have no separate existence from matter.",'#ef4136','#abdcff']
            ]

bt.addEventListener('click',()=>{
    const calc=Math.floor(Math.random()*quotes.length)+1;
    pElem.innerHTML=quotes[calc][1];
    pname.innerHTML=quotes[calc][0];
    document.body.style.backgroundColor = quotes[calc][2];
    main.style.backgroundColor=quotes[calc][3]

})

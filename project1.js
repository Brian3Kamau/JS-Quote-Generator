// VARIABLES
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[
    {
        quote: '"The best way to find Yourself is to lose yourself in the service of others." ',
        person: 'Mahatma Gandhi'
    }, {
        quote: '"If you want to live a happy life, tie it to a goal, not to people or things." ',
        person: 'Albert Einstein'
    }, {
        quote: '"You are never ready for a thing, until you believe that you can achieve it." ',
        person: 'Napoleon Hill, Think and Grow Rich'
    }, {
        quote: '"At his best, man is the noblest of all the animals; seperated from law and justice he is the worst." ',
        person: 'Aristotle'
    },{
        quote: '"Your time is limited, so dont waste it living someone elses life." ',
        person: 'Steve Jobs'
    }, {
        quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn" ',
        person: 'Benjamin Franklin'
    }, {
        quote: '"If you look at what you have in life, you will always have more. If you look at what you dont have in life, Youll never have eneough." ',
        person: 'Oprah Winfrey'
    },{
        quote: '"It does not matter how slowly you go as long as you do not stop." ',
        person: 'Confucius'
    }, {
        quote: '"Our lives begin to end the day we become silent about things that matter." ',
        person: 'Martin Luther King. Jr.'
    }, {
        quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."' ,
        person: 'Dalai Lama'
    },{
        quote:  '"The journey of a thousand miles begins with one step." ',
        person: 'Lao Tzu'
    },{
        quote:  '"There are no limitations to the mind except those we acknowledge." ',
        person: 'Napoleon Hill, Think and Grow Rich'
    },{
        quote:  '"You are what you are because of the dominating thoughts that you have permitted to occupy your mind." ',
        person: 'Napoleon Hill, Think and Grow Rich'
    },{
        quote:  '"Greatness is the Ability to Recognize the Power of Your Own Mind, to Embrace It, and Use It." ',
        person: 'Napoleon Hill'
    },{
        quote:  '"Think well before you speak, because your word can plant either the seed of success or failure in the mind of some other person." ',
        person: 'Napoleon Hill'
    },{
        quote:  '"Be a good listener, but also be an accurate thinker as you listen." ',
        person: 'Napoleon Hill'
    },{
        quote:  '"Accurate thinkers permit no one to do their thinking for them." ',
        person: 'Napoleon Hill'
    }
];

    btn.addEventListener('click', function(){

        let random = Math.floor(Math.random() * quotes.length);

        quote.innerText= quotes[random].quote;
        person.innerText= quotes[random].person;

    });


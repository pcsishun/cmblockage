const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');

const chatButton1 = document.querySelector('.chatbox__button1');
const chatContent1 = document.querySelector('.chatbox__support1');

const chatButton2 = document.querySelector('.chatbox__button2');
const chatContent2 = document.querySelector('.chatbox__support2');


const chatButton3_api = document.querySelector('.chatbox__button3_API');
const chatContent3_api = document.querySelector('.chatbox__support3_fetchAPI');

const icons = {
    isClicked: '???',
    isNotClicked: '???'
}
console.log(chatContent2)
console.log(chatContent3_api)


const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
// console.log('chatbox',chatbox)
chatbox.display();


const chatbox1 = new InteractiveChatbox(chatButton1, chatContent1, icons);
chatbox1.display();


const chatbox2 = new InteractiveChatbox(chatButton2, chatContent2, icons);
chatbox2.display();



const chatboxAPI = new InteractiveChatbox(chatButton3_api, chatContent3_api, icons);
chatboxAPI.display();

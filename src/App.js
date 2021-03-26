import React,{useState} from 'react';

function App() {
  const [message,setMessage] = useState('');
  
  const onChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value)
  }

  

  const sendMessage = () => {
    const greetings =[
      'im good ,how about u mate',
      'doing good my friend',
      'why do you ask that'
  ];
  const hi=['hello dude','hi buddy','hey buddy'];
  
  const weather =['weather is too good for you','you need a cold drink','its too hot out '];
  
  const thanks = ['you are welcome','no mention','its my job buddy'];
  
  const love = ['you are in trouble','love u too','have a party'];
  
  const hate =['no problem','you loser',' dash you'];
  
  const help=['i am sorry dude ','i cant help with that','i am better than humans','sure buddy'];
  
  const name=['i am jarvis the bot ,Assistant of Chandra Mohan'];
  
  const heyjarvis=['welcome sir','welcome chand'];
  

    
    var personchats = document.createElement("h3");
    personchats.innerHTML = message;
    document.getElementById("app_chats").appendChild(personchats);
    let botText;
    if (message.includes('how are you')){
      const finalText =
             greetings[Math.floor(Math.random()*greetings.length)];
             botText=finalText;
             
             
  } else  if (message.includes('weather')){
      const finalText =
             weather[Math.floor(Math.random()*weather.length)];
             botText=finalText;

             
  } else  if (message.includes('love')){
      const finalText =
             love[Math.floor(Math.random()*love.length)];
             botText=finalText;

            
  } else  if (message.includes('hate')){
      const finalText =
             hate[Math.floor(Math.random()*hate.length)];
             botText=finalText;

            
  } else  if (message.includes('thank')){
      const finalText =
             thanks[Math.floor(Math.random()*thanks.length)];
             botText=finalText;

             
  } else  if (message.includes('help')){
      const finalText =
             help[Math.floor(Math.random()*help.length)];
             botText=finalText;

             
  }  else  if (message.includes('hi')){
      const finalText =
             hi[Math.floor(Math.random()*hi.length)];
             botText=finalText;

             
  }  else  if (message.includes('name')){
      const finalText =
             name[Math.floor(Math.random()*name.length)];
             botText=finalText;

             
  } else  if (message.includes('hello')){
      const finalText =
             hi[Math.floor(Math.random()*hi.length)];
             botText=finalText;

             
  }
  else  if (message.includes('hey')){
      const finalText =
             heyjarvis[Math.floor(Math.random()*heyjarvis.length)];
             botText=finalText;

            

  }
  var botchats = document.createElement("P");
    botchats.innerHTML = botText;
    document.getElementById("app_chats").appendChild(botchats);
  

  }


  return (
    <div className="app">
     
     <input type="text" value={message} onChange={onChange} />
     
    

     <button onClick={sendMessage} >SEND</button>
     <div id="app_chats">
     <h1>Welcome have queries contact us</h1>

  

     </div>
     
      
      
     
    
    </div>
  )
}

export default App

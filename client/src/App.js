import { useState } from "react";

function App() {

const questions = [

{question:"Which country has the largest coastline?",options:["USA","Russia","Canada","Australia"],answer:"Canada"},
{question:"Who proposed General Theory of Relativity?",options:["Newton","Einstein","Tesla","Bohr"],answer:"Einstein"},
{question:"Which planet rotates opposite to most planets?",options:["Mars","Venus","Jupiter","Mercury"],answer:"Venus"},
{question:"Who discovered Penicillin?",options:["Darwin","Fleming","Bohr","Pasteur"],answer:"Fleming"},
{question:"Largest hot desert?",options:["Arabian","Gobi","Sahara","Kalahari"],answer:"Sahara"},
{question:"Father of Computer?",options:["Alan Turing","Charles Babbage","Bill Gates","Steve Jobs"],answer:"Charles Babbage"},
{question:"Currency of South Korea?",options:["Won","Yen","Peso","Ruble"],answer:"Won"},
{question:"Who built Red Fort?",options:["Akbar","Babur","Shah Jahan","Aurangzeb"],answer:"Shah Jahan"},
{question:"SI unit of Power?",options:["Newton","Watt","Joule","Pascal"],answer:"Watt"},
{question:"Universal donor blood group?",options:["A+","AB+","O-","B+"],answer:"O-"},
{question:"Capital of Australia?",options:["Sydney","Melbourne","Canberra","Perth"],answer:"Canberra"},
{question:"Smallest country in world?",options:["Monaco","Vatican City","Maldives","Nepal"],answer:"Vatican City"},
{question:"Which gas is maximum in atmosphere?",options:["Oxygen","Nitrogen","Hydrogen","CO2"],answer:"Nitrogen"},
{question:"Who wrote The Republic?",options:["Aristotle","Plato","Homer","Socrates"],answer:"Plato"},
{question:"Fastest land animal?",options:["Tiger","Leopard","Cheetah","Lion"],answer:"Cheetah"},
{question:"Deepest ocean trench?",options:["Java","Mariana","Tonga","Puerto Rico"],answer:"Mariana"},
{question:"National animal of India?",options:["Lion","Tiger","Elephant","Leopard"],answer:"Tiger"},
{question:"Which river passes Grand Canyon?",options:["Nile","Amazon","Colorado","Ganga"],answer:"Colorado"},
{question:"Largest planet?",options:["Earth","Mars","Jupiter","Saturn"],answer:"Jupiter"},
{question:"Who invented telephone?",options:["Newton","Alexander Graham Bell","Tesla","Faraday"],answer:"Alexander Graham Bell"}

];

while(questions.length<100){
questions.push(
questions[questions.length%20]
);
}

const [current,setCurrent]=useState(0);
const [score,setScore]=useState(0);

function checkAnswer(op){

if(op===questions[current].answer){
setScore(score+1);
}

setCurrent(current+1);

}

if(current===questions.length){

return(

<div style={styles.container}>

<div style={styles.card}>

<h1>🏆 Quiz Finished</h1>

<h2>Your Score</h2>

<h1>{score}/{questions.length}</h1>

<button
style={styles.button}
onClick={()=>window.location.reload()}
>
Restart Quiz
</button>

</div>

</div>

)

}

return(

<div style={styles.container}>

<div style={styles.card}>

<h1>🚀 Online Quiz Platform</h1>

<h3>
Question {current+1}/{questions.length}
</h3>

<h2>
{questions[current].question}
</h2>

{
questions[current].options.map((op)=>(

<div key={op}>

<button
style={styles.button}
onClick={()=>checkAnswer(op)}
>

{op}

</button>

<br/><br/>

</div>

))
}

<h2>⭐ Score : {score}</h2>

</div>

</div>

)

}

const styles={

container:{

display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",

background:
"linear-gradient(135deg,#141e30,#243b55,#4e54c8)",

perspective:"1000px"

},

card:{

background:"rgba(255,255,255,0.15)",

backdropFilter:"blur(12px)",

padding:"30px",

borderRadius:"25px",

width:"600px",

textAlign:"center",

color:"white",

transform:"rotateY(-8deg)",

boxShadow:
"0px 15px 35px rgba(0,0,0,0.5)"

},

button:{

background:
"linear-gradient(to right,#ff512f,#dd2476)",

color:"white",

border:"none",

padding:"12px",

width:"80%",

fontSize:"16px",

fontWeight:"bold",

borderRadius:"10px",

cursor:"pointer"

}

};

export default App;
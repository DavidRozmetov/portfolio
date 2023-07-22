
clicked = false;

words = ['Cat', 'Ant', 'Yak', 'Axe', 'Ram', 'Jam', 'Yam', 'Dam', 'Fan', 'Man', 'Pan', 'Can', 'Dad', 'Pad', 'Bag', 'Rag', 'Cap', 'Map', 'Nap', 'Tap', 'Bat', 'Rat', 'Hat', 'Mat', 'Web', 'Egg', 'Vet', 'Ten', 'Jet', 'Net', 'Wet', 'Pet', 'Hen', 'Pen', 'Red', 'Bed', 'Hip', 'Ink', 'Zip', 'In', 'Lip', 'Tip', 'Sip', 'Rip', 'Bib', 'Rib', 'Kid', 'Lid', 'Pin', 'Fin', 'Bin', 'Win', 'Fig', 'Wig', 'Big', 'Dig', 'Pit', 'Hit', 'Six', 'Mix', 'Fox', 'Log', 'Ox', 'Rod', 'Pot', 'Hot', 'Cot', 'Dot', 'Top', 'Mop', 'Hop', 'Pop', 'Sun', 'Up', 'Jug', 'Hug', 'Bug', 'Rug', 'Mug', 'Bud', 'Mud', 'Pup', 'Cup', 'Nut', 'Hut', 'Cut', 'Cub', 'Tub', 'Gum', 'Hum', 'Bun', 'Run', 'Fun'];

sCorrect = `</p>
        <div class="check-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>`;

sIncorrect = `
      </p>
        <div class="check-box">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">
      <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 
        11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "/>
      </svg>
        </div>
      
`;

var audioCorrect = document.getElementById("audioCorrect");
var audioIbcorrect = document.getElementById("audioIncorrect");
audioIncorrect.volume = 0.3;
audioCorrect.volume = 0.3;

question = "ant";

oldPoints = 0;

if (localStorage.getItem("points")){
  points = parseInt(localStorage.getItem("points"));
} else {
  points = 0;
}

if (!localStorage.getItem("level")){
  localStorage.setItem("level", Math.ceil(points/100));
}

document.getElementById('level').innerText = ("Level " + Math.ceil(points/100));
// document.getElementById('progress-bar').style = "--width:" + points%100;
changeProgress(oldPoints%100, points%100);

 newQuestion();

document.getElementById('a').addEventListener('click', ()=> evaluate(document.getElementById('a')));
document.getElementById('b').addEventListener('click', ()=> evaluate(document.getElementById('b')));
document.getElementById('c').addEventListener('click', ()=> evaluate(document.getElementById('c')));
document.getElementById('question').addEventListener('click', ()=>{say(question[3]);});
document.getElementById('speaker').addEventListener('click', ()=>{say(question[3]);});

//document.getElementById('d').addEventListener('click', ()=> evaluate(document.getElementById('d').innerText));
//console.log(document.getElementById('a').innerText === 'ant')

function evaluate (choice){
  if(!clicked){
   clicked = true;
    oldPoints = points;
    if(question[3] === choice.innerText){
      points += 10;
      audioCorrect.play();
      choice.classList.add("correct-button");
      // document.getElementById().classList.add("correct-button");
    // class = "black-and-white"
    } else{
      points -= 5;
      audioIncorrect.play();
      choice.classList.add("incorrect-button");
      if(question[3] === question[0]){
        document.getElementById('a').classList.add("correct-button");
      } else if(question[3] === question[1]){
        document.getElementById('b').classList.add("correct-button");
      }else if(question[3] === question[2]){
        document.getElementById('c').classList.add("correct-button");
      }
    }
    
    
    document.getElementById('level').innerText = ("Level " + Math.ceil(points/100));
  // document.getElementById('progress-bar').style = "--width:" + points%100;
  changeProgress(oldPoints, points);
    localStorage.setItem("oldPoints", oldPoints);
    localStorage.setItem("points", points);
    
    if (Math.ceil(points/100) > Math.ceil(oldPoints/100)){

      localStorage.setItem("level", Math.ceil(points/100));    



    }
    setTimeout(function(){
      
      clicked = false;
      newQuestion();
    }, 1500);

  }
}

function newQuestion(){

  question = pickQuestion(words, 3);

  document.getElementById('a').classList.remove('correct-button');
  document.getElementById('b').classList.remove('correct-button');
  document.getElementById('c').classList.remove('correct-button');
  document.getElementById('a').classList.remove('incorrect-button');
  document.getElementById('b').classList.remove('incorrect-button');
  document.getElementById('c').classList.remove('incorrect-button');


  document.getElementById('a').innerHTML ="<p> " + question[0] +sIncorrect;
  document.getElementById('b').innerHTML ="<p> " + question[1] +sIncorrect;
  document.getElementById('c').innerHTML = "<p> " + question[2] +sIncorrect;


if (question[0] === question[3]){
  document.getElementById('a').innerHTML = "<p> " + question[0] +sCorrect; 
}
if (question[1] === question[3]){
  document.getElementById('b').innerHTML = "<p> " + question[1] +sCorrect;
}
if (question[2] === question[3]){
  document.getElementById('c').innerHTML = "<p> " + question[2] +sCorrect;
} 
  // say(question[3]);
  document.getElementById('question').src = 'img/level-1/' + question[3] + '.png';

  // console.log(document.getElementById('a').firstChild.innerText);
} 



function pickQuestion(e, l) {
  tempData =  [];
  for(a = 0; a < l; a = a + 1){
    t = e[Math.floor(Math.random()*e.length)];
    while(tempData.includes(t)){
        t = e[Math.floor(Math.random()*e.length)];
    }
    
    
    tempData.push(t);
  }
  tempData.push(tempData[Math.floor(Math.random()*l)]);
  return tempData;
} 



function changeProgress(number1, number2){
 i = 0;
 num = number1;
 n = (number2 - number1)/100;

  intervalA = setInterval(()=>{
    num = num + n;  
    document.getElementById('progress-bar').style = "--width:" + num%100;
    i = i + 1;
    if (i == 100){
      clearInterval(intervalA);
    }
  },5)


}


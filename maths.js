var answer;
var score = 0;
var backgroundImages=[];


function nextQuestion() {
    const n1 = Math.floor(Math.random()*5);
    const n2 = Math.floor(Math.random()*6);//ceil(Math.random()*5);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`Answer: ${answer}, prediction: ${prediction}`);
    
    if(prediction == answer) {
        score++;
        
        if (score < 7) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert ('Well done! Your math garden is in full bloom! Want to reastart again? :)');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
      
        console.log(`Correct! Your score is: ${score}`);
        
    } else {
        score--;
        if (score < 0) {score = 0};
        alert('You are wrong!');
        
        setTimeout(function(){
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
            
        }, 1000);
       
        console.log(`Wrong! Your score is: ${score}`);
        
    }
}
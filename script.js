for(let i=1 ;i<5; i++){

    let q = document.querySelector(`#q${i}`);
    let qans=document.querySelector(`#qans${i}`);
    let plus=document.querySelector(`#plus${i}`);
    qans.style.display="none";
    plus.src="icon-plus.svg";

    q.addEventListener("click",()=>{
        if(qans.style.display==="none"){
            
            qans.style.display="block";
            plus.src="icon-minus.svg";
            // document.querySelector(".FAQ_BOX").style.height="rem";

        }
        else{
            qans.style.display="none";
            plus.src="icon-plus.svg";
            // document.querySelector(".FAQ_BOX").style.height="55rem";
        }
    
    });
}

function value(name) {
    var radios = document.getElementsByName(name);

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }

    return null; // No radio button selected
}

function submitQuiz() {
    var ans1 = value('q1');
    var ans2 = value('q2');
    var ans3 = value('q3');
    var ans4 = value('q4');
    var ans5 = value('q5');
    var ans6 = value('q6');
    var ans7 = value('q7');
    var ans8 = value('q8');
    var ans9 = value('q9');
    var ans10 = value('q10');
    var ans11 = value('q11');
    var ans12 = value('q12');
    var ans13 = value('q13');
    var ans14 = value('q14');
    var resultContainer = document.getElementById('result-container');

    var recommend = '';

    var openness = 0;
    var conscientiousness = 0;
    var extraversion = 0;
    var agreeableness = 0;
    var neuroticism = 0;

    //first question
    switch (ans1) {
        case 'Inaccurate':
            conscientiousness -= 1;
            break;
        case 'Neutral':
            conscientiousness += 0;
            break;
        case 'Accurate':
            conscientiousness += 1;
            break;
        default:
            
    }

    //second question
    switch (ans2) {
        case 'inaccurate':
            agreeableness -= 1;
            break;
        case 'neutral':
            agreeableness += 0;
            break;
        case 'accurate':
            agreeableness += 1;
            break;
        default:
            
    }

    //third question
    switch (ans3) {
        case 'Inaccurate':
            agreeableness -= 1;
            extraversion -= 1;
            break;
        case 'Neutral':
            agreeableness += 0;
            extraversion += 0;
            break;
        case 'Accurate':
            agreeableness += 1;
            extraversion += 1;
            break;
        default:
            
    }

    //fourth question
    switch (ans4) {
        case 'Inaccurate':
            conscientiousness -= 1;
            break;
        case 'Neutral':
            conscientiousness += 0;
            break;
        case 'Accurate':
            conscientiousness += 1;
            break;
        default:
            
    }

    //fifth question
    switch (ans5) {
        case 'Inaccurate':
            conscientiousness -= 1;
            extraversion -= 1;
            break;
        case 'Neutral':
            conscientiousness += 0;
            extraversion += 0;
            break;
        case 'Accurate':
            conscientiousness += 1;
            extraversion += 1;
            break;
        default:
            
    }

    //sixth question
    switch (ans6) {
        case 'Inaccurate':
           neuroticism -= 1;
            break;
        case 'Neutral':
            neuroticism += 0;
            break;
        case 'Accurate':
           neuroticism += 1;
            break;
        default:
            
    }

    //seventh question
    switch (ans7) {
        case 'Inaccurate':
            openness -= 1;
            break;
        case 'Neutral':
            openness += 0;
            break;
        case 'Accurate':
            openness += 1;
            break;
        default:
            
    }

    //eighth question
    switch (ans8) {
        case 'Inaccurate':
            openness -= 1;
            break;
        case 'Neutral':
            openness += 0;
            break;
        case 'Accurate':
            openness += 1;
            break;
        default:
           
    }

    //ninth question
    switch (ans9) {
        case 'Inaccurate':
            conscientiousness -= 1;
            break;
        case 'Neutral':
            conscientiousness += 0;
            break;
        case 'Accurate':
            conscientiousness += 1;
            break;
        default:
            
    }

    //tenth question
    switch (ans10) {
        case 'Inaccurate':
            neuroticism -= 1;
            break;
        case 'Neutral':
            neuroticism += 0;
            break;
        case 'Accurate':
            neuroticism += 1;
            break;
        default:
            
    }

    //eleventh question
    switch (ans11) {
        case 'Inaccurate':
            extraversion -= 1;
            break;
        case 'Neutral':
            extraversion += 0;
            break;
        case 'Accurate':
            extraversion += 1;
            break;
        default:
            
    }

    //twelvth question
    switch (ans12) {
        case 'Inaccurate':
            openness -= 1;
            break;
        case 'Neutral':
            openness += 0;
            break;
        case 'Accurate':
            openness += 1;
            break;
        default:
            
    }

    //thirteenth question
    switch (ans13) {
        case 'Inaccurate':
            conscientiousness -= 1;
            break;
        case 'Neutral':
            conscientiousness += 0;
            break;
        case 'Accurate':
            conscientiousness += 1;
            break;
        default:
            
    }

    //fourteenth question
    switch (ans14) {
        case 'Inaccurate':
            conscientiousness -= 1;
            agreeableness -= 1;
            neuroticism -= 1;
            break;
        case 'Neutral':
            conscientiousness += 0;
            agreeableness += 0;
            neuroticism += 0;
            break;
        case 'Accurate':
            conscientiousness += 1;
            agreeableness += 1;
            neuroticism += 1;
            break;
        default:
            
    }

    // output logic
    //movies
    
    var movieRecommendations = '';
    recommend += '<h2>Movies :- \n</h2>' + movieRecommendations;

    switch(openness)
    {
        case 1:
            recommend += '<li>Eternal Sunshine of the Spotless Mind (2004)</li>';
           
            break;
        case 2:
            recommend += '<li>Eternal Sunshine of the Spotless Mind (2004)</li>';
            recommend += '<li>Inception (2010)</li>';
            
            break;
        case 3:
            recommend += '<li>Eternal Sunshine of the Spotless Mind (2004)</li>';
            recommend += '<li>Inception (2010)</li>';
            recommend += '<li>Amelie (2001)</li>';
           
            break;
        default:
            break;        
    }

    switch(conscientiousness)
    {
        case 0:
            break;
        case 1:
            recommend += '<li>The Pursuit of Happyness (2006)</li>';
            break;
        case 2:
            recommend += '<li>The Pursuit of Happyness (2006)</li>'
            recommend +='<li>The Social Network (2010)</li>';
            break;
        default:
            recommend += '<li>The Pursuit of Happyness (2006)</li>'
            recommend +='<li>The Social Network (2010)</li>';
            recommend += '<li>A Beautiful Mind (2001)</li>';
            break;       
    }

    switch(extraversion)
    {
        case 1:
            recommend += '<li>The Great Gatsby (2013)</li>';
            break;
        case 2:
            recommend += '<li>The Great Gatsby (2013)</li>';
            recommend += '<li>The Wolf of Wall Street (2013)</li>';
            break;
        case 3:

            recommend += '<li>The Great Gatsby (2013)</li>';
            recommend += '<li>The Wolf of Wall Street (2013)</li>';
            recommend += '<li>Ferris Bueller s Day Off (1986)</li>';
            break;
        default:
            break;        
    }

    switch(agreeableness)
    {
        case 1:
            recommend += '<li>The Princess Brid</li>';
            break;
        case 2:
            recommend += '<li>The Princess Brid</li>'
            recommend += '<li>The Hundred-Foot Journe</li>';
            break;
        case 3:
            recommend += '<li>The Princess Brid</li>'
            recommend +='<li>The Hundred-Foot Journe</li>'
            recommend +='<li>The Sound of Music</li>';
            break;
        default:
            break;        
    }

    switch(neuroticism)
    {
        case 1:
            recommend += '<li>Eternal Sunshine of the Spotless Mind (2004)</li>';
            break;
        case 2:
            recommend += '<li>Eternal Sunshine of the Spotless Mind (2004)</li>'
            recommend +='<li>Silver Linings Playbook (2012)</li>';
            break;
        case 3:
            recommend += '<li>Eternal Sunshine of the Spotless Mind (2004)</li>'
            recommend +='<li>Silver Linings Playbook (2012)</li>';
            recommend +='<li>Anomalisa (2015)</li>';
            break;
        default:
            break;        
    }

   
    var showRecommendations = '';
    recommend += '<h2>\nShows :- \t</h2>' + showRecommendations;
    

    switch(openness)
    {
        case 1:
            recommend += '<li>Black Mirror (2011–2019)</li>';
            break;
        case 2:
            recommend += '<li>Black Mirror (2011–2019)</li>'
            recommend += '<li>The Twilight Zone (original series 1959–1964)</li>';
            break;
        case 3:
            recommend += '<li>Black Mirror (2011–2019)</li>'
            recommend += '<li>The Twilight Zone (original series 1959–1964)</li>';
            recommend +='<li>The OA (2016–2019)</li>';
            break;
        default:
            break;        
    }

    switch(conscientiousness)
    {
        case 0:
            break;
        case 1:
            recommend += '<li>Sherlock (2010-2017)</li>';
            break;
        case 2:
            recommend += '<li>Sherlock (2010-2017)</li>'
            recommend +='<li>Suits (2011-2019)</li>';
            break;
        default:
            recommend += '<li>Sherlock (2010-2017)</li>'
            recommend +='<li>Suits (2011-2019)</li>';
            recommend +='<li>The Crown (2016-present)</li>';
            break;       
    }

    switch(extraversion)
    {
        case 1:
            recommend += '<li>Friends (1994-2004)</li>';
            break;
        case 2:
            recommend += '<li>Friends (1994-2004)</li>';
            recommend +='<li>Brooklyn Nine-Nine (2013-2021)</li>';
            break;
        case 3:
            recommend += '<li>Friends (1994-2004)</li>';
            recommend +='<li>Brooklyn Nine-Nine (2013-2021)</li>';
            recommend +='<li>Parks and Recreation (2009-2015)</li>';
            break;
        default:
            break;        
    }

    switch(agreeableness)
    {
        case 0:
            break;
        default:
            recommend += '<li>The Great British Bake Off (2010)</li>'
            break;        
    }

    switch(neuroticism)
    {
        case 1:
            recommend += '<li>BoJack Horseman (2014–2020)</li>';
            break;
        case 2:
            recommend += '<li>BoJack Horseman (2014–2020)</li>'
            recommend += '<li>You re the Worst (2014–2019)</li>';
            break;
        case 3:
            recommend += '<li>BoJack Horseman (2014–2020)</li>';
            recommend += '<li>You re the Worst (2014–2019)</li>';
            recommend += '<li>Fleabag (2016-2019)</li>';
            break;
        default:
            break;        
    }

    //books

    
    var bookRecommendations = '';
    recommend += '<h2>\nBooks :- \n</h2>' + bookRecommendations;

    switch(openness)
    {
        case 1:
            recommend += '<li>One Hundred Years of Solitude by Gabriel Garcia Marquez<li>';
            break;
        case 2:
            recommend += '<li>One Hundred Years of Solitude by Gabriel Garcia Marquez</li>';
            recommend += '<li>Siddhartha by Hermann Hesse</li>';
            break;
        case 3:
            recommend += '<li>One Hundred Years of Solitude by Gabriel Garcia Marquez</li>';
            recommend += '<li>Siddhartha by Hermann Hesse</li>';
            recommend += '<li>The Hitchhiker s Guide to the Galaxy by Douglas Adams</li>';
            break;
        default:
            break;        
    }

    switch(conscientiousness)
    {
        case 0:
            break;
        case 1:
            recommend += '<li>The 7 Habits of Highly Effective People by Stephen R. Covey</li>';
            break;
        case 2:
            recommend += '<li>The 7 Habits of Highly Effective People by Stephen R. Covey</li>';
            recommend += '<li>Thinking, Fast and Slow by Daniel Kahneman</li>';
            break;
        default:
            recommend += '<li>The 7 Habits of Highly Effective People by Stephen R. Covey</li>';
            recommend += '<li>Thinking, Fast and Slow by Daniel Kahneman</li>';
            recommend += '<li>Atomic Habits by James Clear</li>';
            break;       
    }

    switch(extraversion)
    {
        case 1:
            recommend += '<li>Crazy Rich Asians by Kevin Kwan</li>';
            break;
        case 2:
            recommend += '<li>Crazy Rich Asians by Kevin Kwan</li>'
            recommend += '<li>Where d You Go, Bernadette by Maria Semple</li>';
            break;
        case 3:
            recommend += '<li>Crazy Rich Asians by Kevin Kwan</li>';
            recommend += '<li>Where d You Go, Bernadette by Maria Semple</li>';
            recommend += '<li>Me Talk Pretty One Day by David Sedaris</li>';
            break;
        default:
            break;        
    }

    switch(agreeableness)
    {
        case 1:
            recommend += '<li>Eleanor Oliphant Is Completely Fine by Gail Honeyman</li>';
            break;
        case 2:
            recommend += '<li>Eleanor Oliphant Is Completely Fine by Gail Honeyman</li>';
            recommend +='<li>The Guernsey Literary and Potato Peel Pie Society by Mary Ann Shaffer and Annie Barrows</li>';
            break;
        case 3:
            recommend += '<li>Eleanor Oliphant Is Completely Fine by Gail Honeyman</li>';
            recommend += '<li>The Guernsey Literary and Potato Peel Pie Society by Mary Ann Shaffer and Annie Barrows</li>';
            recommend += '<li>tAnne of Green Gables by L.M. Montgomery</li>';
            break;
        default:
            break;       
    }

    switch(neuroticism)
    {
        case 1:
            recommend += '<li>The Bell Jar by Sylvia Plath</li>';
            break;
        case 2:
            recommend += '<li>The Bell Jar by Sylvia Plath</li>';
            recommend += '<li>The Perks of Being a Wallflower by Stephen Chbosky</li>';
            break;
        case 3:
            recommend += '<li>The Bell Jar by Sylvia Plath</li>';
            recommend += '<li>The Perks of Being a Wallflower by Stephen Chbosky</li>';
            recommend += '<li>A Little Life by Hanya Yanagihara</li>';
            break;
        default:
            break;        
    }
    // resultContainer.innerHTML = recommend.trim();
    var encodedRecommendations = encodeURIComponent(recommend);
    window.location.href = 'result.html?recommendations=' + encodedRecommendations;
    // window.location.href="result.html";
}

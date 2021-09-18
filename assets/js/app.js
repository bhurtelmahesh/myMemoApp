// variabels
const tweetList = document.querySelector('#tweet-list');

// Event Listeners
eventListeners();



function eventListeners() {

    document.querySelector("#form").addEventListener('submit', newTweet);
    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded',localStorageOnLoad = () => {
        let tweets = getTweetFromLS();
        //loop through LS
        tweets.forEach(tweet => {
    
            const removeBtn = document.createElement('a');
            removeBtn.classList = 'remove-tweet'
            removeBtn.textContent = 'X';
        
            const li = document.createElement('li');
            li.textContent = tweet;
        
            li.appendChild(removeBtn);
        
            tweetList.appendChild(li);
            
        });
    });
}





// function
function newTweet(e){
    e.preventDefault();


    const tweet = document.querySelector('#tweet').value;

    //
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet'
    removeBtn.textContent = 'X';


    if(tweet !== ""){
    const li = document.createElement('li');
    li.textContent = tweet;

    li.appendChild(removeBtn);

    tweetList.appendChild(li);


    addToLS(tweet);

}
    this.reset();
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }

    removeFromLS( e.target.parentElement.textContent );

}

//add to local 
addToLS = (tweet) => {
    let tweets = getTweetFromLS();
    
    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify( tweets ) );
}

getTweetFromLS = () => {

    let tweets;
    const tweetLS = localStorage.getItem('tweets');

        if(tweetLS === null){
            tweets = [];
        }else{
            tweets = JSON.parse(tweetLS);
        }
        return tweets;
}

removeFromLS = (tweet) => {

    let tweets = getTweetFromLS();

    const tweetDel = tweet.substring( 0, tweet.length-1 );

    tweets.forEach((tweetLS, index)=>{
       if(tweetDel === tweetLS){
           tweets.splice(index, 1);
        }
        // save the data
        localStorage.setItem('tweets', JSON.stringify(tweets));
    })

}


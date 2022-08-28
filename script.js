
/* Asynchronous function fetches YouTube API  */
async function get(){
    // (try-catch) => To make the code sustainable 
    try{
        // Wait to get the data from the API and store it in a variable
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98Suvqo2atFD0Y6e3Bn2AA&maxResults=10&order=date&key=AIzaSyBOnawFtJGkZJhFMHaE3hb_rqrN9QwSsG0");
        // waiting to get the data  from the (response) variable and convert it to JSON information
        const data = await response.json();
        // Insert information
        for(let i = 0; i<3 ; i++){
            document.querySelector(`#api${i+1}`).src = `https://youtube.com/embed/${data.items[i].id.videoId}`;
            document.querySelector(`#video${i+1} h6`).innerText = `${data.items[i].snippet.title}`;
        }
    }
    catch(error){
        // A message appears if the data is not fetched
        for(let i = 0; i<3 ; i++){
            document.querySelector(`#video${i+1}`).innerHTML = "<h3>Not Found</h3>";
        }
        console.log(error);
    }
}
get();

// Another method gives the same result
/*
const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98Suvqo2atFD0Y6e3Bn2AA&maxResults=10&order=date&key=AIzaSyBOnawFtJGkZJhFMHaE3hb_rqrN9QwSsG0";
fetch(url).then(function(response){
    return response.json();
}).then(function(data){
   try{
        for(let i = 0; i<3 ; i++){
            document.querySelector(`#api${i+1}`).src = `https://youtube.com/embed/${data.items[i].id.videoId}`;
            document.querySelector(`#video${i+1} h6`).innerText = `${data.items[i].snippet.title}`;
        }
    }
    catch(error){
        for(let i = 0; i<3 ; i++){
            document.querySelector(`#video${i+1}`).innerHTML = "<h3>Not Found</h3>";
        }
        console.log(error);
    }
})
*/

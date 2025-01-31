const newActivity = async () => {

    //Hämta värdet
    let participants = document.querySelector("[name='participants']:checked").value;
    let type = document.querySelector("#activityType").value;
    let free = document.querySelector("#free").checked;
    //Create URL Params

    let params = new URLSearchParams();

    if(participants){
        params.append("participants", participants)
    }
    if(type){
        params.append("type", type)
    }
    if(free){
        params.append("price", 0.0)
    }

    //Hämta en aktivitet - visa ut den i DOM:en
    let response = await fetch(`https://bored.api.lewagon.com/api/activity?${params}`);
    let activity = await response.json();

    document.querySelector(".activity-container").innerHTML = `
        <h2>${activity.activity}</h2>
        <p>Participants: ${activity.participants}</p>
        <p>Type: ${activity.type}</p>
        <p>Price: ${activity.price}</p>
    `
}


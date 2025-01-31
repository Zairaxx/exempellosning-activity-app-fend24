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

    //Spara aktivitet i localStorage
    localStorage.setItem("activity", JSON.stringify(activity));

    //Spara filterOptions i localStorage

    let options = {
        type,
        participants,
        free
    }

    console.log(options);

    localStorage.setItem("options", JSON.stringify(options));

    document.querySelector(".activity-container").innerHTML = `
        <h2>${activity.activity}</h2>
        <p>Participants: ${activity.participants}</p>
        <p>Type: ${activity.type}</p>
        <p>Price: ${activity.price}</p>
    `
}

const onLoad = () => {

    //Kolla om det finns options från senaste besöket

    if(localStorage.getItem("options")){

        let options = JSON.parse(localStorage.getItem("options"));
        //Participants
        let previousSelected = document.querySelector(`[name='participants'][value="${options.participants}"]`)
        previousSelected.checked = true

        //Type
        document.querySelector("select#activityType").value = options.type

        //Free
        document.querySelector("#free").checked = options.free;
    }

    //Kolla om det finns aktivitet i localStorage
    if(localStorage.getItem("activity")){
        let activity = JSON.parse(localStorage.getItem("activity"));
     
        //Skriva ut aktivitet i DOM:en
        document.querySelector(".activity-container").innerHTML = `
        <h2>${activity.activity}</h2>
        <p>Participants: ${activity.participants}</p>
        <p>Type: ${activity.type}</p>
        <p>Price: ${activity.price}</p>
    `
    }
    
}

onLoad();
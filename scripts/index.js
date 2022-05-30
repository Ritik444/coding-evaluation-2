// Add the coffee to local storage with key "coffee"
let url = "https://masai-mock-api.herokuapp.com/coffee/menu/"
async function getData() {
    
    try{
        let res = await fetch(url)

        let data = await res.json();
        append(data);
    
        console.log(data)
    } catch (err){
        console.log(err)
    }

    
}

getData();

async function append(data) {
    let div = document.getElementById("menu");
    // let bt = document.getElementById("add_to_bucket")
            let img = document.createElement("img")
            img.src = data.image;
        
            let p1 = document.createElement("p")
            p1.innerText = data.title;
        
            let p2  = document.createElement("p")
            p2.innerText = data.price
        
            // let btn = document.createElement("button")
            // btn.innerText = "Add to Bucket";
            // bt.append(btn);
        
            div.append(img,p1,p2)
    
        
    

}


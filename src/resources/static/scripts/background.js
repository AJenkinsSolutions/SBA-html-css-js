//holds logic assioctaed with custom animated background 
console.log("Background.js");

window.addEventListener('DOMContentLoaded', () => {
console.log('DEBUG: "DOMCONTENT\"\ Loaded');

const BODY = document.body;
const CLOUD_COUNT = 20;


function cloudSpawner(numberOfClouds){

    for(let i=0; i<CLOUD_COUNT; i++){
        let cloud = document.createElement("img");
        cloud.setAttribute("class", "cloud");
        cloud.setAttribute("src", "../static/images/cloud1.png");
        BODY.appendChild(cloud);
    }
}


function collisionDetection(element1, element2){
    //Get both elements Trigger Zones [DOMRect]object
    //Gets size and position 
    // * inverse logic * not coliding*
    //Return: False 'If any conditon is true there is no collision' 
    //Return True 'if all are false'
    let rect1 = element1.getBoundingClientRect();
    let rect2 = element2.getBoundingClientRect();
    return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);

}

function setCloudPositonAttribute(cloudsList){
    for(let i=0; i < cloudsList.length; i++){

        cloudsList[i].style.position = "absolute";

        do{
            //Generate ranom postion inside the viewPort
            let xPos = Math.floor(Math.random() * window.innerWidth + 10);
            let yPos = Math.floor(Math.random() * window.innerHeight + 10);
            // set Position
            cloudsList[i].style.left= xPos + "px";
            cloudsList[i].style.top = yPos + "px";
            
            //some detects if it at least one element in array passes
        }while (Array.prototype.slice.call(cloudsList).some(function(element){
            //not collding
            return element !== cloudsList[i] && collisionDetection(element, cloudsList[i]);
        }));

    }


}




cloudSpawner(CLOUD_COUNT);
let clouds = document.querySelectorAll(".cloud");
setCloudPositonAttribute(clouds);




// console.log(clouds.length);




})

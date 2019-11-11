function checkArray(ar,e) {
    for(k in ar){
        if(ar[k] === e) return true;
    }
    return false;
}

console.log("============ Q1 ============")
console.log(checkArray([1,2,3,5,7],4));
console.log(checkArray([1,2,3,5,7,11],7));

function convertToSeconds(h,m) {
    return((h*60*60)+(m*60));
}

console.log("============ Q2 ============")
console.log(convertToSeconds(1,3));

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

console.log("============ Q3 ============")
console.log(aquarium.capacityInGallons);
aquarium.numberOfRocks += 2;
console.log(aquarium.numberOfRocks);
console.log(aquarium.fish[2]);//Clown
console.log(aquarium.fish[1].size);//Puffer
aquarium.fish[0].size = "4 inches";
console.log(aquarium.fish[0].size);//Goldfish
aquarium.fish[3] = {
    type: 'starfish' ,
    size: '5 inches',
    color: 'blue'
};
console.log(aquarium.fish[3]);//Starfish
console.log(aquarium);//All Fish

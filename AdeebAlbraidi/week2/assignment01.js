

let bottleCount = 99;

while(bottleCount > 0)
{
    console.log(`${bottleCount} ${(bottleCount > 1) ? "bottles" : "bottle"} of beer on the wall, ${bottleCount} ${(bottleCount > 1) ? "bottles" : "bottle"} of beer.`);
    --bottleCount;
    console.log(`Take one down and pass it around, ${(bottleCount == 0) ? "no more" : bottleCount} ${(bottleCount == 1) ? "bottle" : "bottles"} of beer on the wall.\n\n`);
}

console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
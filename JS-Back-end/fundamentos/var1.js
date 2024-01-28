// Uma variavel var ficara visivel dentro e fora do blococ {}.
// Isso não acontece usando var com função.

{
    {
        {
            { 
                var sera = 'Será ???'
                console.log(sera); 
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
}

teste();
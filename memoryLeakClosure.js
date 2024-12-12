function createHeavyDataHandler() {
    let largeData = new Array(1000000).fill(0); 

    return {
        processData: function () {
            if (largeData) {
                console.log("Processing data of size:", largeData.length);
            } else {
                console.log("No data to process.");
            }
        },
        clearData: function () {
            console.log("Clearing data");
            largeData = null; 
        }
    };
}

const handler = createHeavyDataHandler();

handler.processData(); 
handler.clearData();   
handler.processData();

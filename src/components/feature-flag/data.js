
const dummyApiResponse = {
    showLightAndDarkMode : false,
    showTicTacToeBoard : true,
    showRandomColorGenerator: true,
    showAccordian: false,
    showTreeView: true
}


function featureFlagsDataServiceCall() {

    return new Promise((resolve, reject)=>{
        if(dummyApiResponse) {
            setTimeout(()=>{
                resolve(dummyApiResponse)
            },500)
        }
        else{
            reject("Some Error Occured")
        }
    })
}

export default featureFlagsDataServiceCall;
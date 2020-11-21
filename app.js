let parkList = document.querySelector('.parkList');


const myNPS = async () => {
    try {
        const response = await axios.get('https://developer.nps.gov/api/v1/parks?stateCode=fl?&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C');
        console.log(response);
        const {data} = response.data;
        for(let park of data) {
            let newLI = document.createElement('li');
            let lineBreak = document.createElement('br');
            newLI.append(park.name + '==> ' + park.description);
            newLI.classList.add('important');
            parkList.append(newLI);
            parkList.append(lineBreak);
        }
    } catch(error) {
        console.log(error);
    }
};

myNPS();
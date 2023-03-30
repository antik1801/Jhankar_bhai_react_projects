const addToDbPlayers = (id) =>{
    let playersExistance = getPlayersInfo();
    const quantity = playersExistance [id]
    if (!quantity) {
        playersExistance[id] = 1;
    } else {

    }
    localStorage.setItem('players',JSON.stringify(playersExistance));
}
const getPlayersInfo = () =>{
    let playersList = {};
    const storedPlayersList = localStorage.getItem('players');
    if (storedPlayersList) {
        playersList = JSON.parse(storedPlayersList);
    } 
    return playersList;
}
const deleteLocalStorage = () =>{
    localStorage.removeItem('players');
}

const removeFromDb = id =>{
    const playersList = getPlayersInfo ();
    if (id in playersList) {
        delete playersList [id];
        localStorage.setItem('players',JSON.stringify(playersList));
    }
}
export{
    getPlayersInfo,
    addToDbPlayers,
    removeFromDb,
    deleteLocalStorage,
}
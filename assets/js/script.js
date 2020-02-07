const block = document.getElementById('block');
const previousHash = document.getElementById('previous-hash');
const currentHash = document.getElementById('current-hash');
const newBlockData = document.getElementById('new-block-data');
const addBlock = document.getElementById('add-block');


let blockCount = 0;
const createCard = () => {
    if(newBlockData.value != "") {
        blockCount++;
        addBlock.parentNode.removeChild(addBlock);
        let clone = block.cloneNode(true);        
        clone.querySelector('h3').innerHTML = `Block #${blockCount}`;
        document.body.appendChild(clone);
        document.body.appendChild(addBlock);
    }
}

const generateHashes = () => {
    previousHash.value = 'teste';
}
const json = require('./blocks.json');

const blockList = document.getElementById('block-list');
const previousHash = document.getElementById('previous-hash');
const currentHash = document.getElementById('current-hash');
const dataInput = document.getElementById('block-data');
const addblockButton = document.getElementById('addblock-btn');
const block = document.getElementById('block');
const addBlock = document.getElementById('add-block');


window.addEventListener('load', () => setCurrentHash(dataInput.value));

dataInput.addEventListener('input', () => setCurrentHash(dataInput.value));

addblockButton.addEventListener('click', createNewBlock);

function generateHash(value) {
    return (
        require("crypto")
        .createHash("sha256")
        .update(value)
        .digest("hex")
    )
}

function setCurrentHash(inputValue) {
    currentHash.innerHTML = generateHash(inputValue);
}

function setPreviousHash() {
    //TODO    
}

function updateHash() {
    json.map((value) => setCurrentHash(value));
}

let blockCount = 0;
function createNewBlock() {
    const newBlockData = document.getElementById('new-block-data');    
    if(newBlockData.value != "") {
        blockCount++;
        let clone = block.cloneNode(true);
        clone.querySelector('h3').innerHTML = `Block #${blockCount}`;
        clone.querySelector('input').value = newBlockData.value;        
        blockList.appendChild(clone);
        json.push(newBlockData.value);
        updateHash();
    }
}
const block = document.getElementById('block');
const previousHash = document.getElementById('previous-hash');
const currentHash = document.getElementById('current-hash');
const newBlockData = document.getElementById('new-block-data');
const addBlock = document.getElementById('add-block');


let blockCount = 0;
function createBlock() {
    if(newBlockData.value != "") {
        blockCount++;
        addBlock.parentNode.removeChild(addBlock);
        let clone = block.cloneNode(true);        
        clone.querySelector('h3').innerHTML = `Block #${blockCount}`;
        clone.querySelector('input').value = newBlockData.value;
        clone.querySelector('label').className = 'display-none';
        document.body.appendChild(clone);
        document.body.appendChild(addBlock);
    }
};
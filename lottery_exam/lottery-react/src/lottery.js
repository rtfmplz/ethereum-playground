import web3 from './web3';

//https://rinkeby.etherscan.io/address/0xb7ef2d5431c605ec71c589d71fdfe30594dec615
const address = '0xB7ef2d5431c605Ec71c589d71fDfE30594deC615';

const abi = [
  {
    "constant": true,
    "inputs": [
      
    ],
    "name": "manager",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      
    ],
    "name": "pickWinner",
    "outputs": [
      
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      
    ],
    "name": "getPlayers",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      
    ],
    "name": "enter",
    "outputs": [
      
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "players",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];



export default new web3.eth.Contract(abi, address);

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'rail squirrel sunset utility bronze rigid burst acoustic grant beach service embrace',
  'https://rinkeby.infura.io/v3/7ba6a62926174fa2b7008ef527162ca1' //from Infura
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode })
    .send({ from: accounts[0] });

  console.log(interface);	
  console.log('Contract deployed to', result.options.address);
};
deploy();

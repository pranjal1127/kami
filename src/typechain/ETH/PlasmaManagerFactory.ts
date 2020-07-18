/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { PlasmaManager } from './PlasmaManager';

export class PlasmaManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PlasmaManager> {
    return super.deploy(overrides || {}) as Promise<PlasmaManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PlasmaManager {
    return super.attach(address) as PlasmaManager;
  }
  connect(signer: Signer): PlasmaManagerFactory {
    return super.connect(signer) as PlasmaManagerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PlasmaManager {
    return new Contract(address, _abi, signerOrProvider) as PlasmaManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_startBlockNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_bunchDepth',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_bunchIndex',
        type: 'uint256',
      },
    ],
    name: 'NewBunchHeader',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getAllSigners',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllValidators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_bunchIndex',
        type: 'uint256',
      },
    ],
    name: 'getBunchHeader',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'startBlockNumber',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'bunchDepth',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'transactionsMegaRoot',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'receiptsMegaRoot',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'lastBlockHash',
            type: 'bytes32',
          },
        ],
        internalType: 'struct PlasmaManager.BunchHeader',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNextStartBlockNumber',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_validatorIndex',
        type: 'uint256',
      },
    ],
    name: 'getValidator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_validator',
        type: 'address',
      },
    ],
    name: 'isValidator',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastBunchIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_validators',
        type: 'address[]',
      },
    ],
    name: 'setInitialValues',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_signedHeader',
        type: 'bytes',
      },
    ],
    name: 'submitBunchHeader',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract ERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ed8806100606000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063d42f2f3511610066578063d42f2f3514610147578063eb60a11914610165578063f3513a3714610195578063facd743b146101b3578063fc0c546a146101e35761009e565b806324f8ecec146100a35780632ceea82a146100bf5780634eee0890146100dd57806376f5e6da146100fb578063b5d8962714610117575b600080fd5b6100bd60048036038101906100b891906114ef565b610201565b005b6100c761048c565b6040516100d49190611c7f565b60405180910390f35b6100e5610499565b6040516100f29190611c7f565b60405180910390f35b61011560048036038101906101109190611543565b610509565b005b610131600480360381019061012c9190611584565b610939565b60405161013e9190611a71565b60405180910390f35b61014f61097a565b60405161015c9190611a8c565b60405180910390f35b61017f600480360381019061017a9190611584565b610a08565b60405161018c9190611c64565b60405180910390f35b61019d610a6f565b6040516101aa9190611a8c565b60405180910390f35b6101cd60048036038101906101c891906114c6565b610afd565b6040516101da9190611aae565b60405180910390f35b6101eb610b53565b6040516101f89190611ac9565b60405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610290576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028790611ae4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461039757600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610355576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034c90611b64565b60405180910390fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600081511115610488576000600380549050146103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090611c24565b60405180910390fd5b60008090505b815181101561046f57600180600084848151811061040957fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806001019150506103ef565b5080600390805190602001906104869291906112a6565b505b5050565b6000600580549050905090565b60008060058054905014156104b15760009050610506565b6005600160058054905003815481106104c657fe5b90600052602060002090600502016001015460020a6005600160058054905003815481106104f057fe5b9060005260206000209060050201600001540190505b90565b606061051c61051783610b79565b610ba7565b9050606061053d8260008151811061053057fe5b6020026020010151610ba7565b90506005815114610583576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057a90611b24565b60405180910390fd5b61058b611330565b6040518060a001604052806105b3846000815181106105a657fe5b6020026020010151610cd1565b81526020016105d5846001815181106105c857fe5b6020026020010151610cd1565b81526020016105f7846002815181106105ea57fe5b6020026020010151610d78565b81526020016106198460038151811061060c57fe5b6020026020010151610d78565b815260200161063b8460048151811061062e57fe5b6020026020010151610d78565b8152509050610648610499565b81600001511461068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068490611be4565b60405180910390fd5b60606106ac8460008151811061069f57fe5b6020026020010151610d8d565b905060006040518060400160405280600281526020017f19970000000000000000000000000000000000000000000000000000000000008152507f6f3a1e66e989a1cf337b9dd2ce4c98a5e78763cf9f9bdaac5707038c66a4d74e8360405160200161071a93929190611a3c565b604051602081830303815290604052805190602001209050600080600190505b865181101561081457606061076188838151811061075457fe5b6020026020010151610e1a565b90506000806107708684610ef3565b91509150816107b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ab90611c04565b60405180910390fd5b6107bd81610afd565b6107fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f390611c44565b60405180910390fd5b8480600101955050505050808060010191505061073a565b5061082e6002600380549050610f8b90919063ffffffff16565b610842600383610f8b90919063ffffffff16565b11610882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087990611ba4565b60405180910390fd5b600060058054905090506005859080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015550507f435520ea9b14c682112acef5bc8466234d75b18dce73c44a78d905139def419d856000015186602001518360405161092793929190611c9a565b60405180910390a15050505050505050565b60006003828154811061094857fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b606060048054806020026020016040519081016040528092919081815260200182805480156109fe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116109b4575b5050505050905090565b610a10611330565b60058281548110610a1d57fe5b90600052602060002090600502016040518060a0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820154815250509050919050565b60606003805480602002602001604051908101604052809291908181526020018280548015610af357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610aa9575b5050505050905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b81611368565b600060208301905060405180604001604052808451815260200182815250915050919050565b6060610bb282610ffb565b610bf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be890611b44565b60405180910390fd5b6000610bfc83611049565b905060608167ffffffffffffffff81118015610c1757600080fd5b50604051908082528060200260200182016040528015610c5157816020015b610c3e611368565b815260200190600190039081610c365790505b5090506000610c6385602001516110ba565b8560200151019050600080600090505b84811015610cc457610c8483611143565b9150604051806040016040528083815260200184815250848281518110610ca757fe5b602002602001018190525081830192508080600101915050610c73565b5082945050505050919050565b6000808260000151118015610ceb57506021826000015111155b610d2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2190611bc4565b60405180910390fd5b6000610d3983602001516110ba565b90506000818460000151039050600080838660200151019050805191506020831015610d6c57826020036101000a820491505b81945050505050919050565b6000610d8382610cd1565b60001b9050919050565b606080826000015167ffffffffffffffff81118015610dab57600080fd5b506040519080825280601f01601f191660200182016040528015610dde5781602001600182028036833780820191505090505b509050600081511415610df45780915050610e15565b6000816020019050610e0f84602001518286600001516111fb565b81925050505b919050565b60606000826000015111610e63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5a90611b04565b60405180910390fd5b6000610e7283602001516110ba565b9050600081846000015103905060608167ffffffffffffffff81118015610e9857600080fd5b506040519080825280601f01601f191660200182016040528015610ecb5781602001600182028036833780820191505090505b5090506000816020019050610ee78487602001510182856111fb565b81945050505050919050565b60008060008060006041865114610f165760008080905094509450505050610f84565b6020860151925060408601519150606086015160001a9050601b8160ff161015610f4157601b810190505b601b8160ff1614158015610f595750601c8160ff1614155b15610f705760008080905094509450505050610f84565b610f7c87828585611262565b945094505050505b9250929050565b600080831415610f9e5760009050610ff5565b6000828402905082848281610faf57fe5b0414610ff0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe790611b84565b60405180910390fd5b809150505b92915050565b600080826000015114156110125760009050611044565b60008083602001519050805160001a915060c060ff168260ff16101561103d57600092505050611044565b6001925050505b919050565b6000808260000151141561106057600090506110b5565b6000809050600061107484602001516110ba565b84602001510190506000846000015185602001510190505b808210156110ae5761109d82611143565b82019150828060010193505061108c565b8293505050505b919050565b600080825160001a9050608060ff168110156110da57600091505061113e565b60b860ff168110806110ff575060c060ff1681101580156110fe575060f860ff1681105b5b1561110e57600191505061113e565b60c060ff1681101561112e5760018060b80360ff1682030191505061113e565b60018060f80360ff168203019150505b919050565b6000806000835160001a9050608060ff1681101561116457600191506111f1565b60b860ff16811015611181576001608060ff1682030191506111f0565b60c060ff168110156111b15760b78103600185019450806020036101000a855104600182018101935050506111ef565b60f860ff168110156111ce57600160c060ff1682030191506111ee565b60f78103600185019450806020036101000a855104600182018101935050505b5b5b5b8192505050919050565b60008114156112095761125d565b5b602060ff1681106112395782518252602060ff1683019250602060ff1682019150602060ff168103905061120a565b6000600182602060ff16036101000a03905080198451168184511681811785525050505b505050565b60008060008060405188815287602082015286604082015285606082015260208160808360006001610bb8f192508051915050818193509350505094509492505050565b82805482825590600052602060002090810192821561131f579160200282015b8281111561131e5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906112c6565b5b50905061132c9190611382565b5090565b6040518060a0016040528060008152602001600081526020016000801916815260200160008019168152602001600080191681525090565b604051806040016040528060008152602001600081525090565b6113c291905b808211156113be57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101611388565b5090565b90565b6000813590506113d481611e74565b92915050565b600082601f8301126113eb57600080fd5b81356113fe6113f982611cfe565b611cd1565b9150818183526020840193506020810190508385602084028201111561142357600080fd5b60005b83811015611453578161143988826113c5565b845260208401935060208301925050600181019050611426565b5050505092915050565b600082601f83011261146e57600080fd5b813561148161147c82611d26565b611cd1565b9150808252602083016020830185838301111561149d57600080fd5b6114a8838284611e28565b50505092915050565b6000813590506114c081611e8b565b92915050565b6000602082840312156114d857600080fd5b60006114e6848285016113c5565b91505092915050565b6000806040838503121561150257600080fd5b6000611510858286016113c5565b925050602083013567ffffffffffffffff81111561152d57600080fd5b611539858286016113da565b9150509250929050565b60006020828403121561155557600080fd5b600082013567ffffffffffffffff81111561156f57600080fd5b61157b8482850161145d565b91505092915050565b60006020828403121561159657600080fd5b60006115a4848285016114b1565b91505092915050565b60006115b983836115c5565b60208301905092915050565b6115ce81611db2565b82525050565b6115dd81611db2565b82525050565b60006115ee82611d62565b6115f88185611d85565b935061160383611d52565b8060005b8381101561163457815161161b88826115ad565b975061162683611d78565b925050600181019050611607565b5085935050505092915050565b61164a81611dc4565b82525050565b61165981611dd0565b82525050565b61167061166b82611dd0565b611e6a565b82525050565b600061168182611d6d565b61168b8185611d96565b935061169b818560208601611e37565b80840191505092915050565b6116b081611e04565b82525050565b60006116c3601e83611da1565b91507f504c41534d413a204f6e6c79206465706c6f7965722063616e2063616c6c00006000830152602082019050919050565b6000611703601483611da1565b91507f524c503a206c656e206973206e6f7420677420300000000000000000000000006000830152602082019050919050565b6000611743601883611da1565b91507f504c41534d413a20696e76616c69642070726f706f73616c00000000000000006000830152602082019050919050565b6000611783601583611da1565b91507f524c503a206974656d206973206e6f74206c69737400000000000000000000006000830152602082019050919050565b60006117c3601e83611da1565b91507f504c41534d413a20546f6b656e206164727320616c72656164792073657400006000830152602082019050919050565b6000611803601f83611da1565b91507f536166654d6174683a204d756c7469706c696361746e206f766572666c6f77006000830152602082019050919050565b6000611843601a83611da1565b91507f504c41534d413a206e6f74203636252076616c696461746f72730000000000006000830152602082019050919050565b6000611883601d83611da1565b91507f524c503a206c656e206e6f74206265747765656e203020616e642033330000006000830152602082019050919050565b60006118c3601f83611da1565b91507f504c41534d413a20696e76616c696420737461727420626c6f636b206e6f2e006000830152602082019050919050565b6000611903602083611da1565b91507f504c41534d413a2065637265636f7665722073686f756c6420737563636573736000830152602082019050919050565b6000611943601e83611da1565b91507f504c41534d413a2056616c696461746f727320616c72656164792073657400006000830152602082019050919050565b6000611983601d83611da1565b91507f504c41534d413a20696e76616c69642076616c696461746f72207369670000006000830152602082019050919050565b60a0820160008201516119cc6000850182611a1e565b5060208201516119df6020850182611a1e565b5060408201516119f26040850182611650565b506060820151611a056060850182611650565b506080820151611a186080850182611650565b50505050565b611a2781611dfa565b82525050565b611a3681611dfa565b82525050565b6000611a488286611676565b9150611a54828561165f565b602082019150611a648284611676565b9150819050949350505050565b6000602082019050611a8660008301846115d4565b92915050565b60006020820190508181036000830152611aa681846115e3565b905092915050565b6000602082019050611ac36000830184611641565b92915050565b6000602082019050611ade60008301846116a7565b92915050565b60006020820190508181036000830152611afd816116b6565b9050919050565b60006020820190508181036000830152611b1d816116f6565b9050919050565b60006020820190508181036000830152611b3d81611736565b9050919050565b60006020820190508181036000830152611b5d81611776565b9050919050565b60006020820190508181036000830152611b7d816117b6565b9050919050565b60006020820190508181036000830152611b9d816117f6565b9050919050565b60006020820190508181036000830152611bbd81611836565b9050919050565b60006020820190508181036000830152611bdd81611876565b9050919050565b60006020820190508181036000830152611bfd816118b6565b9050919050565b60006020820190508181036000830152611c1d816118f6565b9050919050565b60006020820190508181036000830152611c3d81611936565b9050919050565b60006020820190508181036000830152611c5d81611976565b9050919050565b600060a082019050611c7960008301846119b6565b92915050565b6000602082019050611c946000830184611a2d565b92915050565b6000606082019050611caf6000830186611a2d565b611cbc6020830185611a2d565b611cc96040830184611a2d565b949350505050565b6000604051905081810181811067ffffffffffffffff82111715611cf457600080fd5b8060405250919050565b600067ffffffffffffffff821115611d1557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611d3d57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611dbd82611dda565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611e0f82611e16565b9050919050565b6000611e2182611dda565b9050919050565b82818337600083830152505050565b60005b83811015611e55578082015181840152602081019050611e3a565b83811115611e64576000848401525b50505050565b6000819050919050565b611e7d81611db2565b8114611e8857600080fd5b50565b611e9481611dfa565b8114611e9f57600080fd5b5056fea2646970667358221220808e626255fa5459aa2cdf23f73b70b968eaeeb9e91446379de280e12fcb4f1764736f6c634300060a0033';
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{98064:function(e,t,n){n.d(t,{I:function(){return u}});var a=n(85893),i=n(39618),s=n(63029),r=n(62971);let p=[{accessorKey:"operator",header:"Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],u=e=>{let{recipients:t,type:n}=e,u=(0,s.Z)(t.map(e=>e.address));return"Principal & Rewards"===n?(0,a.jsx)(i.iA,{columns:[...p,{accessorKey:"principal",header:"Principal",css:{width:"70px"}}],rows:t.map((e,t)=>({operator:(0,a.jsx)(r.M,{ensName:u[t],address:e.address}),split:"".concat(e.split||e.percentAllocation," %"),principal:"".concat(Number(e.split||e.percentAllocation)/100*32)}))}):(0,a.jsx)(i.iA,{columns:p,rows:t.map((e,t)=>({operator:(0,a.jsx)(r.M,{ensName:u[t],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}))})}},23500:function(e,t,n){n.d(t,{Kv:function(){return k},Sf:function(){return g},s8:function(){return h},KZ:function(){return f},Np:function(){return M},h_:function(){return R}});var a=n(8198),i=n(9279),s=n(64146),r=n(19485),p=n(34858),u={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"Invalid_Token",type:"error"},{inputs:[],name:"Invalid__Recipients",type:"error"},{inputs:[{internalType:"uint256",name:"threshold",type:"uint256"}],name:"Invalid__ThresholdTooLarge",type:"error"},{inputs:[],name:"Invalid__ZeroThreshold",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owr",type:"address"},{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"recoveryAddress",type:"address"},{indexed:!1,internalType:"address",name:"principalRecipient",type:"address"},{indexed:!1,internalType:"address",name:"rewardRecipient",type:"address"},{indexed:!1,internalType:"uint256",name:"threshold",type:"uint256"}],name:"CreateOWRecipient",type:"event"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"recoveryAddress",type:"address"},{internalType:"address",name:"principalRecipient",type:"address"},{internalType:"address",name:"rewardRecipient",type:"address"},{internalType:"uint256",name:"threshold",type:"uint256"}],name:"createOWRecipient",outputs:[{internalType:"contract OptimisticWithdrawalRecipient",name:"owr",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owrImpl",outputs:[{internalType:"contract OptimisticWithdrawalRecipient",name:"",type:"address"}],stateMutability:"view",type:"function"}]},o={abi:[{constant:!0,inputs:[],name:"getCurrentBlockTimestamp",outputs:[{name:"timestamp",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{components:[{name:"target",type:"address"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate",outputs:[{name:"blockNumber",type:"uint256"},{name:"returnData",type:"bytes[]"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getLastBlockHash",outputs:[{name:"blockHash",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getEthBalance",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getCurrentBlockDifficulty",outputs:[{name:"difficulty",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getCurrentBlockGasLimit",outputs:[{name:"gaslimit",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getCurrentBlockCoinbase",outputs:[{name:"coinbase",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"blockNumber",type:"uint256"}],name:"getBlockHash",outputs:[{name:"blockHash",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"}]},d=n(4010),l=n(9324),c=n(80050);let y=new a.vU(d.Mt),m=new a.vU(u.abi);new a.vU(o.abi),new a.vU([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidDistribution_TooLarge",type:"error"},{inputs:[],name:"InvalidTokenRecovery_InvalidRecipient",type:"error"},{inputs:[],name:"InvalidTokenRecovery_OWRToken",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"principalPayout",type:"uint256"},{indexed:!1,internalType:"uint256",name:"rewardPayout",type:"uint256"},{indexed:!1,internalType:"uint256",name:"pullFlowFlag",type:"uint256"}],name:"DistributeFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ReceiveETH",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"recoveryAddressToken",type:"address"},{indexed:!1,internalType:"address",name:"recipient",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"RecoverNonOWRecipientFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdrawal",type:"event"},{inputs:[],name:"claimedPrincipalFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"distributeFunds",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"distributeFundsPull",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"distributedFunds",outputs:[{internalType:"uint128",name:"",type:"uint128"}],stateMutability:"view",type:"function"},{inputs:[],name:"fundsPendingWithdrawal",outputs:[{internalType:"uint128",name:"",type:"uint128"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getPullBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTranches",outputs:[{internalType:"address",name:"principalRecipient",type:"address"},{internalType:"address",name:"rewardRecipient",type:"address"},{internalType:"uint256",name:"amountOfPrincipalStake",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"nonOWRToken",type:"address"},{internalType:"address",name:"recipient",type:"address"}],name:"recoverFunds",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"recoveryAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"pure",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}]);let b=i.d,w=i.d,v=i.d;async function T(e,t){let n=new s.Contract(l.WF,o.abi,t),a=await n.callStatic.aggregate(e);console.log(a,"resultt");let i=await n.aggregate(e),r=await i.wait();return r}async function f(e,t,n,a){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T,s=[];e.token=b,e.recoveryAddress=b,t.distributorFee=l.Uu;try{var r,p,u,o,d,c,w,v;let T=(p=t.accounts,u=t.percentAllocations,o=t.distributorFee,y.encodeFunctionData("createSplit",[p,u,o,b])),f=(d=e.token,c=e.recoveryAddress,w=e.principalRecipient,v=e.amountOfPrincipalStake,m.encodeFunctionData("createOWRecipient",[d,c,w,n,v]));s.push({target:l.tm,callData:T},{target:l.eq,callData:f});let g=await i(s,a),h=y.parseLog({topics:g.logs[0].topics,data:g.logs[0].data}),k=m.parseLog({topics:g.logs[1].topics,data:g.logs[1].data});return{owrAddress:null===(r=k.args)||void 0===r?void 0:r.owr,splitAddress:h.args.split}}catch(e){throw Error(e)}}async function g(e,t,n,a){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{let r=new s.Contract(l.eq,u.abi,a),p=await r.callStatic.createOWRecipient(v,b,e,t,n);if(console.log(p,"ExpectedOWRContractAddress"),!i){let a=await r.createOWRecipient(v,b,e,t,n);await a.wait()}return p}catch(e){throw Error(e)}}async function h(e,t,n){try{var a,i;let s=await n.createSplit(e,t,l.Uu,w),p=await s.wait(),u=r.getAddress(null===(a=p.events[0])||void 0===a?void 0:null===(i=a.args)||void 0===i?void 0:i.split);return u}catch(e){throw Error(e)}}async function k(e,t){try{let n=await (0,c.er)({chainId:t,splitId:e});if(console.log(n,"splitMetadata"),n)return!0;return!1}catch(e){return Error(e)}}let M=async e=>{let{chainId:t,splitId:n,provider:a}=e,s=new p.SplitsClient({chainId:t,provider:a,signer:a.getSigner(0)});try{let e=await s.distributeToken({splitId:n,token:i.d}),{transactionHash:t}=e.event;return t}catch(e){throw Error(e)}},R=async e=>{let{chainId:t,provider:n,address:a}=e,s=new p.SplitsClient({chainId:t,provider:n,signer:n.getSigner(0)});try{let e=await s.withdrawFunds({address:a,tokens:[i.d]}),{transactionHash:t}=e.event;return t}catch(e){throw Error(e)}}}}]);
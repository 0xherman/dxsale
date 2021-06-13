var n = "0x7163DF5c2a7D28F067B71a0505372e55f51E7358"
          , d = "0xc9904012e42C3613d181D0827Dcb3F7FD3205822"
          , c = "0xC7065e692D2caCF7173C7BC08c6849eb9Ef48b38"
          , i = "0x58C38bF08BD023824ABD05Db9a4e4CAb991E447C"
          , b = "0x1C8aB27b538b5e43c151460cBc6D271cB9EeE4aF"
          , f = "0x9c55c9E02295B3E8C00501358E8289afc8b39edF"
          , s = "0xc5fE280422117461af9b953Da413e9627E3b9a40"
          , p = "0x9c55c9E02295B3E8C00501358E8289afc8b39edF"
          , u = "0x67491cFbbD29DEAA1a05F952Bc069CdAA5919711"
          , C = "0x3F051B8ba7AD8CCBff909b9F8d5D5fe967B9F6fe"
          , F = "0xd5F1593D585cbAC2d5bCae2dbae4fc159375C6dD"
          , B = "0x19641A259afAF9Bc92Ee02C2BA4c672a80B931B6"
          , D = "0xcd5fD649Da9E0563BbbdD555ab6006Dc9a596b49"
          , E = ""
          , A = "0xcd5fD649Da9E0563BbbdD555ab6006Dc9a596b49"
          , y = ""
          , x = [{
            inputs: [{
                internalType: "address",
                name: "_presaleDappAddr",
                type: "address"
            }, {
                internalType: "address",
                name: "_filterAddress",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "BlockLPWithdrawMainDapp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "BlockLPWithdrawVoter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newAirdropAddress",
                type: "address"
            }],
            name: "ChangeAirdropAddr",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newAirdropFee",
                type: "uint256"
            }],
            name: "ChangeAirdropFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newFilterAddress",
                type: "address"
            }],
            name: "ChangeFilterAddr",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newteamAccAddress",
                type: "address"
            }],
            name: "ChangeTeamAcc",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newVoterAddress",
                type: "address"
            }],
            name: "ChangeVoterAddr",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "CheckBlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "string[10]",
                name: "_tokenInfo",
                type: "string[10]"
            }, {
                internalType: "address",
                name: "tokenAddr",
                type: "address"
            }, {
                internalType: "uint256[4]",
                name: "start_end_gov_time",
                type: "uint256[4]"
            }, {
                internalType: "uint256[6]",
                name: "soft_hard_cap_rate_min_max_eth_GOV",
                type: "uint256[6]"
            }, {
                internalType: "uint256[3]",
                name: "uniswap_info_arr",
                type: "uint256[3]"
            }],
            name: "CreatePresaleDep",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "FilterAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PANCAKESWAP_ADDRESS",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PlatformAirdropAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "UnBlockLPWithdrawMainDapp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "UnBlockLPWithdrawVoter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "callFinalizeDG",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newFee",
                type: "uint256"
            }],
            name: "changeFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newRouter",
                type: "address"
            }, {
                internalType: "address",
                name: "newFactory",
                type: "address"
            }],
            name: "changeRouterAndFactoryAddr",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "uniPer",
                type: "uint256"
            }],
            name: "changeUniPercentage",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "checkTotalEthraisedOfPresale",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "factoryAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getNumberOfPresaleOwners",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "minUniPercentage",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "platformCallsFinalizeRefund",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "presaleAddrToOwnerAddr",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "presaleDappAddr",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "presaleOwnerToIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "presaleOwners",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "presale_security",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "presales",
            outputs: [{
                internalType: "bool",
                name: "exists",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "createdOn",
                type: "uint256"
            }, {
                internalType: "address",
                name: "presaleInfoAddr",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "governor",
                type: "address"
            }, {
                internalType: "bool",
                name: "active",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "startTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "endTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "govPercentage",
                type: "uint256"
            }, {
                internalType: "address",
                name: "uniswapDep",
                type: "address"
            }, {
                internalType: "uint256",
                name: "uniswapPercentage",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "uniswapRate",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "lp_locked",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "team_acc",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenAddrToIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenAddrToOwnerAddr",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tokenDappAddr",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tokenFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRaisedOnPlatform",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRefundedFromPlatform",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "voter",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "presaleToRefundFromOwnerAddress",
                type: "address"
            }],
            name: "voterCallsFinalizeRefund",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , r = [{
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_creatorAdress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_locktime",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            stateMutability: "payable",
            type: "fallback"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountTokenDesired",
                type: "uint256"
            }],
            name: "AddLiquidity",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "Approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "UNISWAP_ADDRESS",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "factoryAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "getpair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "refundUniLP",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "uniBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , o = "0x67491cFbbD29DEAA1a05F952Bc069CdAA5919711"
          , l = "0xdf17aC098Fa81373625e102061844C02ECCEc645"
          , m = "0x5D764143Aa6b98D7ad915C9b86b9Dfec778768f6"
          , T = "0xFE6dfA53fB574b06949160Dc5e31090C87afcB30"
          , w = "0x7EBF0deb916cc4Cc54859b528617F6bE8Dc669BA"
          , M = "0xadC5caC1E3CD46Fe8d5b98DB4Ea6eE241a19dCEE"
          , v = "0x3052b62d39624f341D44b195D2E4b865f074B656"
          , g = "0xdf17aC098Fa81373625e102061844C02ECCEc645"
          , k = ""
          , _ = "0xdf17aC098Fa81373625e102061844C02ECCEc645"
          , O = "";


          var presaleABI1 = [{
            inputs: [{
                internalType: "address",
                name: "_tokenOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "_presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }],
            name: "addFailure",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "_presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }],
            name: "addLive",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "_presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }],
            name: "addSuccess",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_mewMainDapp",
                type: "address"
            }],
            name: "changeMainDappAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "failedOwnerList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "failedPresaleList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "failedViaOwnerAddr",
            outputs: [{
                internalType: "bool",
                name: "finalized",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "finalizeTimeStamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "failedViaPresaleAddr",
            outputs: [{
                internalType: "bool",
                name: "finalized",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "finalizeTimeStamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "failedViaTokenAddr",
            outputs: [{
                internalType: "bool",
                name: "finalized",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "finalizeTimeStamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "failListIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getTokenOwnerFailure",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getTokenOwnerLive",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getTokenOwnerSuccess",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "liveListIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "liveOwnerList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "livePresaleList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "liveTokenList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "liveViaOwnerAddr",
            outputs: [{
                internalType: "bool",
                name: "created",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "createdTimestamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "liveViaPresaleAddr",
            outputs: [{
                internalType: "bool",
                name: "created",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "createdTimestamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "liveViaTokenAddr",
            outputs: [{
                internalType: "bool",
                name: "created",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "createdTimestamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "mainDapp",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "successfulViaOwnerAddr",
            outputs: [{
                internalType: "bool",
                name: "finalized",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "finalizeTimeStamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "successfulViaPresaleAddr",
            outputs: [{
                internalType: "bool",
                name: "finalized",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "finalizeTimeStamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "successfulViaTokenAddr",
            outputs: [{
                internalType: "bool",
                name: "finalized",
                type: "bool"
            }, {
                internalType: "address",
                name: "presaleOwner",
                type: "address"
            }, {
                internalType: "address",
                name: "presaleAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "finalizeTimeStamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "successListIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "successOwnerList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "successPresaleList",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenOwnerFailure",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenOwnerIndexFailure",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenOwnerIndexLive",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenOwnerIndexSuccess",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenOwnerLive",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenOwnerSuccess",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }];

        var presaleABI = [{
            constant: !0,
            inputs: [],
            name: "uniswapDapAddress",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "hasClosed",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "initialized",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }],
            name: "contributors",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "presaleEndTime",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "CheckTotalEthRaised",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "rate",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "cap",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "goal",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "weiRaised",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "contributor_addr",
                type: "address"
            }],
            name: "checkContributorValidity",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "claimTokens",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "closingTime",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "ReleaseFundsToPlatform",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "capReached",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "wallet",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "governorContract",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "test_tag",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "finalizeValid",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "goalReached",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "claimTokensTestView",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "isFinalized",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "owner",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "uniswapDep",
                type: "address"
            }, {
                name: "tokenFee",
                type: "uint256"
            }],
            name: "mintForUniswap",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "presaleStartTime",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "tokenFee",
                type: "uint256"
            }, {
                name: "_platAddrs",
                type: "address"
            }],
            name: "mintForPlatform",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "finalizeTimeout",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "claimRefund",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "openingTime",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "Preaslefinalized",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "minEthContribution",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "CheckHardCap",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "__finalizeInfo",
                type: "address[3]"
            }, {
                name: "validFinalize",
                type: "bool"
            }],
            name: "finalize",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "maxEthContribution",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "checkRate",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "CheckSoftCap",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }],
            name: "contributorsTracker",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_beneficiary",
                type: "address"
            }],
            name: "buyTokens",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "hasEnded",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "presaleCreator",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "tokenAdrs",
                type: "address"
            }],
            name: "seeDecimals",
            outputs: [{
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "vault",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                name: "token",
                type: "address"
            }, {
                name: "_rate",
                type: "uint256"
            }, {
                name: "start_end_time",
                type: "uint256[2]"
            }, {
                name: "targetUserWallet",
                type: "address"
            }, {
                name: "soft_hard_cap",
                type: "uint256[2]"
            }, {
                name: "_min_max_eth",
                type: "uint256[2]"
            }, {
                name: "_govUniPercentage",
                type: "uint256[2]"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            payable: !0,
            stateMutability: "payable",
            type: "fallback"
        }, {
            anonymous: !1,
            inputs: [],
            name: "Initialized",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                name: "startTime",
                type: "uint256"
            }, {
                indexed: !1,
                name: "endTime",
                type: "uint256"
            }, {
                indexed: !1,
                name: "oldStartTime",
                type: "uint256"
            }, {
                indexed: !1,
                name: "oldEndTime",
                type: "uint256"
            }],
            name: "TimesChanged",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [],
            name: "Finalized",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "purchaser",
                type: "address"
            }, {
                indexed: !0,
                name: "beneficiary",
                type: "address"
            }, {
                indexed: !1,
                name: "value",
                type: "uint256"
            }, {
                indexed: !1,
                name: "amount",
                type: "uint256"
            }],
            name: "TokenPurchase",
            type: "event"
        }]
          , P = [{
            constant: !1,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "__Creator",
                type: "address"
            }, {
                name: "__uniswapDep",
                type: "address"
            }],
            name: "close",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "enableRefunds",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "owner",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }],
            name: "deposited",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "investor",
                type: "address"
            }],
            name: "deposit",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "investor",
                type: "address"
            }],
            name: "refund",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                name: "_wallet",
                type: "address"
            }, {
                name: "_FEES",
                type: "uint256"
            }, {
                name: "_uniswapPercentage",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [],
            name: "Closed",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [],
            name: "RefundsEnabled",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "beneficiary",
                type: "address"
            }, {
                indexed: !1,
                name: "weiAmount",
                type: "uint256"
            }],
            name: "Refunded",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }]
          , R = [{
            constant: !0,
            inputs: [{
                name: "_addr",
                type: "address"
            }, {
                name: "_index",
                type: "uint256"
            }],
            name: "getFreezing",
            outputs: [{
                name: "_release",
                type: "uint64"
            }, {
                name: "_balance",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "transferrable",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "mintingFinished",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_spender",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_to",
                type: "address"
            }, {
                name: "_amount",
                type: "uint256"
            }, {
                name: "_until",
                type: "uint64"
            }],
            name: "mintAndFreeze",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                name: "_success",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_to",
                type: "address"
            }, {
                name: "_amount",
                type: "uint256"
            }],
            name: "mint",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "releaseAll",
            outputs: [{
                name: "tokens",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_spender",
                type: "address"
            }, {
                name: "_subtractedValue",
                type: "uint256"
            }],
            name: "decreaseApproval",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "releaseOnce",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "__name",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "finishMinting",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "__symbol",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "owner",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "__decimals",
            outputs: [{
                name: "_decimals",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                name: "_success",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "stop_mint",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "totalSupplyCheck",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_addr",
                type: "address"
            }],
            name: "freezingCount",
            outputs: [{
                name: "count",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_spender",
                type: "address"
            }, {
                name: "_addedValue",
                type: "uint256"
            }],
            name: "increaseApproval",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }, {
                name: "_spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "__AllowTokenTransfer",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "__basicTokenTransferable",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                name: "_name",
                type: "string"
            }, {
                name: "_symbol",
                type: "string"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                name: "amount",
                type: "uint256"
            }],
            name: "Mint",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [],
            name: "MintFinished",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                name: "release",
                type: "uint64"
            }, {
                indexed: !1,
                name: "amount",
                type: "uint256"
            }],
            name: "Freezed",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "owner",
                type: "address"
            }, {
                indexed: !1,
                name: "amount",
                type: "uint256"
            }],
            name: "Released",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }]
          , S = [{
            inputs: [{
                internalType: "string[10]",
                name: "_tokenInfoInput",
                type: "string[10]"
            }, {
                internalType: "address",
                name: "_presaleCreator",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [{
                internalType: "string[8]",
                name: "ChangeData",
                type: "string[8]"
            }],
            name: "ChangeInfoDG",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newDescription",
                type: "string"
            }],
            name: "changeDescription",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newGit",
                type: "string"
            }],
            name: "changeGit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newLogo",
                type: "string"
            }],
            name: "changeLogo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newReddit",
                type: "string"
            }],
            name: "changeReddit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newTelegram",
                type: "string"
            }],
            name: "changeTelegram",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newTwitter",
                type: "string"
            }],
            name: "changeTwitter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newUpdate",
                type: "string"
            }],
            name: "changeUpdate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "newWebsite",
                type: "string"
            }],
            name: "changeWebsite",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "infoManager",
            outputs: [{
                internalType: "bool",
                name: "exists",
                type: "bool"
            }, {
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                internalType: "string",
                name: "logo",
                type: "string"
            }, {
                internalType: "string",
                name: "website",
                type: "string"
            }, {
                internalType: "string",
                name: "github",
                type: "string"
            }, {
                internalType: "string",
                name: "twitter",
                type: "string"
            }, {
                internalType: "string",
                name: "reddit",
                type: "string"
            }, {
                internalType: "string",
                name: "telegram",
                type: "string"
            }, {
                internalType: "string",
                name: "description",
                type: "string"
            }, {
                internalType: "string",
                name: "update",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , z = "0xA5C62354c2a3ebE018cEf78Cb8Ec886C721386F6"
          , I = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "CheckBlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "addresses",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "counts",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "strings",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "address",
                name: "newData",
                type: "address"
            }],
            name: "updateAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "newData",
                type: "uint256"
            }],
            name: "updateCount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }, {
                internalType: "string",
                name: "newData",
                type: "string"
            }],
            name: "updateString",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , V = [{
            inputs: [{
                internalType: "address",
                name: "_feeToSetter",
                type: "address"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "token0",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "token1",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "pair",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "PairCreated",
            type: "event"
        }, {
            constant: !0,
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "allPairs",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "allPairsLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "tokenA",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenB",
                type: "address"
            }],
            name: "createPair",
            outputs: [{
                internalType: "address",
                name: "pair",
                type: "address"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeTo",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeToSetter",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "getPair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "_feeTo",
                type: "address"
            }],
            name: "setFeeTo",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "_feeToSetter",
                type: "address"
            }],
            name: "setFeeToSetter",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }]
          , U = "0xE98bc67b6439aC253faa668bE1E8C5D3AF0Fe2a2"
          , q = "0xb965BAE863F7Edc462c5064D41fE077493BBfE95"
          , N = "0x4B170Bb56032Ca068fF0Ee03943a9B9bc1554C9A"
          , W = "0x603dd7A2316069d2777E19Fdd529C885121D2B80"
          , G = "0xaB6A25CC60F5f6793c72Bbf957a2E501F1B43B7c"
          , H = "0x63d20bf9aa36b8be580b19b024dd8b62a9f11f3b"
          , K = "0x3052b62d39624f341D44b195D2E4b865f074B656"
          , J = "0xc149C1cae2fB1c310c3311dD7313E16b0EFC1B0a"
          , X = "0x37BC23FB5c83d73F208A77ecEC7EB818cEA60172"
          , Y = ""
          , j = ""
          , Q = "0xcC8f0B47Cf0E2d5428eDaE93d968eA927De626a2"
          , Z = "0xA3AbeAfA40CA4456c3fde2bAd46d592515dAE47b"
          , $ = "0xA3AbeAfA40CA4456c3fde2bAd46d592515dAE47b"
          , ee = "0x77D054b8e61A141CE51fc9Cc3E9E2C3B79F57809"
          , ae = "0xFAfceA08F86a1864F5D7D49fd2A2B3186C9489c0"
          , te = "0xfcc9c5df19626413e0c2803f81762d5007d31cab"
          , ne = "0x603dd7A2316069d2777E19Fdd529C885121D2B80"
          , de = "0x9b7e14288FA224ba2e2E67b59e0F8F0420D46f70"
          , ce = "0xCeB9e1b5373be1622d44E2Da949c935f05A5be25"
          , ie = ""
          , be = ""
          , fe = ""
          , se = ""
          , pe = ""
          , ue = ""
          , Ce = ""
          , Fe = ""
          , Be = ""
          , De = ""
          , Ee = ""
          , Ae = [{
            inputs: [{
                internalType: "string",
                name: "_tokenName",
                type: "string"
            }, {
                internalType: "string",
                name: "_tokenSymbol",
                type: "string"
            }, {
                internalType: "uint8",
                name: "_decimal",
                type: "uint8"
            }, {
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }],
            name: "CreateStandardToken",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "disableFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "enableFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "time",
                type: "uint256"
            }],
            name: "lock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "unlock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newFees",
                type: "uint256"
            }],
            name: "updateFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newAddress",
                type: "address"
            }],
            name: "updateFeesAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "BlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feesAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feesEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "geUnlockTime",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "individualTokenCreationCount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "standardTokenCreationFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenStorage",
            outputs: [{
                internalType: "bool",
                name: "exists",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "createdOn",
                type: "uint256"
            }, {
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenToOwner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "verifiedDxMint",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , ye = [{
            inputs: [{
                internalType: "string",
                name: "_tokenName",
                type: "string"
            }, {
                internalType: "string",
                name: "_tokenSymbol",
                type: "string"
            }, {
                internalType: "uint8",
                name: "_decimal",
                type: "uint8"
            }, {
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "creatorTxFees",
                type: "uint8"
            }, {
                internalType: "uint8",
                name: "creatorLiqFees",
                type: "uint8"
            }],
            name: "CreateCustomToken",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [],
            name: "getAllTokens",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "time",
                type: "uint256"
            }],
            name: "lock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "taxPercentage",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "LiqPercentage",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "minMxTxPercentage",
                type: "uint256"
            }],
            name: "tokenParamterUpdate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "unlock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "newfees",
                type: "uint256"
            }],
            name: "updateFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newWalletAddress",
                type: "address"
            }],
            name: "updateFeeWalletAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "string",
                name: "_newLogo",
                type: "string"
            }, {
                internalType: "uint256",
                name: "_tokenNumber",
                type: "uint256"
            }],
            name: "updateLogo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "addressToLogo",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "BlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "creationFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "feesAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "geUnlockTime",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "individualTokenCreationCount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "maxLiqFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "maxTaxFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "minMxTxPercentage",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "numberOfTokensCreated",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenMap",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "tokenStorage",
            outputs: [{
                internalType: "bool",
                name: "exists",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "createdOn",
                type: "uint256"
            }, {
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                internalType: "uint256",
                name: "supply",
                type: "uint256"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "tokenToOwner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "verifiedDxMint",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , xe = [{
            inputs: [{
                internalType: "address",
                name: "tokenOwner",
                type: "address"
            }, {
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                internalType: "uint8",
                name: "decimal",
                type: "uint8"
            }, {
                internalType: "uint256",
                name: "amountOfTokenWei",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "setTaxFee",
                type: "uint8"
            }, {
                internalType: "uint8",
                name: "setLiqFee",
                type: "uint8"
            }, {
                internalType: "uint256",
                name: "_maxTaxFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_maxLiqFee",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_minMxTxPer",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "minTokensBeforeSwap",
                type: "uint256"
            }],
            name: "MinTokensBeforeSwapUpdated",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokensSwapped",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "ethReceived",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "tokensIntoLiqudity",
                type: "uint256"
            }],
            name: "SwapAndLiquify",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "bool",
                name: "enabled",
                type: "bool"
            }],
            name: "SwapAndLiquifyEnabledUpdated",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [],
            name: "_liquidityFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "_maxTxAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "_name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "_symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "_tTotal",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "_taxFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "tAmount",
                type: "uint256"
            }],
            name: "deliver",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "disableFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "enableFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "excludeFromFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "geUnlockTime",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "includeInFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "isExcludedFromFee",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "isExcludedFromReward",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "time",
                type: "uint256"
            }],
            name: "lock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "maxLiqFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "maxTaxFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "minMxTxPercentage",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "mintedByDxsale",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "numTokensSellToAddToLiquidity",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "prevLiqFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "prevTaxFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "tAmount",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "deductTransferFee",
                type: "bool"
            }],
            name: "reflectionFromToken",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "router",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "liquidityFee",
                type: "uint256"
            }],
            name: "setLiquidityFeePercent",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "maxTxPercent",
                type: "uint256"
            }],
            name: "setMaxTxPercent",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_enabled",
                type: "bool"
            }],
            name: "setSwapAndLiquifyEnabled",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "taxFee",
                type: "uint256"
            }],
            name: "setTaxFeePercent",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "swapAndLiquifyEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "rAmount",
                type: "uint256"
            }],
            name: "tokenFromReflection",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                internalType: "address",
                name: "recipient",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "uniswapV2Pair",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "uniswapV2Router",
            outputs: [{
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "unlock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }]
          , re = ["0xcc46C31b1a363E4296E5257f81CFdbB40E09088E", "0x0debAF8Fc7BEF653F62B565D7C050b6cbFF23Fd2", "0xd1ac587e4a71E652087D856566E6bCdE900c9850", "0x4193461ae73CC5D47a01fA10e8990C69FB4b7C53", "0xDaBaaac505131a2D2ECA52372133586F33F9E70E", "0xDA72F1AdF23786bE079111bA6323b2E2F025AA4D", "0x5C8f9b64De05AC97a0e230bD7731b1a713Cd08eB", "0xEfE410335565Bf4A5ffCE22f75D92c60cBca5777", "0x0d01F274bEE59e53E9B029C947F7c8841D6cA59E", "0x219156C398EA91B6f629C07088A5440934332192", "0x9C28ef7Be76470d0755239fAFceEE1975638334F", "0xf19a946b5De4fe8fE59140ffc9536AC12a7D3D4a", "0xfbc9C7D7D23c643A147f338bf1592Dd1A594F231", "0x969B3cB0f651c2D5ACca7AA695FebD67dC805a98", "0x9547145B528F1829FB3A55C6AF7DD437E72373F8", "0x70a0D595b135B1D0617a126d7b8aB9E1aE907641", "0x2DE7bbe5765297c47EcBA2e36233EE636cDE2b97", "0x36311573EdA94A6cb4F7D6053Db9a2cA56dfB185", "0x6754d57337d4feC6041523864646ae54d998De5A", "0x258caa12a73188de2754241fE8B725A253196a7D", "0x5686A1909e8f23363F48259c0a96daCc259BEE39", "0x2b4d132376aA23c105de6bE303C99d30c5698E9A", "0xeD506e2ed022F8AF9962C71d60f14ba1Cc615D7E", "0xBC5a0ed4898E97d7c7E104714ceE6733B10eF1E5", "0x9C9d788186ba43e75c9be86F7Bc91199bdb957Bb", "0x1fB04b6422e41f0e116E1B80ca6d116479F7d4C0", "0x724066d03d62D014E8633B833d56EBd65E7C3608", "0xbbc74591657F6aDdC44Fa0B19F4AE8be8eb3132f", "0x23f3B4F92D1500Ea212596Cc85F42D62f0565052", "0xBc8E2d57d17A126C405e32abAa7b22bc0344d30b", "0x561BE39C9b9bc00cD563B297aA0ac7d369A7516d", "0xfC4b6724677F490CB1Ea1F4Ba61ab9fC0a1e0Aa3", "0xD9FB6e12C9ACEB9eb82e5a70fE91f9337D3732e1", "0xCC15A77433963e6c64833952C51b561F6b141c02", "0xebC794303e9682AcD88C379C06Ff298148c3527E", "0x2DC347F7d3D546952C4bF93b93A7BDabf9D44abF", "0x2a6Eaf352A384f9e261E76D57D98ba1A87E7a9fd", "0x1Fc437150e800D1E036639662042d288260c74B6"]
          , oe = ["0x95aad90afE8caDDDCB393343845b51988B13e1CA", "0xe9297d858C64dFd96028bfa3550CCC711aEC4a5D"]
          , le = ["0x95d0A5536d864B78c22df9A5F02aAc95eca7b9cA", "0xFe576Dd9D054592b310ba8B343EE087Cd2182899", "0xC95063D946242f26074A76C8A2E94c9D735dfc78", "0x01f64565EE64249a8AFFc43d01f9bD4cDc0A5d16", "0x0FB3070f578F8205ba788528b1E3f5Cd2fDE2126", "0xad28A5869DbeCfbe84c4Ea7144A8dD7eaFa8f3CA", "0xd7EA11Bd8921969D3cB11fA51fb0e1C7a84ec4C3", "0x9c26915Afb65D9e5AEdE981ffA32431d0393058E", "0xF9d566476d654A07DEAB82A011d59A46A8Fd59D6", "0x933da421229A8CD512aa4c2A34E1699b812450e2", "0x2f5296f74B5D46F195a3cFC254B4cAD6EdF111ff", "0xAc967241b165d364e3a2A0b9A95A0AE464281100", "0x62b3364ea3558C3A7d1597c5C5cC4D0d584C6ea0", "0x31984eE64d386aeE8a4748823239b5Fd368090FF", "0x592FA8Ea15CF1c68C9e97909b4e7176861BE2a83", "0xF4b8bC2E8f5876FD90831A50DEEfd34bef0b8Ca9", "0xd5125197F5EeB167b8B382461FFB3b42ea3B6460", "0xDCD70aaB9F65bFCF604FD6C9240734Ae66763cB7", "0x0503E2E01f05038ea3ee260CFaBeCd7C165cF82a", "0x21bE91fA8855837CD1E773216033Abeb641De15C", "0x99AA3fE21384ebA82496CEd3F842678598249cC3", "0xFd640Bdb374729FE78d24BBE4E5B8fAF83ae2Ed5", "0xA9Aa1d7f150950D8cE2d0f2a4d5BdDd6ef1EF4c7", "0x48Ecc3B6b72B43Cf16e0413A366Ec318c6dbb0c5", "0xe47022596E3081965606c7e418BBE4C12b6aa592", "0xc5367EF85221D815a5245f24C300F3D1F12d40C0", "0x56F6c4513b79aD9950a823346C7eF1fBf64f73d5", "0xF3045826B53BC92afeF56E084011024992448DF4", "0x7bb9ce227a3A16BaD0795AF7E6A219910432069C", "0x6FAA78EEFcFD62Ca67B7B85B49e82DFA40637459", "0x78840fE35c0fDD41A4A76caB33398b2a94E33d5a", "0x181cC9f6023649286aDE47C6f6b3f54350177Fb3", "0x9135393363DD2Cc52B5A90d01c6e853a5D2d4B4D", "0x49B2e99d947427540d8cB6aEDe59981DCBe45877", "0xB648eD5748fba920FC4C405649628b53DbD7E269", "0x89d71B28b0349Ad181190972D6833DeEB9460652", "0x54aB3f542CCfB2Fb2Fb417F9F72C63Fb26af4785", "0x1cAA7069d4552055d3187097998504f9dd3CA496", "0x4Cf990E8150ca2d91de47c709B3F2F739182A68C", "0x2043eF65a7E130C3E8bdE809581bf8e3fcCEF4F8", "0x41C2023c07B9e46229cACAFeaEc0Aa8EF9061180", "0xC0D9b355B4b2406F402ECD6B58b46713637D70aC", "0xc3E7B1826B8caf6b38951BfB8Ef4c3d2b89f26FB", "0xDAECa5e0819f404abaC729e5080DBCEebF492039", "0x93CFF668164daa0c5b106151F463768743291C1E", "0x4717DDfFcaA5e1DD8DA79E05DA28Dda33d51Ae5C", "0x6FDC71505C02bFc1b4302F7a9821eFFC1fFa2cec", "0x927c0c357CA3a85b1f98012981659380F022c436", "0x049ae69E465d8FAE58Cd85eD5Df5b5d6Dd9113F4", "0xb640BE974b884371cdD871a72dF7c000fBc0A9E4", "0xccDd0874922440c448281E9c52a5cbf21DCe23b4", "0x8aEC156D96f1C0cc6ca7EA1505b3Dd7F20931839", "0xad2A60Ab118Dc9E416A1e8Dea1073263347f3Ce9", "0x109Fd92F1226c8E8506521fa906F628f1d9006Fe", "0x28D126C2D2172B13852A70cF1027A7968Cc9Cf1A", "0xeB7f4475420Cce87886c614ACb15F881d38ed195", "0x35EFfC96Bab4d06E78fCc18C4adfFdBeb260eBa9", "0x5bC8227FB0eCb1ca49050634075841595874f265", "0x80c395328e1Da2CCce2aB37241C524f607e075Dd", "0x83bDBAdF8Bb215814479410b5391994f1339942E", "0xe7b2D969edCf48aCC324283aea77E40b6B2b08C1", "0x5757Aa2afa0047C7253b9679384dD8757BAc4389", "0x16908a10bB3644F5503D8A849BeCC5b37E06F616", "0x0c9fBCA941112Cc1dC8269925CCdc6d2Dd199412", "0x524c473C0AEc83AdF2d3e2AEE78E50D430951705", "0x60F42Ed535fE64b5148b147A268dDf889B9e2100", "0x13Ca5F5283c5F5f300fB92c5769B365C542E2465", "0xD9760EE5eab6CbD50c17f3993847129754fe1217", "0x500C99F484e408BF5eac29b4D10843E101413150", "0x84D16A4b701F29606c676AE78e5A4378E4B6AFB2", "0xbd1D951b4e48dF61D1cBeD2931BA2b66B9d94E02", "0xf9aeD11fCeeB73e0741E0a435cff5086bBa8Ac65", "0x4Fd99a6b7aCeF862e3b44A79c1658c59e23CacEb", "0x02E9D7c9d5D2Cc7F033462D1Ff081E765abd616f", "0x8818a2875Aa27fC23B442F6e0D20888be54586E1", "0x0eE8dA98D032Ca8945bAb4c5daA49Ed51547B146", "0x859965cDdbc0Ab88e12fEACB365d827F361171dF", "0x6d5D15562cD7c65F065c0b5a2A17b586bA910d3F", "0x996761e79812931747FAE7550fEb5202Bac65f7d", "0xDEf1915fA826D80b7a48873c44144E83B71f4Ac0", "0xf73c480C2C5C3F72E2D4Ab839E87c3748fF51643", "0xC654A505E3d38932cAb03CCc14418044A078F8A4", "0xE4Ce90bfF06cBe2261DE16bBCb127F253641D5e4", "0x2E1e551E11a3C99579Eab34d75fC779D50C0d2D7", "0x7bDd0E15B77f1C770fE4816C0C8c4dB300547AF3", "0xcb26a0E147454E31f1AA85EF66a67141866c6488", "0x3B82348babbcB1Da6aA70f3B9323da551E09fc8D", "0x3BA70394A4CE03D1D8Bb16C53350515aAafa3901", "0xF492dEcf2D0b43ad3839294fE14335a0d32e4D86", "0xacC8585c02601c18938302e2641d39c2F634B817", "0xECCb397599B75F091a950540C030F38EcC018749", "0xECDD3d0523ae8ca27f00a9dc1ccDDA1f317fC6Df", "0x9f3c24d5E6Dd935401d049B53185271f2BD63f37", "0xa50CC9a0d5dEa8A2Aa1Aa0Ea721cD48752bb64A4", "0x19bAEDb9e7CCd7E5e2eDFB2b269c1B47014e1a61", "0xbC4BD146366f1445FAf73f453B9711655Aa5Fed0", "0xE1C54CaA7C10Deff9E046BAA79fa5dF0fEb69E40", "0x6CBf326fB2F2bca9E124fCA98Bb773cbebFB0720", "0x8BF7C187028D8BB52eEcaF6568E861Cd55c7e4B2", "0x01d40B66180d14D67692a4Cd34d8e4F70F01A482", "0xfB939b14B853Fe66073491142421985B61920f3F", "0xD31d8E24368FA501f21df44C2891E51153802Ced", "0xd07e3574E18a3eE15a33A37B7E1670d242fA810e", "0x876178412195783ca5F7dD57A904Ed350a3328E6", "0x527DcBFD9819F2724e6e046e6D67E322F31637BA", "0x8015dc35273F2F5aaa6fd62E2aF886E99f2caE8a", "0x9C7B37A8DF11975Bd91664009679242604633975", "0xEB8C822937f10E19e7731c005f712Ab292af03CC", "0xe3Bf247067A8c2d14BE3fD43C1E0Ce408807C8b3", "0x266ea14B7D23d4402f29569f41e8b577a1d17013", "0x0E43C6335e0CC9dbc30f9508edEFEa20e81d2949", "0x5b2e01866A4e64f9671081C768C089f1b80b06c7", "0x2229C07d55F06B5Ed8Cb1c97019BdF1511c86bdC", "0x9312B5c818fAa24f267f9285CE572057EaEf8156", "0x810195Ab08a64F75Df5BfDca8dA2520b27b250c5", "0xEc21b01791211eb26250149C2c91D3094577A3c3", "0x578A1C4eAD45CdE22d70Ddda9AeC86feeAa271fb", "0x5CCc8586FcbE2f2108F164A395e32377b0A33Ad9", "0x51feDFbE2d93ADFcf6661e56367B398aE085C902", "0x333e59c6c678285af2Ae1c70B6aB586B4516cE6B", "0xB3Aa0eACfB5cEeFc1A30fAAA98a4D53DBA34B6d1", "0xfde1E99498283b3727011BDF501901CAfAD7caA3", "0x749Be9af97a2c51424ABDB27731a8E2A83D18173", "0xfeaaF75eE69e8477A18D8ab3cd49641F15E4707f", "0xD2d09899C19263aeb2C4558355442383e5ab73c5", "0x7eb60033b912A59D86ab08c201aB464CE828a3D4", "0xc0f6B942D85Cf9BD9578a370d8eb4668eD840B51", "0xE9c622D984601e556Fe5d9D254330Cdf0De35556", "0xD6dDc9281F64Fa971caB00BDC6349f8544377C4C", "0x9f137EBB34CFf93dDdAd1Dfc4a3DcBC11a6A1828", "0xf9596E22c66EDcD4Cf4D9Fb77F328e9B580c59EE", "0x57Cc9694BA82439a19bF3431F206b4F570fc8A5b", "0xc380a24F7DC18845931aDAa381D5ADDeDa0ffAf7", "0xc90d1F05A61565ABe7191b36E5B3A800b2f0A7FB", "0xeba15f69f257555CCe87cd4032878934294194E8", "0xBB52EEb54059f2a87c9Ab6001F374591CC041532", "0xA73d8474ebE4a7ee783cC34F07731B556a39C6De", "0x4822B68e670AeeF39E83De6Cd7bE5Bc68C3a9E96", "0xE3eB455fcBC62130943bc106B5E7c7B7542B8B25", "0x7D0832CeAB87d9830828c4f051874a69fF2093eD", "0x94E5aafbf92dd887f2D36Ff54F93a92a2b54c6Bd", "0x38fdE5758F99a3F4b21494DfCed966D0Da344148", "0x97df26545D33F647d0F8fC3EC46f93B04090a9da", "0xecF66Efb67Ec19a17bBfC4086C417b0905f53437", "0x0E32d54EF71bC680e214a9b0D78C08F6206f91AC", "0x56fF3350CB5e13BD6196689c3bD2927c6F89EbDe", "0xe40397f3B4C7517753997ABA33c6b4dA8c649436", "0x5ee5db80A25004215731660959F42d9719A58cF2", "0xBE91e110D30070987B9F19c082213CdF40bCB6B3", "0xe4Ba7C1Fc5a3147ED88bB2ACDA99E3f648A4df8A", "0xB313527Bd8e26ED5C9241cb1fBD81a57674b364f", "0x8CA19cE76fB2d55E6A9AfDbb38e05A647663a7eE", "0xE43167CF56119926143cD61410639845a00A6a56", "0x48448f2A336E2e214857C4a084055eA9C3D4cAC8", "0x6DF38ebAEEF0827e2407e553A1d085E2B8e38E29", "0xfC64570432C3951fCDf7d66bD1F719948fA782BA", "0xE95EC869f6b435B2D5D1A76044dBC349351a1d35", "0x324074b476bd8B48A519C2761e3D1CdfCf07Bd9f", "0xB21CdA5DDf5c716609D46916E068d024679D765C", "0xaEb46093BcC7E6f3Ba39B40F4c5736c10422cC4B", "0x1011e339A4191dcF3DF3122430240E23A2e41788", "0x0b0Ff1C6C040499b918775D9f20952e9Ed83Ed99", "0x677814460C0F5bC9e578158a59B9427684eF6eea", "0x6C88297112812ad08DB85cfd766631EC783fF294", "0x8d1dF312152a6462E5979e53a778651A8dd99115", "0xd463Fe5e54e095588b0f134832391d9a5F39a0a1", "0x9016188d81885739b50a72A10d651d3Fa71E4d0E", "0x3607d1Accc661faf68039adFc8c0115212052Db2", "0x623032D109C51d4fcB9d84442fc5fAB94d48CFE5", "0x4A3B26d27A195A882AC1A51F05fC2064A6f2697C", "0x2FA680da95db8645EFD5cF09D055C678a39D44af", "0x4A91D9c327B5873BAA4736757BfB58fB7C541B96", "0xf0714bE305e0553773985A15b4a56b8E7D9126e6", "0x16A32B75D7cEe011BeCf067b22cc0Ae35BadFbB9", "0x947db66507C6d172b69ae08ED2fc6Cb557836CCE", "0x19C759038594f0aBbd8348533eBB08e5EEaBC0e5", "0x4F05394fBfA6273C1C85AaB807Da39aa34745186", "0x2a837d64A1EA957EA0d8776715e6289F13c643f8", "0x30D2C7047fF7fa83570D00575eAC91a8c0ca255e", "0x0A4fe35523E6F0e7298f56646bbC1Edba57c5be9", "0x2Dc0eFDd8aFC2156B4d7F2476946ca0Fc49502Ee", "0xE38aF529a872846D8d66b77DB8A24Dd3D9c1BA2c", "0xB8Ab40cd8D14eF80b43702b4971952f40bD22D8D", "0xF0435457EF1328aD5eB051C85A23C6e7d7663B15", "0x0ee484203B033c44C85778Ed88b620011f255c35", "0x75Fc1fA94107cB66e01B6E10e26ED1BCaf51ff8c", "0xf4622C41e1cC7C72A46b968D46387Ff1789F2E5d", "0xC4B553F065925b17d1a3B2b247d16587c900387F", "0x1e69cdb2a4b6f65f363dCB8259FaCc0960A11C8F", "0x5D8D88c7a0A006924a00033c091AE1E246FeF6Ff", "0x8FA29D75e1587ef9D5708040237aDDffc736C8b5", "0x069B78010eAaCCCDB26AEB34767bC0AE1254D5ce", "0x08b227d4a6a52b1D201437679f9482b314Bf3323", "0x645aA45db9DFf84a3B866cd52e2DC3d3266401F3", "0x43901E1E2778aeBd2ee7D16a4e1822C6cF05B605", "0x74956CA7F8b6a4C8Cb8b7D2a961c86b22711EC0a", "0xd587a634D567Bd04f07908bC73C5237681d8d467", "0x471A5F0eBd8Dea76eE938F71793d6cce6612e132", "0x817131D1c877A9849b3794Dd03b970d2f2Ed2F93", "0x56e254D17A8CDE674BBB2527a2e5493698e5F751", "0x74eA0850127A212F56F9716dc00748DD8343262f", "0xb52F9B2d3163244d6978A6Cd3Ce6A20ecaF9b2a4", "0x9c331df75b19C7C6A2d002Db6edf2aa299692741", "0x925B492B2aFDe48cb0713511216549D0D15b8419", "0xc48eaa4384ad6FAf6B8bBD6AF36bABE17d26D85B", "0xB7934Eb6371Fd79D623C69eCa4Bf5ed74F1Bc578", "0xaA9D8301140eD16Cf91948585cE6171aB6842A80", "0x4fa6bcA3cB6DF74418E0085c31dA04226B2dD003", "0x7fB0a0e50F678F746D45620946682F22845A5171", "0x5eA5b90981C7c8dC0411424EA6DbFeD7ce792730", "0x73E9e7ebd638a668d551a1134aE3491929CCE217", "0x2C9E0685D67414b6df070f58257de87E6a35E708", "0xc8e1ecCda7c119FA6863AFF8955729162E9cEaAf", "0xf6f14849bBfc0f8FbabbC9b1b01386254A122c2d", "0xB62ed4110b94B96F45cdBe29c44a8920Be719577", "0xA1bbf5f68710866Ed9b00649C78F4cf2D35C9AD0", "0x6363FFf9d1e6B68302903c4C9a1dDDb76A223642", "0x14B617E4F1450CAe141eFA0974Af4b2490DE253D", "0xb78f68D3Bf1634231dd44207B23D87e7cb3fE7d0", "0xE527E3486bD57c5c9161493f3fc06D20CC29e018", "0x3cF92C7c33B207bdf8D355FcA950729Fc5ce85B9", "0xD304E6045C86B3Ef68a3557A354367217Bdbade4", "0xEd30a772d5039b407b6b0E3bA720DF6fE0c1a08f", "0x9F2650f5D175e90562E8489E7d5C4550DB69F8fD", "0x25A09815F887045b7aD305423Aa4f5554Cf92288", "0x8bB219429bb2597d202d1B1951C9b7ec215b4ff2", "0xF9BC35d2a788342918e27bC54Bcd39286897EE52", "0xC2dE1F3e605Db45BC2C290Ea85725F0325624873", "0xC52b1818aff36037548571bBDd655e026cAB402a", "0x17AFdB882E0Bb4090FFc4f3565e85758f552E519", "0xa941E82f8644356e5df5BF86a9b22F592b194255", "0x107b0982d38ceb99A53b4cF515d6B8D4eFCAe3e4", "0x1909426BD03CcEa3FEd28571f262aa50CeB889f7", "0x51022Fd71294feDed7B8d8AF5BdC1c6Ecb789171", "0x68e7db8Af9445f01876bfBEc9788b010d3940b72", "0xC10F2Dcd962d3A5BFCC1831C9E7BF7BCF12c698F", "0xEF3199AB56230f73AA46aBbFE24EEB5cAcF93bc4", "0x18335Bc5205AB6A8f55ca1f0bD074C1ad7Bd18cf", "0x3097F13E82355709368D4f95F1A7a0b79aFea05c", "0x41D0e0885F9526fb23217BC17BEF6dAcEfA8a881", "0x457cBe794d34d25Eac7e389A71A7f80F228aED14", "0x6656A7896fdB819ab0B12853DE57E0c33c59AA29", "0x28Ff9586BfcAA5B0Db3f4CBabD1153EdFF33648F", "0x167E15BEa70Fe0A82B5868B3b7e37B966577F4e6", "0x8B12CA78121F9dc232a3Bfcfcc6B55Da242380d0", "0x6b3e8cE4cc5aa9Be1bAB85920D779fff8CfA4Aa1", "0xFF52245Ccc0FC441ba085BDc947812518bFe27d9", "0xc0ECA872e52892595A7615D0365E004270f7Cf6E", "0x73b0D7fA0062dF460fDf9D79D797ae6770017c53", "0xeaCB670BfF60fbd47CCCAC778915898800b31559", "0x7c8C07BcDe32B7795b9A2a07B494fCB8cB04e35a", "0xB0c5f411B30110316130Fa6D44fE7E69c5e8a284", "0x84A1c62b9A37FEbD6BA17ea4C3a4E2cDFCa0DDb7", "0xA7Ef38cB0DC82066Ec3a37106e916C6BCe2c7744", "0x31C2cc3A1D8b53CdBAe8492519ac5C2566E853fb", "0x15eA7ac32376d789f7541F686f510904162B216A", "0x9127F1056768e5Df13FE5C19Ad956d0a81092a70", "0x39b5c42d32Ad6BFeBCb221CBb06F08aA28B63048", "0x22B7eFA028E0138258Badf8e6B5988caaBF49C1E", "0x00591995B406E4b279315F785BF0CD8f32d16075", "0x11e54fe8507d61781227cD53670CbD69Bdcc6236", "0x5462C4168B7C7e0b94CCFa26D40Cb41cA82f98cF", "0x0447aDfe76B6c15dcB37f59F981eb03B37F9efAE", "0x125D687Ab93BfB97AFD16316dC63Bc37C3600ADD", "0xcB2c364A05895e5c5eAd6eE4300A335c2a84FD54", "0x22b560dECb3daa56D04119FEB9D954A733bE9377", "0x17D1b9211c34929277D5572e849A8daaF4a4c6aF", "0xbc63eFaA7fC692fc546bfF35685D8d5594CbedB7", "0x2303aF0ae57896dF5cfc7EF84402659201DD483e", "0x6F8867ACc36D7f47c9Bc5695841833cC3E84E17e", "0x3D1CEdD652308e6A32Ee9fEfC4462466a565077e", "0xe2e250E563e5f0849331b7C7146947872318A61E", "0x9Fc371c234d3E5b17b4B6582185dF14422a399E4", "0x47C5d31530d889fB8e7AF7Da81dE8E096c3d0d96", "0x1a2E2105170bC6D38F94911fA2CB98EE7541B0A5", "0x3D88F7c348ED349E8dbE0e8965b1f11572AF4503", "0x44EaC1c41fd937Da782edec1F6aCe17AFEcb25E0", "0x61C860Bc9CDf7675b4531de6B52f28BA23284a56", "0xBE2B2246Cf4f7df4B9eDe4Bf4B07ebEEae5963b4", "0xA3450d223770a8cCBa03944518ea3e277EBd3963", "0xD87e00639370C18dfB52F0Cda96362DfcF220177", "0x937ee47383Ffe855C225fa95983756BEfB4Bee71", "0xb156aF35d96ee18C8ee98cf9da3Fe08a5844257F", "0xB50D22c28547b86ffcb742206a7632352E77cDf7", "0x054a17D085B94D0C71CB45cc2F655A0ac80D5137", "0xD83b0f7846ae0fCe3e29c1ffFe1021D24d957cd2", "0x953f80e32fE8e5e69356b7351fEEC0d55AfaA253", "0xc0b7f74A81E9EF617244aD927a776c2525AD3621", "0x16506f8a02448b2FAc87652D8Cf6C13d92Dc93EE", "0xD69D395E8549058C7B54E21472E7F9252B33061a", "0xd15a6fb71a0E3769CE7260eD6D836f5CEdBbD9dd", "0x8a80710dEf2a6F127D2C2124c37858759C91A882", "0xFC21A06Ff85b282B5F6F9aFbd85f17be7e11663F", "0x9Fb7B83Fa1EC0a156A00599684F79AcB49d410EB", "0x63Fe62a915fBf62F6A95e3D9223a33C3b2C0C8bD", "0x5748637261b11D1402be9E6457bBA8E96359Cdd9", "0xF19C72e6b0B77373Dd9f2bc6018f00615370BCA5", "0xdbD9a7D79D1C419a18F4BD1a81069C8CE6d36c67", "0xc3fC1b564306c2fC401a40EA10AA2D62EA32A69a", "0x5DA33d0236E21542D5Fc5546D0C6c0Bb1063dE3F", "0xFd377a2dbF5f37B1fAa514a81E00356541AFce6f", "0xC4FF293174198e9AeB8f655673100EeEDcbBFb1a", "0x7a44fe7549798767593555300350F7Fc93aF164E", "0xa39e26795Df3bEF82898203dB9F465f23887CE29", "0x7A3C40c2294669178a10F55f3fCFB7740cd82CAf", "0xF480d4604Ab822505461d04b5EEe0c6966b0C259", "0xeC07b81938a57DC82D052c5115ff907554b7BC61", "0x95af953BBE9125e706EAE7Ffe22E85Cb7eC4523F", "0x77D6b9bb58cC87823031632407F7E68819B300ce", "0x7730c1a6dd8397B7815FB6c2a42024C6ab4965FA", "0x02B7c684177A9Bb026Ba5F8A906935126Ffc3c6c", "0x2A260dDC8f7B2644752eEAb3b028Ba86D15b8013", "0xa61bBbe65fE0A8dD51cDe8bdD65306700d959984", "0x0CB980Fec46F9ffEd8F212a622A864CaFc0e4aE6", "0x5e8fA15312066503a315AD3da2ba057b5C03C653", "0x4C4EC90639701F8d6347277E3D333b033071B935", "0xa5c2F96B7F0ab7b63148a2b0d95574a5B25CB2e9", "0x6Fe117f66be8ddB19aaFe080c019a713d98C61d0", "0xB7f3EdC5CC359aC158FeD100f4dFb91a1d480402", "0xd0eBC6c8848d12378eAf0d8bdB19d3cB1e698531", "0xa415453DeeeFbc11e78748980a7161b674e81223", "0xeA1D19c40558bf049b46D6706feED29DDac30d06", "0x641d9C7cF8afC9f7fEBBf7a800BB343028faF1fa", "0xbbEF9b4B661c9459638CA00E585f072b1638ec7D", "0x5914e6D467B97A1C355d45704e29C4845397e10c", "0xCAdfF2EE605CE0d2c3fB4C3b461F5BBC30Cf8F18", "0xf63B67bF74189fB6bBe7504a75d1Df7fb74a3089", "0xBD375d178c704a08D55abA4EaB06Fb4337e0f8A5", "0xCfc54884D60203ccEB6c7c6942F6392A39b1C289", "0xf07F54cf4A8120e5Ab7Ef7e589e9B30E6F7daC51", "0xaf569D4278ADfe8dBAeB2E52BC9850F4142595a4", "0x5a56bf6f30AE3E5B1f25fd14b34415a11F687a95", "0xde26501a0b262835226282dc52c88a0bf4df472C", "0x0b7500CB5C2128cdE57F6A12E1a2BDB29fB2e3EF", "0xb897190D591797C622C1fc39e6920F8dfBb8f683", "0x5002db28da4a21EAd0D1b771FABFd68a6751A3A7", "0xD14A2C0644414910a106324b11551276891A20F1", "0x1D9430A76cB656f8fad37Ee7ABcC75777CB21c56", "0xa2FBF8EBC2A0628856AeFDB3804b24aE31275c75", "0x78300a7450D781A301c4f0098a14496Cf57880D6", "0xc3C0e90E01d446609DCea9947497F61eE477788B", "0xCdF5817D058F05A14F56ebCA293dD6ce6dfF7D1e", "0xf0723BBB339Eb56f7652007fD73677e87370360a", "0xFF2faFBFD46bf66d72F07d9A9E88aD10626df61B", "0x3c14e8a5be53E97aC250c8BE5fe66df8dD71E977", "0xf87d0dF3dd49A66306F3fa0A6Fd18beca0a1Ad01", "0x55E31B0C9C5Bfc7def7EE7B20B404e60c349B77d", "0x7DB7B87DC6Bd75d7259d17d087eF4c5B394d29BD", "0x71c09d1f217d0DE00475bdc4303B6Fc1e3080532", "0x269D01518B148Ef87a49656daF0897EA3A8228De", "0x5e72a7EcDb50bA912F96846B1e1e7B6e668Fb9Bb", "0xc989b591d82D9663A371f6c18f1ee81234b97418", "0x19c6969057a7B5fa3B925CB8dEcA9CfdFa6677F1", "0xd842a905e3dc8A0F9130e2697fbe484d72ec4E7F", "0xD47567f2685c2FE09983c99bb26dFeCc874927D6", "0xb92797BC06d13eFE14070d4Ba7576D92d1753c67", "0xf0c6C8a14c0C5171c52a8aBEF84b7E401c19820d", "0xEFAC5228BDd0da839750774E8F8ab12857672f48", "0x831455bCAfCE75F4247b76C63a5F26966047FE1d", "0x67E95ab27382947D212Ae8dC77362fBDD6c9ABcC", "0xc2F38F692D84D674330887d933779e50434c12cd", "0x0108c45f3aDCcA97B33119a93840e423d4AD85F3", "0xcfF0e94CcaDfE585D0ED8A49dE42b013b641374c", "0x4E5FDb35BEebeDCe41e5d1592e1E0f357065F4e3", "0xa7C5515e04A4bffD08315219F27B0fC33D9ea85D", "0x97c6d3DB1B46E198F3E74B87782b62d8eF8B5803", "0x206E3847DFCA0e372e7d5F79A5E7B4c0C1618FD1", "0x0d0F28712C59853e172e4b496EFa03fFB1c4c0cC", "0xF06193A8F98adC71C0c63Ea42C59FDBf025222E9", "0x1664A69002bB4124f63C8ff8Ce1DDB1D60734116", "0xDB9135269BB68405332Fb034cfcbB853bA2c8F25", "0x1e532A4Cfc0Dd9AABBf576c067EB334DDfb656Ca", "0x875488de2FE033d0B61dCed2f796f6Fa53B61894", "0xD18559DB8e4092905c3F068bf7E5caC5DB1cb68f", "0xDed8741e731cE8F63ecB0732fcB92C4916b245B4", "0x4a70235848429eE766d2eD266101a19318ca29eD", "0xCE47322E50238eC265bAb4fd9cf45D88Cfea4Da9", "0x11d7fa2A07f00aCB1eaab153e9AC19B5Ce53de3a", "0x4975ba636f357Be666e50f7336A50F7946c0eC0b", "0x5Cf75A5A811c788fA23c13b2C03c40d10330E152", "0x2a4a1867FB85E4f87508E812891091F17F35Ad34", "0x6D4ec20893225Ff69F23726a2a4CccdDf12eE2D6", "0x1F4E399F9543A0B0fb7583f6Efb01E9bCeAC6Feb", "0x72cdd5F3e606A79Ad39240DEAf752e4fc242FAd2", "0x83B59cea39BC3cAb500A1280eb15016f18a7e060", "0x59957653FE7545B0a8195984a6f36dAaAAD7437d", "0x287Fe17DA81D9881703F75EC3ab21e2e2Adf7AFd", "0xE436a8D02EBabda515AF10222992C4F2b341F6E9", "0x7DB01a944de1c911A988FB7e28eb9eD3D62F4d90", "0xB078486985099520114BD56aa7CF5303488a4d0A", "0x6c0363028a2bf39Bbe55DF62f7dfCb9C1Ea0dbdA", "0xD96fC4f40E55511f640456ca2a67F14F457256DB", "0xf2b1565581cDcF34c35d1d6393094d811b22bEB9", "0x5Ff9DE936c43f2765C1fE7339CFf60027Aa59EaD", "0x1b3c31eb439821015dA525890d060A0D460432cf", "0x08082BDCc3AfdDABdbEF7CD16f83E456B2FFe4a4", "0xa1717438B5f15126c58eE276377D6080FFab96e2", "0xFAeFc96Fe9153AaA411Fac578029DDD36592Bde7", "0x06c7452c5f650D5050e3d205e544F13d2a53cC0D", "0xb462cfeB981Da94EFbe27fd448B50e7FaC45654E", "0x274dc2bE6a432F6870Bd397C48923611383e268A", "0x691fFe10Ce3CD6Ea84Eb88368dC1dF3F634FCdC8", "0x73cB9E3A14115531d87317Bef651A1406E551af8", "0x91A830210f523b6B9ddb8b4Fae7115078600E37d", "0x248d1AEC4C8373953cE1021612A9F5CeE51cA27a", "0xF12B09Deb8897f4F0e7772cB927914404265c088", "0x12BC8d4F4547757881668F8f9eF0d0fa31dD3B79", "0x840b191f5cCF63C5D465FfF08e0514cA512B48fb", "0x85BC974A3EEE3794C905ED1dC48D4dcDB36c4404", "0x809bEa024C85227F7Fdc25d90deC2bB840753bF6", "0xF539C48b4bbC0b4513070C1d3178a60666FE405c", "0xE8C5688dE839bc357F67CD05897809f7E9967335", "0x880ea4f06B4b5d127b841Bf82d78D60Ea8149BD3", "0xC2cEe0821082420f8dA0983DF0724F561fD83e04", "0x6c422681aA7c6A14AA9F89552C49b91DD3e8D857", "0xDfB9ef56CA7378a24D1E13dA757CE4A93D70d1F0", "0xe7b6515E11B7f27B2CB455A1fD7800045F9ef098", "0x80606a773e33b86772ae8B7dB449B971A98e19f8", "0x0567591B5a721fa18A11E648c87C0c3e012277c3", "0xC3D98d32F4aCc82C7c6399Be15f7f3ed3ca277af", "0x7dAd66A0f2aa0deD82DC930aC8EBDA115310b3d0", "0x27d0B125C3f748A518d040858Eb93963D2925E51", "0x7aC7b7a5b23A4A7a55aF79a26a23D7dBa6aEddF1", "0x6Faaa920E0b502AAaF975Bf190940CB75Ed8d277", "0x8f34A9596137166F3d3c28ECda3d70e24784A0F4", "0xaeDf51fbB68C94ca49cD9876ac36699a81586176", "0x336d2C9Cb28D0d5114a7E8606C2a6129be4EEd44", "0x8aF045F47F5ad6B52486792005E00085ea4dD0a3", "0x06842629170d420a1F29A2Bd8271AE7D8c3e860B", "0xC696d1597f25b3551a4994AC09Bd052E02A7fdAe", "0xa12232666a3167316c9F46A11BDA29CE1de2185c", "0xBfBbF43f6087d4DFC906694C3c2694f97c4ad288", "0x867fdb810295290c88D0f322A22B0772096f68be", "0x57d73Aa8DE721047Fbf2008e5405B1F4B706f597", "0x24419661Ae397a4c1f28bf0A65b390D71aC0B950", "0x70ebd77044A1CAd8cBa6571CDbbe5d0E165A292C", "0x9520853fb55B020CeaadbEb0f9a4ED7CBe451355", "0x48f03Cc464DB92325A96a0355a34031e79753Ef4", "0x31078D3c95136f9F013DB5bF7cc7d3D1535EA6C3", "0x9F119136ef0cf2FB2f684515c23f48249728886b", "0x02F8cD6Eb4E508146c8Ea2b21F3A022D2Cbd323F", "0xB8DEE3B11ab21EF5A98d69F647AeA19F1cc898F2", "0x02dDE55DCA653728875F93255e6F7dB970Ddb345", "0x660BC2665959a99Bb62217FD509B51E66243eF8E", "0x38f012D41d0796476a1C7063E1B8cc49c463b461", "0xdB387E1616Ecc37D6b4216f17a433d2A4efB133e", "0x03DE524c87fF11fc5270b32057f520074E21410e", "0xB403935ecCc0Bf8ff64c89Cb4B1bb3925b7f104e", "0x2033f8704442AAb3cB483eB70f7e6Bf0c08917D1", "0x275BC08D237Cd6e164Ec5ecEEfC31a51F5c4f9e9", "0x032c409B2c8eE68aDfD8915e26CE446E58eCfB97", "0xBBDA835Faa9539b31fEB948db65aA3EF57adC3A3", "0x44f44acFD32Ee45528A1B611Af3518CD308C0df0", "0x8EDF3f7263bA19E1b707cD537EbDF910C661D04f", "0xE9AB1cE0C1aEBB7bC84F52FC49E6269893Da5994", "0xb579d3353bf4242F61430f75b048BE369ebBd1Ed", "0x22a9dea234f993F62BAbe4f17D683224d87a8304", "0x939376E7807825B1a081624Ba0b16fB04cf15F9a", "0x64D49C0B34Ff54b8fA857A78A3572Cec0cA4b7d4", "0x470eFCbDfCcB30707640d4e5886c1EB7B382C82A", "0xFeA1dC65F9535BC0082AB11475f900D492F571AF", "0xb2964Ec9c2deEd153E39910ef3637Fa940B9Baba", "0x3Ef90F1dF81BC643e43629f682D68a2851c73bE3", "0x083808571e2Cd96CdEf9f20F8b4e5237Cb40ffa6", "0x771195098D55cefa089CB775F504d0a12Cf9f03c", "0x5972A5989366333139E0c907f188552aa057EABb", "0xe16822fa4538604A4c547D2C673EbdD1f8Ec052a", "0x1BFE957ddda3207bfd0EE6690201F9f9Dc33A9eF", "0xbf89E87e5754Dc39E3Fb4E358ede1f5331DDCb48", "0x6F3865623b41F201962D7367b342766a7050240d", "0xBF812fD4a2b613723dC304959Ec74127BD3d65Be", "0x4a03F40Ef51A856c4C40CE9e42388d20C24736d4", "0xE7Ee4A065e11B9d6B05ceaBda54D2A21E9b39f75", "0xe1382598C6b96669402dC27867A64602Ee6a913E", "0xBaC7208427E4F510FB8f55A9F13f7b283A68fC55", "0x8FD1224D8657F24086e60e3A04F12B0366b4C718", "0x74378a453E69A121aBBFC4218e141095d98fbFB6", "0xFAC48fe1857c26a36f0EA2021f2b2aaE27fdC3EF", "0x024E8C80bDE6C4B77cBcF94Ef7AeF6b33f96830A", "0xb4463D93Bf9C30b2945B39Ef290Fb8DAb70B8D86", "0x64cc5E1a3bdf14E36BBeAE32006d139fb31fbE2d", "0x2fCD24815d22AfEdc1b1e8ABC3A73B163e66718C", "0x8721a3EFFC036300f28c6F5286990Ed37D878E1A", "0x81e959a22fECe85e9dc14491ea5C31D8b929BFD4", "0x7911652068a523F74E1e63197674616BfDc0dcca", "0x3c12C689989284f7d1AB9bFFAC1328bDd50Bd161", "0xBC3630FE032EAe3D0a664Fdb6199D7706B03DC12", "0x4BE13F872Da8607189F0f01E42b921985Fd5840F", "0x4514786f81116162CD9C7cbe7a9cF4F221D9E502", "0xE42f50100a2525827F369654323A67136390Bb68", "0x1aA6ab159166213f18c04C512b4FEAF90eCf50a4", "0x1ceFF17E17547b1F29992F8ABF510691Ce0001Da", "0xc5f8fE63F59545bc4C14b4F7E3edF011cC2397Ed", "0x30E2E744a93EE82E61d50C8F63372240EDc05596", "0xe04eD875eF18e398285067B892e77D04592FBecD", "0x6451Ad867766C1a7f655648B0DB449995239c497", "0xb8e2a584f5D697640411C100e2750Ed6d04327fD", "0xEe8E47679D0347838280b69901E7E28D1eE94B2A", "0x46fd1Fc83f32BE8BBaE0305883F0FdAC574b77b9", "0x7818a9A0107848724Bf9A73373B2B79b3b2E8eB2", "0x465f8AFDe5FC2ab6e3e8331d99F6fb8c387a3bfb", "0xd8C4c79133AfEaE6223756A4ae28008792782b22", "0x37C51a71de7Dc40e3340503B922dFDdE17A7eF81", "0x8AAD3a42d91392b6B63D0cE646C744Ea9D48B692", "0x643010028F6B227f7ec83d846b9f88BB1b0cA2ca", "0xD3908aC8b92720C74A99F7c7F3A1F7ea5bD94cF6", "0x32166a91e49AE1514D66025DE7B8CE478811f575", "0x526Fe8aC50Bf02dcd4a9403DbBb01A8a05Bc11eE", "0xd90C76bb3A1E3252CE9A34B7f47830f636FD3de2", "0x181ad9E257bE622b298FaD2A36535225a4d2cC16", "0xb66f61651e4896B779d5A477f2b7C29A910Dd33C", "0xAE4c9e5528f00c9D1816b123CEca6E5D4F2Dec1A", "0x495C214dAf68c89724733F216cf80Ac611cA1142", "0xC00A20DDc7F156aa7e7E7Da1BEFA8A666102aDD7", "0x8a41c148D19AB5e99d3Ce19D2f6B0663D5c7C478", "0x8461185FA0EEb39e327802952639Db61BB9a7D18", "0x7024f895631bd5658714363c69833D672D05A235", "0x599826967B73CDaB8E4b6db8579DEbd4772294e8", "0x191CF435ACeCC163cF93613777Ab6E23a7fEeD0D", "0x505Efa705e5527634037D47d66a1350849880181", "0x8105cdEA93164FA4dA2D75557A79DDb6e89C76dB", "0xD7926547169E16CdfD780A1f2dCE5E0F3f28629b", "0xF9Bd79fe74B1f184A9765116Ce69ddD218ad32a1", "0x98587F0792164405F1f4ED771d91f75cB0BADE1B", "0x7DdBF0Ac38c64E57feCf9a2389F179572e4F0717", "0x3ae0369b16Bb818478fc7510e0f0aC486055C2cF", "0x48A10423C2Dd6838D539918E4F0CDBaA224d1AD3", "0x6731162f54fFAf96Ea15BDaf55348DEC606F12F6", "0x48Aaa94FDEc72dE7b390a313E7574035F565A724", "0x19BF9828E8998DE1533382fB4BFF1CAD631b9455", "0x4D4198bb76C77E7c98858d86EB1c913E99684e62", "0x2c9fD0Eec3a84637ed066f6B1422786757dB139C", "0x35901F7119E2BE96BCfcCD4D20488eC75e36BD4C", "0xd2f42d13243d65Ce1A337b80c1812Fc83FB14ee6", "0x766738867f3269cE65105E8E510622aD99442E53", "0x02579F73D3cDA84896bAb8BD1b92e3cC2deFcB3c", "0xa1D5bC80BB2f4DD7251ce3684b14a1D0f2c0138f", "0xff592dE6463eF6a53A7Bf981c88459c87bacCBBF", "0x7E47B50B95d16e1b5A80586eeDDbb3c561907611", "0x99bDD6E090ab0227B1aC1D28B760d1A018F6437e", "0x5C09818BB876675348eDe312d1520E497A6b63E5", "0x9E7BEb5d63627C0E34206fF531199C388a2b07c8", "0x0bf507f370654673f9cE55FA8a577cb4ff6B66E0", "0x6dF57259179779D1652aa8709DbFA00AfEA49C96", "0xf254fb4B2Ff6Fb4F36a941D860765A4eC88D896E", "0x5Ba848Cc83A52a0854E82849861A4017cc4963FC", "0x818f01cfed76F421d05346C3c8763746321B4D8F", "0xb016AaeCf2b636F4cCDd74b36F72BB25E1Fa5ce3", "0x18cF77ef53E8c9Fe2E01d7Ebe7f732EaDD7f3b1F", "0xF3306062885732a085B02a545250d92111Ca66e0", "0x4de09C6e20aD2E7c6a64db2B512502368b8Cbc26", "0xfF5eB2F6052a4779C0314a0Aab4A553544cE7822", "0x72631dafddcc2C8f4486a79425359fED503376c9", "0x5E0578f9a0a94FD54cDb2C3c71FAa96251241289", "0x3d00a152460D8D6277584afCcCF311A7436254A1", "0xC770c9A9D25125f22345728f319888c3Ee3d053F", "0x601Ee9bc681986A9CD272bFb672cc94cc71B4710", "0xF7f9252862aC11447EF97971d4d04cFa729D8E7F", "0x8381a90d973b475f26ec75F50a5199706844405D", "0xa9bE45A10692F1a00817C9f2880DC98A477786b0", "0xA1a2D5186B11DDdfF8a7Ac0D9D3343c60b2fC624", "0x44ad71fd1C237A7182eE03d5448A232dd0E2C6f6", "0x79A3F775Ba64Fab55C4210C53E8A7AB892f415b8", "0x61F2b6809b951782E9FE6ed62b7a20dDa64EC585", "0x166ebc63C419fE3b988C108aAb7DFadbea6E3840", "0xc5157DF805161c8A221dC570Bd0AB5BAda9aF3f7", "0x790481AF9974315EC548A17500dA40fe9205a6db", "0x918B53BD96090055936E136e420D4Ed4ab0deBcD", "0x610aa111C4Cc1aa1Eb186EDDEb8e35a7e61aA8de", "0x30Ee4A9405616653B5495CBC8FA08bF060246841", "0x31Cf0A0646E166fAC6Eb1ce0F0aCBaBAdB0081BC", "0x8E4B106Cc0DF1Abd1038bcD9984705BB56C91f8f", "0x273F6927cd2B9d8251AC537B0890a55D7782B6c0", "0x7AEe0B1A50C67D381Cd0fC36e877178FD31ee4E6", "0x7dDC07734eaF983d5Ba7A1dC5396929E94259f02", "0x08C1eAA5c983cD07595571f668824A8811F738b6", "0x4B329a96E186Ceade1899b34C1dDaB1AC2A75a29", "0xe0597d6c16626399344054fb6622af59ADD2eE60", "0x6FD6f7aFB7B64c227b34C0f9A6AC040bDF695349", "0xb544D3bED3db41647c2E3B9C5376371B5FA60e12", "0xFfC31c476e61425a6Dc9BE01f37368571F2F01e6", "0xDD794075de75f01e03f66b427036EF288cC06888", "0xC7289d7A3b79db3185D5371977eFF35cdC499428", "0x57baaaB17889Be097e31a84e42cCff430F47683c", "0x2803B978812Cd0cf9aFa6F534Da4858e2adf991F", "0x2b18554d7e284cE4156b19a36878DF0d0a2B48C5", "0x010956874e75A5179b31E381251884DE215DE2C2", "0x4595E4dB569a9C094BaA41C27067ddb3c2A97a1f", "0xa17D31267ffd08a7aA13816fb96Fe0EAdAA5f008", "0x4cBc62DF0e55709D4C1BCC721C5BF57F8D957Ccf", "0xB0766998675a97D67D1CFEaafc591F9a91CC2c15", "0x222D6b9558D26F86fa75eF490cebC29C4F832163", "0xD12Fb1164Fb412fBe5471805921259e018F9F4ec", "0x55a46FceD2d46C64EEE7189a50004627559E81B1", "0x34EF2845dFBC1793Ba382b0A50f7202AfE859617", "0xf5010BE37aFc71928233C4653420F5941E35f5a3", "0x66dcB7851734D35820Fee66EceB1D2dbd7151161", "0x30C872591B0a7f8777301AfC0980783E7f0F7507", "0x29002779B313D1DC6472bdF7c440Ac7FF54aAaD0", "0x3295aA852B8d6F34B3C383D231b2Ba34476C0D82", "0x9d72148C1B4019a71B7Fca4c9093575e7Ec31F01", "0x9c8C405e9471b3f85f74E295913AF55B56179020", "0x388B1713509f5F4B874CeC9c56d3628DD0a3647a", "0xBb6C4541443a9695831622C76244A244504cF1C4", "0x917CF7C1c3ED4eb38912138F1d07e3ebC3EB4dC0", "0xD1C2A6D44C1889dDBcFfA2655Fee8b611d706973", "0x29b9CcC92459E4E8733b3d5ff45c4624Ed15E8DB", "0x449Fe5B49C351d1042A63C7ed79c423AdAf21Bf8", "0x37600485122bb42ed0157FFb6792eF8dBbfB523B", "0xE4F363a6AA7b25bdC9d4B370c1c30432a31A7b52", "0xCb5BD0f6a3675D0e19E458D64De2e428cf31f4cB", "0x8406D1b324F102671fE593C32FeFF01206C237A5", "0x7A17B1E7C5D229DA61b4799F50CC7Fa299F93b82", "0x1b31021Ad322E87f2b85dC65240Bc613CF0D9d9e", "0xdDa14504054a3c3c45C843D0991132Cad92CC239", "0x23e613512Bc66B9a009823Dbbd27C3F614196DFa", "0x460C6A5510c5db7606b746AB09de70ce5533f887", "0xEddD5064A0E13f7F47A118eebE3Fd276d659E53a", "0x2005E34C90320558A5ce95b6CEA40f38495d4fD1", "0xC414AA975f9C19fDc866edf79175821ea372d968", "0x6B33f002551d1b6EA361Acfc00Ec408c282d2ffc", "0xcf10d8730c35Bb9f148C4f8016291F2a3AF963A7", "0xf4c41f57EF0199B41B1F3ec668cDC156f172a978", "0x1751Ed1AF30b49c7b1a2d7561a09055dbf31023F", "0xaAe8e7Aa7818B39DE90DA8811D11735dbf4E8b4A", "0x1527664b2054c8442811B34B4E34a578fc0d0cF9", "0x8F71c2Cac36b0E97cA77A214c07e7165A9FB64F4", "0x31fB652f4A9e77153450F6bC98395A8B1b4dD6A7", "0x7d1145Cfd71fdC5C44403C0389CE04f66e44660D", "0x33f5492FBA36820cfD045615c589ecBf625F6E26", "0x37d5b14fb7AA9583521652Afe0c6c68cE1E3Ea3A", "0x704B6A5cb8086318407773f54fe0ed973Db26e32", "0x7ae0ba9f54F1335E77c69Ab4b969DB5a230795B4", "0xfd9E8136912646616bBcF7e32944684F99C5eC87", "0xd20F9D160a1A7428350e057d524C181EC567ef94", "0xe7A076AA632aba6D3fB322B7C44C0651c0d409C9", "0xCc3f7fbDeD43c617FdA06afd23aEe60C703aeF2E", "0xcFc7B27c99Ba0786894C5E4a02F4507d343948D7", "0x3A91afd84FA1c236f65433B17B1163C4Ea25D3b2", "0x9b56596edA8eBF7a971F6dD36F5DF6236e8aAe59", "0x634f03396959D0ad8c50f4DB0a0F4293EF544BF5", "0xAdCCaa0f3fF8DDE8B32F84433f5ecfe7366984a7", "0x02b9A901A1df075f94387C334D395550B1c3F556", "0xe865247bdf5dfaF67a6325e8b5426Acc5a705bE5", "0x5759328f472cc81105356bd474b24b3fd43AfadF", "0x03ebaB0202AFEB89c19Eaa242ea3a398ed390Df0", "0x2fB396c0B7f19053C61BF110e14D35f400585C71", "0x74f0c9F6489b66283fCC68c97B14765263c87734", "0x200a8900F1A32400b6Fe789149a57CAc2184111E", "0x8A3a69f24de39560BD0EA6653434E795C805cCff", "0x23A203C1bc97B3cad0adAB64FD5843D3e69AEe65", "0x20d4Ac9D486e909247051D07f3214A86C906A21F", "0x0f01541b5b040E28343D9064bD3223D323FDCcAc", "0xa45aaAE09Fd2aB7297b7C5cdaa4456365b884Ae9", "0x394D4B2C6bc9dD4e1778E02C736A56ed7B7b5C63", "0x420975c58474efCCb600f9b650b6A0C6183A5B55", "0xf3367581275b1B207F304eb9aBB162bF9Cc61465", "0xeC24114e54c9a153930E0cEc97ee48745E64dDaa", "0x3581327125Da9608993494C621D00d8511b861e2", "0xC33835F26b274312224e9a30aB40019cdE96f3d9", "0x67024966eB5b734D0Af9C743e926FE51431A69cc", "0x4C836AcF465548Aea8bB9cc7EB9D8B0Ec9aD44F8", "0x07cfa78f3d05CF752Da0481AB735D5A40414f07F", "0xedd46ea652bfBBa302290dD5F1d92484C7FdbeBd", "0xbd584B2b366fFC6C3ECf741b46a8874eF0B75ae3", "0x79CB0C81E8F80E168D064fe1Edf349F3BCc13fC5", "0x8d9fDcE9e4A94e327b820A08C3749a287F6544ef", "0x175083C56A59C2aE95BEFCa3bc553d1596485de8", "0x7BBcE0e59d45bd485205EeB097C5957B779A966E", "0xe0CB93E08911ADD03a6783a8C5d15826E61A3260", "0xB17466bcDC34C4861b5fC94e0550641f4Eaa74ED", "0xaD9824CfE8E70EDaB02b51AD64085767BA4553Ca", "0x7Cd82BDAF88B43F19D7960418A2d32d0CEb78Edb", "0x0a4a267410DF4e1A16Ff30C76F275C667CDBcB7a", "0x0E3c80668Dd5108D7d5D90c57daec0375BAf895b", "0x7Cd82BDAF88B43F19D7960418A2d32d0CEb78Edb", "0x0a4a267410DF4e1A16Ff30C76F275C667CDBcB7a", "0x0E3c80668Dd5108D7d5D90c57daec0375BAf895b", "0x8BE96dFe44427D5300052e1250E4C9778CD83D9f", "0x0fde9964f58cD72240c7fEce0C7C4ee86C81953F", "0x7413B8aEe52ce59522288FF8a63E77aC07d0d83C", "0x8BE96dFe44427D5300052e1250E4C9778CD83D9f", "0x0fde9964f58cD72240c7fEce0C7C4ee86C81953F", "0x7413B8aEe52ce59522288FF8a63E77aC07d0d83C", "0xF9ad6140B7C25859760419eB25913fd8f241576C", "0xB524630b0d73F6F3643a0730Da8a163928121CB7", "0x221736D5342AE6fa99e2c2933362aac48ADfe1Cd", "0x0A9Ef5feB961f1Ae88c58717Ae16a148AcD00bB7", "0xe1cBd9Dfa1a17077783DFc3F51855C2F297C8B56", "0x5Fe58d6236F9F47c6923199869DfB09B9E906bD3", "0xa22ad14CBEFd2eecBAd962a89D48b4F34Bd461be", "0xD42f60D3D98c5e9b9ceD9f505eA722A80f6AF1d1", "0xD42f60D3D98c5e9b9ceD9f505eA722A80f6AF1d1", "0x8e97CCE52F0d2A5D70B269E14134389A4051D4d9", "0x15Fa52BB667458EA9F813b12c19dba66D387D0d9", "0x15Fa52BB667458EA9F813b12c19dba66D387D0d9", "0xFBA02433cF2ce634Cf7A7580364914A020D219e1", "0xDb52123168A841702dd87BCAB7712ce620a5bc09", "0x75c452D53E0eC491cE946F3B337C898400bd5cb5", "0x0A116c14939b02d60d71564ccD9f3a9ca074B85F", "0xa47E0D0DB4F939A4D7B05aed5B90c9d680B8aA4E", "0x8C9A814746b35D014E646E4a6225B110f45cf185", "0xE18CAed659e9742874076bC8e2c9c3f2F2618EBf", "0xD6C41462348E2F1456E16467a22a837E6cB5bBC7", "0x00915A489FA4E312BFCa58BA05f5154943939B8f", "0x99597Cf196766832B4a339Cb3983fD7C80bF69B7", "0x971CB6b54bA4cc72b7fb46BF7dEf7b1Bc5E9684b", "0x5737f83D96c1368d03682a9Cc6D6E51B075f7944", "0xE0174990A27e3569F3eA47357BED28657670f75c", "0xf67b8655dC58864749683Fd6b8a076045ed932b6", "0xf7A94C7c823B29a41325E179FCdE73D6038877ED", "0x7E2F1bEB0856eb474e5Ed2c06618CbbFe66C7c58", "0xd2B43da038c1e7Fe3510E97f02183f35f162EC64", "0x9bE96B24472312357BCF6FC8439c8688DaE7b349", "0xCcc60B4Aa13ae4B966b498b08387F60f5b42058A", "0xa531A207A991F2aA2aE305E3a0332Fb1561cCba6", "0xa2F5Cb9746735C9a5BE29596d4D4B7592514c141", "0x2d760B38b3F28521413516c2CFF47318C8a094fE", "0x02644D499934b398e6872C66Ae2124BF23707E57", "0x951d4679332014E6459Ca05a2D38E04d76F40277", "0xddF5444326d5d2C7E55367d43FE93d6CC5e8Df2d", "0x080d28B8AB629E87b88474E0f469C0227834c828", "0xa694fFE62A4A34dDBc6A32B2883Bf48bA0849861", "0x5209BdCDEdB0CF59193bAb0a964d94514fbc7985", "0xE9c872a3B9CECB3c3a9b38Bd030Ac6436782Db00", "0xEf6aa104F6bd7E15697F5C8d4BbB1Fb20DCD8689", "0x7EB76549212334B63204b1961e248A0068b90b52", "0xeeBa671Be44Fc2Ef865eb793FC381517e1dA07Bb", "0xEe9d7a498CA31305d2863A7118Dae7453cBE02Da", "0xeD7f06b6001B37f87701B0867134c90E436dC188", "0xE4c8Fa1bdaf342889bf61a4a7c902752113a8C88", "0x27C9706C657F8eB6B2BD8c206324BEe1dA7B1433", "0xa04a6F32Bd61143139286AB29FB5E4d43800D8a0", "0x369495449213A1B3BCe6a9e0a033D598D797940b", "0xA95fbcaE8F0a58776d2ae744DdE9488FacD35402", "0xE528b8d555c5A7c787eD1eb97C0206206Fb988C2", "0x6a8F33C2990022d80DdDD7388101540FC633b98A", "0x8845693a6eA464Cb4859403566428f7Bd8F0FD5F", "0xA63B33AE193360b6A7F9abb2985AB97d9591933f", "0x3269874a50351D1BFc6895eF878f354664a8CfB7", "0x0a869E46Eb295AF715fAD74fF2f8B614f6407644", "0x37EC3f084CDe1c14F060c145C1F4C4241314fa15", "0xfcd7d6Ef85Fa93Ff543904263b4334896cd4A534", "0xe77a46B3a5b03FC1c379537d3c9B12249264391E", "0xFe6948324A8C838B9fC1B64E2CB60aE9E4c3c78F", "0x808a9c3E71F4F0aBdF1797705f0e9207e15c67c7", "0x38F99F728a55E6b37C75dd21F0E06DA3b452d803", "0xb735Ca992f033Be447a19dD15db61CC69C3CdDE0", "0x69aBF7D07de0a12aa314d1D43448eA0508C6Af7a", "0x89F4D41A00E6f7f3c8c2208ab5386c88d05a1444", "0x3Bc5b5547659888ec280c70f0bF95fCFA2a101eE", "0x97c570eB779a328985086007531D347308DF2f9C", "0x1288da6372F11677E7A1AE3fc62F32C5C87Fb016", "0x197Da2071B3558Dc9F042A092686cb4327e0f18d", "0x3E46Da8914103C8E682bf96615D65Fd43C509F58", "0x2b10f0F9f44c1f08174736B8D7297823cD0Ace38", "0xe62245a8F353577Dab7692eF21AB03319d0067db", "0x7c07DE73718cd7Fbb2413d6cFD31Bcd4D4336D03", "0x023419B49fF5dda875C13e7f12bF5Cb3D26f7c70", "0x18638C164cD7785235D206EF468880662AD6FC9c", "0xEfB0fDB874d9238C1c0c25e939209196De370500", "0x6981A68F163799971227d13D5d186cAbD1D0B324", "0xe6EFeac3d7ae16285642c4aDf886379F56c386eF", "0x8831710c608C3206eB4AB24341271113b1b8C8E7", "0x4348d72bF6D05aF96caE633eE78d7d991a4bf627", "0x9479b07f764c4a2b4fB25E18e9ead8D5e6829647", "0x2299E12234ff6847eE24F2D7D25c923C2F251694", "0x9Bd6173A7a193f33d635536149C967e0d7A05041", "0x2584b622Cb86CC9F04E29D114dcA9111fc4EC94B", "0x1F3208eD55A506C4b66f73604c0d5D00dc168dE4", "0x1e9Ef4218Ad6A363B079b7a754B701D7f3a82A56", "0x5a693e91390D9D58b062141587e7F8B423c2243E", "0x8e126FD37bf9D0b480AF3815770B834b1CFC901F", "0x4Be18AE135E54721c86cB297bCC2477c0195114D", "0xDD42DD1ef3cBcf2eaD2FeEB3293e4ceD7302Ded7", "0xCF0EDcd21CC44120d39A061CcB814Aab49d8b617", "0x6504B815f212EF3CE3086f915F0B43F2faA60032", "0xb029D45DcCE71F0140f269CE09E927425c4fC48e", "0xB94a4C1735782C869e5C49d954583FD1268B031e", "0x03933F8De1D686bc1F5cF742e9Ce62F308878193", "0xA669c478376EA08C132b43955aBf1505F9c28d6f", "0x693ac15Dd53baA9B3Df9e68dEDd3574e6cb1acAA", "0x2D7d1FD59aD038F76e845207A916265A65552f44", "0xc62d97115838F3179e218a49deeb8929b2Fd7B2d", "0xf96158E6A16450915AbeE82E678f9f02D02857d7", "0xF1C2582153c6FcEceb862c257EC2e6A905D5Cb2D", "0xe2fB97b25421CE607ccC3dA1D31c332214688241", "0x36De8042D1577183Af1a6F6aa12264a4Edd424B9", "0x77f67C3773CD05C54505C3Cc22D10261Dfb207FA", "0x12f6D2eA9812239fC051B868eCDDF48499E3056d", "0x9e39a16301843c0367B9D243C9F496454390346e", "0x743A7c9CC9a7F91926434FF59E3712713ce3CB86", "0x415eab96CBcB327F5C9623Afec23150971A7676B", "0x0cbC20dECB605c9EF21959f95eEEF6Dcc85f7D35", "0x3Bc1EE8a015cd4252eB9938108b30C049b2c9628", "0xd89A73EcfA60D13743f0cba3AC4d3A6C7Eb6A1c1", "0xCfa38e9e665eF975dEF432566898D20baF49F229", "0x313550cec139eE34727Ba3dB177c2a8AC32c4169", "0x371a6829E704218455919B50cfb862206b636630", "0x97213f07284f671ac63D568672FBE3b1AB66aAE2", "0x735767e785704779FF4F66EF000Ba86225A8BEc8", "0x736970fd721DC35eE25B6c95d151a003B6D99Cd4", "0xb43c054f3b7B04bB00A6387c8Ea2C2F3989193a9", "0xe8324fDADdF71645201Fc2D7FB5023756E38E75c", "0x31795Adb4c98183858D38F59c5D7614c6b0Cf0b9", "0x78FcF20Dd9484e9Ef9C5948Cbf4839cc7039B041", "0xcFA4987B31B6d5b1680843E9f0b8384238e73Ed5", "0xFd3507eAe870Ce34C1179f80caE06597B409b09F", "0xd3f7eA929ce2b8d647db41a5A74405E871fE6e64", "0x4187d83692989C57e9A3d1D66909E787A14933Ad", "0x8Cf483C38B1c7B47343925cFb5f9B7964a6d8fc2", "0xd29d1757A0c10c86e22e16D5A090585779C76cd4", "0x79f26920C005b8f3bB95bEDD7E681dbd10af663c", "0xdd02Bf4295De62e8e93aB1Ede93b0b8F37c12fD7", "0xf8B2028591a5FF2384B11f08f1424Ac2829d1ecb", "0xF908d85578e19BC29F793EEaB46c1E859A2c3054", "0x0e4CF65052Ce881c1d6DF3332652b347EdBCA6d3", "0xe4ddCF881bD1A74C8ff2EE1ac4C038c50D7C5440", "0x87085C0d2918b10F8Ce7FF7783cb49dE755A7714", "0x24D7037A53d0A903d9c523e9D7F4b218d31dA3E8", "0xAa6dB685d2c1AF3aFcE368cd3A962C924b3537ba", "0xE25F66c8f12A0d46A7a48968Dd24ace348420B3c", "0x5F9aB1a9243e26517331057C3c3736dB512E642D", "0xB191B72CAA1e9Ac5Cc979C8681C2B2EdC63f245E", "0x1Ff00f08cF6A6E74e5a2440060F51E05fA10B693", "0x9fA18213a6F5168023439c634B0a78E92D80DAbB", "0x4107e7c0129b58886B27037D57c0d4ed678c9766", "0x57160107d0b7e1B1623F3b70d0a31DC1ba6e0AA8", "0xc66407dfe6fE2865ea5D0744e3A9ceA4A421e48c", "0x50cAD3d203F6e7605D361424f0691760cf5F2d7d", "0xa4103F90693929A453ECc1C21F7Ac9AaAF42482a", "0x0eCa22de33FaAC4d6C5136F512acE576DF8dEe26", "0xa51a570abDeFd7897b5917DFa2477a9cd6B24f48", "0x000000000D0D02A775C6E45C2b88572C07CF665B", "0x8376D586d582EA8e4F453247d903Fc32b5800020", "0x61566eA750fad88e78c2D0F9FCc8cBC39CB1AA13", "0x56E362aAB523Fb03e91fB5f156E0183AC5E214f6", "0xBd84C67C46b733b10F2a3F5EfAcB9860ba31162c", "0x190a0fF21d450Ea2B77Dd25b1a59517BC60CA625", "0x2CE6Eeb404dF5B6A90109D6A22F5172583cC9eC8", "0x5a609588A0786F4c88278f21bF03175E79CB42C2", "0x3F87Dd0c5FdB39aD775D4174Ea31bD8BE0914858", "0x51Bb5c1780B5911B67bD56850Ef3013F0909A042", "0xAF65468e1e56eDc8EfcAC1B3e1BeDaF8d358Fe26", "0x86f7d199d1aa3458d4d8228B2630a7Bdb1804cB6", "0x7F5369c98D037DaC2EA290AD85C877f9C61F42a3", "0x57221aFE196A46a30b9503AEeA3309cB584ecf39", "0xb4b89b9ccc2Eb5E158deDcA12ae69270c3245f52", "0x8860Dbb681AaE2ac4665A00Fc59Db9680F367b08", "0x2906308A5766141F45A09605d5B67886DA8EA9c0", "0x7E7bD9d7D0bB1f5ff0172cC5159CacB4DBd918aF", "0x269B381613576e7Bec8cA72D654ba742ff5Aca14", "0x04579AfC16D9173D15ffA8671DeC273077e2A9a6", "0x84b7ED49c06fFac13E9d7F909677A4D80eA09239", "0x6dD7FbeBdF09D988cB924283d406089D6df9faa2", "0x190304E18E7Fe36aF8932d22BDE5E8204dD8c586", "0x1Fd62678968E483AcBACA39Eee99a5BD64DCFBaD", "0xAA223908Ca928F4B9aDd21dde50Ce6c2586fB40b", "0xb0Fc6a345ECc928E09c276C7A46Ae7095E34f9df", "0x6C1e29c9B3Ef6F52F1e28CBE15A18095F78C8c32", "0xAE1c4f0C62C6FEd12490B495e35Cd41866F7DD68", "0x581F715a226bFd99389FB9b914302cc5F91194Cf", "0xa6df41b0e2346cE2053Cf7f5c6617AF7EF854A20", "0xe701fc9448ED95D1b01DCa9DC5529487639DCd7B", "0x8aD37fa6DEee020e5eac96eA797426F3F5782141", "0x40e7994Fb28E51c88e14762eE7D16c74Ba0E783D", "0x06e50cBf60D0C590bdec050E4a2Cf2c82ACD3949", "0xE7F7B1A39D4b2335FB79162d4de57B4ab23A4938", "0xc8Ef90D1A674bB683c6F3C12da5f557441fCb179", "0xb2536a9CdF343f011c515665d43062A672CB640A", "0x0aC9542dE97f006CFFB93B3fA07078ebE35Ff7B0", "0x0179974a09C4A09f18c76A692D6e85FEE8C0bd2b", "0xA35ab92eBCA7422dd6c3aDAc5Ad87f9bd01B058c", "0x40a745D7A2C7E65413560f55197E73A5d91B49C4", "0x718D3777AE6642C4BD5aC2225329Fe9ce15839AD", "0xDAecd481F7F3704F7CBe8024BAE801710A2Df389", "0xa42BC061854Eba5721DD9694DFab12A8e0a3a13D", "0x5122A1829480cbE3fcF6B947d9855C744ee481de", "0x4b660Bc43BE581288993794703495952Ef5b5d99", "0x5823E709c38fa606dE3744B1341001e8981A6737", "0xdd7093d4480772752A6a7fF0aD2cCb3881f79dC2", "0xBecEa0C092FD3dB62D235EB64800B53B479E1303", "0x9fb3067DbCa20595A2D4D9703F8b855924069346", "0x1CbDB10e930e70B4Df611AFd3Dc962ca474701ee", "0xd099D2F44b931EfF9A897d3C289dc445CA13D6F7", "0x78cEe52292De31b5DE360826D78C1609eA3b2190", "0xe793A7a7c7b7A4CeFDDb30F856b01f36E51B1b82", "0xDb33277BC7C18Bd682545150276A67426cbD15d2", "0x20CfF6C2EF301F8235f8754b4a969F91202814b3", "0x43c49ccCe2A11A76da9d8964bAd10c007BBda768", "0x22C6055B2E7fE3c6f3DaF3c8aA01BEeb8ce96c56", "0x99F391F0A1C8d977CF686f9A58B2C0753c756000", "0x96af3217fd61cDAccCc143945f18e565DD3bfafD", "0xC030Fd069BBa5BcB08bfAF60486597f7a9429301", "0x47f3459990068582a29295DFc9CDF15Eb9270E7A", "0xB3d9EE9E26C7843F7C028BdcA83461b813eAD3BF", "0x28408989c52C9358E23e4a9449Fa1841E0411128", "0x0947a9558b2B292710Eb85472A2Bc55261f85A22", "0xb4089C9676Acdb9b3533512C5B5090c90cCF87E5", "0x0b1a3507cB4f163B1AA7F86640eA74ab3A2190C5", "0x91e6Bd867a868f95e6110Fa8aC0698653772e96b", "0x569C5302d85d5B5101C40bC66943D8727138F975", "0x3959CF055Fdc0F00dDBD9F4F6Eaf21d08c5Ed2A7", "0x2330C838e687054fbf41938B68668F410aA8887e", "0x5f04ADE8dd7952C11629d3Db45945F7eD06a2aaD", "0xd89B859281506d42504fd19d67F961B5cc3cAa30", "0xd2Af1833E3dc5E494dc71eABe823c73b3b3F6Ab8", "0xb54A3c66A722BFEb542Db0856f732A262dF13545", "0x3EbaA4C2CA272645706F71a6E6018Bb7B8569617", "0x3DE10386DC257F26d09584389A588AB4DcD2669f", "0x8b397197e1282297609b025952923BaF18d4eCcF", "0xC484A69CdF532B78221C4404D4cDce687A459002", "0x62DEE8D8c8974EE1693eCb99f8627D6923716503", "0x1dB65d84afac2be0e6eA9Fd11D46cA071225044b", "0xd2E440Daf254392e05dE5b8bC98b71b67d746f59", "0x2E1b4C98Eb62d0fD17Ad3792E7b90bCd2092A692", "0x50b4aBDd0816Fa87d41b09eF69f73694cc98a016", "0x45998e81d0CA4903887349AcE89aE2075E39c000", "0x2A0E836EDF2c4E98e431944Bc56d39f5349446eD", "0xC037D0A161964519A0c430218cA6cDA416C58773", "0x0A8543f74bb324DD32E8BCB7063E317aD0A015Bc", "0x67D77Ed8323bF9dA59addF3E34ccC6433c7f3B76", "0x4069a9605828469B4235496428347A74C8F1eec7", "0x7df978fD7c4a4fdb8227141b9E6D9dAb1d7c5Ee3", "0x27D716e8495b5407DC67D757f318c68Ee3b72557", "0xecE83083A39fFb58295aDAEe1cbc063F9C0A5f58", "0x0854F894400F7A9733D69022C25d2cE42A40Cc7F", "0x1867D8C6D129A1361795d0cc2629a1DAF0949099", "0x940181EE46848dc5949b49371FC2A7533bFaAF5A", "0xd9B04DCdE90299c129E3e2078702A61EBf2E3e67", "0xd2fCDE02475790124043d97E2Bd91BB3c5B91993", "0xB15616d1a219aF7f45380B5D73D8470F3e56404F", "0x6D44e04aA471317eAa3fAF5EAF69D3f353aa65a0", "0x793E5fF0Ef2c22D6965B2d37cEEB63BF6E85c6e2", "0x4Cc574B3c4fbBc4e1f3dbdC6696231A86d0CBAFC", "0x7C2Ec09AB7b560AAB10781A902844d750a1c35a1", "0x59506E94EE7bD5609E64E204ef7D9A832b6111aD", "0x6d9EB045b6b33b588C4EDCD610A3Ba077d1Dc213", "0x5516e04317f3Ea80a8E0cD0D50204D23e8BcF06F", "0x7f7eA5939e6faFA319AcdAF40f7B238eD17fe8c6", "0xCbf8BF5843e752354eC769AE6714872CA8d9D792", "0x161452E8595Badfd1EA08d2CA63066f432e70591", "0x4C44d5a9bc3Dd10BF6E4720da56b9fbA789615fa", "0xb817BA54DE6e56ef61984A8E076a8fC0B85F670c", "0xA6c006e62Cb5f52dB6cf49bE2A1d90DCfF2FbBf2", "0xEde7ef1835BDA5FE690F3584397e9b26bB1C9BAd", "0xBCB70ef737bc6E572c1A137333fdE29D7d335cb2", "0x1b9a7d0Ff2355E47d27A7973EB933450FD4e847D", "0xf2939D8AE2dC34181fBdBa367328eFDf153ac562", "0x71258dEDD1a9B22A2450AF23E21506b687635E66", "0x88888A49B25f106031B7E7230d875eF52fF5C6DA", "0xdDA6519B463b9c3F09C4f62df4D962156B88a3B4", "0x0DAec2ac2B66c214be728fA158af49Af36577ba2", "0x2604a8c13719b75B0d46196EcF98f48c7bCe1aA0", "0x80a4b60EbF839B8b291211Cf30a39Fe7c2B69938", "0x32503759bD6A6c98c3F6041a56A61AC196c4698E", "0xBC4fD34360B672EB5d946529a0715Cf3d6C48344", "0x3BFb6379DC2E616ba67Bea6bBD7BFECF59F831cE", "0x0CeaE075729F612bF3e03BDB1e3678eb57deBd3C", "0x95032E8B8Ae61eF05c2d96d1Ee7c8B573338f9B8", "0xa192C44E675B4890E4d74B14EcdDEA2E59346C2D", "0x514b452f906658d352dCEF5D6928ED6Dc2cEf165", "0x4b724FF7aAAb589f5F0B9f533897D0D07DEd1ec0", "0x96BA6462cd7B03Ed1B912BcecB1baF2176fcCbA0", "0x5949B9B3ce430c16A49BFCE6D00C52C65Eb10bFb", "0xcBC9042B4f19eDF5AB69F5AB1a22DD716072e81F", "0x516Fe3AFE981638B065a5291f482d8F2F847Cf31", "0x2C53371E22a83515204B01766559A6a7e53Ab2Eb", "0x27C1E507C462227B9d1613fE30558F0b839F119d", "0xB8FCaE2847530ff12955F7d9AADE6248ad78F45d", "0x713DEf1c76CE2c8589a3668c3e973d21c79ACbE8", "0xa4A766a47D3e864De556e5916f62fBe1Af836832", "0x15870b3f98b1bD6bc19E2D70b7Fd92FDB7785790", "0x3BDd7CEa539FEC6E77405a6142df3D41629A9ae9", "0x235e265536D1D14cA243589De32e17Bb39589243", "0x6B60aaf0420A8a7440D5A76cE849Fff89F868FCB", "0x83FCFf113C15Ea583054d76786242D36Fd06decd", "0x6D2E6E977489D80c653542CdB320C422D9cF0270", "0x9867d0db9E43D058C9D3D21dBc9fa94f84A7Ab9e", "0x426a384737A37cb27d7Fe88A723eE30836457A2F", "0xca0B96d87458B7171f97330Df34E2452Ef313AE7", "0xDD17Ef6F9c4537E203d0020654d3dd7e7DDd1703", "0x5DdfcD9D15AeA15dA19A7609AC911682a5f18a13", "0xaaBc2f9B5Ba74eCD7a5Bd1487dC3c4960F80d1A8", "0x5c180D66A3fda11074FB0635E1F8bBcBE8B49c66", "0xcc3827389119149c40ab23297F6cA738Bef490E4", "0x4e968c91Fe459c3bB687A2bf6f3d11Ecec1643ed", "0x24fdCAFA27c8F9F2f72d9c9322459e7299F452D8", "0xc82a3e1516ddE24e489E0155020991859790Cf8f", "0x08C61323930d671cF4D240201638608e064B9770", "0xA6e206C46602046643aaE988a49B249Ba06f5d69", "0x4b0Ff98dc046980F839C41f24040a3816EFA7182", "0xa582DC123807Dbd09e611E67bA9b4eB5208A571A", "0x6BeD7acC35F485E3FdBDF94A846983f34f67b346", "0x425628C3C7f1CDFb853cc09F4C70C335b8b62974", "0x66c17c7109da0F34CCeA58194b0Fd08823555bDd", "0x2caDf0567714f6e95bFaA08507E45486ED6c60C6", "0x5bb789638725E583f7DF55FbD1752f967623ed54", "0xECB85235e30B010A4e140689EE3560947633B11E", "0xb0948f5cEca73Cc971151E2f2A97c90222a07d93", "0xecEfA8aeeD05141B2e31fbFA70C958647C9358a3", "0xfff15163D3aD61ba27b9e4E4A8EbFDBC40c4da19", "0x9EA7f98B2B2133663f57fc5461E42AC0F27cfd72", "0xb5d27664af0f4EA43F6A5C69c0c31Ce8fC52C61E", "0x50B943EC1010b5cE6c78f82f3761eCdB92f2a4a4", "0x946904E75631c71F7FD757b0d69DB075F32f4827", "0x4961654d58d14b264f9514d1f1C6186Ac0761680", "0x01bBDd0b44b0689254329f750263eae8261FF72d", "0xE7E76f29E1dE00DBB55466c032Fbd1351d2Ff194", "0xfC86A2A8f4CB6838Ac2150930D73803666BD4299", "0x06DBACc7c5668C4974E09c9Cd9C50788Ad995D19", "0x4C46A5A2231Bf92a0Eb2c699DBa9c515272E35cB", "0x2153f08B4D5b79916f9e2B22D7312147DaDa770a", "0x6fc3D8BdBaF202DCAdBF4b546E75B3c398c40579", "0xb737ae705A13AE2899a40e12B1FE931Ac9b1ac21", "0x6007327ec6F6fAE2b6D16C6aB7A629266C2C9Ba0", "0x586aF7C9Dac7bE6Db50f0eC0D5b420e1cA6989AC", "0x79D7ca78E63f06F56762f77B27a77B2BDc64067B", "0xe0025Bf0818514dE7b8c6E727a9a69304cF8A4FC", "0x5Ce88D197F1C0894C1bc85E3fCEDAaf1dCa1C14C", "0xC3EFbCd6ab9Fc4c5b766F2A63612759c75B50149", "0x029FdA3CF6A55BCA87A55c5F8dFC7aFF96CD9078", "0xcA1FeC9BED41C4cFB681EB55D519668a3eBA7420", "0xCA68C65CF332Eb855E7Bc680009eCf637e810149", "0xDf93e5ac3e419f72e44f9826bb7243fAD9AAd3Dd", "0x40FE7B5492c884cBb1151452C6DB320A41694aA1", "0xBd4EEA8536099A4BD170F0C44257537e16EE8C3b", "0x56896bD87d1270BA43223C2CC00d3b33B6A46e11", "0x37C7EB3d9f05149Ad63f334c967F3f6859E02E07", "0xd4e43fe65E175f53Ea9C4D0E8c32a46BdDbc860B", "0xe1608da73ac92f24F83d03371Df8463a7c5A9d06", "0xe40e65824B434466d392EC4a672Ad584ebE96254", "0x1609c3275989c78897657D6dC9caFAF039E8Ed9c", "0x187ED96248Bbbbf4D5b059187e030B7511b67801", "0x7E9bad327376ea98D48b07dA867B23303d837365", "0xffF1E4b10fffcb7584C31e61a0E8f3412f7fb86d", "0xF5C0F3269B0a9ad8B51638CFe8444a5Cd3cBFAFE", "0x9DEc8068F465DC35048b8eB5bC7151359c365533", "0xc2A322C4d045CCBd192f9482143cABa08BD80e81", "0x7ccB80425F9a465b0E16dc5fce1A522714060395"]
          , me = ["0xC8A576387dcc12eC29fd8042C7BC5CEe150AFcA3", "0x22492163ee72814D09a20360B2Ea53dce290CC09", "0x07c768ABff646D20fA6411e56945930f7EcC1CA7", "0x9b4B5d9f845E98cd95b81a01753dcB4b10a78634", "0x628574Ff23E44B4dDb492DAF4bCAAbb0407c21a5", "0xbD96898865929cb5C5d883c3162d1B3510a2Ce73", "0x806565690c7fD9fDCec86a46876f786Cf9725E5a", "0xe2789810c64a34cd6F2A938D07d5a848fE86fB7c", "0x8122366644383A661Ef753E42eAA47867E7e9925", "0x1D4E8Df309367a4aF54A51d21CA6bd0F26060E51", "0xFA1D08e5160746f7D75becbe0C128921d6Bd63B2", "0x6e694e160248B49C6468F05f60ec0875E4CfC282", "0xE757CC3E68976bBCA12ede25371d81639768516b", "0xddF95Ba86A17DFDB2F97C230b757AD581dfCC928", "0x6cF38a81dC0cfa464aaEF0a6f7E0a62600054BE1", "0x389B238986557347eb19A3F7c724ccf3c0E50cCE", "0xBc925520045a466a096130C8c0340f20F9F523B2", "0x88D5deD1851291ED011333d95edBdA1627F5A34B", "0xb9E38a8bbc6f9533B3110E31939544f5d84824d8", "0x80a215734047b557a62f78E4452EEBd69fc183Fd", "0xff72d394ea5B737DE0B462990b1d93a83085Fa2F", "0x3E17B949DABf422d17D4e34F22867FD71dA0a154", "0xf3bc44bB376aea8EFbae3A2e3A7136a19EA7Abb1", "0x6Cbd3DCF638FD647b8338b76a83E6D8A6C74B960", "0xE4083F1E4eCDE085bf7Cfa1AC4f1f9a02905698C", "0xD36B77DED2802e06045823C56E3Bbc0025f64a82", "0x01204297dB860f097C2902Be6D6aC3e654B89c66", "0x8086fd8DDF2cFD4A6843ACd176bb75d2C31A2690", "0xeCE6744d761feFcFfBa2aA9f7F64Cb8c0A1898d1", "0x3cE22e7bBe6C71C51d7D67dEd41f91D8f3987E0a", "0xAD3769B39d5780997C18F3c9645a8Fa2Fa0557Aa", "0x3241F3F3637af6b007F06F4EA9B919352a29918C", "0x23C8C1cbFDA2aD17A1e122008B65DD1509CEb12C", "0x2563CeA93725dD8d788247B76DD12d1390D786d5", "0xd84FA2E8B0037DdC09caec3A9d5bA253337F8Abd", "0xBbc3b04712561cfE121b44A7BA482Bf7c8DfbC9E", "0xa11e1C19Bf7FFBF74CB6e79E5ABB50DB17719dEA", "0xa032C68F9e63b6036b01Bef9b3410D712faE8A92", "0x1Afd05f4379429AD7815e5c20379aAE31E6519ca", "0xC7F99827212d76D1456e8fbAFDE87edf8333AF14", "0xe9E38EDA18e0dB7b3aBC10Eb5AF47FB852825D15", "0x664B9e8d742aE98ce483BB858Cde72Ed4EBfD432", "0x27D1B6d293E2DA98812e58A20771f4ab2e0C2a3e", "0x80A079ab642115c628b2e897213ca474664b259A", "0x892eF05fE8FD74b6B1dec6005Daab813cb34c3fC", "0x11db1507aF402D9Ed66ccb4a3136980BDbAF67D9", "0x995003b0274a0b4A9b9f687a5d6fBC8398AF28A1", "0xb815f7939b19eD614f3D49F0fC7E034332Fed6A8", "0xB0E5532bb41a55cE3C82E4374514Ca6EB65fEc70", "0x8FD100E0eF105127cb35B1817b643d15978A053E", "0xBEDC97a9d5c928C8df1e8e89705E38a030c1109a", "0xA0e8ecADF4F9856999773c860D44aD63d1dDbc99", "0x4dc7b935e1ad96dd760590d005d3946f68EaF13F", "0x26e689E39B358812E8Aeb74B48b0d6CE7fdACDa0", "0x3e93c6dF1bafa5e9ee4811A947e0c5d10b6d0Ad6", "0x6cae394b522038557B7c4E6c50BE464533BDd056", "0xC5a65ee2ED5a6abB948E4536DdF16277f48ADb5C", "0xf3fE635D8d17bE4F2f43C7d1073cb3aB44321009", "0xef7C2644C21F01cbCB3E8d8B89a9368C26E9b3F1", "0x3992912d1446F26733fFD2dfBFb9c9BcCF3273c5", "0xf82CED03cA104e59bBB22E6Fd260145232e21beF", "0xfdF5C67d197668a79a55d370b28667adE0b14d9a", "0x02Cc413e6802088aB66646fBe10616a15626Cb69", "0xd0BFA705458998804b7f1C8825E9C784E6434ca8", "0x8bEac2043A0A0aF1d6083b7BF439e3c3E59B6C3C", "0xe0da4Dd4bFe91B49831B9687e5546a68F526FA55", "0x562676C0a53D34CAbdA0F4a6556C6bEDA3368afE", "0x42528F21eC4Ee966f2110D7489e985211B66a714", "0x154B98db707B1D9E559B0119aC11957971324022", "0xaFA65D9C2626fe1D3F96Ae3cc5c9CeA0F8BF015D", "0xdB7B0ecd60d560f435115d375C33BCb864dA7685", "0x2Eb1c09837e52197256cc8b22CA0d22819fef067", "0x284A22034665Fee67c5cE68fd96afc264b45F1a6", "0x44ACfbE02014968B242E5551a7FedC2D4515d84f", "0x68501d4A1264A04bfaF43b66fBc6ee877d9B2666", "0x4385B51BCB7772b8ab2ce6C0d83B2b99eCbDA61f", "0x1e35483f0Ca3B096eC1863aBB11b50208EcDA735", "0x0aEEfb55a76094f6dA8f155Be0FA0eC2AeA4660B", "0xDdf58557Bc2545C5922d9147DC35687c74f980CD", "0xEC4382f43F73840206906E3DF9133114F42a53D5", "0x83fDa5907737eFa1ad858e938f79a561617d7541", "0x95f01F2d02c544094ea0126054e8040896F134f0", "0x8315A6FECAfd4Be9b02A30a530C42817f11A96B5", "0x119be48C03Cbb06b2EC91e86e3DB9858e4388F07", "0xE2F21ec412Ac15104cFC2a5B808233945E67eE64", "0xa8D0fd469475a7cdb9E2de3A21484ab6c2D22bE7", "0x334EA59c5F83F8D51d89a5D20b856Fb21f6eFFd7", "0x72525DC16a2fFF72902E3f5E85572f0615f4Aa62", "0x09e77764b6D84e8f3170665e700F853fCD103a6a", "0xbd47426f58F53b58446aD21436020E266C701EA2", "0xC6A06Df579D092701063b05DA549786dF1D74060", "0x5eFe24e5e1458079e14d33797F1A13C59c3E2602", "0xd7f9C9C9Be4457b26Bb19bF6059A335319ACD03e", "0x940eb9a8DcDDcc5066856a74B61bd47f63172754", "0x299F7A3f7A9aEba55272F5883F117C82c31A96b4", "0x39137945aC62C4Be0f7A3671E747617B6fe5425e", "0xB3B70eB2d4DB8984B96FCaE45436F96797A7869d", "0x4f452bA6fa8894938E77c9A5EABa09bfC85E64a1", "0x7d8e3F21B9496F216e26181189B8340d0917C05e", "0x997AB522B05ef8316B0d3e19e7c3DFafdfd1a9C5", "0x62A3aFfC826bf071cE035453C93FC40871CCC86b", "0xd77A032A4d6dE9485D4EF243517411E12E5F6449", "0x97f15f25324aa11FDAdA44047156c29F026778c3", "0x400301c97cB67F717f4024F46D8cE326b04988Ad", "0xF754abA5E6205A29DD282348212bf5C75758aC70", "0xDF8A57A9F738601fCF307b4fD7B0B6A4CB40Be8f", "0x177c8eD6213cd22c6Cc476C231e6843989825ebE", "0xa4c0261634b42c7bD106cCe3edE5fa0b07fbB937", "0x2d613A71c0891e02000D8e66767B748Adf82D8e9", "0x7D864196Ee87d13Fa3e727B955e829f8691D85F1", "0xa1F2165493FbE740C62Df25A06054815D4c9D81e", "0x34418f5421E4EC843Ef4685A8edE5d8aa13C4625", "0x7D874A4fA6fE376773C1e21f08D298a12de53A85", "0x7E45d54031d0a4cDD425fB55006b2Abe18A2B43C", "0x0B4b4a833b7f02fC0805aFF8E3f6C02072d01ded", "0xB33D7304346658be54d68975E3e549B08D9BC56a", "0x955595d70Bd5AA3eA6fB0622eD961FB1dAd1C0B6", "0x8a0667bb17Bfdb987eCE5Bb6d32E6Cf2CbF36e8F", "0xa8d6f6b0b902414F646D4887Ac0B958128a78b9a", "0x81d76d1eD5Ff17bcaca7F2c1e72c812Cc5296F58", "0xB5092f429ea6eefE3DF1aa58bde2db2F57758aDf", "0x15FF3CAb9Fa19c49d3F83c1138eF01FAA7EE4259", "0x59C06684970c8e205B7B1f6256F4A65dCFC19FD8", "0x9C373C32E9d5a14a1173Dd9C5fcCdB089E41c217", "0x0390eF84BD985f479901A3D2fdD6B490c4ea1F76", "0x4176EF848e88690d97F0d68e7cD68F431b35a451", "0x6decA643de2799ab2Ad4D28DE3B24BfBf012A5c7", "0x18742c0287B5082C804e2fA8b174D6726C73cA20", "0x9E0acFfE315e55f84DD9a8E4CdbD8DE7Df18dAc8", "0x59a665F0293dfbCE00987b31f20d865e39791edb", "0x6A303A49c7770D65CC53a2d1ce1417Af848ED2Ab", "0xbD694530E462FfbC11966e11533C37C3AabaF868", "0x892F56B763489819179124cf79Dcc458267747Ad", "0x354412f17D2672e57a5f13cbE078A03d6F663E21", "0xA4412293Ee646a06B7561257633411E4f5Bbe089", "0xdE5F64313bD08B14c8405Fa061Ca6816dCBfD741", "0x99532f270D924242241cad83C6012c20074F630b", "0x33Fa569D5643550D91784d445f4dabce4e8529C8", "0xAB4eD3Ccc2D95A6CF446393a8518797768ff926F", "0x1F4dDf1f518519e875D5913B0b24dB46891E9127", "0x0C1816D911FdB36E9bb881e71F57eA30dc7F23a0", "0x0A3c0dcCcff34dd3986e5FC0e21125AA04856B12", "0x01BB6774B53fec28f737500B9B7471666D220e1C", "0xfC427CbC7B265e29e2e5cCfbBE3Dda9D6b3E81C6", "0x894Ef30884A0cdEd6c1eCfb41A51bEB36A871E03", "0x7bdcd0b9D85D839d4cFf45C1a49767dAd9962112", "0xf37f07b94B2B8E3ee940310F0b81411ccAd61B96", "0x7E5769C9bD4916f3DBf8D29A2Fa66a4e8258b83a", "0xd57e0aF543665F4469e5A694d6AF49c5FE258FAC", "0x64cBA5Fec6CaeD2A86b1F884427Bd5D8299D22A2", "0x20fC6a8eBbBec86E787F54D58549686cbf0B14Be", "0x0E6944f9dE175C85243080be8734B30e47a9bAe2", "0xD84322418ED501eDcB6A80aeFeBd357E0A75Ac72", "0xcB5c50ee98e3DF67f2F071849A44E23d5BA0e2DD", "0xaF69F77845B3d7617D2D6693f8EC5BF66DA3f1E7", "0x618A748572C7dD50cf5eF724657BdAaA8F7c6629", "0x9619085903DfEd245046CA991C70aAe1A517bc37", "0xC4a0490211A023d2C69040ADB2A4c58d8a5F7FAa", "0x2323dDDbfD0419a171B07B7E8BfFed59dAFCcE3C", "0x4E159BE653a0df16068E1492bD50b3A4AC5e5C4C", "0x83A0BeB19e0E3D347941fDd739E90e883CE4462D", "0x559A1dB10cf31c93d2F1814Dc8f7a949b6674176", "0xA9C306Dd68a296EE5FCd3aA2772C8C80F284Ae71", "0x85Cae26D53e2617ec5ecDC87756E53B0d5bc09D0", "0xF667624ca2FCCE448916B72123aD4fe580A06cb9", "0x61eb98C6dd281B4fbD2C02e62ff7063B01781FD7", "0x58c91BC56afABe79f5B26C05bA3f04b6120d84E5", "0x5eE0DB4C6Eee3e0300F1129900c608377214c85c", "0x57EDad71fe71FAbFB7F3E7890d6C8068848ccD84", "0x454321b8fB76fbADcF6878d69D18cC18c593722B", "0xfD674E03ca700463E4203aB73c4C5B6A5EFEB810", "0xDcBd51C29e250706699275501093d8B2D3CE9fb2", "0x675d8C52116C2AE9A51c3862daFe65a84c478919", "0x42AC97D55A796187234007a3C0C53500066799EC", "0x026764E513591CFE85cEf9C83e9A529f647a9F55", "0x065FA7fE83bA0Ca5d78b538AE85726199F95574A", "0xba05F4A3639EBcDf1e9Ea8Bb8C0a00f3511b97ce", "0x35dfACb1c0747fE8f3F6d5016F3487780e770910", "0xd1c366addde2E5FAD080734cd83EF4a19Ec6538E", "0x63C839ab1e87E5d5508Ee054820042E5df812B5A", "0x4d2252a5DA34B6d13D96D6dB2FD5651e7f4B3f73", "0x9559F039Ec38690A107Fa8197dad63B478FA5293", "0xCFC5Bce363d0ce3a08aA4749279D6EaC986c1Ae0", "0x3B90749386A33614e136b136d4Aa1b0b503d67dC", "0x42C3A88c089E7561804Ca316e54041252C32A671", "0x6e5D26BD056e4b0835C9340d53D7E8FC7ce4d25e", "0x694354ac30f3A608dd471d5acc273a25b2Fe095b", "0x45bfa9D164AeE4E7b493E7191f3452E4f03bc9a0", "0x0Bb842BB6Df295F07d75E3573de6b3445F4CCB45", "0x7FC0C4bed2E86eb7c6e0Ef006Dfc90d17646e946", "0x78638A1e432ddd87386b04492150c62d29193645", "0x5551Bdf7c0264beFCD5A2F82E38e52d2F0285b37", "0xe2A6371FB7DB5d23Afc4F6a138015a8e761872A4", "0xC5F6569a36e54a1EC74286a417082d729cc0a14e", "0x6bB47E31F6e86c7e090Ec22F044Ca741C6EB6DFe", "0x736DAe4b2A71FeE58DED466e1B40E7FFE0add381", "0xA5b39C2617cFC508f95B7100F73baF36B4991b68", "0x68e91C18e6fe560d19A04F9227f64FBb0Ab7e9ed", "0x3524b095F9a7Ead9371D1F46b3e20aDd41169685", "0xD129554dB0afA2F531EeD0B4f53ABE55415ef6Ff", "0xC7aBAFC4f910D25a36CC7e4441047cF957D0fF61", "0x876f6EA4074d7eA0F81ee0CD36EaaB2ab5E68a12", "0x9ae318d8aAb42091B5E5aEF17f96c29bF27f3582", "0x1D853E993423c17F27419B4A5309069A13066861", "0xD5ad0049A2Cd1E4B4ff8F5DB682757E5BCa196C5", "0x44F98A747d47358e0118D0d75Ed36667fC363aD4", "0x81722839dA3C9948aB4A667f12f70028Ae93339A", "0xe8756eda86FfC2Cc63853F0D48ba1AEb8B4F401B", "0xaD4029cBd4329f69a6442c35f6e107FCEBA17B6F", "0x4e56C2E50cB7020Eb53F8B607C66061B290A6289", "0x86b6973fBd70cc0ccd544863e10E35a20Bd2c2e8", "0xA1372e6391B926c59fF7FC179EC8E8f94B90f9f5", "0xCd9bF8bB933550241BaC85edcA81Ff1C6564f6De", "0x7A9c91c07a1fB86805bC0Bdc2C41b94A7526a79b", "0xda44f200D40bc5C999718084Ba603996B43338f2", "0xE9A68ac3Def58cE1D7c098303A6D2243b36a2598", "0xeA72214d54A2F34776a4e583a15FeA7aE35e62b9", "0x3bFc4f0b6b0f93E088bf78352A92318f6E8C0bA4", "0x88cc096EcCDef448A61E3b8Cc870691d28079E35", "0xB4400EEa277B7C8e3722C2860590713FB475C319", "0x3bB5F19263636709aA56f7b2F1e0357885937eF2", "0x88F2980cf382920A2F8325B9762195A27742855b", "0x011590c6Bb03A447e40ef9c683B3aa1CEf596A3E", "0x24068408DB6fAeee3C0eF948bcdF06e0c1A8b8cC", "0x7B5554C83e5fb0824666198eD7fCe79857a480aF", "0xB5edA64a783F636d7E9DbB556F5B0B2053Cc27A5", "0xba8821DBAed441d5F46017932A31bC174DF70f5D", "0xE0f1DedDE3650E8D7a46e413228E25Ab21B789C6", "0x3C39E7114165D2462Bd731E2a68460dad262F1A1", "0x58ae40D20b42A3B7AAd99A517ecd325A5f57c31E", "0x1773C133Ac9fCA33c6842A3041366650F1CDe270", "0xA3887B2f6b50694122407466a79A64b63DFFe9C8", "0x5d65C84ad2220C97c26204FBd3FF7d116210A4Dc", "0x6203031E924C38a720556248c69000D769F2b0F4", "0x6cDd65471cF321BCF91e246d7abFEb01b0ad8202", "0x24f9243c16824A3F81dAcc4DA6c04A171CFA86F4", "0xac065df6aedd646fBfD8A279d0DB5CFA5Fbb40f0", "0xd2FB550BA04Ef44270998a258760b8B5aEB952A0", "0xA1e2A4e5A76968351855B967695F69FC177a538C", "0x40b45758895179CCACD33CE3D963f6735b53Cf9D", "0x45A577a192e5FD85CE858D03d507b9095Ded3FC5", "0x4563BbA569E459dAC3E0D70E1843C4518691430e", "0xe8A4Bdb5EB921cc39B76c524438282fa8D40b42E", "0xadB35B49abdb1b975D5C7B32AFD03A81a841B715", "0x3090D6cdbb327fdEc68Df910953CeD58d8a36019", "0x2E4398da52d2ba43f0d6035b9e210878EA1Fcee0", "0xE7B40555e2CE5780242B39F56b46c62DE5793842", "0xD44De28ACb0d299cbf641B92F3c42c755488A959", "0xC2eb675eb1c2d60e859E6438dF0efc593379C941", "0x9EA6fB1530FdC4aE6d19bA3Ef2b1a598c514823f", "0x686E16bE4B824b7fba0c0360CF0383DBF5B3B69d", "0xE4e1718D14de693CC5b3c434bF8bb8B9F4E00A57", "0x199094d5F3F275058e07ECbe3D4E6dbCd2B5dbe2", "0xFE85f48B57065f0F41fe4b01a70Ec2aF99cAb1C1", "0x6e74354de852d8e695c751AAa85cD522906c0FC7", "0x1ADCE1019173911C8DA8613f70062b46f7D04bB4", "0xf1bE606d953C7EB60cd961E46C58189E61F8E1dA", "0xd37aB9D25323577Ca9A78a9888702aE40C09fb73", "0x02E74B59bCD45c30584208fd6c2f21209891374D", "0x356433F091Dbe749487fcCE41dC635008D7409a6", "0xf07950B5E0670b09788C1948938b381fE158EAF9", "0x83b6fc36D75FC493B1889e1B7c60038b923aeEd3", "0x179c32c678d6b78aeA8944f40E2319a97649452F", "0x2129872870c473c2e4fdC63DFf928Af44a5fB435", "0xd4Dc72082C77Cd1C56A617757ee0B8Cb54eF8B19", "0x1BB0072314812f6F3F2F49B4384FB3DCdF8f9ED3", "0x386A9d07326082Baa10b4a195FE057725C7A209A", "0xCa15f0481Ee51702Ad2987b87dfFB88eDcCA31E5", "0xD540BB9A101bDB79362f12815A3e974C082852E6", "0x7fF7323fCeda741Ccb712F74b1159542c8e62665", "0x533A75fFd1c3B270268dc3158F8F14ffab26C17A", "0x25FBCB4cC4c46381e59caF96C2bC110F2AdED45f", "0x035F8c40BaBB02A435FBA2937645cCf767cF3BBa", "0x35fed365b6e650ad86e1DFaf5Db197B6b7357B4f", "0x5E6c0Fa7C9a3C6A2095e047CD23aff30e03d7513", "0xe735840E3F2b32D029075c90Fce378c5828A2913", "0x38fc3DbB3310DE44837c9FD34A19587A3d4E1b42", "0x184cE021108F2bBCA8B8C7dc5D11822E4Ef0D3a0", "0x5AB809276C10De3D2D8A12795c1bD2334F2B038a", "0xb5F76ae22EA40B75de9FB7D48080720Ce162D3c0", "0xb79E83dB3bC30947517Aa29548759E6E436688BB", "0x9e81d996570811eb64b44EF9dD014639232AA5e0", "0x003CA69fcE63787E29F3B6fBaA0C36afB8a8E0fc", "0x9F0f55552E8EE76929dd6caF8bAed645506B2294", "0x198309B25b819AeC348FC177726BdF9d1a147B76", "0xdEdfB5B483Be8239502aC84D42cE0c2298f0E267", "0x7E825C784fB922a88DEB71a8Bb1c044fE3afDDe5", "0x6ABD6dC7232947f5a9aD4ae1d7e5eC1C2E11bc56", "0x1046d24a2D6cFba681d32e954f90e707B3d1890E", "0xFa509F8D989C13d0d239ec085b3f58de2f09DD4a", "0x3B1F1C58dF03fD1a9fE8dfc3A06046DD499b2Fb5", "0x110e7c430e6920Be959248b73CF6A64B6E7CaE28", "0x504ee78A43BC5cB222b4748FBA430cE68eacd023", "0xdF60377c31290624F5bcD31c05eD6BD816878e6e", "0x847BB2bb0a3E17BF3584d7B8F241a3D8A5549CC3", "0x5f2D11472e80Bc0F15eE6C205Df5d2034B97aD8f", "0xecDb2Bced9393ef784D6ccdF75aBc61038c8E983", "0x4e87f3246baD48b9FC00ea9569C4e13Bc28E78b9", "0x2B1f2CF3299fB66D185cE8b77A3b60f1749BbB91", "0x4e43397417C6938F60B108650d832390dbD4c4FD", "0x6eBFd37ed67fCC740Bf838f2FB33D7B9fCEE97E6", "0xb491fca9cea435b1E2B94f1A6C086970b12A4A9B", "0xc19D273184BfC2119d0d2D572B3a5DC1E2E792c5", "0x5EeF391Dc9512538625c984AB576688362Ff2c25", "0x5402174212C2F2200Fe293b26040e6F0Ca1511E8", "0xe3Badb8960922dC14eB57F621BDd10BbB8626f71", "0x5697d57c5a554f1cDaf3ff1A333e55760EFf7f2b", "0x03793F4b35b3efaB4562292a57308812E78f56CA", "0xad62Fd8ADb47c47539bb9E7a1387dB6e4E164861", "0x2d8Cf6C88300694dBAbdAc3B89BC48FEe73aa2cC", "0xfdc9A06F20E4Cade61A9dE5303020C7AA132BB37", "0x2FE0DA309Dc1ab19c5742dD7a9ae9b0836D4Ba6E", "0x1CAccFEd91d5B7a069d2C62B6F42C3CaA7f5C307", "0x780De173dd68661A8B049BaD33c74a107b154ddA", "0xe9B06DB75211c4f2F428554Fc3254BDA6eF5200B", "0x93bd33B8546793f1fB68D4E0E45363AC8B872AE0", "0x3eCe72F332E6d74812A661825cc8fA534E1910D6", "0x5bcfbb97f35F6FFe27Ed1C4c6FCacC48F2760b45", "0x90F0D25Cd899d2c2a4b3fc3Ca5D1B9813C855EB4", "0x9236D415a68d3E95a04dabEC466e7597e389E7c4", "0xD5EBa5F91eDDb38619BA1545c48790cB1bC1Da5e", "0x02bFC1Feaf2b4cFec8cce37e7015d2AF5f693f99", "0x598990aC92e599fA7873ABAE0b34Af97E6aF5A2c", "0x3C756a995B08143037daC38144cCabA4fe542572", "0x1f5a84b049b736ae4ee1d6FD98DB8fc06d318395", "0xDf0389120Ef4CA72bA4bF6416a64bA54e46F7F3b", "0x32E2bBAB43D4Df5CCee61ebb7924bbEAC7AD87f9", "0xdB41c3B95592Aa343AAFA6C18b6e952E9244f285", "0xfE5125C709fC53645c526d489e573459bd80C168", "0xa96d8ED5dc179565899D8a2739A3D7903E112a99", "0x2974b0eD50e53e13f283fb817832ed4e14768D73", "0x296200Ff7B6343cd30C3ff61B8A89Ba1F1a99bd0", "0xA8E91694929dB7e042D7405036c51E8808d1E36b", "0x99Be91d0Bb21fF1D5736cE094136B2c581e89Be8", "0xe5845182F7A0FA5854c530182A142723C66D52f3", "0xF5E3E7F76dCF1a597B9F1ab00AA7C169F51c9682", "0x5B5265326F6426De6Fa611F4FfeA40fd0e504b76", "0x2694DCBb1357c8B9dC46029B9Fa32d9eD01198d1", "0xFD58640eDEC3dd9D4f6319071Be609B613c191C0", "0x6f6eD1E0596c3d0fa2aF620824ca36b6AA6DD505", "0x31791e314A60df88cA24A7860874c6c95cea7cf4", "0xD8194Eb4323f44BF633746126C16Cf949098089c", "0x3bd58e85c0E4ce22FdeCD45eC1d14833074919aa", "0xafde948b3349824EE4804408A6CCAb7186D259be", "0x6982Bfcc8a9Eb498E2C82699A15789A0afA99a39", "0xcc9e5cE4790dC4A0F68A01be16ccd2AE0E78714a", "0x2C9A63d747774DC3D85A3D6382F60f0a757de911", "0x578377E1e8c1D84146b5927Ed27eA5F349581f6C", "0x06ea86B7e8b00e136b1D9181E21B178773999A1E", "0xeEdA1fB2d96320EF68B36494D2602270004aA890", "0x8c37Cb74C0116b753f55f5bcF8e6107FC5D5D6aF", "0xBEC5C6a5DeD7D51b51fCEA8053Bc4b715A7294FB", "0x201C1D13Adbfe8461f1f514c11e3b41F8e053b20", "0x1b00f4677EE349d81a5a478347bf9Ca194E6e6cb", "0x8dcEba37F28e08702F5bE8207fe287170AeF58e4", "0x9bc68678D88D82792331d7309e8d70b5FCcE44BC", "0x6365786811C5ebB359c9745531099abB34D26ca0", "0xf52137aB77CA7C6C544906B0248DC487C6E06E76", "0xe549737A62baBc782eC04ea30d9Cfd79781D52EA", "0x9389C6a8AeF197e4B304d985e5D095250Ce6Fc2e", "0xe935e4174e1Ba9a8f3A20148305D33B0d7db0bFD", "0xac72C87aECb4ff23576AF6cC373A3738814A7Bc6", "0x7e2d7e667234e822CCA22097ADFe57AF7D6399b3", "0x27B90639aDDC55623b4A7c382FF20B2a3ca20969", "0x7750c4DE03bF7686F2801C123DCae924A390E137", "0xf89b1a37e4FdcDa1722C9378FaAFf59794DEb803", "0xe5B4C5CE46bcE4C461266589C742233c0637Fb6C", "0xf04D21E1650704fF4C90902306C5D98938761462", "0x8fb596FECC69692dc48C84635f1402230539bdD1", "0x44E43A458d9B781cF79A72037D21A08325CC1510", "0x5Cb086fFE213918748383c09bDaE2A5D6fb8DD9C", "0x13cb5FF597cD4A764226047969945808646AA3EF", "0x7073e0706b08D75C9D9aC3f9244E6487cd265a89", "0x046A1298DbbABcEd2C8B952bD7e0C8FAba705Ca0", "0x9CEC4b1803E9554cE933e9c38428aD793c97D76F", "0xb41f5cB4251726AFE95710c42a02B1bB6cF4eDBF", "0x62e326462884BE8D706639c9a31532536Df3BE68", "0x4E7f2087a526396F11B46a8148c0c17312058F50", "0x2c235268B2fFA1339a1B52cea757f89bDA81d410", "0xC8f11a0f83fd52815B5f3d40e906A19742ab12e3", "0xcDbBF44dB0e870fB3AdB3b0528662B2103B3D563", "0xA2EBf1C6FE46D949a822E939132b0CfA84bf7FB6", "0xE3a157FbCdc8A9Ed54616c194AE38F8c3EE21971", "0x11cAC866C620b56b29146222a9607D55bbFf95f7", "0xEC13eC6610E2E141f3C6B80927B4c03360F6b691", "0x70Bf7e2f7377AeDb08BC96a9b7C2869bdCCcE956", "0x5623E887a26CB59467776a376e1ea15a7D85Cd41", "0xCDe9583050E7128b890cA5ef9BF8BE805B57F1Fe", "0xCBd4B466Bd0C1020f9b3e0358019B5dFF96B2Fe5", "0xda6bD51c147157804a627250A494a3Aa79d4Ecb2", "0x03e23C73451D325867204b38969A63A9939eC3FF", "0x6D6E121d2e6b0B5F297b9126b8cCf1511B1F0628", "0x84A306F520D0beC479319e43Dc490D9d2076E049", "0x48BA4347643EC51f615fa8823f4Df5CFb809D8e2", "0xA027d22C33Af57F5d359D1E8d334F09E3786f16A", "0x52BE81c87d0a451a0B5DC59E5944C0480F765E7B", "0x9a79fbc36dEbBA3E46661bdAF8f1D40000610b8a", "0x00505c208cFdD1916863beC8c08d1C420f6C778F", "0x6B9bD6BC479D7e4ab6BECd9863f6b608b7dE9a51", "0xd85fABA5951CbF43D3098431a6DeEB65C2E9896A", "0xD93A79665f46864857Aa7ED251f75c530620f9fA", "0x3a2e43A4a588eF1BDB247F44E30C106Fe3f4C87D", "0x5035C7139050E079Aed26207f64346111Ee7D5b2", "0xf41472fDCEbd4abf065Ef6BA75151aF96e731193", "0xe36AE9ADDCCD4dE9BA34C9E247057158b4feb4B5", "0x550deE606e425A280c0533f7b748f8D1B8727Af1", "0x7e6602FDEE47fF2Ad69e19CbcCD36Cf37Db11332", "0x8B303Be019e9d74f0F3D4Ed6Ac335CA605A2a18F", "0x8a842DCb0538B7AD1334197B4C01f03a232a0a51", "0x9548971000E956294709D333604F7E73387C91e5", "0x006f2E1305e820975C80FdaA433748B125f09838", "0xb2007c6Ba3d0aa08A42aebf60428dfe9e68D7193", "0xEe179159c0A05DDA2d016E6633efBdf83a58B586", "0x48Ab890611F07968A70Dc79F2e325E89826F03d4", "0x50325eAA7ed72e3F0c88Ca54c220F80598fa5b5B", "0xE6D28ABf7E4FA112d4D00Ea4Fb01E675d24C0306", "0x187bb51a9De2E4488E0999BFEa9475717b16fcfd", "0x2E697feD03c0E5FC0a7Ae6f89f1FdD9A79DA8a49", "0xf08E3A148b1686703856eAEF59561dEbc4f09364", "0x99eb7b5Eb71B3645ddbDf0d19bfDf0dc400c52A2", "0xDa4d0f8D46c006eEB06e6F5D6a2fb8C0E77b8B81", "0x101e83DeC2EB78449676cFD8cCd3F50E0E6bc64f", "0x2F0aBBa57195308aEf06a989b8B7957492b71612", "0xB0750266504e92f124eF238693e232624199426d", "0xb8F725fb46161132616F6b1e2095a1B2575978EF", "0x06Ee56c9A1eF36551b757296e3440985d336D00E", "0xAb012ed9C8Dd6C955e3652c746888F0FDD686273", "0x1C845F6AC6Db004F8BA7388beB03B0330e33dCf9", "0x44B110ceCEE41bEA219F8E43379C4B3Ec8ad1bf7", "0x7232A06B985b01FC42f9b52F8ed7f8F86F7002E6", "0xe90e44466210f52129a06cd10d23B4ACB340ACc7", "0x17b2BC950aFE8b3df5C5B5fcA7214e2C434c53E7", "0xa40C48c95De2f393A1463536bEAcBbcD64f3D92b", "0x89a0BF7C0801a7C3212D4E3f6c05D7A0Ea08D552", "0x4fA4803667E509317b1F658D0138a1566A6B31dc", "0x69dE942Bf879D2eFB99693520881e2D911F942A7", "0x79B8E5a94085cBc1F6Fb30Bb4Ed110B2A4F20338", "0x4428ef67567EaBbA79Db57507D5F8BfB867dDeD1", "0xDBCC5e3f4aC3dD2F1D7c1780843BAB432319Bf8e", "0xee75f71f24bE248b4D25622F925a1F7233521cA6", "0xe31c5635546eC33784172662016A297Eb1499521", "0xD7cEf7d7219961682C3EF58f164B3dE0a8BCFC19", "0x47318a80917A864765fa835d3535d413D9A28307", "0x238FcE55e27834633C4B8bDAdb7774194543B8D4", "0x360361B5fE589482fcC5154a252a1952AD1d5f17", "0x00858AF04cA13805Fed22Fdac5A7bd919585f311", "0xBd5FfCA8E365bd88Ff69376ECaC45a70be51FcDE", "0xD9FE12617aE76CE05bF18B924D5e4Ea22c3118A8", "0xc5E757F069796674CC088a6ce3Ff33247aFC4518", "0x1892354D4bb882331a38369DB966034c8647fCB4", "0x95D26e04b838e882c47a94ae6842bD4D7c967Aa9", "0x659d8e020B419839C15a375da63CCb3c683545Fb", "0x45dF353Ccc93c48C167dDb352C1325DADf0635b3", "0x50F9effb322812F71321C2148e02c2342C0227Ec", "0x752a5b52e8D3C2df39B8983865852017Caf3B3D1", "0xC477b7c1F24B94aCE8D3Ea62095289523471c668", "0x2A110cBA86D4d61895F92ef9276b6c849e4BF7a1", "0x35476Ddf255F54FcBB67be1CB925669511521c91", "0x8D5529A98F8e49c2Ace5647f7f96444125eBbae3", "0x7884BE324Aa36C309d9aFd752C907ff421F3125F", "0xF5ccaDa9D57B5a1064Cb8e6EF5B9cC6EF0FBA153", "0xf38c53B05E5d76BAccbA77db533C02A0A94Bae5c", "0xC44f4e93E9b48B9C41E3742c00619FdAD159C911", "0xb07E6D95C4F79F0C778c1c9A4E45f016c62fa2f5", "0xD49423B31f4d949B99dba7Ce7a3f233cECd436EE", "0x772962cEd06D6968f9363b2AAd6218232F7cC369", "0xAB16a362dB27763e861dfbd2523312E9D40B342c", "0xd53Db8ac0218285Bf736d1927fb7Be4932e322B5", "0xd41dA735Fd8223C0128Ce042E05021Fc7BA2E6e9", "0x25F742D2d15051B90f70039A92a84B51FeF114D3", "0x2CD1B7532c816BBCeE03d54a4448c4240cE086C5", "0xEC6Af931163557Cb28Bda4347576B1A57A13e2f1", "0xcc75883694B2F86dd831EbDbfb6D47e6D94Ae7D4", "0xbaBb3EA342f4AeB6d756F6B8EA7CA413BfCe41A8", "0xbe74A10b015751F3429eA42A06Ca624fB6BB2083", "0x7DD7719bbac12Be9ab833b3449f68ca96F622D06", "0x5d9a9D385096427Ce75FC139736c65E1086753aA", "0x43b56B072F1E01618FF77161f2F426cB1F5Ec34d", "0x548877650ef4A738dE789Eaf5D7119c88F9E67D4", "0x49F8989ee49c3FF4D622A9155DB80FdE9844f535", "0xf250643E0aE1186D8328F075d5311D4971aFA92c", "0xcc67fCC132837b4509233A31921006e52744df56", "0xfe553b727Cd7126e96231DcF5695Cb2314D511FC", "0xABf36E49cb578E8A619E4e650Dcc0D6D285d93ef", "0x55b2eB3d2D43C070835489E5EF4D0A7274B160bc", "0xBAB14003d923dfD2943450731e58AE003BAD4026", "0xa631fdbfee21cfD82d044866e936075bA19d6cc7", "0x81C6FEc15f4a8117dCb2ebeB6777952ea0DA67D8", "0x056591d3C9F823aEa2969BEFaC8886Bc87c95E57", "0xcc46969F59f54924Bb19F40B24c6510dE9fDC37F", "0xD0cBF39448330Aa6f9D49754b619Fb31E4685663", "0xd0d6c4DB7E49C01E44b56a21B055774c3D978f4e", "0x7F310353a9186B1df2F7A52bB0F0B1defaAdb54E", "0xFC588d092170D44E76Bba1635Dd955b7FC5aefa6", "0x9bE92e9AE8e274Bc0933a8D760fCacdfBA567d60", "0xD391d093a3C2106Bc7d61D9d979C767ec735e854", "0xb117Dd30ee677D0566732820019F56b6dB7EcE29", "0xFc502FA9cF298ADB6BdAF65deB4B39D871fc018c", "0x6d5cd34CFe9c8eBb0Bc95d9020282ef73Df1730b", "0x72A8df1AaDE0f7a745a8B6f4C5BF253A14DCC60e", "0x5C60B04a5F1E22e208Fb661015f0D3F4dc6a195B", "0xb8A287Cdd94E1980f5b106597968467e7969eB9C", "0xe60E9f986E9aFBB201f6C9e2f87c29167155dfc5", "0xc3E99C4210d0aEf2e0495dAf427cc723bD592965", "0x28f780c642fd6625488Da0AEfa18BA7f7ca27180", "0xc32fc2807bb2d0bb176b1202a8744515C25D73e5", "0xDe591511Eb4Bc8DD04040010A1290B5205659f00", "0x74c33b5AF8a0b00Ed1343C2E65729dAb8b4cAD96", "0xBfd1AF0CC03468F6376Ce34Ada1DBdb3d3E7B8d3", "0x3A46440fC2f85C6CC37bbb71A686b62031a45cC0", "0xFd12e91d15c0250ffC36f5ac1aED50C3f43570B7", "0xA6C2817B675dA97603e49F3bc59C646F100cC2dE", "0xAA5BC567C39ae92c95A8a0B2a2c8b1EEC493d33f", "0x842F99d0E69f41ccDBdB8EeC093CEdA706bbCE27", "0xA3e5052E8AB80be192f906CC8a5D319f14168C5b", "0x219A5B2443cAfC6cBF39334082b00848fEd6A287", "0xf0C864Ee37c077F53De5cF8973298e4714Bfe9b4", "0xe3cc1eA777F6ab8bb925BcBe0d7C1c794c3FCf61", "0x5EA240B20AA3CC3685B84f734650eF434553F858", "0x00fAdfcA29bA88F4bb8E0C09600eD7E8442bA990", "0x785436F69c65431d292541Bf5D0883fE17Ba7A70", "0xcCcc56CcF2649005e317003863ea3408D699A9DD", "0x418c3d5CD2Ba7E51D32D987FF0810f8fdBc1f992", "0x9E91acc8E84B1D30DBD5dD443017878779187D62", "0x993a11fE56c3A38A84C1c8cDed4fbbE7Ae6dAc74", "0xFF49d259daA3F1570B6586812b1FB81B49e61e55", "0xAF2c096278B7C9B9258Ae0C192a2501F05daa2C8", "0x277b7c0722f6Bd00Bcf14E8d6E568866aF3e586d", "0xCc8E8308aC7240FF0DA31a7c6Ed418ce21BdFaC7", "0x65321652b79eD24767177E46C7d7B4cf03E8516A", "0x8021F1b608e4Fc18706bDBd5b8B64a6F3B514CFc", "0xCF69B4e195B71BEAf25055c9d1de07Fd5A9D689b", "0xc7881DeAd1dB767637Be1075A82C0DB0d3815cB1", "0x2D53f2Fa92dcA0c63a5FA42F369d030DC1cF9e0A", "0xB9dd04FeB0E2Dd51D9EBf02DeF43E21e0e76ec6a", "0x04c2E812492f31B96Ff4e3Fe4e9265607a203A8d", "0x66513624D265551831a39F436F1D5C1d630848B2", "0xA2c164f9aBF3d02D33e4bED0afFdb2461B819c46", "0xC95f862Bbe02C5b32B768d95cB55b4B140888491", "0x8dD4B0EE2b98862F21615893Ca7b15155b94bc4A", "0xB3FE03BBa0D7e3a3529B55Ada2E909290539c7a6", "0xC51831637612ADe867DFEE38AAE13f1c04dca4d9", "0x45CACc7338FE97eC8f6787a3a95729386b1b632e", "0xbdc42B9cf64E2B7b378EE56c47947fa2d4120A8F", "0x3f3cAEF241eD040cD27c7ADb6390B5144a3970A1", "0x9C56b4598e9976FeAe6Fce51f306588De155F39f", "0xcFE928685A2bD579489bAEe514B93913285EE915", "0x2D330EA9d139347bc149236B6CEfA861728d98ce", "0xb09dEDE5EF82B4E4B0170a01F350F84691C1e87f", "0xe5A4d9ECcbb7750A4923f41643f51216255E78Ca", "0x1B37146D365d35135e586B2fa2fccDEc8320467d", "0x0Dc97DF52DbD09866d7b4a217D903A6191a07dDb", "0x291E3831433670005AC55ff7b7b012f24Bf3C00a", "0x2c15f58Eaac7053de61dA89c0177d111e9eac575", "0x2c571BF20e5b80b1cd963317604185474869bf48", "0x5a4FA184ba6f6AB0917C28EcbF1434C8e369DE16", "0xE72990F5030E17b614E476369788f76DF27861f1", "0xee2408902f035F846E9ECc9A4BCbb67f2CA074C7", "0x31efa4f5E619DDDA5EFb213Cb82E4D031b6070ac", "0x31b5504D9A5f86D684a3b862Dae8d4A9Edf5E498", "0xdB8C8587576816c8cF1a4b759cC9DbCcA8698D49", "0xcc88337C56d94B2911812cBE55AAe1879B3df596", "0x41f7687Cb4280D81D29D9A957bf17244c8776f99", "0xeafeE420Dc1A95dF7f280F7d675f3B4e8Ad0768C", "0x83EbfDEC469401569AE6151032F80d8CaD152d79", "0xC0FE39681887421365E570A3aCb24E4BA75eC192", "0x503D65Bf3f0Ce9d70289b7A747E2a791A1ef6ECA", "0x85242a52965b7DF2a47dCFbE5D2C826aA755a274", "0x1BE9013B58677d4b6E4D32949CFD0aF7B60FD9fF", "0x57846Bd5b3328f7c109AEA691494d13099946660", "0xbD26c881ff22804D2735645F210311BDB85956B0", "0x3eA1dfAe100F3cA8f1bc6D50976237136134aA72", "0x203c4738a5eFDDe9870fD0f90196F89D7e0fCcA5", "0x326DA148CAb3BA5B5D86A2DCfA5541f9095CF055", "0xD6BD6F4137Df64Bf6053c2964d165271d67D81c3", "0x75fC367cEf779904f3B3e94643C7298C006cC94E", "0xC28ac835E7F0FcE7114Ff9E514Dd38C0Bb604e0c", "0xD15F3751D6ac258F75eaD647A5E6c9c19A09Ef41", "0xF9BBb626738B64d2Fe5682D46301F62f1152C612", "0x37C4Ccd91E41A06169Dd05B9B56a2A378A191795", "0x7cfb5c5684B019fa0886745F31ABFfCEB1C8c55A", "0xFf163cb7616029a821af3949706E119104acC90E", "0x69ceC9115572c581a1aa1f51898314948e7CD871", "0xc98B5d08100b8cD22cCc32bE3f482b7B26CBaE03", "0x0D5db049819246230BF7acB86936994ADee31A62", "0xb291778eCdC3aE8E853e46F8f240b3e642867214", "0x280401823042c6f2374632dC500a508de8363714", "0x7865dCcBbcC16F50cd1CedA4e1CaAe2bF1883f48", "0xB9267B14F9d38D249f543608B9A04a1523CE3390", "0xBA71fc07524f5c0CD81CEa4e50361EFb05beCa9d", "0x1DC0Ea8F8bFEd2f836aF0c65186f4EC7e91b8A36", "0xFFC07cDE66139d1a04bC7Fce60a797aACe15c100", "0x21187C6d69940f59741DdD3A7ABf177B6B8Ff2a5", "0x241c389387B56FaE441AFFc46DcAAC3ABAcF2F56", "0xb634A3C177ff4BF23CADF855388bE42461605996", "0x8c8db709bDC645BE0F75310C945B2b1162A24c56", "0x6496e2726660E3Ec78EFa8e9e398b58d5720B687", "0x7b6F9Fb0FF62f4082826bED90de0e8456d992418", "0x7bE41FBE6fB83aEB4F750Dac01BEDf5f795668A4", "0x99c54CAe60488026D6203506fC7D027bB05E842F", "0xDe8E1f2aF7881E1bD432a33791b7aBBf0e3c7df5", "0xBe7a3187Ca9e58Cc557c03dC40D1288c44bc5752", "0x7B6ef4C85dC221184Ef428b767cD1b3Eaa0E2E93", "0xd7f2071ae11b2a0ED695B75800dC3A5c70439Ab2", "0x6711Db041cd6B11c7B96e184698e80cdc5889c59", "0x101063A8b5d6D633Ae3e7b1274F3b574BA7f153c", "0x53cFC9ad275840274dc899DeA1fF7fFf2B7e5b07", "0xAd5C6ccBd745770B8a47072A8200Bd347F415FBB", "0xdce9Ec4f069075b805E50843ddAb81fC407eaBd3", "0x53DB2da7a8a3c4a0431e5412332Bb96c9955e40E", "0x289c09b441AB77c7F398A99Abcb960B17F0A4941", "0xa2f126FE1c2c1259D8c62e61a74b8e4040D806B0", "0x2b88fC3d4F2477615F466873A1DE844AfBcfCF32", "0x4110b911F831970EB880D52b982D7646C41E7daD", "0xeE2e704669Ad0C8551a78E91F39400652f35bDa6", "0x6a8f55b25Cb3Bc984417EE5B3eb8755B0BeDe0FA", "0x9356babd6Ef37Fa81255aB24dD40c5F8Ea536866", "0x82B8927DF293E7174469051beC6e3b2EabC907F9", "0x7Ae1d982e699A2abFF9A838878daC9350A632973", "0x65F27E887DFeca53542eef1B21D5B4233C458a83", "0xB78008C5D79759E318da31CBf94f1C3c9EF5695B", "0xcc539C68986ecA58cCd9ac7eaB1a7C6E81B1F513", "0xd4C9b187Cc01C41Ac1eA0C7DEb73f8A3D3ad94D7", "0x9909BA905178e53f0929aeE0fDd8B4b1a0Ce0E7E", "0x270F4bC6Ec04e1b56cAFc3428af7e01b40FE930b", "0xC2608916CA2Ca53E6E2e4595c3632E1DA6B4EF8F", "0x59b71Ae6c9a53D5dc1E09FFb5Dc81385A39C23Ed", "0xec2a6DB104cDDC85fAA2c9c5352B311cbC0F1101", "0xe71728a7e89B12E8e4C76Ce1AcB2F29446cBA8ad", "0xDFcfF8C835453793973c264bd332eA13e58019b6", "0xe5e4ef0c8E021d2692B7599f88F62bB91f700f23", "0xF34Ca6b9fb5d74922bea8AA02C2351116B854b8D", "0x1d6BA33cFDB019A1107694219252dCCf1F5F70D4", "0x388dAa0eF252F9237789680Ea7D4d8a7D03B9466", "0xcAe2204E504cD60473Bba46dBC3EcbE55F781b97", "0x853C7a974B05f73dD714FCaa762AB3dE736239b0", "0x591Af14a4141Cff51916732131178Ad0b2687fE6", "0xa012e3bD39B05f690e2B587D1B2c2cB4F25ab1ff", "0x0ED354D5f1EFF2791D126F554332c8b337c5e8e9", "0xbD7D55ecCbfad3f00CD8119f6748F865EfceB86b", "0x3038f44e2901CA7D1425EBe13ED899607A82337F", "0x795AA6d1A26AcA0768634daCd4851aDcDD44397a", "0xf8817128624eA0Ca15400dEE922D81121c9B9839", "0x9144cD386D98D015784B47E03D06541B5a63bBC8", "0x6271E2d4e46B72Df77b1d613463f24A6Ab411b3e", "0x010e0d20b256620B6AB77729C8152112e0B78561", "0xB2E58F948E3141d5abD963454409342c7D8D3136", "0x14F4738Fc17b1310b09A5A717186987c993649e1", "0x9fdFA8c630348349f0a765D7cEe92d80e0618Eea", "0x0F3b4b352101A8b6eB69Be8247BC0c01e2f5bC94", "0xbE1c92F81F08e176538FFcD2540A8789358B4F2a", "0xf6bcc574623da43F1aD8DbD21A042aAB7f739A12", "0x46aFd4d69B886A66B9D5752bF171db869F1508d4", "0xc893d940D15AD4F66Dd96e81D53bF42389D5b695", "0xbA23fd5852052714D984f4Bfc0eAB092dE6F5970", "0xf98adee8e5C6171E254Cb42C764031216AaA302B", "0x35Db7576d5f852b8b7467aB28EbAAFcd93eC0771", "0xe93cd7050AFb13a0d167d1aC32A03A684c64AC43", "0xC6AcfE60E65cb87Af70D3fBa3Cd43842c636f851", "0x0D2D158f91160Dce5973Db894Ab9970f1f90Dc16", "0x61dD7f33B8Bc965E75d8948e668c201603fC8932", "0x3cFF4c3256987ab6616Ef8CbFab0278A64dabbc1", "0x7Fb48498B5669ca7615aA14e7aB0F2546BF63163", "0x2F21bF701C63f53FF069ce7d9d4d9b97EEa09e0C", "0x52419d642B48638C37F2A26b05e45067fD112E52", "0x5753E411648a7A8D62aABFB555323272ECf328f7", "0x05E9E0ec67c6b3723bA82FeA0573d39AE4d3280c", "0xBAC032be8981ec99bD4AaAA9DB0F068B0a2BAe87", "0xc256eb11c68B0d7b8743C53e2feAD16DC7C916D9", "0x61b3444871b8FeD752B9Dc152c02A2F6B4059657", "0x8aC7152340B6b6F27aFb431e33A0D30E9C035B96", "0x766D89238e40FEA11aeA2F10257e998551A025D9", "0x5090950D5c98DBB39bBCb16954bA3E847562828A", "0xF346c07E2Ce22C1720eD9486C78Efae92885c33F", "0x5f31d3cB499dB1671Dfd4cf77623B4a37143296D", "0xcfC912B846EFFE26Ee75881Ed56944D0411dc372", "0x9E94F6D67e0930E66194AC210caE2Ce619eDb65B", "0x7F06C606b57e9d7e04B9B89853Aab19282091EEd", "0x1991cEA17ca003A72Bde8A8f64d3248d0416f84F", "0xD99B2F11356E85F884e2138117C2564705b031EC", "0x9563f6ac0d5b6Cd703491f035d9a4a696149BC80", "0xe49e4f067C47e7289fc9952E6fb965b70153Fd34", "0x4E9410b102a876Dd8ba554fF6108742F6d88586D", "0x11aE733b440e6d1d3ac37B9eB77353302e3eBbB2", "0xe3F7532Dd57aEA3CA6C2574388f79F4Fad561a5D", "0xA067D27063Dff480D1DB735E68Aec8b46D4C2733", "0x0F1055E2686Aa4Ea53963cCD8cca09Fc92b49FD7", "0x13cfBe789fC67DD18Cc898c8a829D6818F466258", "0xad7194E0b03B51791bbacC1c6DAc73193485e1e5", "0x945e0f25e9124d289CeD9b77b17cED506276512f", "0x7ac85a1Fcb8f7C4aa611C6294D72fB1DD8aFd417", "0xb4352eDB5D8483F5946C6805CCF7F7a4255D429a", "0x49760E880CdB9DD8926d6c7E0D22caA0c17Ee506", "0x5A528e2795715cff5F5E4aFDd3Ebc3B0c81CBe6D", "0x61c066C970E217A2fA3dB396632c326b8E0BDC16", "0x362fE9e2789CB167fd4F40b359e044A5f2463503", "0x798BC384E20d5D16987A07487FC695985F1742c5", "0xDd03728B5D66a9784Aa00b00C1126F8B1EADe4b4", "0x9f58A9f63F3097C40Ae12f436A8b69EB92F7199a", "0xD753c671bD17c0244413a1A528a01D8Dc6cF6FE7", "0xD753c671bD17c0244413a1A528a01D8Dc6cF6FE7", "0xc727A42977525B5cF3EA08ef2B178A4f09BC0Fa2", "0x182f40CBed75CbC1a7cA53b4932c3C4479a54EF1", "0x77C90b408375C5e5c460BccBC36bacef07ffde2E", "0x0b32426008A3ADB5D509F3DacDd1039AE80069eb", "0xf0CDAA676D91d0522425E87c04AB728a68598DFf", "0x4390249785167140d7A2d4797dDBfb173728b19b", "0x2cB3Ad824AF83Ff30F30Cc774B517D7A4EaDa7b3", "0xc6AC6878118DECB433d42939347C59CC61D8000D", "0x2cB3Ad824AF83Ff30F30Cc774B517D7A4EaDa7b3", "0xc6AC6878118DECB433d42939347C59CC61D8000D", "0x0dbD0f88F36980f093Ba4A205919dCbE61B08741", "0x21A5dcF0D91A9D018220653A0dF452d26Aca5811", "0x2483DefFFa33EcED1E60eEa534Efa2B99C5742F9", "0x5E914BC6237A96A8FfE1E378b4b292F9DB734969", "0xd3132120f2CCF75ED5986BCca34392bd06cEc60b", "0x1fc3B8a2ef72A892e769726Aedab3b73f94CF00b", "0xcDBdc8E57d0552D0aBCB2C90480C7d5A525E36c4", "0x9b349FF3dda7b5ec20DEc23E0BB6b21Ee65De94e", "0x76B560e79Fd1394463BDCD5f237568BE8a61Bf32", "0x21C0A9B88dd4597498854ECc5fe7f210F609Ab64", "0x9f0723Ddfdf568E992FcB67eA6cdd0915a2cC29d", "0x41739600Fe46AD7E620799d94b43cc678D798DA2", "0x633B6Dea67e823e632a99F8c37748bd4eec7AFed", "0xF09109C84f257F651A6cEf490e72bAb326C325dC", "0x9ce822F0201553B100cbE3FF06dC2c3c7722e059", "0x7EBAC83927ff14a59F104D1290463C6e5AEa8616", "0xaF4DBC0e1F543823a329361079C13Ce6171eE7D5", "0x6273d436e4b045A867DbbC488ddde9Db71d3EB66", "0xCF5892919ACbB906b000905AB60E3AD15e39496E", "0xeAC4fa15bD7251731520D0cA2E910678987EF628", "0xB205dBdeA5194E08805aD0e0d85a7a674ed92F02", "0x05329ceD849654E28ddb8A356Bc25C63F46DA50A", "0x018EEDF819eaC9De6B6962F711F1355ab8640E2f", "0xB74c38cA9C74fF48B02d1cE0C341489cb935b76d", "0x68f6Bf90E17182C1B149B0480F662e75a6E4B9DF", "0xD3eb467A65C4934aEA6af9f6b689Dbd272C65378", "0xA26b7D4b1686FD703B6C7fD11de9932D82B8049C", "0x770e947eBDFf7F1A5229fd422D702e603D3a27e8", "0xC763EAe73fc377cA4a7b98eAB83AB3DA5314ebd9", "0x8Afd4723dd93832E76d6B321F74AB22dF6039b5E", "0xA8b92bBC43fd6d6E4eA36AFBf1e28BF704f6Fe65", "0x85A10E10BEC24A81aac76be11486Db5cA74F76e3", "0x94b4012Abc2c5C635971E7720123D81bd76765b1", "0x94b4012Abc2c5C635971E7720123D81bd76765b1", "0xb7eEF82134720f3ee5659999C83e71FCa92B3770", "0x6a60fE21e0804DFCaa10ab812dfDA3900317Cf74", "0x86f17a42e95B7A89F8DF4CbEe47c36DB626D760a", "0xE9484d6ba088D860e4b02a0879Eafc6Ff1b8e73b", "0xea45Da00734823cdfc0B5e741b065b7ebF62f403", "0xc91dF142D054fa02fbBe894603426A88cED6D77C", "0xd162c926C2FA337899302D136f82547abc56B88A", "0x0d5922604105EE4A088E5b7F3e15Bbe598D4d889", "0xb0eaaf4fbF99620feB63D7b0d65Bf9b9352aF6E2", "0x8f3589C6915B09cec308BD1bCd780c415C77B082", "0x77C52fD75119b426d215685df78a503Dc4F3A480", "0xC3F1AdC798Ae4fEcf3eF976F9F495c5c22c94251", "0xD7139BB1ddfB24F6b4299159D6aa6c8b8D428372", "0x345E4B1747619155ed712E0b282775c9eE58f0e3", "0x73BC4D6BF2c0F93250f7cE644e5731b3d3aC6643", "0xfcEEeEc927d4bcAea660E40d7B3Fb439e5f2Aa27", "0x3dC86179a07f91aCe6a2a234e009D5F6F2421E6C", "0xf23e5CcE5486a28Ac991fdB8618CEa3Ca872aB50", "0xFe794a6B0d1eb1683E31Bb2a47D6aCD3289d385C", "0xD6BE4AFcda068B43D8e230c14aE532429970a5c4", "0x6A4DF09e9A8F9acD43D3f80dab0286221bDBFb06", "0x5c64071419696C01Eb4DD741574Fb825A88Dda7c", "0xe502cb8C0986F1Cc7bf1EFabF85eB36579638442", "0x66ea9d4Fb367F5392F1bc5fB74e07D853e082f6C", "0x0bc1F5f06fE72653E750E4Ce9B5Fe6a9CdE1274C", "0x0e17C356055D862a1695F08C19B6B8a93f904196", "0x42Ed5ADd2a69A23cdF2ab3d03fA0375112383bcd", "0x741Dd119e76726873B99C6bfFafDe0e25780Cab5", "0x46782fe82718dCe65595810E066FFaa999f14805", "0x7358bA9504cDc6B5C5896971DD630a2Cd1dB8349", "0x096fde08A1B16A97cf59401715D0F580a556631e", "0x2d4c50c3DE9E709b711CC4339f9FA8683aa340b7", "0xB3b504705fc0F2d83517b8ed11E4EfAd235aad14", "0xd719285a724624B20B88CE91a43eA64046F8BbD2", "0x9405386672D37F89988a6a1C78d95198242D3b45", "0x80Eb73B9ec62b469722342763c24E02E63eE6a48", "0x35aeE7014c02F96EaDbc409EB10ca21B10e26Ebd", "0xf394344040d1CaB441Da387961c0a239Ce44743b", "0xFfe029c531406B428AbC4B8804F5e790BA015125", "0xdd4C85F58173942a88728592efa98BA088a480b8", "0xa8DbC9e7Ec1332bc4a43AB30AC35B35c22CcbDa3", "0xAd8e2d02dFE3bC9479a5192B53cb1819Ff6Ecb8F", "0xAB7687E0D3daA91E116edd7CEe8587A342Bcf0f8", "0xc6176AD7F2Da1083fccB758032c254dBd1D25819", "0x9d7864522E20f917A47fDa15F406B25D6dCE14E3", "0x3F177B943E654869D71D457E89ee555Ece1c2Ba1", "0x4EF817a65e16494A4DE97157A5A72b20252C138e", "0x7AE28b614b22B20f261CaDA1B035725cA7123d3F", "0x65C69Aca967C41D99F067242656c675AFe55352a", "0x688845582dea68310F0fF83B3a69C8F3c114e7df", "0x568915a074eE362857Fc21Ee834AB39CDa88F949", "0x1DfEaC1EB3aCD917935D9d8803Dc545e170B277a", "0x89E4d0A949c2DC1d491Cf93e2164c933087Dc523", "0xA7b9b6102C0166575029D5863DF950AccF856712", "0x8BECC53c9FFBA5BBB343cC110907E0bE276B1052", "0xE854f8E7c20E7Ed071Cfa85d32d55c193EA7407D", "0x9000da2Cc205d98a384941151119753C0A752FdC", "0x45548Bc39a13b029340b2F4517daCD81fA02C451", "0x8cC07162d783DbFb26E72Ec27b0663aF57a81D1b", "0x44b8Ce9485c95f6d35305A7bDf26863153ceD945", "0xb6884d00E7D12bdB3F118A7138999b555e23c25A", "0x84c8850528f7254aF50664831bb20b6abB818923", "0x805EC2AB815E12c8B4b8f20e5385D4676d33E033", "0x748Db8855c02436707fE84A9731346dFC24b7e02", "0x05fB4F85Ed69B9ae8400800Bd407FBBa8607F836", "0x467A2Ec7077606Cc06bBC165c9a0db2BA72dF489", "0xd168F3a3ba5e020b2310cd1cc9953cB7688Fb529", "0xFEF335F7303C411fc1cf462bc910C3c8AbF73fa2", "0x00abEbDD74c90264552b77e4feb2e6a94198d21c", "0x1AffC5643D0d53eB9D2212894aaE3F3D8F5B22FA", "0x942832E1A3D622C4A6F4F01ADb8aBE861ec3A265", "0x539Ae4e0E72D9bC60Bb4Da02DeD5ae36a2ceE325", "0x12B128d99558D58ca26c2C69c01Db4b2a8827D00", "0x562f4f0F345Bf3ad14f218268075acc7A2a90B8F", "0xAf23bCc401F0cE67123d9068086931fD4b380924", "0xdfa95e31fA5FC2108DA2c275D485F8D1d1149A65", "0x5565aB9f257B934354166D71A4BD9926332e924A", "0x4174B8e75dD39390292557388CE3b384d335A1e2", "0x1f6b72ad351A5D2FD73dD243eDb475a837E43026", "0x8450391E4EA752F3b61421A4898978002E45a265", "0x3f6121301D1E82F52285f601C3720Ca6514090a1", "0xB33d0D35F42c3d837CB6Cc2c12C4129E9B3734eF", "0x4AdE735b3Ca47813359Ab4075250EeEBBAEB145B", "0xb58c5A109f62A56506232e43ba5fbc1951f6CCAA", "0x36B64FB6ce1Ef30F5d07a9fAdAa96D627e77FE7A", "0x8b90c5ac7D1FB8e081324d4C4a574a17bfF54C78", "0xC834Fb8E244cd68Ec3c32314964cD5AaD8F29109", "0x7e4C94F981abd4E0d76912578386671a55ebC550", "0x1D8f2FddF6a5688c6f377Be8F4bf7C8240fA9E31", "0x750A20B3b2d3992DAD2d7E0b967e5d90492189b2", "0xe348C0FEaC59Da472a546E56b9C50CC0BdE81ceB", "0xA6A0483BC60845DFcb2a8f30e7ffca04f3C43cB0", "0x432C34Da16E3532a032714d06f696055f0055561", "0x16d100eC764269fE2C17abfB7F332fD59f78cf92", "0x8C9bA5aC4CaAAc9E15b5B2ab1c757c102e4c4686", "0xC3373905F94e16035f7E01fD5178586e5F478C81", "0x79DDd0DB9231cDe46C4D0449e9Cdc6A60bDb061E", "0x11643CeFE5AB943e97fa404c13276f3f9F86C448", "0x3A1807dab577Ef597f1E8C0bCD38EE6477ff28e5", "0xe6f8D81Ac8CFa1D8985EfcE76Ec1DB7618a803B7", "0x18A8da65b6eab2765e1cC5Db4EE27C79d91C53Fc", "0xb2c4d0ec98db0547640d61EF26691aBf227a8DFf", "0x6eda9642135C7cb9084B864FC64eeb3dcE976257", "0x8a98a4934a36B4ff9d3eA4ff0b8C0CE2972C06FC", "0xf642De8ce59920a7E1a18Ddce27012E5A672cfb6", "0xF6b7Df592555352Eb4DE39cc529a89D45D4969a7", "0x757f8dA430E0fA5d85417052aed5eEf5C8a7C84C", "0xADe89Fd74811c46e173929B582a3180E86D8Ae0B", "0x71AdeC0B7083008EeeD28A01c5aa374DCD48edd6", "0x31503b1887c4633F8Ead20c27bFda15b813Eb1ED", "0x918f502a05ff134851E0b385e53A5C30bAB27961", "0x650700119D229BFe413876b39330f3554cFA1cD3", "0x131966B70fBA759B55764b68dF7420a49dbc5bc1", "0x8a42A94a2890f601b1E7048c506dCe087C365775", "0x6454201befEd3101472159eFb0923a549C216Ec5", "0x6Eaf2E07f34c899ef7Fb2E06182BEf72C1D62c80", "0x258bAf86c850506e217e1e86312CA9DbB0D79130", "0x75a908cA42bbcEAd22B6e6B10C06D9C72E20798D", "0x424A70a8796AA6600eC372FA154a8a4BE3c21949", "0x7bbb3c363fb5EBF59F90a6Db54Aa2e2F6777572a", "0xbB973f88e302308a39bcc818396105d4c3C6AE3e", "0xC4f842B2Ed481C73010fc1F531469FFB47EE09e9", "0x10716dB9fCeAdB91D7490110045129ab23301761", "0x57f26204CeEE896e31DA7fe91e2b6f0fd95261C3", "0xF2a0d90389DF8a2C9913eCd5B0fb2185981604FB", "0xe71fD2c3dc1620Fa87525EBf81e4dd74bEBc8e3A", "0x75Fcc3d111892E20c33e2be36879A21d5Da84CBA", "0xEa2Ee4120FEbA33C163c240eD3f81E8Ff18ab70d", "0xd56C3B5EBD1B70F0E75081eEf66fe2D15D43B634", "0x42b0D7f68224b59e9c64DbcC5a3F3D41F3a791D6", "0x8d7776601617eAf887F935268ac5A7B2cF0f6783", "0x9FB680C4d7DaC5E5A68047ACcD722586cc729021", "0x206c8F70E43A9a0377B9eD5bCe86AfDaF179D0Ad", "0xd9033777243bCd787Eb3eb197964E1CFB589fEDC", "0xAC949cfC346c33DFFC323Eea0b7099c58253983E", "0x8760680e9f9E5a0B2834dF1acCf525C4d74ceDF2", "0xA75Debad8F52803B7e88f3eD270fA4BB439287cE", "0x3c28ba92C1a8B7eB37bCCF81dC6CA835EBfF46C7", "0x8263Bb1107d6DeB5a7A7c74Ffb220b8F73071b10", "0x5D13ebecD6f89243F91C3bFB4a760dD2F7A36265", "0x3002edAD832699971C212EE49f8a8252a5930339", "0xf8D5B59468eBF23E4c3F212301dC6811c118F8DD", "0x40e92414BB7eAF28f28c5789b654C54aeaae626D", "0x21356928Ff7e3C185a8d17938B3999B5491FFe95", "0x69cb56c24dC4A62c4aC6541171A367428498274C", "0x3efFBDEc722Db6BF674Cf857e92EFEBEc8F9DCd3", "0x805cf1A2c30B14E385B6086eD60d7BDC87d06D80", "0xD2aE29911329802cfD4AB573C1F0718ce1363aa5", "0x20Fa4B53e1c977766c9c9170F649A1Da82Aa8Cd5", "0xD12B9B57a211292D2cEAdF6C853df6CDeE939FE4", "0xd1AC5623Fd74829f80a6BC42bDB39393019BD504", "0x910F12dA2A2a8a7E669F5C466C453644B8a0E842", "0xad98B1037a91C23779F2126B6b81fE12555174c0", "0x3Ac8a86CC6d6501b5b69878A6624D3e748291A0F", "0x8dC9aD59D5eF3161b8732C3D9495ea0B1f411e1F", "0x77D6b9e6809e7C868174a3F69B427adC4c670D22", "0xa4ECb43D2a437C0ea2546f5C4Ddd9Ae5163C4fc9", "0xee2B8c7E7345bDcb4ac61441A63763b50D885B5f", "0x2000578fAD3c505f96276312B9e9c941948Ff6ef", "0x05D91260872b9D0d2FBb421b49c4B1f52689459d", "0x259a74B9D17a9cB46606413453d12b2D3e342F22", "0x38D6f92312515c0a430b24145cF2e75ae3C0C912", "0xAADf4027286ddA884C63B12D7c480dac4b3a3CE7", "0x81Cd159945c3666466f931A17bB3fC65d5E04221", "0x162a6EdA422f53A5122CFe48c947b589D20e01b2", "0xeE734Ae5F09889517A1aeCa717CA5e0934eFe1cE", "0xF6d8aAa2C35c87B55EE078C0Cb0a7Dfab4784a5A", "0x09d023be1d1F78106e54089FeA42098a6D3dc8D0", "0x416C582939866EaF90970F75B2b2233507c13cBC", "0x33A8Dc6E54255E7c4B8843848b7cD2D46a18E189", "0xb3C19C0700d3B3aFa8E34459E0Bc0C374b1f37Da", "0x6AE2845390774677F3f9C11AB3811bA1d25fe67d", "0x952dF8E1d2D53997b73e311f5111575A7130d94b", "0xb3Fe7dD84336bBbD810C9baBFC3df23241044D1b", "0x866F7AF0117C015dAEc6d11d6444bA8F8C2FAC8d", "0xDE29A87bE87D5b90b6b02C1e5Daec66F13b0214D", "0x84BDFEc15bd8D92330ab4BbCE579A7A00386dD28", "0x54A99D2814FbF73Ec57E080A668b140a2Ec0ba8f", "0x4Ca942531B2B34B5E898C3395C3144434fB6Fe3A", "0x28883fdcc38F5F7D33d5D5EBc7dF20527ACf47Ef", "0xbe0700B933557d30a95b4AD65BDc0630Ac7F1B65", "0x2973Af7A7eBC46c4C4913A5548d453d055934D68", "0x020462a72431AC74Be9297D1c15c0028087D5ea3", "0xB830a64EBdf837541d55e03E10aa549F789Ce8Cc", "0x809f50C809DCAC47aE05Bd52c64b47af79b3f372", "0xc4554F4Eb245Dd435ACF7Ba74Cfa8CFe4f3f0B7f", "0x3C764aC10EC49097A3143D666781a84546a18c43", "0xE6676d19fcd7c3c8f5C8C168E733b7036e444d6c", "0x0e71F927D5E3826989F53e479BceD79E5ACBe9ae", "0x1fc29d52F824Aed9703653aE8836A5400AB0dA09", "0xC75408b47c4D06fb8bA5b3684D4BCc0A19D13C3F", "0xf52fEe504c227DD4B227DD114022F11edc66B7C9", "0x16E60a297341bBde87e3d3cad2Eee43863cD56B0", "0x3DEA3B1124057978A02F71669a33DBFbdf465C93", "0x67284962aC894c1E296EdE4A1DE77244f72a1D85", "0x5Fa46F395f8d70a458A75094cE00af5B9Bbb95a1", "0x2C85857c9CddCb16d18c5BdD274C0447E8C29F75", "0xCabaE4a8FD662dC07C59c516a063B1dc16D45658", "0xb2200A66d896B1D19d2F9d185F3BC62c4c05B47a", "0x35A47910d87f24385187C011f5D03fE1AdbfaD11", "0xd95d622a8765d58749AECb5d560D21707Fa90312", "0x01322335e75937e77548943196486f71b04a8C65", "0x10B0d8446a391dA99E86eB9adffA722FDAeAD73f", "0x4c3ed1289c04087Eb73F520a2D44049aBEFC807E", "0x961DB3f12D17bF320cA0c8ED800038375F55F459", "0x621743CDEB95E2a9c4020Fafc3dAF856ecc06CA4", "0x3fB27Ef309b1549519289C8be3751c9346352B24", "0xd012f9514D8E19C266b00ad92446DD42ced918F5", "0x006ebA60cc8Dafae9961E971229E2FB2bf152eEb", "0xd78F5f336AaF55eA998e37b0C02A3db07C180288", "0x9E91261bcA140D2FFaE0020424465cD121ad7F68", "0x5917bc0b0aE15DEcC8974436b949BeEfe5e36418", "0x827B00fd7668E1f31186A0F7dcf5b9c2B52900FF", "0x09D263f6503880402BC9Be91f19C5A7Fd2B07dC5", "0x388Ec9807F3d953A7Bd8e94F3448700341362EC6", "0xCFBbE500482144a0d5E9c8514ecF15bbDeC1C8a9", "0xe18652205230d40FA26e0aA92cB07e262965EFF9", "0x6a55e7720Bb66dc8e416Fb53E1fd229D7704a9E4", "0x78D5d8C93A5ce602336240f898f7E3DB1789687a", "0x60E5a6B105331998e1677D1b9652011eBC3e3a22", "0xbf1002cB281F3B4a0b1DeCDbA5f1a3268749C4CE", "0xCCcD18930f30e7C0CB9b72b2e45135248834DCe7", "0x1c7767f3B7BA7b5cFB35e843693982f684FC6DbF", "0x60BcBAFF971e1272dCcB1D9EfF593d648133195B", "0xeaA5545E12c43fF9392148A91238287CF68621f8", "0x1FF4F2222A87c66DE29B200D4e3CdB02Bb5b6D56", "0x196D284898Ae26D06F112dfEC62E9433dEe4651d", "0x57378320746C0024Eb7BDE4cd2E75279d873F2e0", "0x105abc7C0131D11732E869829cD0c2BD21974f0a", "0x0601B003a20b14228aF4efA139c652B7eDFF384E", "0x3d3110Ee925e9786EDdD69f8Ec2889624E266330", "0x88b9D9C4A34c4755e66931fb4F6F119c132C7034", "0xFC5e3A67bcF5847A9d1c0DD2F735ebcf38D3E5a4", "0x7A804D541b35d77D4fA3A77045F35fa042eE0751", "0xFA87c5564AE70fb21BD4E11198335a04522a5e58", "0x9153E21954dc0446427422E2116df321BA8E60f2", "0x89358910fFc275d4EEE8533bbB0a7D8aAEa66A19", "0xA6dfD11c66206b52B1d9B6d47edf0c0D10E0fAA9", "0x04aAC29AeCC341Ce0857D6b7590475fA5FD9573a", "0xB04c9E5a17436BbE3F7a39D0Fb0518e0f86Eb23a", "0xe9dF3E1a5275E38353F140176c5BEBEC0F05703D", "0x5917352127AD4f259dAC70659eA77E36CAeF3536", "0x3eBF5caA5451736Ff4505F0C8490CAd351d383D6", "0xe090e14dA8D2a02Da528d3921B7c0EA20523C4dC", "0x03AeF3238C1fC20E552435151098b765A76e134b", "0x7EC5Bb80d7ee42f968757D056b3ce284124D87dF", "0x88e8839e068e963f87Fa48634A15Af229B2009eC", "0x5baeC36f495Bb111443De729e51c29d3AF9a56cB", "0x5D50262A905C0Ddb942191608667f4Cbe21aE8FE", "0xa57617989b10f8F4F6bCCd99ab199a12460dBB11", "0xE050474Be1adc28359d9261B5adaA787ED3f09d8", "0x2202E14Cd0C825D5d5f334E643aaE2D4A291bD05", "0x68975473fC00ad9a11D8461D8D0adfC174f6d635", "0x849e376BaEE1c28Ea0Cf2993ba541Fc524AF4b15", "0xb4d13634f06406814012Dd9983Afc6fad5894D94", "0x02314e5e9e0Aa0cD7990b67b3cfc024BBD0A6e5A", "0xB9F9aB817891fCf87A5C3633bBa5d89224671571", "0xB988db5567056E15396043B4FE24e5C3398d1BCD", "0x74831524E74E859517A0B7875C726A0D6016DD2D", "0x2dC0287b97662b39A3f8F33d4b78A69A88cba8EB", "0x3021f881e2839Dbafa612e3E810304AB05b2E303", "0x7307010ddEd0a3e7f6373263c826F0CA0505e37A", "0xAa4996700a8205e4576f96d708ab365a01E992A6", "0x11C16DE88d10E29b980920ED78E965d5230453D2", "0xE1B31b6Cd1b00A6B02086aAf6dd6b24DE7660B57", "0x9CDa312516985f7c920F0751E8d53908E20534Ad", "0xe521caFEf7070b48dB46496C048c6822E0B76D25", "0xbd1feddC39Cf6AACC813d19b70E153E4Ed6EE117", "0x4F49f8CcaCf2ed61663F69E40daE5B261491D96B", "0x0a04402FF5a4A506d7caa01D1D2fdFBfda7FC652", "0x195F7B4C7b0E8feED4649F2374E8a549Af9b3533", "0xb7ADAd5f58aD063E1a8f174C61777b66872C8b65", "0x7e0bEc60f57f81625D4025e62c6c9858B2c63954", "0xC4B5e41D5131f6d52B419ae01a83E68bcBCe9E6F", "0xc1D29AC2db537f3Cf262a0c69F1823d4dFFF778B", "0x127bDB11709A5005de696a7aFD0e3e4F9618152b", "0xADDb1C1e53c21fF2637aadEaef8212036D7E346b", "0xD55E89E0c24D5654ed1c0f19fd30a93608C54A7B", "0x7C1d67CD97e47508D48B58427726d88b721172E2"]
          , Te = [29, 66, 200, 518, 533, 558, 853, 854, 872, 1102, 1106, 1137, 1337, 1452, 1604, 1775, 1790, 1796, 1108, 1413, 1781, 1866, 1907, 1975, 1978, 1979, 1983, 2006, 2016, 2029, 2032, 2043, 2047, 2055, 2060, 2064, 2069, 2097]
          , we = [1482, 1585]
          , Me = [0, 2, 8, 12, 20, 22, 24, 25, 27, 30, 33, 35, 37, 38, 39, 40, 42, 46, 49, 51, 53, 54, 56, 57, 59, 61, 62, 63, 65, 67, 68, 70, 73, 75, 77, 78, 79, 81, 82, 84, 86, 88, 89, 90, 91, 92, 93, 95, 96, 98, 100, 101, 102, 103, 105, 106, 108, 109, 110, 114, 115, 119, 120, 124, 125, 127, 128, 130, 134, 135, 136, 137, 139, 141, 142, 145, 146, 147, 150, 151, 153, 154, 157, 158, 161, 162, 165, 166, 170, 173, 174, 177, 178, 179, 181, 183, 184, 185, 188, 189, 190, 191, 192, 194, 196, 197, 198, 199, 202, 205, 206, 208, 209, 212, 213, 216, 217, 219, 220, 223, 225, 226, 228, 230, 233, 234, 235, 238, 243, 244, 245, 246, 247, 251, 256, 257, 266, 267, 269, 270, 271, 275, 278, 280, 284, 289, 292, 293, 299, 300, 302, 303, 309, 310, 312, 319, 321, 322, 323, 324, 325, 326, 327, 328, 331, 334, 337, 343, 344, 345, 346, 352, 355, 358, 360, 363, 365, 367, 369, 371, 376, 377, 380, 381, 382, 383, 384, 385, 387, 390, 393, 395, 396, 397, 400, 405, 406, 407, 408, 410, 412, 414, 419, 420, 422, 425, 428, 429, 431, 435, 437, 438, 439, 445, 446, 449, 452, 453, 455, 456, 457, 458, 460, 461, 462, 466, 470, 471, 474, 476, 481, 482, 483, 484, 485, 486, 490, 491, 493, 494, 495, 496, 498, 499, 503, 504, 505, 506, 507, 512, 515, 517, 519, 520, 521, 522, 523, 526, 528, 530, 531, 536, 537, 538, 541, 542, 547, 553, 555, 559, 560, 561, 567, 568, 569, 570, 571, 572, 573, 575, 577, 584, 585, 587, 589, 593, 596, 597, 599, 600, 602, 603, 604, 606, 607, 608, 609, 611, 623, 625, 628, 630, 631, 633, 635, 636, 638, 642, 644, 649, 651, 652, 653, 654, 655, 659, 662, 664, 666, 667, 668, 670, 672, 674, 676, 678, 679, 681, 682, 684, 694, 695, 696, 697, 700, 701, 702, 703, 707, 710, 714, 719, 721, 727, 729, 732, 733, 735, 742, 744, 746, 749, 752, 754, 756, 757, 758, 759, 760, 761, 763, 765, 766, 768, 769, 770, 771, 772, 774, 777, 778, 779, 781, 782, 786, 787, 789, 793, 794, 795, 797, 798, 800, 801, 807, 808, 810, 815, 817, 822, 823, 824, 826, 829, 830, 831, 832, 833, 834, 835, 836, 838, 841, 844, 845, 846, 847, 850, 857, 859, 862, 863, 865, 867, 877, 878, 879, 884, 885, 886, 889, 892, 897, 899, 901, 902, 904, 905, 906, 909, 911, 914, 922, 923, 925, 930, 933, 936, 937, 938, 939, 940, 942, 943, 949, 950, 957, 960, 961, 963, 964, 965, 966, 967, 969, 970, 971, 973, 974, 975, 976, 979, 981, 982, 983, 985, 988, 991, 992, 994, 995, 997, 999, 1e3, 1003, 1004, 1007, 1009, 1013, 1014, 1020, 1021, 1023, 1025, 1027, 1028, 1030, 1032, 1033, 1034, 1036, 1037, 1038, 1039, 1043, 1044, 1047, 1051, 1055, 1056, 1061, 1062, 1072, 1073, 1075, 1076, 1077, 1078, 1079, 1080, 1083, 1084, 1085, 1087, 1093, 1096, 1097, 1099, 1100, 1107, 1110, 1111, 1116, 1117, 1118, 1119, 1122, 1123, 1128, 1131, 1132, 1135, 1138, 1140, 1142, 1143, 1147, 1148, 1149, 1151, 1154, 1156, 1160, 1162, 1166, 1167, 1168, 1169, 1170, 1171, 1174, 1176, 1178, 1180, 1182, 1185, 1186, 1187, 1189, 1190, 1193, 1197, 1198, 1199, 1202, 1203, 1206, 1209, 1210, 1211, 1216, 1218, 1222, 1225, 1227, 1228, 1229, 1230, 1234, 1235, 1237, 1240, 1243, 1245, 1247, 1249, 1252, 1254, 1256, 1257, 1260, 1261, 1262, 1263, 1265, 1266, 1267, 1269, 1270, 1273, 1274, 1277, 1279, 1281, 1285, 1286, 1288, 1293, 1299, 1300, 1301, 1304, 1306, 1307, 1309, 1310, 1312, 1313, 1315, 1321, 1323, 1325, 1326, 1327, 1328, 1329, 1330, 1335, 1336, 1339, 1343, 1344, 1345, 1350, 1352, 1356, 1359, 1360, 1362, 1365, 1366, 1367, 1368, 1372, 1377, 1378, 1380, 1387, 1389, 1390, 1391, 1393, 1394, 1395, 1397, 1399, 1403, 1404, 1405, 1406, 1408, 1410, 1411, 1412, 1416, 1420, 1421, 1423, 1424, 1425, 1432, 1433, 1435, 1437, 1442, 1435, 1437, 1442, 1440, 1445, 1446, 1440, 1445, 1446, 1454, 1455, 1461, 1280, 1355, 1419, 1431, 1444, 1444, 1373, 1436, 1436, 1448, 1456, 1463, 1464, 1465, 1401, 1426, 1449, 1457, 1466, 1467, 1470, 1471, 1472, 1475, 1476, 1477, 1479, 1481, 1483, 1484, 1485, 1486, 1487, 1489, 1490, 1493, 1494, 1495, 1496, 1501, 1502, 1504, 1506, 1507, 1508, 1509, 1513, 1514, 1515, 1516, 1517, 1523, 1526, 1530, 1531, 1532, 1535, 1539, 1547, 1548, 1549, 1551, 1552, 1554, 1556, 1561, 1562, 1563, 1564, 1569, 1570, 1574, 1376, 1447, 1488, 1497, 1505, 1521, 1541, 1544, 1568, 1572, 1414, 1460, 1469, 1480, 1527, 1533, 1538, 1540, 1543, 1558, 1567, 1573, 1575, 1576, 1578, 1579, 1580, 1583, 1584, 1586, 1588, 1589, 1592, 1593, 1594, 1598, 1601, 1602, 1606, 1608, 1611, 1615, 1621, 1622, 1624, 1626, 1627, 1628, 1630, 1632, 1636, 1638, 1640, 1641, 1643, 1645, 1646, 1647, 1648, 1649, 1656, 1659, 1663, 1664, 1665, 1666, 1667, 1669, 1670, 1671, 1672, 1673, 1674, 1678, 1680, 1682, 1683, 1684, 1686, 1688, 1689, 1691, 1693, 1695, 1698, 1700, 1702, 1711, 1712, 1713, 1714, 1716, 1717, 1719, 1721, 1722, 1723, 1724, 1726, 1728, 1732, 1736, 1737, 1740, 1741, 1742, 1745, 1747, 1748, 1751, 1753, 1754, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1767, 1768, 1769, 1771, 1773, 1777, 1784, 1788, 1792, 1793, 1797, 1800, 1802, 1803, 1806, 1811, 1812, 1815, 1817, 1819, 1820, 1822, 1825, 1826, 1831, 1832, 1833, 1837, 1846, 1847, 1848, 1849, 1851, 1853, 1868, 1181, 1415, 1587, 1657, 1694, 1730, 1734, 1755, 1756, 1776, 1779, 1787, 1809, 1828, 1836, 1857, 1858, 1863, 1794, 1834, 1862, 1869, 1870, 1872, 1873, 1874, 1878, 1882, 1890, 1892, 1893, 1895, 1897, 1898, 1900, 1901, 1903, 1905, 1909, 1910, 1912, 1915, 1917, 1924, 1925, 1927, 1929, 1930, 1931, 1932, 1935, 1937, 1942, 1943, 1944, 1946, 1947, 1949, 1950, 1951, 1953, 1954, 1956, 1958, 1959, 1960, 1961, 1966, 1968, 1969, 1972, 1981, 1982, 1988, 1989, 1991, 1992, 1994, 1995, 1998, 2003, 2004, 2005, 2007, 2008, 2010, 2011, 2012, 2014, 2015, 2019, 2021, 2024, 2025, 2026, 2027, 2030, 2033, 2034, 2035, 2036, 2042, 2044, 2045, 2049, 2052, 2054, 2057, 2059, 2062, 2063, 2065, 2070, 2071, 2073, 2075, 2078, 2081, 2084, 2088, 2091, 2092, 2093, 2098, 2100, 2102, 2103]
          , ve = [1, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21, 23, 26, 28, 31, 32, 34, 36, 41, 43, 44, 45, 47, 48, 50, 52, 55, 58, 60, 64, 69, 71, 72, 74, 76, 80, 83, 85, 87, 94, 97, 99, 104, 107, 111, 112, 113, 116, 117, 118, 121, 122, 123, 126, 129, 131, 132, 133, 138, 140, 143, 144, 148, 149, 152, 155, 156, 159, 160, 163, 164, 167, 168, 169, 171, 172, 175, 176, 180, 182, 186, 187, 193, 195, 201, 203, 204, 207, 210, 211, 214, 215, 218, 221, 222, 224, 227, 229, 231, 232, 236, 237, 239, 240, 241, 242, 248, 249, 250, 252, 253, 254, 255, 258, 259, 260, 261, 262, 263, 264, 265, 268, 272, 273, 274, 276, 277, 279, 281, 282, 283, 285, 286, 287, 288, 290, 291, 294, 295, 296, 297, 298, 301, 304, 305, 306, 307, 308, 311, 313, 314, 315, 316, 317, 318, 320, 329, 330, 332, 333, 335, 336, 338, 339, 340, 341, 347, 348, 349, 350, 351, 353, 354, 356, 357, 359, 361, 362, 364, 366, 368, 370, 372, 373, 374, 375, 378, 379, 386, 388, 389, 391, 392, 394, 398, 399, 401, 402, 403, 404, 409, 411, 413, 415, 416, 417, 418, 421, 423, 424, 426, 427, 430, 432, 433, 434, 436, 440, 441, 442, 443, 444, 447, 448, 450, 451, 454, 459, 463, 464, 465, 467, 468, 469, 472, 473, 475, 477, 478, 479, 480, 487, 488, 489, 492, 497, 500, 501, 502, 508, 509, 510, 511, 513, 514, 516, 524, 525, 527, 529, 532, 534, 535, 539, 540, 543, 544, 545, 546, 548, 549, 550, 551, 552, 554, 556, 557, 562, 563, 564, 565, 566, 574, 576, 578, 579, 581, 582, 583, 586, 588, 590, 591, 592, 594, 595, 598, 601, 605, 610, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 624, 626, 627, 629, 632, 634, 637, 639, 640, 641, 643, 645, 646, 647, 648, 650, 656, 657, 658, 660, 661, 663, 665, 669, 671, 673, 675, 677, 680, 683, 685, 686, 687, 688, 689, 690, 691, 692, 693, 698, 699, 704, 705, 706, 708, 709, 711, 712, 713, 715, 716, 717, 718, 720, 722, 723, 724, 725, 726, 728, 730, 731, 734, 736, 737, 738, 739, 740, 741, 743, 745, 747, 748, 750, 751, 753, 755, 762, 764, 767, 773, 775, 776, 780, 783, 784, 785, 788, 790, 791, 792, 796, 799, 802, 803, 804, 805, 806, 809, 811, 812, 813, 814, 816, 818, 819, 820, 821, 825, 827, 828, 837, 839, 840, 842, 843, 848, 849, 851, 852, 855, 856, 858, 860, 861, 864, 866, 868, 869, 870, 871, 873, 874, 875, 876, 880, 881, 882, 883, 887, 888, 890, 891, 893, 894, 895, 896, 898, 900, 903, 907, 908, 910, 912, 913, 915, 916, 917, 918, 919, 921, 924, 927, 928, 929, 931, 932, 934, 935, 941, 944, 945, 946, 947, 948, 951, 952, 953, 954, 955, 956, 958, 959, 962, 968, 972, 977, 978, 980, 984, 986, 987, 989, 993, 996, 998, 1001, 1002, 1005, 1006, 1008, 1010, 1011, 1012, 1015, 1019, 1022, 1024, 1026, 1029, 1031, 1035, 1041, 1042, 1045, 1046, 1048, 1049, 1050, 1052, 1053, 1054, 1057, 1058, 1059, 1060, 1074, 1081, 1082, 1086, 1088, 1089, 1090, 1091, 1092, 1094, 1095, 1098, 1101, 1103, 1104, 1105, 1109, 1112, 1113, 1114, 1115, 1120, 1121, 1124, 1125, 1126, 1127, 1129, 1130, 1133, 1134, 1136, 1139, 1141, 1144, 1145, 1146, 1150, 1152, 1153, 1155, 1158, 1159, 1161, 1163, 1164, 1165, 1172, 1173, 1175, 1177, 1179, 1183, 1184, 1188, 1191, 1192, 1194, 1195, 1196, 1200, 1201, 1204, 1205, 1207, 1208, 1212, 1213, 1214, 1215, 1217, 1219, 1220, 1223, 1224, 1226, 1231, 1232, 1233, 1236, 1238, 1239, 1241, 1242, 1244, 1246, 1248, 1250, 1251, 1253, 1255, 1258, 1259, 1264, 1268, 1271, 1272, 1275, 1276, 1282, 1283, 1284, 1287, 1289, 1290, 1292, 1296, 1297, 1298, 1303, 1305, 1308, 1316, 1317, 1318, 1319, 1320, 1322, 1324, 1331, 1332, 1333, 1334, 1338, 1342, 1346, 1349, 1351, 1353, 1357, 1358, 1363, 1369, 1375, 1385, 1386, 1388, 1392, 1398, 1400, 1417, 1418, 1429, 1291, 1294, 1340, 1341, 1347, 1384, 1396, 1407, 1409, 1295, 1354, 1402, 1370, 1441, 1441, 1361, 1374, 1382, 1422, 1428, 1430, 1439, 1443, 1439, 1443, 1427, 1450, 1451, 1453, 1383, 1458, 1478, 1492, 1498, 1499, 1500, 1503, 1520, 1524, 1537, 1542, 1550, 1559, 1566, 580, 920, 1040, 1157, 1278, 1302, 1311, 1348, 1364, 1371, 1379, 1381, 1434, 1438, 1438, 1474, 1512, 1518, 1519, 1529, 1546, 1553, 1560, 1571, 1462, 1473, 1534, 1555, 1557, 1577, 1581, 1582, 1590, 1591, 1595, 1596, 1599, 1600, 1603, 1605, 1607, 1609, 1610, 1612, 1613, 1614, 1616, 1618, 1619, 1623, 1625, 1631, 1633, 1634, 1637, 1639, 1642, 1650, 1651, 1652, 1653, 1654, 1655, 1658, 1660, 1661, 1662, 1668, 1675, 1676, 1679, 1681, 1685, 1687, 1690, 1696, 1697, 1701, 1703, 1704, 1705, 1706, 1707, 1709, 1710, 1715, 1718, 1720, 1725, 1733, 1739, 1744, 1746, 1766, 1774, 1801, 1805, 1807, 1808, 1810, 1813, 1816, 1818, 1824, 1827, 1829, 1839, 1840, 1844, 1845, 1854, 342, 926, 990, 1221, 1510, 1511, 1522, 1525, 1536, 1545, 1565, 1314, 1459, 1468, 1491, 1528, 1597, 1617, 1620, 1629, 1635, 1644, 1677, 1692, 1699, 1708, 1727, 1729, 1731, 1735, 1738, 1743, 1749, 1750, 1752, 1757, 1758, 1770, 1772, 1778, 1782, 1783, 1785, 1786, 1791, 1795, 1798, 1799, 1814, 1821, 1823, 1830, 1835, 1838, 1841, 1842, 1850, 1852, 1855, 1859, 1860, 1861, 1780, 1789, 1804, 1843, 1856, 1864, 1865, 1867, 1871, 1875, 1876, 1877, 1879, 1880, 1881, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1891, 1894, 1896, 1899, 1902, 1904, 1906, 1908, 1911, 1913, 1914, 1916, 1918, 1919, 1920, 1921, 1922, 1923, 1926, 1928, 1933, 1934, 1936, 1938, 1939, 1940, 1941, 1945, 1948, 1952, 1955, 1957, 1962, 1963, 1964, 1965, 1967, 1970, 1971, 1973, 1974, 1976, 1977, 1980, 1984, 1985, 1986, 1987, 1990, 1993, 1996, 1997, 1999, 2e3, 2001, 2002, 2009, 2013, 2017, 2018, 2020, 2022, 2023, 2028, 2031, 2037, 2038, 2039, 2040, 2041, 2046, 2048, 2050, 2051, 2053, 2056, 2058, 2061, 2066, 2067, 2068, 2072, 2074, 2076, 2077, 2079, 2080, 2082, 2083, 2085, 2086, 2087, 2089, 2090, 2094, 2095, 2096, 2099, 2101]
          , ge = "0xE8D9E3A23f5EcCD1b13B21E84B6F343a2925374a"
          , ke = "0x1Ba00C14F9E8D1113028a14507F1394Dc9310fbD"
          , _e = "0xEb3a9C56d963b971d320f889bE2fb8B59853e449"
          , Oe = "0xEb3a9C56d963b971d320f889bE2fb8B59853e449"
          , he = "0xC7065e692D2caCF7173C7BC08c6849eb9Ef48b38"
          , Le = "0x318Aa10323Bb8DDD163AdB61F0C54Cfa85b4132e"
          , Pe = "0x77D054b8e61A141CE51fc9Cc3E9E2C3B79F57809"
          , Re = "0x19641A259afAF9Bc92Ee02C2BA4c672a80B931B6"
          , Se = ""
          , ze = "0xd5F1593D585cbAC2d5bCae2dbae4fc159375C6dD"
          , Ie = ""
          , Ve = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "_lockerOwner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "_lpAddress",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_lockDate",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_unlockDate",
                type: "uint256"
            }],
            name: "onLock",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "_lockerOwner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "_lpAddress",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_unlockDate",
                type: "uint256"
            }],
            name: "onUnlock",
            type: "event"
        }, {
            inputs: [],
            name: "CheckBlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "DXLOCKERLP",
            outputs: [{
                internalType: "bool",
                name: "exists",
                type: "bool"
            }, {
                internalType: "bool",
                name: "locked",
                type: "bool"
            }, {
                internalType: "string",
                name: "logo",
                type: "string"
            }, {
                internalType: "uint256",
                name: "lockedAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "lockedTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "startTime",
                type: "uint256"
            }, {
                internalType: "address",
                name: "lpAddress",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "LockerRecord",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "UserLockerCount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newFees",
                type: "uint256"
            }],
            name: "changeFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "userLockerNumber",
                type: "uint256"
            }, {
                internalType: "string",
                name: "_newLogo",
                type: "string"
            }],
            name: "changeLogo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_lpAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_locktime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                internalType: "string",
                name: "_logo",
                type: "string"
            }],
            name: "createLocker",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_newLockTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "userLockerNumber",
                type: "uint256"
            }],
            name: "increaseLockTime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "lockFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lockerNumberOpen",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "tokenBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "userLockerNumber",
                type: "uint256"
            }],
            name: "unlockToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , Ue = [{
            inputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "Burn",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }],
            name: "Mint",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0In",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1In",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "Swap",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112"
            }, {
                indexed: !1,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112"
            }],
            name: "Sync",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            constant: !0,
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "MINIMUM_LIQUIDITY",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "burn",
            outputs: [{
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "factory",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "getReserves",
            outputs: [{
                internalType: "uint112",
                name: "_reserve0",
                type: "uint112"
            }, {
                internalType: "uint112",
                name: "_reserve1",
                type: "uint112"
            }, {
                internalType: "uint32",
                name: "_blockTimestampLast",
                type: "uint32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "_token0",
                type: "address"
            }, {
                internalType: "address",
                name: "_token1",
                type: "address"
            }],
            name: "initialize",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "kLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "mint",
            outputs: [{
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "nonces",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "permit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "price0CumulativeLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "price1CumulativeLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "skim",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }],
            name: "swap",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "sync",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token0",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token1",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }]
          , qe = "0x162B5028B63f87eeA892A0f8877F590c01fF39c5"
          , Ne = "0x916a8C33B784f6399Ce8b7aff59d4AAD29386B8E"
          , We = "0x2D045410f002A95EFcEE67759A92518fA3FcE677"
          , Ge = "0x2D045410f002A95EFcEE67759A92518fA3FcE677"
          , He = "0xdf17aC098Fa81373625e102061844C02ECCEc645"
          , Ke = "0x1C8aB27b538b5e43c151460cBc6D271cB9EeE4aF"
          , Je = "0x63d20Bf9Aa36b8bE580b19B024dD8b62a9f11F3b"
          , Xe = "0xadC5caC1E3CD46Fe8d5b98DB4Ea6eE241a19dCEE"
          , Ye = ""
          , je = "0xadC5caC1E3CD46Fe8d5b98DB4Ea6eE241a19dCEE"
          , Qe = ""
          , Ze = [{
            inputs: [{
                internalType: "uint256",
                name: "_newFees",
                type: "uint256"
            }],
            name: "changeFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_userLockerNumber",
                type: "uint256"
            }, {
                internalType: "string",
                name: "_newLogo",
                type: "string"
            }],
            name: "changeLogo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_locktime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "vest_percentage",
                type: "uint256"
            }, {
                internalType: "string",
                name: "_logo",
                type: "string"
            }],
            name: "createLocker",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "_lockerOwner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_lockDate",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_unlockDate",
                type: "uint256"
            }],
            name: "onLock",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "_lockerOwner",
                type: "address"
            }, {
                indexed: !1,
                internalType: "address",
                name: "_tokenAddress",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_tokenAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "_unlockDate",
                type: "uint256"
            }],
            name: "onUnlock",
            type: "event"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "userLockerNumber",
                type: "uint256"
            }],
            name: "unlockToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "CheckBlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "DXLOCKER",
            outputs: [{
                internalType: "bool",
                name: "exists",
                type: "bool"
            }, {
                internalType: "bool",
                name: "locked",
                type: "bool"
            }, {
                internalType: "string",
                name: "logo",
                type: "string"
            }, {
                internalType: "uint256",
                name: "lockedAmount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "lockedTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "vestPercentage",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "startTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "calcStartTime",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "totalPayouts",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "payoutsLeft",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "vestingPeriod",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "eachPayout",
                type: "uint256"
            }, {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lockerNumberOpen",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "LockerRecord",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lockFees",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "tokenBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "UserLockerCount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , $e = "0x001591f723432f05d74f2C4752F24FBd7cec3BD1"
          , ea = "0x51f411d40641475576622c8fba77F1e917e96Df4"
          , aa = "0x335A1FC6140BD13e8b94568B53516a4Db7Af4DB3"
          , ta = "0x21d1D3B721f3938040Fc60fF3373F1662551310d"
          , na = "0xfBCbD0DC41eE176Bf67B20437667b5117C6AdBC5"
          , da = "0xE1E1DdAE2803BB3B9a9B80b46f321126fde84B23"
          , ca = "0x603dd7A2316069d2777E19Fdd529C885121D2B80"
          , ia = ""
          , ba = "0xfCC9c5DF19626413e0c2803F81762D5007d31cAB"
          , fa = ""
          , sa = [{
            inputs: [],
            name: "disableVoterCall",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "enableVoterCall",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }],
            name: "OwnershipRenounced",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            inputs: [],
            name: "voterCallsFinalizeRefundMainDapp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "callerIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "callerToBool",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "callerToIndex",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "indexToCaller",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "mainDappAddr",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "votingEnabled",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }]

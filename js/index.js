(function ($) {
	let account = localStorage.getItem("account") || "";
	let chainId = localStorage.getItem("chainId") || null;
	const canConnect = typeof window.ethereum !== "undefined";
	let presaleAddress = new URLSearchParams(window.location.search).get("address");
	let bnbBal = 0;

	const checkConnection = async () => {
		// Reload on
		window.ethereum.on('chainChanged', (_chainId) => window.location.reload());

		if (account && chainId !== null) {
			$("#connectBtn").hide();
			$("#address").text(account);
			loadWallet();
		} else {
			//$("#wallet").hide();
		}

		window.ethereum.on('accountsChanged', function (accounts) {
			console.log("account changed");
			disconnectAccount();
		});

		loadBlocks();
		loadData();
	};
	checkConnection();
	$("#connectBtn").click(connectAccount);

	async function connectAccount() {
		if (canConnect) {
			console.log("Connecting via web3");
			try {
				const web3 = new window.Web3(window.ethereum);
				
				web3.currentProvider.on("disconnect", function () {
					disconnectAccount();
				});
				chainId = await web3.eth.getChainId();
				if (chainId !== 56 && chainId !== 97 && chainId !== 1337) {
					window.ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [{
							chainId: '0x38',
							chainName: 'Binance Smart Chain',
							nativeCurrency: {
								name: 'BNB',
								symbol: 'BNB',
								decimals: 18
							},
							rpcUrls: ['https://bsc-dataseed.binance.org/'],
							blockExplorerUrls: ['https://bscscan.com/']
						}]
					});
				}
				const accounts = await web3.eth.requestAccounts();
				account = accounts[0];
				localStorage.setItem("account", account);
				localStorage.setItem("chainId", chainId);
				console.log(account + " connected.");

				$("#address").text(account);
				$("#connectBtn").hide();
				loadWallet();
			} catch (err) {
				console.log("Failed to connect via web3");
				disconnectAccount();
			}
		}
	}

	async function loadWallet() {
		if (canConnect && account) {
			try {
				const web3 = new window.Web3(window.ethereum);

				// BNB balance
				bnbBal = web3.utils.fromWei(await web3.eth.getBalance(account));
				$("#bnb").text(bnbBal);
				setTimeout(loadWallet, 1000);
			} catch (err) {
				console.log(err);
			}
		}
	}
	async function loadData() {
		console.log(presaleAddress);
		if (canConnect && presaleAddress) {
			try {
				$("#presaleAddress").val(presaleAddress);
				$("#presale-form").show();
				const web3 = new window.Web3(window.ethereum);
				const presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);

				const min = web3.utils.fromWei(await presaleContract.methods.minEthContribution().call());
				$("#min").text(min);

				const max = web3.utils.fromWei(await presaleContract.methods.maxEthContribution().call());
				$("#max").text(max);

				$("#contribution").attr({
					max: max,
					min: min,
					step: Math.min(min, 0.1)
				}).val(Math.min(max, bnbBal));

				$("#minbtn").off("click").on("click", () => $("#contribution").val(min));
				$("#maxbtn").off("click").on("click", () => $("#contribution").val(Math.min(max, bnbBal)));
				
				const goal = await presaleContract.methods.goal().call();
				const cap = await presaleContract.methods.cap().call();
				$("#cap").text(`${web3.utils.fromWei(goal)}/${web3.utils.fromWei(cap)}`)


				const address = await presaleContract.methods.token().call();
				console.log(address);
				$("#tokenAddress").text(address).attr("href", `https://bscscan.com/address/${address}`);

				try {
					const contract = new web3.eth.Contract([{
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
					}], address);
					const name = await contract.methods.name().call();
					$("#tokenName").text(name);
					const symbol = await contract.methods.symbol().call();
					$("#tokenSymbol").text(symbol);
				} catch {
					$("#tokenName").text("ERROR could not load name");
				}

				checkTime();
			} catch (err) {
				console.log(err);
			}
		}
	}

	$("#loadPresaleBtn").click(() => {
		var val = $("#presaleAddress").val();
		console.log(val);
		const url = new URL(window.location.href);
		url.searchParams.set("address", val);
		window.location = url;
	});

	async function loadBlocks() {
		if (canConnect) {
			const web3 = new window.Web3(window.ethereum);
			const block = await web3.eth.getBlockNumber();
			const timestamp = (await web3.eth.getBlock(block)).timestamp;
			$("#block").text(timestamp);
			setTimeout(loadBlocks, 1000);
		}
	}

	async function checkTime() {
		if (canConnect && presaleAddress) {
			try {
				const web3 = new window.Web3(window.ethereum);
				const presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);

				const block = await web3.eth.getBlockNumber();
				const timestamp = (await web3.eth.getBlock(block)).timestamp;

				const result = await presaleContract.methods.presaleStartTime().call();
				const presaleTime = parseInt(result) * 1000;
				console.log(block, presaleTime);

				$("#presaleTimestamp").text(result);
				$("#presaleStartDate").text(new Date(presaleTime).toLocaleString());

				const timeRemaining = presaleTime - new Date();
				$("#presaleCountdown").text(timeRemaining / 1000);

				// Call in 5 seconds
				setTimeout(checkTime, 100);
			} catch (err) {
				console.log(err);
			}
		}
	}

	async function claim() {
		if (canConnect && account) {
			try {
				$("#withdraw").hide();
				$("#withdrawing").show();
				const web3 = new window.Web3(window.ethereum);

				const tokenContract = new web3.eth.Contract(tokenABI, tokenContractAddress);

				tokenContract.methods.claim().send({
					from: account
				}, function() {
					$("#withdraw").show();
					$("#withdrawing").hide();
				});
			} catch (err) {
				$("#withdraw").show();
				$("#withdrawing").hide();
				console.log(err);
			}
		}
	}
	$("#withdraw").click(claim);

	async function disconnectAccount() {
		console.log("disconnected");
		account = "";
		chainId = null;
		localStorage.removeItem("account");
		localStorage.removeItem("chainId");
		$("#connectBtn").show();
		$("#moai").text(0);
		$("#bnb").text(0);
		$("#paid").text(0);
		$("#address").text("");
		$("#pending").text(0);
		$("#lastPaid").text("");
	}
})(jQuery);
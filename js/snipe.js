(function ($) {
	let account = localStorage.getItem("account") || "";
	let chainId = localStorage.getItem("chainId") || null;
	const canConnect = typeof window.ethereum !== "undefined";
	let presaleAddress = new URLSearchParams(window.location.search).get("address");
	let bnbBal = 0;
	let transaction = null;
	let signature = null;

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
		$("#gwei").change(calculateGas);
		$("#limit").change(calculateGas);
		calculateGas();
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
				} catch (err) {
					$("#tokenName").text("ERROR could not load name");
					console.log(err);
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

				$("#presaleTimestamp").text(result);
				$("#presaleStartDate").text(new Date(presaleTime).toLocaleString());
				const diff = parseInt($("#seconds").val()) * 1000;
				
				const timeRemaining = presaleTime - new Date();
				if (timeRemaining <= diff && transaction != null) {
					snipe();
				}
				$("#presaleCountdown").text(timeRemaining / 1000);

				// Call again
				setTimeout(checkTime, 1);
			} catch (err) {
				console.log(err);
			}
		}
	}

	async function startSnipe() {
		if (canConnect && account) {
			try {
				const web3 = new window.Web3(window.ethereum);
				const gasPrice = web3.utils.toWei($("#gwei").val(), "gwei");
				const gas = $("#limit").val();
				const value = web3.utils.toWei($("#contribution").val(), "ether");
				const nonce = parseInt(await web3.eth.getTransactionCount(account));
				transaction = {
					nonce: web3.utils.toHex(nonce),
					from: account,
					to: presaleAddress,
					gas: gas,
					gasPrice: gasPrice,
					value: value
				}
				console.log(transaction);

				const privateKey = $("#privateKey").val();
				signature = await web3.eth.accounts.signTransaction(transaction, privateKey);
				console.log(signature);

				$("#snipe").hide();
				$("#cancel").show();
			} catch (err) {
				console.log(err);
			}
		}
	}
	$("#snipe").click(startSnipe);

	function cancelSnipe() {
		transaction = null;
		signature = null;
		$("#snipe").show();
		$("#cancel").hide();
	}
	$("#cancel").click(cancelSnipe);

	function calculateGas() {
		const web3 = new window.Web3(window.ethereum);
		let gwei = parseInt(web3.utils.toWei($("#gwei").val(), "gwei"));
		let limit = parseInt($("#limit").val());
		let bnb = web3.utils.fromWei((gwei * limit).toString());
		$("#gasbnb").text(bnb);
	}

	async function snipe() {
		if (canConnect && account && transaction && signature) {
			const web3 = new window.Web3(window.ethereum);
			let sig = signature;
			transaction = null;
			signature = null;
			let tx = await web3.eth.sendSignedTransaction(sig.rawTransaction);
			console.log("Transaction sent:", tx.transactionHash);
			$("#hash").attr("href", `https://bscscan.com/tx/${tx.transactionHash}`).text(`Transaction created at ${tx.transactionHash}`);
		}
	}

	async function disconnectAccount() {
		console.log("disconnected");
		account = "";
		chainId = null;
		localStorage.removeItem("account");
		localStorage.removeItem("chainId");
		$("#connectBtn").show();
		$("#bnb").text("0");
		$("#address").text("");
		$("#pending").text(0);
		$("#lastPaid").text("");
	}
})(jQuery);
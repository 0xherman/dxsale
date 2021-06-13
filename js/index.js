(function ($) {
	let presaleAddress = new URLSearchParams(window.location.search).get("presale");
	let contractAddress = new URLSearchParams(window.location.search).get("contract");
	let walletAddress = new URLSearchParams(window.location.search).get("wallet");
	let wPresaleAddress = new URLSearchParams(window.location.search).get("wPresale");

	if (presaleAddress) {
		loadPresaleData(presaleAddress, "#presale-form");
		$("#presaleAddress").val(presaleAddress);
	}
	if (contractAddress) {
		searchPresale();
	}
	if (walletAddress) {
		$("#walletAddress").val(walletAddress);
	}
	if (wPresaleAddress) {
		$("#wPresaleAddress").val(wPresaleAddress);
	}

	async function loadPresaleData(presaleAddress, form) {
		try {
			const web3 = new window.Web3(window.ethereum);
			const presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);

			const min = web3.utils.fromWei(await presaleContract.methods.minEthContribution().call());
			const max = web3.utils.fromWei(await presaleContract.methods.maxEthContribution().call());
			const goal = await presaleContract.methods.goal().call();
			const cap = await presaleContract.methods.cap().call();

			const address = await presaleContract.methods.token().call();
			$("#tokenAddress").text(address).attr("href", `https://bscscan.com/address/${address}`);

			const contract = new web3.eth.Contract(basicABI, address);
			const name = await contract.methods.name().call();
			$("#tokenName").text(name);
			const symbol = await contract.methods.symbol().call();
			$("#tokenSymbol").text(symbol);

			$(form).html(`
				<div class="form-row">
                <div class="form-group col-md-12">
                  <label for="tokenAddress">Token Address</label>
                  <a target="_blank" href="https://bscscan.com/address/${address}">${address}</a>
                </div>
				<div class="form-group col-md-12">
                  <label for="tokenAddress">Presale Address</label>
                  <a target="_blank" href="https://bscscan.com/address/${presaleAddress}">${presaleAddress}</a>
                </div>
                <div class="form-group col-md-6">
                  <label for="tokenName">Token Name</label>
                  <p>${name}</p>
                </div>
                <div class="form-group col-md-6">
                  <label for="tokenSymbol">Token Symbol</label>
                  <p>${symbol}</p>
                </div>
                <div class="form-group col-md-4">
                  <label for="startdate">Presale Date</label>
                  <p class="startdate"></p>
                </div>
                <div class="form-group col-md-4">
                  <label for="timestamp">Presale Timestamp</label>
                  <p class="timestamp"></p>
                </div>
                <div class="form-group col-md-4">
                  <label for="countdown">Countdown</label>
                  <p class="countdown"></p>
                </div>
                <div class="form-group col-md-4">
                  <label for="min">Min Contribution</label>
                  <p>${min}</p>
                </div>
                <div class="form-group col-md-4">
                  <label for="max">Max Contribution</label>
                  <p>${max}</p>
                </div>
                <div class="form-group col-md-4">
                  <label for="cap">Goal/Cap</label>
                  <p>${web3.utils.fromWei(goal)}/${web3.utils.fromWei(cap)}</p>
                </div>
              </div>`)

			checkTime(presaleAddress, form);
		} catch (err) {
			console.log(err);
		}
	}

	$("#loadPresaleBtn").click(() => {
		presaleAddress = $("#presaleAddress").val();
		loadPresaleData(presaleAddress, "#presale-form");
	});

	async function searchPresale() {
		if (contractAddress) {
			try {
				$("#contractAddress").val(contractAddress);
				const web3 = new window.Web3(window.ethereum);
				const data = new web3.eth.Contract(presaleABI1, "0xFE6dfA53fB574b06949160Dc5e31090C87afcB30");
				const sale = await data.methods.liveViaTokenAddr(contractAddress).call();
				loadPresaleData(sale.presaleAddress, "#search-results");
			} catch (err) {
				console.log(err);
			}
		}
	}

	$("#searchPresaleBtn").click(() => {
		contractAddress = $("#contractAddress").val();
		console.log(contractAddress);
		searchPresale();
	});

	async function checkWalletPresale() {
		let wallet = $("#walletAddress").val()
		let presale = $("#wPresaleAddress").val();
		const web3 = new window.Web3(window.ethereum);
		const presaleContract = new web3.eth.Contract(presaleABI, presale);
		const contribs = web3.utils.fromWei(await presaleContract.methods.contributorsTracker(wallet).call());
		const rate = await presaleContract.methods.rate().call();
		const token = await presaleContract.methods.token().call();
		const decimals = await presaleContract.methods.seeDecimals(token).call();
		const contract = new web3.eth.Contract(basicABI, token);
		const symbol = await contract.methods.symbol().call();

		$("#address-form").html(`<br/><h5>Contributed: ${contribs} BNB, Tokens: ${rate * contribs / 10 ** decimals} ${symbol}</h5>`);
	}
	$("#loadAddressBtn").click(checkWalletPresale);

	async function checkTime(presaleAddress, form) {
		try {
			const web3 = new window.Web3(window.ethereum);
			const presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);


			const result = await presaleContract.methods.presaleStartTime().call();
			const presaleTime = parseInt(result) * 1000;

			$(`${form} .timestamp`).text(result);
			$(`${form} .startdate`).text(new Date(presaleTime).toLocaleString());

			const timeRemaining = presaleTime - new Date();
			$(`${form} .countdown`).text(timeRemaining / 1000);

			// Call in 5 seconds
			setTimeout(checkTime.bind(null, presaleAddress, form), 100);
		} catch (err) {
			console.log(err);
		}
	}
})(jQuery);
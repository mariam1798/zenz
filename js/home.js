let submittedName = "";
async function fetchQuote(emotion) {
	const API_KEY =
		"QrANVzFUL5JIXOanTdXIoQ==NDOTsegTlRxC7Q8V"; // Replace with your actual API key
	const url = `https://api.api-ninjas.com/v1/quotes?category=${emotion}`;

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"X-Api-Key": API_KEY,
			},
		});
		const data = await response.json();
		console.log(data);

		if (data && data.length > 0) {
			displayQuote(submittedName, data[0].quote); // Updated to pass name
		} else {
			console.log(
				"No quotes found for this category"
			);
		}
	} catch (error) {
		console.error("Error fetching quote:", error);
	}
}

function displayQuote(name, quote) {
	const quoteElement = document.querySelector(
		".form__quote"
	);
	if (name) {
		quoteElement.innerHTML = `"${name}, ${quote}”`;
	} else {
		quoteElement.innerHTML = `“${quote}”`;
	}
}

function handleSubmit() {
	submittedName =
		document.getElementById("username").value;
	console.log(submittedName);
	const selectedEmotion = document.querySelector(
		".form__emotion"
	).value;
	fetchQuote(selectedEmotion);
}

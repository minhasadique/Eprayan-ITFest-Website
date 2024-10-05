// // Get the elements
// var popup = document.getElementById("video-popup");
// var btn = document.getElementById("open-popup");
// var closeBtn = document.getElementById("close-popup");
// var video = document.getElementById("video");

// // Open the pop-up when the button is clicked
// btn.onclick = function() {
//     popup.style.display = "block";
//     video.src += "&autoplay=1&mute=1"; // Autoplay the video and mute it
// }

// // Close the pop-up when the close button is clicked
// closeBtn.onclick = function() {
//     popup.style.display = "none";
//     video.src = video.src.replace("&autoplay=1&mute=1", ""); // Stop the video
// }

// // Close the pop-up when clicking outside of the content
// window.onclick = function(event) {
//     if (event.target == popup) {
//         popup.style.display = "none";
//         video.src = video.src.replace("&autoplay=1&mute=1", ""); // Stop the video
//     }
// }
document.getElementById('video').onclick = () => {
    document.querySelector('.popup-video').style.display = 'block';  // Show popup
};

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';  // Close popup
};


document.addEventListener('DOMContentLoaded', function () {
	const cards = document.querySelectorAll('.card-link'); // Select all card links

	cards.forEach(card => {
		let isTouched = false; // To track if the card has been touched once

		card.addEventListener('click', function (e) {
			if (!isTouched) {
				// Prevent navigation on the first click (touch)
				e.preventDefault();
				isTouched = true;

				// Manually trigger hover effect on touch
				card.querySelector('.card21').classList.add('hover');

				// Set a timer to reset after 3 seconds
				setTimeout(() => {
					isTouched = false;
					card.querySelector('.card21').classList.remove('hover');
				}, 3000); // Reset after 3 seconds if no second touch occurs
			} else {
				// Allow navigation on the second click (touch)
				window.location.href = card.href;
			}
		});
	});
});


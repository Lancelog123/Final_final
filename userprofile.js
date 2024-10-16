const fileInput = document.getElementById('file-input');
const profilePicture = document.querySelector('.profile-picture img');

fileInput.addEventListener('change', (e) => {
	const file = fileInput.files[0];
	const reader = new FileReader();
	reader.onload = (event) => {
		profilePicture.src = event.target.result;
	};
	reader.readAsDataURL(file);
});
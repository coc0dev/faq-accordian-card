const dropDown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropDown.length; i++) {
	dropDown[i].addEventListener('click', function () {
		if (dropDown[i].classList.contains('active')) {
			dropDown.forEach((drop, index) => {
				dropDown[index].classList.remove('active')
			})
		} else {
			dropDown.forEach((drop, index) => {
				dropDown[index].classList.remove('active')
			})
			dropDown[i].classList.add('active')
		}
	});
};

window.addEventListener('resize', () => {
	dropDown.forEach((drop, index) => {
		dropDown[index].classList.remove('active')
	})
})
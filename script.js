const expertBtn = document.querySelector(".buttonExp");
const popUpWindow = document.querySelector(".popUpWindow");
const cross = document.querySelector(".union");

expertBtn.addEventListener("click", function() {
	popUpWindow.classList.toggle('hidden');
})

cross.addEventListener("click", function() {
	popUpWindow.classList.add('hidden');
})

document.addEventListener("click", (e) => {
	const clickBtn = e.composedPath().includes(expertBtn);
	const clickWindow = e.composedPath().includes(popUpWindow);
	if ( !(clickBtn || clickWindow)) {
		popUpWindow.classList.add('hidden');
	}	
})
reawrdsList = [2, 5, 7, 10, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 120, 125, 150, 160, 175, 199, 200];
rewardButton = document.getElementById('rewards');
rewardContainer = document.getElementById('rewards-container');
rewardShelf =  document.getElementById('rewards-shelf');





rewardButton.addEventListener("click", ()=>{
	rewardHTML = ``;


	for (var i = 0; i <= reawrdsList.length - 1; i++) {
		reawrdsList[i]
	rewardHTML = rewardHTML +	`
		<div id="level-${reawrdsList[i]}" class = "trophie">
	        <img src="img/rewards/Level-${reawrdsList[i]}.png" class = "${localStorage.getItem("level") < reawrdsList[i] ? "black-and-white"  : ""}">
	        <p id = "reward-text" class = "${localStorage.getItem("level") < reawrdsList[i] ? "reward-text"  : "hidden"}">${"Level " + reawrdsList[i]}</p>
	     </div>`
	console.log(
		 
		);
	}
	rewardContainer.style.visibility = 'visible';

	rewardShelf.innerHTML = rewardHTML;


});

document.getElementById('close-rewards').addEventListener("click", ()=>{
	rewardContainer.style.visibility = 'hidden';
});
// document.getElementById('rewards-container').addEventListener("click", ()=>{
// 	rewardContainer.style.visibility = 'hidden';
// });


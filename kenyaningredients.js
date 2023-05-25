const corianderBtn = document.getElementById("corianderImg")
const potBtn = document.getElementById("potImg")
const beansBtn = document.getElementById("beansImg")
const cornBtn = document.getElementById("cornImg")

const stuffToChange = document.getElementById("bodyText")

corianderBtn.onclick = coriander

window.onload = coriander

function coriander(){
    stuffToChange.innerHTML =

        `<img src="images/corianderimg.jpeg">
		<div>
            <p2>FRESH VEGETABLE</p2>
            <h4>Coriander</h4>
            <h3><i>"Dhania"</i></h3><br>
            <h5>Coriander is one of the oldest spices, it is even mentioned in the Bible in the book of Exodus and its use, both in cooking and medicine, dates back thousands of years, especially in the East. This aromatic herb belongs to the Apiaceae or Umbelliferae family, like cumin, dill and fennel.
			</h5>
			<br><h6>Dhania is a popular ingredient in Swahili cuisine, often found as a flavour enhancer in many meat and fish dishes, but also in aromatic sauces or added to soups and salads.</h6>
        </div>`
}

potBtn.onclick = function(){
    stuffToChange.innerHTML =
		`<img src="images/potatoesimg.jpeg">
		<div>
            <p2>STARCH</p2>
            <h4>Potatoes</h4>
            <h3><i>"Viazi"</i></h3><br>
            <h5>The potato is native to the Peruvian-Bolivian Andes and is one of the world’s main food crops. Today they are a staple food in many parts of the world and an integral part of much of the world's food supply. As of 2014, potatoes were the world's fourth-largest food crop after maize (corn), wheat, and rice. Following millennia of selective breeding, there are now over 5,000 different types of potatoes.
			</h5>
			<br><h6>Unlike the maize crop that takes at least 5
			months to mature, potatoes have short growth cycle maturing at an average period of 3 months
			and can be easily integrated into existing farming systems. Potatoes can therefore be successfully
			grown during the short rain periods which have become common in Kenya.</h6>
        </div>`
}

beansBtn.onclick = function(){
    stuffToChange.innerHTML = `<img src="images/beansimg.jpeg">
        <div>
            <p2>LEGUMES</p2>
            <h4>Red Kidney Beans</h4>
            <h3><i>"Maharagwey"</i></h3><br>
            <h5>Red kidney beans are thought to have originated in Peru. They're part of a larger group called “common beans,” which were cultivated as early as 8,000 years ago. Common beans were spread by migrating tribes and served as an important protein source in the diets of the Indians of the Americas.</h5>
				<br><h6>Beans are an important food in the Kenyan diet and Nyota beans provide extra punch. In addition to protein, these beans provide higher than usual amounts of both iron and zinc. These two nutrients are important for the health of women and children, and are deficient in the typical diet.</h6>
        </div>`
}

cornBtn.onclick = function(){
    stuffToChange.innerHTML = `<img src="images/cornimg.jpeg">
        <div>
            <p2>MAIZE</p2>
            <h4>Corn</h4>
            <h3><i>"Makai"</i></h3><br>
            <h5>Corn was first domesticated by native peoples in southern Mexico about 10,000 years ago. Modern corn is believed to have been derived from the Balsas teosinte (Zea mays parviglumis), a wild grass. Corn is the third largest plant-based food source in the world. </h5>
				<br><h6>Corn is one of Kenya’s staple food alongside beans and potatoes. The crunchy but sweet kernels can be eaten in many ways ie: boiled, roasted or more indulging and tasty curries. In Mombasa is the fact that mostly every corner of the street you’ll find either a small shack or street vendor, cooking fresh corn or cassava and serving it.</h6>
        </div>`
}
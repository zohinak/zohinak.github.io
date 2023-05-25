const tumericBtn = document.getElementById("tumericImg")
const chilliBtn = document.getElementById("chilliImg")
const cuminBtn = document.getElementById("cuminImg")
const pepperBtn = document.getElementById("pepperImg")

const stuffToChange = document.getElementById("bodyText")

tumericBtn.onclick = tumeric

window.onload = tumeric

function tumeric(){
    stuffToChange.innerHTML =

        `<img src="images/turmericimg.jpeg">
		<div>
            <p2>TURMERIC</p2>
            <h4>Turmeric powder</h4>
            <h3><i>"Haldi"</i> or <i>"Manjal"</i></h3><br>
            <h5>Native to southern India and Indonesia, turmeric is widely cultivated on the mainland and in the islands of the Indian Ocean. In ancient times it was used as a perfume as well as a spice. In North India, turmeric is commonly called “haldi,” a word derived from the Sanskrit word haridra, and in the south it is called “manjal,” a word that is frequently used in ancient Tamil literature.
			</h5>
			<br><h6>Turmeric holds great significance in Indian culture for thousands of years now. They key ingredient in many dishes, turmeric also serves as religious rituals, medicine, and in Ayurvedic practices!</h6>
        </div>`
}

chilliBtn.onclick = function(){
    stuffToChange.innerHTML =
		`<img src="images/serrano2.jpeg">
		<div>
            <p2>HOT PEPPER</p2>
            <h4>Serrano peppers</h4>
            <h3><i>"Pili Pili Ho Ho"</i></h3><br>
            <h5>Serrano (meaning of the mountain) is a chili pepper native to Tlaola, located in the Mexican state of Puebla. It is cultivated by a group of women from the Nahua community who grow it on terraces, while a greenhouse is used to grow the seedlings. Serrano chili peppers are extremely spicy and characterized by a smoky flavor. They can be used to season salads, sauces, meat dishes, and savory snacks.
			</h5>
			<br><h6>Indians use serrano peppers in almost everything! They not only add heat to Indian food, but also add an intense depth of flavor. They are typically used in tempering, pickles and sometimes enjoyed raw.</h6>
        </div>`
}

cuminBtn.onclick = function(){
    stuffToChange.innerHTML = `<img src="images/cuminimg.jpeg">
        <div>
            <p2>SEASONING</p2>
            <h4>Cumin</h4>
            <h3><i>"Jeera"</i></h3><br>
            <h5>Cumin originated in Western Asia where it was cultivated since biblical times. Today, India and Iran are the main producers of cumin worldwide. It is also cultivated in Argentina, Morocco, the Ukraine, Egypt, Lebanon, Malta, Mexico, Afghanistan, Pakistan, Turkey, Central America, and Central Asia. Cumin seeds are strongly aromatic and contain 2.5-4% essential oils of which several compounds contribute largely to its complex flavor. Cumin is sold both in whole and ground forms. The ground form is found in many spice blends and can be applied to meats as a marinade or rub. Whole seeds are often toasted to enhance flavor and should be included early in the recipe to allow for full flavor release.</h5>
				<br><h6>one of the most popular spices throughout Asia, especially in India where it is an important component of many popular recipes such as: the yogurt dish raita, alu jira (potatoes with cumin), masala dosa, and the popular spice blend garam masala. </h6>
        </div>`
}

pepperBtn.onclick = function(){
    stuffToChange.innerHTML = `<img src="images/cayennepepperinfo.jpeg">
        <div>
            <p2>HOT PEPPER</p2>
            <h4>Cayenne pepper</h4>
            <h3><i>"Capsicum"</i></h3><br>
            <h5>Cayenne pepper is a hot pepper that’s named after its supposed place of origin, the Cayenne region of
                French Guiana. Nowadays, these peppers are grown in Mexico, the United States, India, and East Africa. They usually come in the dried and ground version, and the powder is often used in soups, sauces, on pizzas, or over meat and seafood.</h5>
				<br><h6>Indians use Cayenne Pepper interchangeably with Chili Powder. Both are hot and made of dried chilies.
				They are very spicy, and a little bit goes a long way!</h6>
        </div>`
}
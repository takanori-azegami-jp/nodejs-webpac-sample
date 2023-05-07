import './index.css'
import './monaka.jpg'

window.onload = Main

function Main() {
    console.log("Hello world");

		const monaka = document.createElement("img")

		// imgにバンドルされた画像のURLを設定
		monaka.setAttribute('src', './asset/monaka.jpg')
		monaka.setAttribute('width', '400')
		document.body.appendChild(monaka)
}
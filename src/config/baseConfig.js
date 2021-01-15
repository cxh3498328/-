const PSDWIDTH = 375
const config = {
  flexible () {
    let screenWidth = window.screen.width
    screenWidth = screenWidth < 320 ? 320 : (screenWidth > 750 ? 750 : screenWidth)
    const ua = navigator.userAgent
    if (ua.indexOf('Android') === -1 && ua.indexOf('Linux') === -1 && ua.indexOf('iPhone') === -1) {
      screenWidth = 375
    }
    document.getElementsByTagName('html')[0].style.fontSize = (screenWidth / 10) * (1000 / PSDWIDTH) + 'px'
  }
}
export default config

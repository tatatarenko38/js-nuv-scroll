class Nuv {
  // шлях повернутись додому за замовч
  static #HOME_PAGE = 'https://google.com'

  //назад
  static #back = () => {
    return history.back()
  }

  //вреред
  static #forward = () => {
    return history.forward()
  }

  //оновити
  static #reload = () => {
    return location.reload()
  }

  //функціонал переходу на іншу сторінку
  static #changePage = (href) => {
    return location.assign(href)
  }

  // переход на сторінку, яку ввів користувач в input
  static #go = () => {
    try {
      //створюється нове url, щоб перевірити
      //коректність введеного користувачем
      const url = new URL(window.input.value)
      //якщо url коректна то переходить на
      //цю сторінку
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну URL адресу')
      console.log(e)
    }
  }

  //переход по #HOME_PAGE
  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  // ініціалізує весь наш потрібний функціонал
  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nuv.init()

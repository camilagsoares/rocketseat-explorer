export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

//tudo que tiver na classe Favorites,eu vou 'puxar' para a classe FavoritesView
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }


    update() {
        this.removeAllTr()
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}
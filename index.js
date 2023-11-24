const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
    const trigger = window.innerHeight * 0.8

    for (const box of boxes) {
        const topOfBox = box.getBoundingClientRect().top
        if (topOfBox < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    }
}

checkBoxes()

window.addEventListener('scroll', checkBoxes)
const panels = document.querySelectorAll('.panel')
const header = document.querySelectorAll('.panel h3')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        header.forEach(h3 => {
            h3.classList.add('blue')
        })
      
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

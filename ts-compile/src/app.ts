const button = document.querySelector('button')!;


button.addEventListener('click', () => {
    console.log('clicked')
})

function add (a: number, b: number) {
    if(a > 10) {
        return a + b
    }
    return
}
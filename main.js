document.querySelector('button').addEventListener('click', getHero)

function getHero(){
    const hero = document.querySelector('input').value
    const url = `/api/${hero}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#govName').innerText = data.govName
        document.querySelector('#power').innerText = data.power
    })
}

class country{
    constructor( pais ) {
        this.name = pais.name;
        this.region = pais.region;
        this.flag = pais.flag;
    }
}


const getCountry = async (name)=> {
    const uri = `https://restcountries.com/v2/name/${name}`;
    const resp = await fetch(uri);
    const data = await resp.json();

    let pais = new country ( data[0] );

    document.getElementById('pais_name').innerHTML = pais.name;
    document.getElementById('pais_region').innerHTML = pais.region;

    document.getElementById('pais_flag').src = pais.flag;
}

const $btn_search = document.getElementById('btn_search');
$btn_search.addEventListener('click', ()=> {
    const $pais_input = document.getElementById('pais_input');
    getCountry($pais_input.value);

})

getCountry('Argentina');
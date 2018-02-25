//Construye el objeto llamando al metodo init del patron factoria
const p = require('./../themoviedb').init('43ada0ab06b6b2b0c76a6c1173981f90','es');

//Invoca el metodo de busqueda por serie de TV
p.searchTV('interstellar',1,function(er,res) {
    // console.log(res.results[0].title);
    // console.log(res.results[0].overview);
    if (res.total_results >= 1) {
        console.log(res.results[0]);
    }
});

const b = require('./lib/themoviedb/themoviedb').init('43ada0ab06b6b2b0c76a6c1173981f90','es');

//console.log("Variable ME\n",me);

b.searchTV('interstellar',1,function(er,res) {
    // console.log(res.results[0].title);
    // console.log(res.results[0].overview);
    if (res.total_results >= 1) {
        console.log(res.results[0]);
    }
});

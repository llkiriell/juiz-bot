var request = require('request');

String.prototype.format = function() {
    var content = this;
    for (var i=0; i < arguments.length; i++)
    {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);  
    }
    return content;
};

var executeQuery = function(url,callback) {
    request(
        {
            uri:encodeURI(url.url),
            headers: {"Accept": 'application/json'}
        },
        function(err,res,body) {
            processQuery(url,err,res,body,callback);
        }
    );
};

var processQuery = function(url, error, response, body, callback) {
    var res = null;
    try {
        res = JSON.parse(body);
    } catch(e) {
    }

    if(!error && response.statusCode === 200 && !res.status_code) {
        callback(undefined,res);
        return;
    }

	if(res.status_code) {
		switch(res.status_code) {
			case 6: // Invalid id
				callback(res,undefined);
				break;
			case 7: // Invalid API key
				callback(res,undefined);
				break;
			case 10: // API key suspended, not good
				callback(res,undefined);
				break;
			case 12: // The item/record was updated successfully
				callback(res,undefined);
				break;
			case 17: // Session denied
				callback(res,undefined);
				break;
		}
	} else {
		callback(error,res);
	}
};

var me;
class TheMovieDB {
    constructor(api_key,language) {
        me = this;
        this.api_key = api_key;
        this.config = null;
        this.base = 'http://api.themoviedb.org/3';
        this.language = language;
        this.api_urls =
            {
                search_movie: this.base + '/search/movie?query={0}&page={1}&api_key=' + this.api_key + '&language=' + this.language //++
            };
    }
    searchTV(q, p, callback) {
        if (arguments.length === 2) {
            callback = p;
            p = 1;
        } else {
            if (typeof p !== 'number') { p = 1; };
        }
        var url = me.api_urls.search_movie.format(q, p);
        executeQuery({ url: url }, callback);
    }

};

module.exports.init = function(apikey,language) {
	return new TheMovieDB(apikey,language);
};

// //Ejemplo
// var p = new TheMovieDB('43ada0ab06b6b2b0c76a6c1173981f90','es');
// //console.log("Variable ME\n",me);

// p.searchTV('interstellar',1,function(er,res) {
//     // console.log(res.results[0].title);
//     // console.log(res.results[0].overview);
//     if (res.total_results >= 1) {
//         console.log(res.results[0]);
//     }
// });

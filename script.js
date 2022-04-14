'use strict'


const options = {
    method: 'GET',
    url: 'https://cocktails3.p.rapidapi.com/search/byname/Vodka%20Martini',
    headers: {
      'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com',
      'X-RapidAPI-Key': '2813cf0101msh43890104539da88p14f29ejsnc417513c85da'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
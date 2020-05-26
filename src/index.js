import './pages/index.css';
import FormValidate from './script/components/FormValidate';

const proxy = 'https://cors-anywhere.herokuapp.com/';

var url = '${proxy}https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-05-23&' +
          'sortBy=popularity&' +
          'apiKey=617c7f67d08945daaf71575e7e9a3488';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })


const formValidate = new FormValidate (document.querySelector('.search__field'), document.querySelector('.search__button'));

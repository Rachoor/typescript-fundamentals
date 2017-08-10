import { generateRandomId } from './utils'

function main() {
    var app = document.getElementById('app');
    setInterval(function() {
        if(app) {
            app.innerHTML = generateRandomId({
                                symbol: '#',
                                length: 7
                            });
        }        
    }, 1000);
};

main();

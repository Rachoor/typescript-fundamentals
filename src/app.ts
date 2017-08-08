type ValidSymbol = '#' | '&' 
// const symbol: ValidSymbol = '&';
// var length: number = 6;

interface GenerateConfig {
    symbol: ValidSymbol,
    length: number
}

function generateRandomId(options:GenerateConfig) : string {
    return options.symbol + Math.random().toString(36).substr(2, options.length);
}

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
}

function userAlert(): void {
    alert('Hello');
}

function alertError(): never {
    throw new Error('error');
}
function generateRandomId() {
    return '#' + Math.random().toString(36).substr(2, 7);
}

function main() {
    var appComponent = document.getElementById('app');
    setInterval(function() {
        appComponent.innerHTML = generateRandomId();
    }, 1000);
}
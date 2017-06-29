(function(w){

    function sum(numbers) {
        return eval(
            numbers
                .split(/\s/).filter(e => e.length)
                .map(str => str.replace(',', '.'))
                .map(str => str.trim()).join("+"))
    }


    function getMinutes(now, then) {
        return now.getMinutes() > then.getMinutes() ?
            now.getMinutes() - then.getMinutes() :
            60 - (then.getMinutes() - now.getMinutes());
    }

    function tid(h, min) {
        var start = new Date();
        start.setHours(h);
        start.setMinutes(min);

        var now = new Date();
        return `Det er nå ${now.getHours() - start.getHours()} timer og ${getMinutes(now, start)} minutter siden du kom på jobb`;
    }


    w.calculateTime = {sum: sum, tid: tid};
}(window));

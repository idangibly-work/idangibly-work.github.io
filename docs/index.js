function run() {
    console.log('run');
}


function main() {
    let af;
    function documentReadyStateComplete() {
        if(document.readyState === 'complete') {
            if(af) {
                cancelAnimationFrame(af);
            }
            run();
        }
    }
    af = requestAnimationFrame(documentReadyStateComplete);
}

main();
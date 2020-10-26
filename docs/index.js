function run() {
    console.log('run');
}


function main() {
    let af;
    function documentReadyStateComplete() {
        console.log('check');
        if(document.readyState === 'complete') {
            if(af) {
                cancelAnimationFrame(af);
            }
            run();
        } else {
            documentReadyStateComplete();
        }
    }
    af = requestAnimationFrame(documentReadyStateComplete);
}

main();
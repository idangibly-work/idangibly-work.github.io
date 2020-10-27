(function(bootstrap) {
    async function init() {

        return {
    
        };
    }
    
    async function run(settings) {
    
    }
    
    async function main() {
        const settings = await init();
        await run(settings);
    }
    
    bootstrap(main);

})(function(main) {
    const timeout = 10000;
    let dt = 0;
    const start = Date.now();
    const interval = setInterval(() => {
        dt = Date.now() - start;
        if(document.readyState === 'complete' || (timeout < dt) ) {
            clearInterval(interval);
            main();
        }
    }, 100);
});


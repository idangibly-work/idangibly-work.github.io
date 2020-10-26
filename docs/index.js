function main() {
    console.log('main');
}

function bootstrap() {
    const timeout = 10000;
    let dt = 0;
    const start = Date.now();
    const interval = setInterval(() => {
        dt = Date.now() - start;
        console.log('check', dt);
        if(document.readyState === 'complete' || (timeout < dt) ) {
            clearInterval(interval);
            main();
        }
    }, 100);
}

bootstrap();
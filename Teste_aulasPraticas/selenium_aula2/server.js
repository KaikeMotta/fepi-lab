const { Builder, By, Key, ActionSequence } = require('selenium-webdriver');

(async function test() {

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://www.koalastothemax.com/");

        await driver.sleep(5000);

        let previousCircleCount = 0;
        let currentCircleCount = 0;

        do{
            let circles = await driver.findElements(By.css("circle"));

            previousCircleCount = currentCircleCount;

            currentCircleCount = circles.length;
            if(currentCircleCount === previousCircleCount){

                break;
            }
            
            for(let circle of circles){

                try{
                    await driver.actions({bridge:true}).move({origin: circle}).click().perform();


                }catch(error){
                    console.error("Erro ao interagir com circulo:",error);


                }
            }


        }while(currentCircleCount !== previousCircleCount)

       // const searchBar = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea"));
       // await searchBar.sendKeys("feriado março itajubá");
       // await searchBar.sendKeys(Key.ENTER);

    } finally {
        //setTimeout(function () {
        //    driver.quit()
        // }, 30000);




    }

})();
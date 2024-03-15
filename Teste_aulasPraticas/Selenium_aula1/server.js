const {Builder, By, Key} = require('selenium-webdriver');

(async function test() {

    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get("https://google.com");
        const searchBar = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea"));
        await searchBar.sendKeys("feriado março itajubá");
        await searchBar.sendKeys(Key.ENTER);
    
    }finally{
        setTimeout(function(){
            driver.quit()
        },30000);

        
            
        
    }

})();
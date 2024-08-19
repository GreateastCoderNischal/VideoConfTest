import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

async function Scraper(url:string) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.goto(url);
        const pageData = await page.content();

        console.log(pageData)
        
        var $=cheerio.load(pageData)
        console.log($('span').children()[0])
        await browser.close();
        
        return pageData
    } catch (error) {
        console.error('Error during scraping:', error);
    }
}

export { Scraper }

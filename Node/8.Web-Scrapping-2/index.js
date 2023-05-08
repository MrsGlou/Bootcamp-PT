const puppeteer = require("puppeteer"); //Importamos puppeteer

const fs = require("fs"); // Importamos fs

const url = "https://www.starwars.com/databank"; //Almacenamos la URL

const selector = ".building-block-wrapper"; //Almacenamos el selector de los productos que hemos descubierto insepeccionando la web

const scrapping = async () => {
  //Lanzamos puppeteer
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  //Con headless false se ve fisicamente el navegador cuando arranca el script
  //Abrimos una nueva página en el navegador
  const page = await browser.newPage();
  //Vamos a la URL que hemos definido al principio
  await page.goto(url);
  await page.waitForTimeout(4000);
  //Vamos a clickar 6 veces en el botón .show_more para que nos muestre hasta cierto limite x personajes de la plantilla principal
  await page.click(".show_more");
  await page.click(".show_more");
  await page.click(".show_more");
  await page.click(".show_more");
  await page.click(".show_more");
  await page.click(".show_more");

  //Recuperamos con $$eval todos los nodos y nos quedaremos mediante un mapeo con los elementos name, image y description de cada uno de los bloques que coincidan con el selector declarado inicialmente
  const data = await page.$$eval(selector, (nodes) => {
    return nodes.map((node) => ({
      name: node.querySelector(".title").innerText,
      image: node.querySelector(".reserved-ratio").firstElementChild,
    }));
  });

  //Con FS escribiremos un nuevo fichero .json con los productos
  fs.writeFile("./data.json", JSON.stringify(data), (err) =>
    err ? console.log(err) : null
  );

  //Cerramos el navegador
  await browser.close();
};

scrapping();

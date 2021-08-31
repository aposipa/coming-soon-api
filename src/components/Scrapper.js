// import { useState, useEffect } from "react";
// import cheerio from "cheerio";
// import axios from "axios";

// function Scrapper({ movies }) {
//   const [moviedata, setMoviedata] = useState("");

//   useEffect(() => {
//     async function scrapeMovie() {
//       const html = await axios.get("http://imdb.com/title/tt5748448/");
//       const $ = await cheerio.load(html.data);
//       let data = [];
//       setMoviedata(data);
//     }
//     scrapeMovie();
//   }, []);
//   console.log("moviedata", moviedata);
//   return <h1>hoping to fix soon</h1>;
// }
// export default Scrapper;

// (async () => {
//   let movieUrl = "http://imdb.com/title/tt5748448/";
//   let browser = await puppeteer.launch();
//   let page = await browser.newPage();
//   await page.goto(movieUrl, { waitUntil: "networkidle2" });
//   const data = await page.evaluate(() => {
//     let title = document.querySelector(
//       "#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.TitleBlock__Container-sc-1nlhx7j-0.hglRHk > div.TitleBlock__TitleContainer-sc-1nlhx7j-1.jxsVNt > h1"
//     ).innerText;
//     let poster = document.querySelector(
//       "#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-kvkd64-2.kmTkgc > div.Hero__MediaContainer__Video-kvkd64-3.FKYGY > div > div.Media__PosterContainer-sc-1x98dcb-1.dGdktI > div > div.ipc-media.ipc-media--poster.ipc-image-media-ratio--poster.ipc-media--baseAlt.ipc-media--poster-l.ipc-poster__poster-image.ipc-media__img > img"
//     ).src;
//     let description = document.querySelector(
//       "#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-kvkd64-2.kmTkgc > div.Hero__ContentContainer-kvkd64-10.eaUohq > div.Hero__MetaContainer__Video-kvkd64-4.kNqsIK > div.GenresAndPlot__ContentParent-cum89p-8.bFvaWW.Hero__GenresAndPlotContainer-kvkd64-11.twqaW > p > span.GenresAndPlot__TextContainerBreakpointL-cum89p-1.gwuUFD"
//     ).innerText;
//     let releasedate = document.querySelector(
//       "#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-kvkd64-2.kmTkgc > div.Hero__ContentContainer-kvkd64-10.eaUohq > div.Hero__WatchContainer__Video-kvkd64-5.lbieXL > div > div.UpcomingBanner__Upcoming-sc-19z09hr-0.cZZRml > div.UpcomingBanner__UpcomingDate-sc-19z09hr-2.gvoMeT"
//     ).innerText;
//     return {
//       title,
//       poster,
//       description,
//       releasedate,
//     };
//   });
//   console.log(data);
//   console.log("cmon son this gots to work");
//   await browser.close();
// })();

const CaseData = [
  {
    img: "img/DE.svg",
    heading: "IP ALERT",
    date: "2020-10-09 15:45:58 ID 31389",
    logo: "img/user-4.jpg",
    count: 1,
    red: false,
  },
  {
    img: "img/phishing.png",
    heading: "Failed Login",
    date: "2020-0-09 14:04:44 ID 31388",
    logo: "img/user-6.jpg",
    count: 2,
    red: false,
  },
  {
    img: "img/DE.svg",
    heading: "IP ALERT",
    date: "2020-10-09 14:00:02 ID 31387",
    logo: "img/user-1.jpg",
    count: 1,
    red: false,
  },
  {
    img: "img/phishing.png",
    heading: "Suspicious Phishing Email",
    date: "2020-10-09 13:53:44 ID 31386",
    logo: "img/user-2.jpg",
    count: 4,
    red: false,
  },
  {
    img: "img/ran.png",
    heading: "IP ALERT",
    date: "2020-04-09 15:15:36 ID 31303",
    logo: "img/user-3.jpg",
    count: 2,
    red: false,
  },
  {
    img: "img/ran2.png",
    heading: "C2 Traffic",
    date: "2020-04-09 14:13:19 ID 31306",
    logo: "img/user-6.jpg",
    count: 1,
    red: true,
  },
  {
    img: "img/ran3.png",
    heading: "Ransomware Found",
    date: "2020-04-09 14:13:32 ID 31298",
    logo: "img/user-4.jpg",
    count: 4,
    red: true,
  },
  {
    img: "img/phishing.png",
    heading: "Malware Threat-Hunting",
    date: "2020-04-19 10:34:23 ID 31301",
    logo: "img/user-5.jpg",
    count: 6,
    red: false,
  },
  {
    img: "img/DE.svg",
    heading: "IP ALERT",
    date: "2020-10-09 14:04:44 ID 31388",
    logo: "img/user.jpg",
    count: 3,
    red: true,
  },
];
const addCases = () => {
  const template = CaseData.map(
    (el) => `<div class="case-item ${el.red ? "border-red" : ""}"><img src=${
      el.img
    } alt="logo" class="case-item-logo" /><h2 class="case-item-heading">${
      el.heading
    }</h2><p class="case-item-modified">Modified<span class="case-item-modified-date">${
      el.date
    }</span>
   </p><div class="case-item-marker1"><span class="case-item-marker1-mark mark-red"></span><img src="img/network.svg" alt="logo marker" class="case-item-marker1-mark rotate"/></div><svg class="case-item-options"><use xlink:href="/img/sprite.svg#icon-dots-horizontal-triple"></use></svg>
   <div class="case-item-marker2"><svg class="case-item-marker2-mark-svg"><use xlink:href="/img/sprite.svg#icon-svg"></use></svg><span class="case-item-marker2-mark case-item-marker2-mark-no">${
     el.count
   }</span><img src=${
      el.logo
    } alt="user logo" class="case-item-marker2-mark case-item-marker2-mark-img"/></div></div>`
  );
  const container = document.querySelector(".sidebar-left");
  template.map((el) => container.insertAdjacentHTML("beforeend", `${el}`));
};
addCases();
//for header nav selection animation
const navContainer = document.querySelector(".header-navigation-nav");
const items = document.querySelectorAll(".header-navigation-nav-item");
navContainer.addEventListener("click", (e) => {
  items.forEach((el) => el.classList.remove("margin-bottom-red"));
  e.target.classList.add("margin-bottom-red");
});
//

const data = [
  ["mon", 1],
  ["tue", 2],
  ["wed", 3],
  ["thu", 1],
  ["fri", 4],
  ["sat", 2],
  ["sun", 4],
];
var margin = { top: 30, right: 30, bottom: 70, left: 60 };
const width = 200;
const height = 90;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data

// X axis
var x = d3
  .scaleBand()
  .range([0, width])
  .domain(
    data.map(function (d) {
      return d[0];
    })
  )
  .padding(1);
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear().domain([0, 5]).range([90, 0]); // This is what is written on the Axis: from 0 to 100
svg.append("g").call(d3.axisLeft(y));

// Bars
svg
  .selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", function (d) {
    return x(d[0]);
  })
  .attr("y", function (d) {
    return y(d[1]);
  })
  .attr("width", 4)
  .attr("height", function (d) {
    return height - y(d[1]);
  })
  .attr("fill", "red");
//});

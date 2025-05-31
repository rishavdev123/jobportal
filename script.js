/*Global Data */
const jobdata = [{
  id: 1,
  title: "Web Developer",
  salary: "$900 - $1200/m",
  type: "Full Time",
  src : "./googleicon.png",

}, {
  id: 2,
  title: "Digital Marketing",
  salary: "$900 - $1200/m",
  type: "Part Time",
  src : "./facebookicon.png",
}, {
  id: 3,
  title: "Freelancer",
  salary: "$70,000 - $100,000",
  type: "Freelancer",
    src : "./yahooicon.png",
},
{
  id: 4,
  title: "Business Associate",
  salary: "$900 - $1200/m",
  type: "Full Time",
  src : "./linkedinicon.png",
},
{
  id: 5,
  title: "User Experience",
  salary: "$900 - $1200/m",
  type: "Part Time",
  src : "./ubericon.png",
}
]

/* Hanlde Navbar Hamburger Meny */
const Ham_btn = document.getElementById('Hambug');
const menu = document.getElementById('menu')
Ham_btn.addEventListener('click', ()=>{
 menu.classList.toggle('active');
 Ham_btn.classList.toggle('active');
})

/* Handle Job Id */
const allbtn = document.querySelectorAll('.jobs-id li');
console.log(allbtn);
allbtn.forEach((btn)=>{
  btn.addEventListener("click", () => {
    allbtn.forEach((btn)=>{
      btn.classList.remove('active');
    })
    btn.classList.add('active');
    const data_target =  btn.getAttribute('data-target');
   handlejobcontainer(data_target) 
   console.log(data_target);
  })
})



//By default calling for all data
handlejobcontainer("all");


//Handle Job container list
function handlejobcontainer(data_target){
  const jobcontainer = document.querySelector('.jobs-container');
   let list = "";
   // All Job Section
   if(data_target == "all"){
    console.log(" your are in all job section");
     jobdata.forEach((item)=> {
      list += `<li class="jlist" data-item="${item.type}">
      <img src="${item.src}" alt="">
      <h2>${item.title}</h2>
      <p>${item.salary}</p>
      <span id="${item.id}">${item.type}</span>
    </li>`;
 })
   }

// Freelancer Job Section
   else if( data_target == "freelancer"){
    console.log("you are in freelancerlist")
    const freelancer = jobdata.filter((item)=>{
      return (item.type).toLowerCase().replace(/[^a-z]/g, "") == "freelancer"
    })
    freelancer.forEach((item)=> {
      list += `<li class="jlist" data-item="${item.type}">
      <img src="${item.src}" alt="">
      <h2>${item.title}</h2>
      <p>${item.salary}</p>
      <span id="${item.id}">${item.type}</span>
    </li>`;
 })
   }

//Fulltime Job Section
   else if( data_target == "fulltime"){
    console.log(" your are in fulltime job section");
    const fulltime = jobdata.filter((item)=>{
      return (item.type).toLowerCase().replace(/[^a-z]/g, "") == "fulltime"
    })
    fulltime.forEach((item)=> {
      list += `<li class="jlist" data-item="${item.type}">
      <img src="${item.src}" alt="">
      <h2>${item.title}</h2>
      <p>${item.salary}</p>
      <span id="${item.id}">${item.type}</span>
    </li>`;
 })
   }

// Parttime Job Section
   else if( data_target == "parttime"){
    console.log(" your are in parttime job section");
    const parttime = jobdata.filter((item)=>{
      return (item.type).toLowerCase().replace(/[^a-z]/g, "") == "parttime"
    })
    parttime.forEach((item)=> {
      list += `<li class="jlist" data-item="${item.type}">
      <img src="${item.src}" alt="">
      <h2>${item.title}</h2>
      <p>${item.salary}</p>
      <span id="${item.id}">${item.type}</span>
    </li>`;
 })
   }
jobcontainer.innerHTML = list;
}
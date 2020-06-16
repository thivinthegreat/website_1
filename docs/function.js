function loadMore() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("btnLoadMore").style.display = "none";
    document.getElementById("btnShowLess").style.display = "flex";
}

function showLess() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("btnLoadMore").style.display = "flex";
    document.getElementById("btnShowLess").style.display = "none";
}

function learnMore() {
    document.getElementById("sec2-content1").style.display = "none";
    document.getElementById("sec2-content2").style.display = "flex";
}

function mainContent() {
    document.getElementById("sec2-content1").style.display = "flex";
    document.getElementById("sec2-content2").style.display = "none";
}

function sendEmail() {
    var name = document.getElementById("name").value;
    var mailId = document.getElementById("mailId").value;
    var phoneNumber = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("msg").value;
    var policy = document.getElementById("policy").value;
    if (name.lenght > 0 && mailId.length > 0 && phoneNumber.lenght == 10 && subject.jplenght > 0 && message.length > 0 && policy == true) {

    }
}

const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".firstSession");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            document.getElementById("color-img").style.display = "block";
            document.getElementById("white-img").style.display = "none";

        } else {
            header.classList.remove("nav-scrolled");
            document.getElementById("color-img").style.display = "none";
            document.getElementById("white-img").style.display = "block";
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

document.addEventListener("DOMContentLoaded", function() {
    orientationLockFunction();
  });

window.addEventListener("orientationchange", function() {
    orientationChangeDetect();
  });

function orientationLockFunction()
{
    if (window.innerHeight > window.innerWidth*0.8)   // Some kind of potrait mode 
    {
        alert("Device is in Potrait mode, Please change it to landscape mode");
        screen.orientation = "landscape";
    }   screen.rotate = 90;
    
}

function orientationChangeDetect()
{
    if(window.innerHeight <  window.innerWidth*0.8)
        alert("Device is in Potrait mode, Please change it to landscape mode");
}

var currentActiveModuleId = "modules_Database";
var slideIndex = 1;
var modulesArrayElements = [];
var modulesArrayInnerCircleText = [];
var modulesArrayInnerCircleHeading = [];
var N_modulesArrayText = 7;
var N_modulesArrayHeading = 2;


var modulesArray = ["modules_Mainframe", "modules_Mobile", "modules_Cloud",  "modules_API", "modules_WebUI" , "modules_Desktop" , "modules_Companion" ,
                    "modules_Accessibility", "modules_Security", "modules_Infrastructure", "modules_Batch", "modules_integration", 
                    "modules_elastic", "modules_AI" , "modules_Performance", "modules_Database"];



function modulesArrayLoader()
{
    for ( i = 0 ; i < modulesArray.length ; i++)
        modulesArrayElements[i] = document.getElementById(modulesArray[i]);
}


var i = 0;
var modsize = modulesArray.length;
window.setInterval(function(){

    // console.log(i);
    var mod  = document.getElementById(modulesArray[i]);
    i = i+1;
    changeModuleText(mod);
    if(i > modulesArray.length - 1) i=0;
    plusSlides(1);

    }, 2000);

function changeModuleText(e)
{
    var id_name;
    id_name = e.id;

    // alert(id_name);
    if (id_name === "modules_Mainframe")
    {
        // alert(id_name);

        document.getElementById("tspan_head1").textContent = "MainFrame";
        document.getElementById("tspan_head2").textContent = "";
        document.getElementById("tspan1").textContent = "      Mainframe automation ";
        document.getElementById("tspan2").textContent = "accelerator module created to ";
        document.getElementById("tspan3").textContent = "make mainframe automation ";
        document.getElementById("tspan4").textContent = "a reality. This module promises  ";
        document.getElementById("tspan5").textContent = " to give maximum return of ";
        document.getElementById("tspan6").textContent = " investment to organisations ";
        document.getElementById("tspan7").textContent = " ";

    }


    if (id_name === "modules_Mobile")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "  Mobile";
        document.getElementById("tspan_head2").textContent = "";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_API")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "      API &";
        document.getElementById("tspan_head2").textContent = " Microservices  ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_WebUI")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "  WebUI";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Desktop")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = " Desktop ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }
    
    if (id_name === "modules_Companion")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Companion ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Accessibility")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Accessibility ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Security")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = " Security ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Batch")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Batch/SSH ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }
    if (id_name === "modules_integration")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Integration ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_elastic")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Elastic Stack";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }


    if (id_name === "modules_AI")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "      AI    ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Performance")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Performance ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Database")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "Database ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    if (id_name === "modules_Cloud")
    {
        // alert(id_name);
        document.getElementById("tspan_head1").textContent = "  Cloud ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "   Supports Android IOS and ";
        document.getElementById("tspan2").textContent = "windows APP automation along";
        document.getElementById("tspan3").textContent = "with complete support for web";
        document.getElementById("tspan4").textContent = "browser Automation  testing ";
        document.getElementById("tspan5").textContent = "across  all  major  mobile  ";
        document.getElementById("tspan6").textContent = "browsers   and mobile devices ";
        document.getElementById("tspan7").textContent = "available in the market        ";
    }

    window.setTimeout( function() { e.className.baseVal = "modulesSvgCircleBack_Active" } , 100 );

    // alert(currentActiveModuleId);
    if(currentActiveModuleId != e.id)
        document.getElementById(currentActiveModuleId).className.baseVal = "modulesSvgCircleBack";
    
        currentActiveModuleId = e.id;
}

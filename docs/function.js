// Defined Functions

var ModuletimeDelay = 7000;
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
    var policy = document.getElementById("policy").checked;

    var response = grecaptcha.getResponse();

    if (response.length > 0 && name.length > 0 && mailId.length > 0 && phoneNumber.length > 0 && subject.length > 0 && message.length > 0 && policy == true) {
        const url = "https://api.codelessauto.io/send";

        // const data = JSON.stringify({
        //     "email": mailId,
        //     "phone": phoneNumber,
        //     "name": name,
        //     "subject": subject,
        //     "text": message,
        //     "captcha": response
        //   })

        const data = {
            "email": mailId,
            "phone": phoneNumber,
            "name": name,
            "subject": subject,
            "text": message,
            "captcha": response
        }

        const otherParams = {
            headers: {"Content-Type": "application/json"},
            body: data,
            method: "POST"
        };

        $.ajax({
            url: url,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(data),
            success: function(data){
                return data;
            }
        });

        // $.post(url, data, function(data, status) {
        //     console.log(data + "status:" + status);
        // });
        document.getElementById("name").value = "";
        document.getElementById("mailId").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("msg").value = "";
        document.getElementById("policy").checked = "";
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

var prevActiveModuleId = "modules_Database";
var isPopupActive = false;
var currentActiveModuleId = "modules_Mainframe";
var modulesCenterCircleHover = false;
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
    
    if(isPopupActive == false)
        if( modulesCenterCircleHover == false) 
        {
            var mod  = document.getElementById(modulesArray[i]);
            i = i+1; 
            changeModuleText(mod);
            if(i > modulesArray.length - 1) i=0;
        }
            
    
    // plusSlides(1);

    },ModuletimeDelay );

function changeModuleText(e)
{
    var id_name;
    id_name = e.id;

    prevActiveModuleId = currentActiveModuleId ;
    currentActiveModuleId = id_name;

    if(prevActiveModuleId != e.id)
        document.getElementById(prevActiveModuleId).className.baseVal = "modulesSvgCircleBack";

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

    
        currentActiveModuleId = e.id;
}




function modulesPopupClose(e)
{
    var className_1 = "modulesPopUp-container";
    document.getElementsByClassName(className_1)[0].style.visibility = "hidden";
}


function mainCircleMouseEnter(e)
{
    modulesCenterCircleHover = true;
}


function mainCircleMouseLeave(e)
{
    modulesCenterCircleHover = false;
}


function moduleCenterButton(e)
{
    isPopupActive = true;
    var id_name = currentActiveModuleId;
    // alert(currentActiveModuleId);

    if(id_name === "modules_Mainframe" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Mainframe Module";
        document.getElementById("modulesPopup-content").innerHTML = "The mainframe is a high performance and a high-speed computer system. It is used for large scale computing purposes that requires longevity and apex level of security. Mainframe testing is the validation and verification of software applications and services that are based on mainframe systems. The mainframe automation accelerator module has been contrived to make mainframe automation a reality and tremendously valuable investment to all organisations.";
    }


    if(id_name === "modules_Mobile" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Mobile & Tablets Module:";
        document.getElementById("modulesPopup-content").innerHTML = "Mobile application testing is a process by which an application software developed for handheld mobile devices and tablets are tested for its functionality, usability and consistency.";
    }


    if(id_name === "modules_Cloud" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Cloud Integration Adaptors";
        document.getElementById("modulesPopup-content").innerHTML = "All small to large organisations are currently using cloud providers and service such as AWS, Google and Azure, where its features accelerate software development. One of biggest challenge in the test automation space is that most opensource frameworks and licensed products are not cloud friendly. ";
    }


    if(id_name === "modules_API" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "API & Microservices Module";
        document.getElementById("modulesPopup-content").innerHTML = "API automation is the heart of modern testing and substantial for many product quality and CI/CD processes. API tests can cope with short release cycles and frequent changes. Therefore, the API module is pivotal in all framework development. The major insights of the API & Microservices automation accelerator module is that it boosts all types of APIs such as SOAP, REST, XML, JSON and response validations, including modern cloud microservices.";
    }


    if(id_name === "modules_WebUI" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "WEB UI Module";
        document.getElementById("modulesPopup-content").innerHTML = "As most organizations focus on the innovation of digital technology, whilst upgrading the scale of web development, web applications are commonly used in the digital sector. The Web UI automation accelerator module has been developed with a view to support all kinds of web applications across various web browsers, operating systems and cloud platforms."
    }


    if(id_name === "modules_Desktop" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Desktop Module";
        document.getElementById("modulesPopup-content").innerHTML = "The desktop automation accelerator module is designed to vivify desktop automation. Most legacy applications are desktop based and automation around this is a tiring task, with significant costs involved. The desktop automation accelerator module ruptures this myth and nurtures the development of desktop applications by supporting opensource frameworks such as Microsoft WinAppDriver , UI Automation, Sikuli ,AutoIT library, as well as licenced SmartBear TestLeft.";
    }


    if(id_name === "modules_Companion" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Companion WebUI App";
        document.getElementById("modulesPopup-content").innerHTML = "The Companion WebUI is an independent web UI platform that streamlines all actions required to maintain the end to end lifecycle of a test, whilst allowing for codeless automation. This compelling application captivates testers to create projects, script test cases without any background knowledge in coding and to capture & store XPaths, debug, execute tests and view test execution report summaries. In doing so, individuals can carry out all required actions to script, maintain and execute test cases from the simplicity of one centralised application. ";
    }


    if(id_name === "modules_Accessibility" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Accessibility Module";
        document.getElementById("modulesPopup-content").innerHTML = "The motive of web accessibility testing module is to allow universal access of the web, especially to those who have difficulty in understanding, navigating and interacting with the web due to disabilities. Such disabilities include auditory, cognitive, speech, neurological and physical. Consequently, it is important to test web applications for its accessibility, to ensure that any barriers are addressed and removed, so that we allow a seamless experience to all users, irrespective of their personal circumstances.Coming soon ";
    }


    if(id_name === "modules_Security" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Security Testing Module";
        document.getElementById("modulesPopup-content").innerHTML = "The objective of security testing is to identify and measure potential threats in the system to ensure it is not compromised. Security testing assists the detection of security risks in the system which allows developers to address these issues through code.Coming Soon";
    }

    if(id_name === "modules_Batch" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "BATCH/SSH Module";
        document.getElementById("modulesPopup-content").innerHTML = "The batch & SSH automation accelerator module focuses on the automation of multi-machines and cross-platform batch processes in distributed networks. The module enables sophisticated automation development, without the need for writing and managing code. This substantially reduces development costs and timelines thus ensuring easy maintenance and management of automated tasks. The batch & SSH automation accelerator module is highly efficient simple and inordinately rely upon shell commands. A set of shell commands are executed as shell scripts to run batch automation process and thus results in saving a lot of time.";
    }
    

    if(id_name === "modules_integration" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Integration Adaptors";
        document.getElementById("modulesPopup-content").innerHTML = "In the modern software development industry, all application to application and product to product communication happens over rest APIs. When a project starts, the automation journey requires time upfront to develop integration adaptors between other software development and management tools. With the CodelessAuto accelerator this upfront development time can be saved, as integration adaptors already built (via APIs) and available for common tools and products like Jira, Confluence, ALM, QTest, GIT service providers and e-mailer services.";
    }

    if(id_name === "modules_elastic" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "The Elastic Stack (ELK) Analytics Module";
        document.getElementById("modulesPopup-content").innerHTML = "In today's competitive world, Quality engineers, DevOps engineers and other project members invest more time in analysing automated test failures and building the reports and metrics manually. The Elastic Stack (ELK) analytics accelerator module helps to reduce the time invested in building and generating real-time reports and dashboards.";
    }


    if(id_name === "modules_AI" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Artificial Intelligence Module";
        document.getElementById("modulesPopup-content").innerHTML = "AI and ML are currently two of the most overloaded terms in the modern software industry. It is fundamentally used to describe a broad range of algorithms and methods for data driven prediction, decision making, and modelling. It is therefore important to cut through the noise and describe specifically what we are doing.";
    }

    if(id_name === "modules_Performance" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Performance Test Module:";
        document.getElementById("modulesPopup-content").innerHTML = "The performance test accelerator module supports performance testing by enabling testers to calculate the performance time of test cases using CodelessAuto accelerator’s core features. It is implemented to test the Rest API Performance test and Web Application load via integration with Jmeter library. Another advantage of this module is its ability to reuse/run already created Jmeter tests via the CodelessAuto accelerator enabling access to all cloud infrastructure provisioning and autoscaling.";
    }

    if(id_name === "modules_Database" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Database Module";
        document.getElementById("modulesPopup-content").innerHTML = "The database automation accelerator module revolves and focuses on the integration around almost all database servers. This module supports Java JDBC, SQL server, Oracle database, MariaDB and My SQL. It additionally supports AWS databases such as AWS Aurora DB and RDS. The focus point of this module is the comparison of large set of data to provide result within the fraction of a second.";
    }

    if(id_name === "modules_Infrastructure" )
    {
        document.getElementById("modulesPopUp-heading").innerHTML = "Infrastructure";
        document.getElementById("modulesPopup-content").innerHTML = "The database automation accelerator module revolves and focuses on the integration around almost all database servers. This module supports Java JDBC, SQL server, Oracle database, MariaDB and My SQL. It additionally supports AWS databases such as AWS Aurora DB and RDS. The focus point of this module is the comparison of large set of data to provide result within the fraction of a second. ";
    }

    
    var className_1 = "modulesPopUp-container";
    document.getElementsByClassName(className_1)[0].style.visibility = "visible";

}
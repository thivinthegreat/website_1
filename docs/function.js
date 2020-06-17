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

    }, 5000);

    function changeModuleText(e)
{
    var id_name;
    id_name = e.id;

    // alert(id_name);
    if (id_name === "modules_Mainframe")
   {
        document.getElementById("tspan_head1").textContent = "MainFrame";
        document.getElementById("tspan_head2").textContent = "";
        document.getElementById("tspan1").textContent = "\xa0 Used for larger scale";
        document.getElementById("tspan2").textContent = "\xa0 computing purposes that ";
        document.getElementById("tspan3").textContent = "\xa0 requires great availability  ";
        document.getElementById("tspan4").textContent = "\xa0 and security. This make   ";
        document.getElementById("tspan5").textContent = "\xa0 mainframe automation  ";
        document.getElementById("tspan6").textContent = "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0      a reality ";
        document.getElementById("tspan7").textContent = " ";

    } 

    if (id_name === "modules_Infrastructure")
    {
         document.getElementById("tspan_head1").textContent = "";
         document.getElementById("tspan_head2").textContent = "Infrastructure ";
         document.getElementById("tspan1").textContent = " ";
         document.getElementById("tspan2").textContent = " ";
         document.getElementById("tspan3").textContent = " ";
         document.getElementById("tspan4").textContent = " ";
         document.getElementById("tspan5").textContent = " ";
         document.getElementById("tspan6").textContent = " ";
         document.getElementById("tspan7").textContent = " ";
     } 

    if (id_name === "modules_Mobile")
    {
        document.getElementById("tspan_head1").textContent = "  Mobile";
        document.getElementById("tspan_head2").textContent = "";
        document.getElementById("tspan1").textContent = "Android, IOS and Windows  ";
        document.getElementById("tspan2").textContent = "APP automation and WEB ";
        document.getElementById("tspan3").textContent = "browser automation testing  ";
        document.getElementById("tspan4").textContent = "across all mobile devices and  ";
        document.getElementById("tspan5").textContent = "tablets available in the market ";
        document.getElementById("tspan6").textContent = " ";
        document.getElementById("tspan7").textContent = " ";
    }

    if (id_name === "modules_API")
    {
        document.getElementById("tspan_head1").textContent = "   \xa0 \xa0 API &";
        document.getElementById("tspan_head2").textContent = " Microservices  ";
        document.getElementById("tspan1").textContent = "This supports all types  ";
        document.getElementById("tspan2").textContent = "of APIs such as SOAP, REST,";
        document.getElementById("tspan3").textContent = "XML, JSON and Response ";
        document.getElementById("tspan4").textContent = "Validations including modern  ";
        document.getElementById("tspan5").textContent = "cloud microservices  ";
        document.getElementById("tspan6").textContent = " ";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_WebUI")
    {
        document.getElementById("tspan_head1").textContent = " \xa0\xa0 WebUI";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Developed with a view   ";
        document.getElementById("tspan2").textContent = "to support all kinds of web ";
        document.getElementById("tspan3").textContent = "applications across various ";
        document.getElementById("tspan4").textContent = "web browsers, operating  ";
        document.getElementById("tspan5").textContent = "systems and cloud platforms. ";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Desktop")
    {   
        document.getElementById("tspan_head1").textContent = " Desktop ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Nurtures the development ";
        document.getElementById("tspan2").textContent = "of desktop applications";
        document.getElementById("tspan3").textContent = "by supporting opensource  ";
        document.getElementById("tspan4").textContent = "Microsoft WinAppDriver &  ";
        document.getElementById("tspan5").textContent = "UI Automation , library Sikuli,   ";
        document.getElementById("tspan6").textContent = "AutoIT and licensed SmartBear  ";
        document.getElementById("tspan7").textContent = "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  TestLeft ";
    }
    
    if (id_name === "modules_Companion")
    {
        document.getElementById("tspan_head1").textContent = "Companion ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Individuals can carry out all";
        document.getElementById("tspan2").textContent = "required actions to script,";
        document.getElementById("tspan3").textContent = "maintain and execute test cases";
        document.getElementById("tspan4").textContent = "from the simplicity of one     ";
        document.getElementById("tspan5").textContent = "centralized application.";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Accessibility")
    {
        document.getElementById("tspan_head1").textContent = "Accessibility ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Allows universal access of the";
        document.getElementById("tspan2").textContent = "web, especially to those who";
        document.getElementById("tspan3").textContent = "have difficulty in understanding,";
        document.getElementById("tspan4").textContent = "navigating and interacting with";
        document.getElementById("tspan5").textContent = "the web due to disabilities.";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Security")
    {
        document.getElementById("tspan_head1").textContent = " Security ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0 Detection of security risks";
        document.getElementById("tspan2").textContent = "\xa0 in the system which allows";
        document.getElementById("tspan3").textContent = "\xa0 developers to address these";
        document.getElementById("tspan4").textContent = "\xa0 issues through code.";
        document.getElementById("tspan5").textContent = "";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Batch")
    {
        document.getElementById("tspan_head1").textContent = "  Batch/SSH ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "Focuses automation of";
        document.getElementById("tspan2").textContent = "multi-machines, cross-platform";
        document.getElementById("tspan3").textContent = "batch processes in distributed";
        document.getElementById("tspan4").textContent = "networks and the most efficient";
        document.getElementById("tspan5").textContent = "and simple module that heavily";
        document.getElementById("tspan6").textContent = " relies on shell commands.";
        document.getElementById("tspan7").textContent = "        ";
    }
    if (id_name === "modules_integration")
    {
        document.getElementById("tspan_head1").textContent = "Integration ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0 This adaptor already built";
        document.getElementById("tspan2").textContent = "\xa0 (via APIs) and available for";
        document.getElementById("tspan3").textContent = "\xa0 common tools and products";
        document.getElementById("tspan4").textContent = "\xa0 like Jira, Confluence, ALM,";
        document.getElementById("tspan5").textContent = "\xa0 QTest, GIT and e-mailer";
        document.getElementById("tspan6").textContent = "\xa0 services to save upfront time";
        document.getElementById("tspan7").textContent = "\xa0 on    automation.";
    }

    if (id_name === "modules_elastic")
    {
        document.getElementById("tspan_head1").textContent = "Elastic Stack";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0 Helps to reduce the time";
        document.getElementById("tspan2").textContent = "\xa0 in building/generating";
        document.getElementById("tspan3").textContent = "\xa0 the real-time reports and";
        document.getElementById("tspan4").textContent = "\xa0 dashboards in today's";
        document.getElementById("tspan5").textContent = "\xa0 competitive world.";
        document.getElementById("tspan6").textContent = "";
        document.getElementById("tspan7").textContent = "";
    }


    if (id_name === "modules_AI")
    {
        document.getElementById("tspan_head1").textContent = " \xa0 \xa0 \xa0     AI    ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "\xa0  Provides integration to AI ";
        document.getElementById("tspan2").textContent = "\xa0 and ML algorithms empowering ";
        document.getElementById("tspan3").textContent = "\xa0  users with  tools to get value";
        document.getElementById("tspan4").textContent = "\xa0   and insights from their ";
        document.getElementById("tspan5").textContent = " \xa0 Elasticsearch data and view  ";
        document.getElementById("tspan6").textContent = "\xa0  machine learning. ";
        document.getElementById("tspan7").textContent = "  ";
    }

    if (id_name === "modules_Performance")
    {
        document.getElementById("tspan_head1").textContent = "Performance ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = " Implemented to test Rest";
        document.getElementById("tspan2").textContent = " API Performance and Web";
        document.getElementById("tspan3").textContent = " Application load test by";
        document.getElementById("tspan4").textContent = " enabling testers to calculate";
        document.getElementById("tspan5").textContent = " the performance time of test";
        document.getElementById("tspan6").textContent = " cases using this module.";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Database")
    {
        document.getElementById("tspan_head1").textContent = "Database ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = " This supports Java JDBC, ";
        document.getElementById("tspan2").textContent = "SQL server, Oracle database,";
        document.getElementById("tspan3").textContent = " MariaDB, My SQL. It additionally";
        document.getElementById("tspan4").textContent = " supports AWS database such  ";
        document.getElementById("tspan5").textContent = " as AWS Aurora DB and RDS. ";
        document.getElementById("tspan6").textContent = " ";
        document.getElementById("tspan7").textContent = "";
    }

    if (id_name === "modules_Cloud")
    {
        document.getElementById("tspan_head1").textContent = " \xa0 Cloud ";
        document.getElementById("tspan_head2").textContent = "   ";
        document.getElementById("tspan1").textContent = "A breeze via native support  ";
        document.getElementById("tspan2").textContent = "to integrate with cloud providers";
        document.getElementById("tspan3").textContent = "its advanced features like";
        document.getElementById("tspan4").textContent = "autoscaling, containerization , ";
        document.getElementById("tspan5").textContent = "orchestration infrastructure   ";
        document.getElementById("tspan6").textContent = "provisioning and so on ";
        document.getElementById("tspan7").textContent = "";
    }

    window.setTimeout( function() { e.className.baseVal = "modulesSvgCircleBack_Active" } , 100 );

    if(currentActiveModuleId != e.id)
        document.getElementById(currentActiveModuleId).className.baseVal = "modulesSvgCircleBack";
    
        currentActiveModuleId = e.id;
}

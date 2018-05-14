
var name = "Priya Choudhary"
var formattedName  = HTMLheaderName.replace("%data%",name);
$("#header").append(formattedName);

var work = {
	jobs: [
	{
		"employer":"Software Developer",
		"title":"Software Developer",
		"location":"bangalore",
		"dates":"October,2017-Current",
		"description":"Working mainly on UI/UX"
	}
	],
	projects:[
	{
		"title":"Express Checkout",
		"dates":"Oct,2017-Current",
		"description":"Juspay's Product. Worked on Express Checkout Frontend",
		"images":["images/project.png"]
	}
	],
	bio:{
	"name":"priya",
    "role":"Web Developer",
    "contacts":{
    	"mobile":"8427390960",
    	"email":"priyac1411@gmail.com",
    	"github":"",
    	"twitter":"",
    	"location":"bangalore"
    },
    "skills":["Js","React","Html","Css"],
    "biopic":"images/image.png",
    "welcomeMessage":"Hello Evwryone"
	},
	education:{
		"schools":[
		   {
		 	"name":"Chitkara University",
		 	"location":"Chandigarh",
		 	"degree":"Btech",
		 	"dates":"",
		 	"url":"",
		 	"majors":[]
		 },
		      {
		 	"name":"St. Francis School",
		 	"location":"Shamli,UP",
		 	"degree":"",
		 	"dates":"",
		 	"url":"",
		 	"majors":[]

		 }
		],
		"onlineCourses":[
			{  	"title":"",
				"school":"",
				"dates":"",
				"url":""}
		]
}
}

var role = HTMLheaderRole.replace("%data%",work.bio.role);
var pic = HTMLbioPic.replace("%data%",work.bio.biopic);
$("#header").append(role);
$("#header").append(pic);
$("#header").append(HTMLskillsStart);
for( i in work.bio.skills)
{var skills = HTMLskills.replace("%data%",work.bio.skills[i]);
$("#skills").append(skills)}

// $("#header").append(HTMLcontactGeneric);

var mobile= HTMLmobile.replace("%data%",work.bio.contacts.mobile);
var email =HTMLemail.replace("%data%",work.bio.contacts.email);
var loc = HTMLlocation.replace("%data%",work.jobs[0].location);
// $("#topContacts").append(mobile,email,loc);

function displayWork()
{
for(i in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var emp = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var title = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	$(".work-entry:last").append(emp);
	var dates =HTMLworkDates.replace("%data%",work.jobs[i].dates);
	$(".work-entry:last").append(dates);
    var desc =HTMLworkDates.replace("%data%",work.jobs[i].description);
  	$(".work-entry:last").append(desc);  
}
}
displayWork();

function displayProjects(){
	for(i in work.projects){
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%",work.projects[i].title);
		$(".project-entry:last").append(title);
        var dates =HTMLworkDates.replace("%data%",work.projects[i].dates);
        $(".project-entry:last").append(dates);
		var des = HTMLprojectDescription.replace("%data%",work.projects[i].description);
		$(".project-entry:last").append(des);
		var image = HTMLprojectImage.replace("%data%",work.projects[i].images[0]);
		console.log("######",work.projects[i].images[0])
		$(".project-entry:last").append(image);

	}
}
displayProjects();


// $("#education").append(HTMLschoolStart);
// var name = HTMLschoolName.replace("%data%".work.education.schools[0].name);
// $(".education-entry:last").append(name);

$("#mapDiv").append(googleMap);


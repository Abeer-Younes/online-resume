
///////////// Personal Information ///////////////////////////
    var P_Information = {
        "name": "abeer abdelhamed",
        "role": "Graphic Designer",

        "contacts": {
            "mobile": "01129457361",
            "email": "abeer.abdelhamed@yahoo.com",
            "github": "@abeer_younes",
            "location" : "Egypt"   
        },

        "welcomeMessage": "I'm abeer abdelhamed, I lives in Egypt, work as graphic design and web development, My favourite hobbits is play sports, photography and drawing",
        "skills": ["HTML5", "CSS3","JQuery", "Bootstrap", "Maya","photoshop","aftereffect","Premiere"],
        "biopic": "images/abeer.jpg",
        
    ////////// appear information in html classes /////////////////////
        'display' : function () {
            var Name_Formate = HTMLheaderName.replace("%data%", P_Information.name);
            var Role_Formate = HTMLheaderRole.replace("%data%", P_Information.role);
            var Image_Formate = HTMLbioPic.replace("%data%", P_Information.biopic);
            var Message_Formate = HTMLwelcomeMsg.replace("%data%", P_Information.welcomeMessage);
            $("#header").prepend(Image_Formate);
            $("#header").prepend(Message_Formate);
            $("#header").prepend(Role_Formate);
            $("#header").prepend(Name_Formate);

            if(P_Information.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (var skill in P_Information.skills) {
                var Skills_Formate = HTMLskills.replace("%data%", P_Information.skills[skill]);
                $("#header").append(Skills_Formate);
            }
        }
            var Mobile_Formate = HTMLmobile.replace("%data%", P_Information.contacts.mobile);
            var Email_Formate  = HTMLemail.replace("%data%", P_Information.contacts.email);
            var Github_Formate  = HTMLgithub.replace("%data%", P_Information.contacts.github);
            var Location_Formate  = HTMLlocation.replace("%data%", P_Information.contacts.location);
            $("#top_contacts").append(Mobile_Formate,Email_Formate, Github_Formate , Location_Formate);
        }
    };

///////// Education I learn on it or online course ////////////////////
    var My_education = {
        "schools": [{
            "name": "Fresh Graduated",
            "location": "Benha University , Egypt",
            "degree": "Good",
            "majors": ["Software engineering"],
            "dates": "2012-2016",
            "url": "http://www.fci.bu.edu.eg/fci/en/"
        }],

        "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2/2017-8/2017",
            "url": "https://www.udacity.com/nanodegree"
        }],
        
     //////// appear information //////////////
        'display': function() {
            for (var school=0; school< My_education.schools.length ; school++) {
                $("#education").append(HTMLschoolStart);
                var formattedName = HTMLschoolName.replace("%data%", My_education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%",                                                     My_education.schools[school].degree);
                var formattedDates = HTMLschoolDates.replace("%data%", My_education.schools[school].dates);
                var formattedLocation = HTMLschoolLocation.replace("%data%",                                                    My_education.schools[school].location);
                
                ////////// append information in education-entry ///////////////////
                
                var formattedMajor = HTMLschoolMajor.replace("%data%", My_education.schools[school].majors);
                $(".education-entry:last").append(formattedName + formattedDegree, formattedDates,                              formattedLocation, formattedMajor);
            }

            if (My_education.onlineCourses.length !== 0) {
                $("#education").append();
            }
            for (var course =0; course< My_education.onlineCourses.length ; course++) {
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%",                                                       My_education.onlineCourses[course].title);
                var formattedSchool = HTMLonlineSchool.replace("%data%",                                                     My_education.onlineCourses[course].school);
                var formattedDate = HTMLonlineDates.replace("%data%",                                                       My_education.onlineCourses[course].dates);
                var formattedURL = HTMLonlineURL.replace("%data%", My_education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDate,                              formattedURL);
            }
        }
        
    };

/////// Projects I work about it on coledge or online ///////////////
    var My_projects = {
        "projects": [{
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "it is my protfolio page",
            "images": ["images/protfolio.PNG"]
        }, 
        {
            "title": "online_library",
            "dates": "2016",
            "description": "to buy books online",
            "images": ["images/library.PNG"]
        }] ,
        ///////////////// appear information //////////////////////
        'display':function() {
            
            for (var item=0; item< My_projects.projects.length; item++) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", My_projects.projects[item].title);
                var formattedDates = HTMLprojectDates.replace("%data%", My_projects.projects[item].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%",                                         My_projects.projects[item].description);
                $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
                for (var image =0; image < My_projects.projects[item].images.length ; image++) {
                    
                    ////////// append images in project-entry ///////////////////
                    var formattedImage = HTMLprojectImage.replace("%data%",                                                     My_projects.projects[item].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    };

//// work I made it and love work about it /////////////////
   var My_work = {
    "jobs": [{
        "employer": "Graphic Designer",
        "title": " Graphic Designer ",
        "dates": "2017",
        "location": "Egypt",
        "description": "Creative design to explain an idea"
    }],
       ///////////////////// appear information ////////////////
        'display' : function() {
            for (var job in  My_work.jobs) {
                $("#work_experience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", My_work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", My_work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace("%data%", My_work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%", My_work.jobs[job].location);
                $(".work-entry:last").append(formattedLocation);
                var formattedDescription = HTMLworkDescription.replace("%data%",                                             My_work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);
            }
        }
   };

/////// hobbits I really love make it  ///////////////
    var My_hobbits = {
        "hobbits": [{
            "title": "photography",
            "dates": "2016",
            "description": "I really love take a photo to any thing "
        }, 
        {
            "title": "play tennis",
            "dates": "2016",
            "description": "to keep my body healthy"
        }],
        ///////////////// appear information //////////////////////
        'display' : function() {
            for (var item=0; item< My_projects.projects.length; item++) {
                $("#hobbits").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", My_hobbits.hobbits[item].title);
                var formattedDates = HTMLprojectDates.replace("%data%", My_hobbits.hobbits[item].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%",                                         My_hobbits.hobbits[item].description);
                $(".hobbit-entry:last").append(formattedTitle, formattedDates, formattedDescription);
                for (var image; image < My_projects.projects[item].images.length ; image++) {
                    var Image_Formate_pro = HTMLprojectImage.replace("%data%",                                                   My_hobbits.hobbits[item].images[image]);
                    $(".hobbit-entry:last").append(Image_Formate_pro);
                }
            }
        }
    };

////////  Display function to run in page ///////////////////
P_Information.display();
My_work.display();
My_projects.display();
My_education.display();
My_hobbits.display();



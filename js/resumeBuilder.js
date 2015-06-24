//*****************************************************************
// Bio - JSON object
//*****************************************************************
var bio = {
  "name" : "Gene Steiker",
	"role" : "Android Programmer",
	"contactInfo" : {
    "email" : "gene.steiker@gmail.com",
    "phone" : "973 876-2345",
    "location" : "Caldwell, NJ",
    "github": "steikerg"
    },
  "picture" : "./images/me25.jpg",
  "welcome-message" : "Nice to see you.",
  "skills" : [ "Javascript",
                "SQL",
                "SqlServer",
                "Unix Korn Shell",
                "MS Access" ],
  "displayName": function() {
        var formattedName =HTMLheaderName.replace("%data%",bio.name);
        var formattedRole =HTMLheaderRole.replace("%data%",bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
  },
  "displayContactInfo": function() {
        var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
        $("#topContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);
        $("#topContacts").append(formattedGithub);

        var formattedLoc = HTMLlocation.replace("%data%",bio.contactInfo.location);
        $("#topContacts").append(formattedLoc);

        HTMLcontactPhone = HTMLcontactGeneric.replace("%contact%","Phone")
        var formattedPhone = HTMLcontactPhone.replace("%data%",bio.contactInfo.phone)
        $("#topContacts").append(formattedPhone);
    },
    "displaySkills": function() {
        if ( bio.skills.length > 0 ) {
          $("#header").append(HTMLskillsStart);

          var i = 0;
          for ( i; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
                $("#skills").append(formattedSkill);
              }
        }
    },
    "displayPicture": function() {
      var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
      $("#header").append(formattedPicture);
    }

  }

//*****************************************************************
// Work - JSON object
//*****************************************************************
    var work = {
      "jobs": [
        {
          "title":  "Principal",
          "employer": "GDS Associates, Inc.",
          "location": "Caldwell, NJ",
          "dates": "May 2010 - Present",
          "description": "<p>&nbsp;&nbsp;· Designed and implemented database application for Aperio Diligence Group’s newsletter for mutual fund managers. <p>&nbsp;&nbsp;· Developed web site for Aperio Diligence Group. <p>&nbsp;&nbsp;· Developed web site for marketing colorant products with focus on search engine optimization.  See www.RoyceColors.com."
        },
        {
          "title":  "Consultant",
          "employer": "Merck/Schering Plough",
          "location": "Springfield, NJ",
          "dates": "March 2005 - April 2010",
          "description": "Project Manager for drug safety reporting.<p>&nbsp;&nbsp;· Managed offshore developers generating aggregate drug safety reports from Oracle AERS database.<p>&nbsp;&nbsp;· Developed MS Access databases to track ad hoc reports, partner cases and contracts."
        },
        {
          "title":  "Consultant",
          "employer": "Lehman Brothers",
          "location": "Jersey City, NJ",
          "dates": "January 2009 - November 2009",
          "description": "Developed enhancements to RISC/Exchange Reconciliation System."
        },
        {
          "title":  "Consultant",
          "employer": "Citigroup",
          "location": "New York, NY",
          "dates": "July 2003 - September 2004",
          "description": "Senior P/A maintaining Citigroup human resources applications. <p>&nbsp;&nbsp;· Developed Employee Referral and Internal Job Posting intranet web applications. <p>&nbsp;&nbsp;· Authored Unix Korn Shell scripts for download of mainframe data to Sybase database."
        },
        {
          "title":  "Consultant",
          "employer": "A&P",
          "location": "Montvale, NJ",
          "dates": "July 1999 - July 2003",
          "description": "Senior P/A responible for maintaining legacy applications. <p>&nbsp;&nbsp;· Developed web applications for store poll scheduling and job application tracking. <p>&nbsp;&nbsp;· Managed data transfers between mainframe and client/server systems."
        }
      ],
      "display": function() {
          if ( work.jobs.length > 0 ) {
            $("#workExperience").append(HTMLworkStart);
            for (job in work.jobs) {
              formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer
                  + ", " + work.jobs[job].location);
              formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
              // formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
              formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
              formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
              formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedDescription
              $(".work-entry:last").append( formattedJob );
            }
          }

      }

    }

//*****************************************************************
// Projects - JSON object
//*****************************************************************
  var projects = {
    "project": [
      {
        "title": "Aperio Diligence Group application.",
        "dates": "2012",
        "description": "Reporting application for due diligence events relevant to mutual fund managers.",
        "images": []
      },
      {
        "title": "Royce Colors website.",
        "dates": "2011",
        "description": "Web site for marketing colorant products.",
        "images": []
      }
    ],
    "display": function() {
        if ( projects.project.length > 0 ) {
          for (project in projects.project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
            $(".project-entry:last").append( formattedTitle );

            var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
            $(".project-entry:last").append( formattedDates );

            var formattedDesc = HTMLprojectDescription.replace("%data%",projects.project[project].description);
            $(".project-entry:last").append( formattedDesc );

            if( projects.project[project].images.length > 0 ) {
              for ( image in projects.project[project],image)
              var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].image[image]);
              $(".project-entry:last").append( formattedImage );
            }
          }
        }

    }
  }

//*****************************************************************
// Education - JSON object
//*****************************************************************
  var education = {
    "schools":  [
      {
        "name": "Rutgers University",
        "location": "New Brunswick, NJ",
        "major": "Economics",
        "degree": "BA",
        "year": 1968,
        "url": "http://www.rutgers.edu/"
      },
      {
        "name": "University of Pennsylvania",
        "location": "Philadelphia, PA",
        "major": "Regional Science",
        "degree": "MA",
        "year": 1971,
        "url":"http://www.upenn.edu/"
      }
    ],
    "onlineCourses": [
      {
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
      },
      {
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
      },
      {
        "title": "Android Development for Beginners",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
      }
    ],
    "display": function() {
      if ( education.schools.length > 0 ) {
        $("#education").append( HTMLschoolStart );

        for (school in education.schools) {
          var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name + ", " + education.schools[school].location);
          $(".education-entry:last").append( formattedSchoolName );

          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
          $(".education-entry:last").append( formattedSchoolDegree );

          // Omit dates
          //var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].year);
          //$(".education-entry:last").append( formattedHTMLschoolDates );

          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
          $(".education-entry:last").append( formattedSchoolMajor );
        }
      }

      if ( education.onlineCourses.length > 0 ) {
        $(".education-entry:last").append( HTMLonlineClasses );

        for ( course in education.onlineCourses) {

          var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
          $(".education-entry:last").append( formattedOnlineTitle );

          var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
          $(".education-entry:last").append( formattedOnlineSchool );

          var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
          $(".education-entry:last").append( formattedOnlineDates );

          var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
          $(".education-entry:last").append( formattedOnlineUrl );
        }
      }
    }

  }

//*****************************************************************
// Put Name and Role in header
//*****************************************************************
  bio.displayName();

//*****************************************************************
// Add Picture
//*****************************************************************
  bio.displayPicture();

//*****************************************************************
// Display Contact Information
//*****************************************************************
  bio.displayContactInfo();

//*****************************************************************
// Show Skills
//*****************************************************************
  bio.displaySkills();

//*****************************************************************
// Show Jobs
//*****************************************************************
  work.display();

//*****************************************************************
// Show Projects
//*****************************************************************
  projects.display();

//*****************************************************************
// Show Education
//*****************************************************************
  education.display();

//*****************************************************************
// Add Map
//*****************************************************************
$("#mapDiv").append( googleMap );


//*****************************************************************
// log clicks
//*****************************************************************
//    $(document).click(function(loc) {
//      var x = loc.pageX;
//      var y = loc.pageY;
//
//      logClicks(x,y);
//      }
//    );

//*****************************************************************
// Internationalize name
//*****************************************************************
    //$("#main").append(internationalizeButton);
//    function inName(name){
//      //name = bio.name;
//      console.log(name);
//      name = name.trim()
//      var nameSplit = name.split(" ");
//      nameSplit[0].toLowerCase();
//      nameSplit[0] = nameSplit[0][0].toUpperCase() + nameSplit[0].substr(1);
//      nameSplit[1] = nameSplit[1].toUpperCase();
//      return nameSplit[0] + " " + nameSplit[1];
//    }

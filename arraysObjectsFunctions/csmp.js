// 20201116085805
// http://127.0.0.1:5000/api/v1/courses/?semester=fall&year=2021&department=CSMP

const courses = [
    {
      "course": "ACT102",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "18"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10251",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Noynaert, J",
      "room": [
        "Online Course"
      ],
      "sec": "40",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Intro to Web Page Development",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "ACT102",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "20"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10253",
      "days": [
        "W"
      ],
      "hours": "3",
      "instructor": "Noynaert, J",
      "room": [
        "Online Course"
      ],
      "sec": "41",
      "times": [
        "6:30PM-9:10PM"
      ],
      "title": "Intro to Web Page Development",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "ACT211",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "10"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15452",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Noynaert, J",
      "room": [
        "Agenstein Hall 124"
      ],
      "sec": "01",
      "times": [
        "11:00AM-12:20PM"
      ],
      "title": "Internet Scripting",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "ACT405",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "14"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11961",
      "days": [
        "R"
      ],
      "hours": "3",
      "instructor": "Hecker, C",
      "room": [
        "Agenstein Hall 127"
      ],
      "sec": "01",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Business Intelligence",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "ACT490",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "13",
        "Maximum Enrollment": "25",
        "Section Seats Available": "23"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "CSC490 40"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "15357",
      "days": [
        "W"
      ],
      "hours": "1",
      "instructor": "Pickett, H",
      "room": [
        "Online Course"
      ],
      "sec": "40",
      "times": [
        "11:00AM-11:55AM"
      ],
      "title": "IT Career Preparation",
      "type": "100% Online"
    },
    {
      "course": "CSC184",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10257",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Kendall-Morwick, J",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "01",
      "times": [
        "11:00AM-12:20PM"
      ],
      "title": "Intro to Computer Programming",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "CSC184",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "8"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15195",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Kendall-Morwick, J",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "02",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "Intro to Computer Programming",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "CSC201",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "35",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   123.29 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "13234",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Yan, B",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Microcomputer Applications",
      "type": "100% Online"
    },
    {
      "course": "CSC254",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "1"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10267",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Kendall-Morwick, J",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "01",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Object Oriented Programming",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "CSC264",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "15202",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Yan, B",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Comp Architect & Assembly Lang",
      "type": "100% Online"
    },
    {
      "course": "CSC274",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "35",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15200",
      "days": [
        "TR"
      ],
      "hours": "2",
      "instructor": "Noynaert, J",
      "room": [
        "Online Course"
      ],
      "sec": "40",
      "times": [
        "2:00PM-2:55PM"
      ],
      "title": "Introduction to Unix/Linux",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "CSC285",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "15"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "15502",
      "days": [
        "R"
      ],
      "hours": "3",
      "instructor": "Pickett, H",
      "room": [
        "Online Course"
      ],
      "sec": "40",
      "times": [
        "2:00PM-4:40PM"
      ],
      "title": "Data Structures",
      "type": "100% Online"
    },
    {
      "course": "CSC289",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "10"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15503",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Yan, B",
      "room": [
        "Agenstein Hall 119"
      ],
      "sec": "01",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Computational Methods for CS",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "CSC328",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "20",
        "Section Seats Available": "13"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "11962",
      "days": [
        "R"
      ],
      "hours": "3",
      "instructor": "Pickett, H",
      "room": [
        "Online Course"
      ],
      "sec": "40",
      "times": [
        "6:30PM-9:10PM"
      ],
      "title": "Computer Graphics",
      "type": "100% Online"
    },
    {
      "course": "CSC400",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "14"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10271",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Hecker, C",
      "room": [
        "Agenstein Hall 119"
      ],
      "sec": "01",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "Systems Analysis and Design",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "CSC410",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "12329",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Kwok, Y",
      "room": [
        "Agenstein Hall 126"
      ],
      "sec": "01",
      "times": [
        "2:00PM-3:20PM"
      ],
      "title": "Network Security Technologies",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "CSC445",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "16",
        "Section Seats Available": "11"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "15600",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Yan, B",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Mobile Device App Development",
      "type": "100% Online"
    },
    {
      "course": "CSC490",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "13",
        "Maximum Enrollment": "25",
        "Section Seats Available": "15"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "ACT490 40"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "15203",
      "days": [
        "W"
      ],
      "hours": "1",
      "instructor": "Pickett, H",
      "room": [
        "Online Course"
      ],
      "sec": "40",
      "times": [
        "11:00AM-11:55AM"
      ],
      "title": "CS Career Preparation",
      "type": "100% Online"
    },
    {
      "course": "CSC520",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "15"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14900",
      "days": [
        "M"
      ],
      "hours": "3",
      "instructor": "Kwok, Y",
      "room": [
        "Agenstein Hall 127"
      ],
      "sec": "01",
      "times": [
        "6:30PM-9:10PM"
      ],
      "title": "Adv Networking/Network Admin",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "CSC550",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "12"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "13633",
      "days": [
        "T"
      ],
      "hours": "3",
      "instructor": "Yan, B",
      "room": [
        "Agenstein Hall 127"
      ],
      "sec": "01",
      "times": [
        "6:30PM-9:10PM"
      ],
      "title": "Applied Cryptography",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "CSC570",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "10"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "14293",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Yan, B",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Ethical Hacking",
      "type": "100% Online"
    },
    {
      "course": "CSC590",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15002",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Kendall-Morwick, J",
      "room": [
        "Agenstein Hall 127"
      ],
      "sec": "01",
      "times": [
        "5:00PM-6:20PM"
      ],
      "title": "IT Project Management",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "CSC625",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "14"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14294",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Kwok, Y",
      "room": [
        "Agenstein Hall 127"
      ],
      "sec": "01",
      "times": [
        "5:00PM-6:20PM"
      ],
      "title": "Network Info Systems Security",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10631",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "McWilliams, D",
      "room": [
        "Wilson Hall 206"
      ],
      "sec": "01",
      "times": [
        "8:00AM-9:20AM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10632",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Anderson, K",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "02",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10633",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "McWilliams, D",
      "room": [
        "Wilson Hall 206"
      ],
      "sec": "03",
      "times": [
        "11:00AM-12:20PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "8"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14808",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Anderson, K",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "04",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14810",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "McWilliams, D",
      "room": [
        "Agenstein Hall 328"
      ],
      "sec": "06",
      "times": [
        "2:00PM-3:20PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "16"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14770",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Gallagher, S",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "08",
      "times": [
        "3:30PM-4:50PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "18"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14771",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Gallagher, S",
      "room": [
        "Remington Hall 108"
      ],
      "sec": "09",
      "times": [
        "5:00PM-6:20PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14773",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "McWilliams, D",
      "room": [
        "Spratt Hall 203"
      ],
      "sec": "12",
      "times": [
        "11:00AM-12:20PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14285",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "McWilliams, D",
      "room": [
        "Wilson Hall 206"
      ],
      "sec": "13",
      "times": [
        "2:00PM-3:20PM"
      ],
      "title": "Foundations for Univ Math",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "28",
        "Section Seats Available": "11"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14809",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Foundations for Univ Math",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14281",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "Foundations for Univ Math",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT083",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "10"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "Developmental Course Fee   100.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15025",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Gallagher, S",
      "room": [
        "Online Course "
      ],
      "sec": "43",
      "times": [
        "-"
      ],
      "title": "Foundations for Univ Math",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "7",
        "Maximum Enrollment": "25",
        "Section Seats Available": "21"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 01"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10282",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 330"
      ],
      "sec": "01",
      "times": [
        "8:00AM-9:20AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "6",
        "Maximum Enrollment": "25",
        "Section Seats Available": "24"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 02"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10283",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 324"
      ],
      "sec": "02",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "4",
        "Maximum Enrollment": "25",
        "Section Seats Available": "23"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 05"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14958",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Bucher, M",
      "room": [
        "Murphy Hall 201"
      ],
      "sec": "05",
      "times": [
        "2:00PM-3:20PM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "2",
        "Maximum Enrollment": "25",
        "Section Seats Available": "23"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 06"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "13617",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 124"
      ],
      "sec": "06",
      "times": [
        "8:00AM-9:20AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "19"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 07"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14776",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Halstead, A",
      "room": [
        "Spratt Hall 203"
      ],
      "sec": "07",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "3",
        "Maximum Enrollment": "25",
        "Section Seats Available": "22"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 40"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14962",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "5",
        "Maximum Enrollment": "25",
        "Section Seats Available": "24"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 43"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10284",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "5",
        "Maximum Enrollment": "25",
        "Section Seats Available": "22"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110E 42"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "13614",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "42",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "7",
        "Maximum Enrollment": "25",
        "Section Seats Available": "11"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 01"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14347",
      "days": [
        "MW"
      ],
      "hours": "4",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 330"
      ],
      "sec": "01",
      "times": [
        "8:00AM-9:20AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "6",
        "Maximum Enrollment": "25",
        "Section Seats Available": "7"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 02"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14348",
      "days": [
        "MW"
      ],
      "hours": "4",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 324"
      ],
      "sec": "02",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "4",
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 05"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14775",
      "days": [
        "MW"
      ],
      "hours": "4",
      "instructor": "Bucher, M",
      "room": [
        "Murphy Hall 201"
      ],
      "sec": "05",
      "times": [
        "2:00PM-3:20PM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "2",
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 06"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14352",
      "days": [
        "TR"
      ],
      "hours": "4",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 124"
      ],
      "sec": "06",
      "times": [
        "8:00AM-9:20AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "1"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 07"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14777",
      "days": [
        "TR"
      ],
      "hours": "4",
      "instructor": "Halstead, A",
      "room": [
        "Spratt Hall 203"
      ],
      "sec": "07",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "7"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "14354",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "08",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14355",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "09",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14356",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "10",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14357",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "11",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14358",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "12",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14779",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "13",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "7"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14368",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "14",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "3",
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 40"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14963",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "14964",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "Lab"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "5",
        "Maximum Enrollment": "25",
        "Section Seats Available": "8"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 42"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14350",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "42",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT110E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "5",
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT110 41"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14349",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "43",
      "times": [
        "-"
      ],
      "title": "Contemporary Problem Solving",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "-2",
        "Maximum Enrollment": "25",
        "Section Seats Available": "16"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 03"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14790",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Anderson, K",
      "room": [
        "Remington Hall 105"
      ],
      "sec": "03",
      "times": [
        "11:00AM-12:20PM"
      ],
      "title": "Introductory Statistics",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "3",
        "Maximum Enrollment": "25",
        "Section Seats Available": "13"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 07"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15429",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Anderson, K",
      "room": [
        "Remington Hall 105"
      ],
      "sec": "07",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "Introductory Statistics",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "1"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14792",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "0:00AM-0:01AM"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "21"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 41"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14788",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Boring, M",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "-1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "15"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 42"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14789",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Boring, M",
      "room": [
        "Online Course "
      ],
      "sec": "42",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "17"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 43"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14791",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "43",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "18"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 44"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15220",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "44",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "5",
        "Maximum Enrollment": "25",
        "Section Seats Available": "20"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 45"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15428",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "45",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "4",
        "Maximum Enrollment": "25",
        "Section Seats Available": "17"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111E 46"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15499",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "46",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "-2",
        "Maximum Enrollment": "25",
        "Section Seats Available": "7"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 03"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14795",
      "days": [
        "TR"
      ],
      "hours": "4",
      "instructor": "Anderson, K",
      "room": [
        "Remington Hall 105"
      ],
      "sec": "03",
      "times": [
        "11:00AM-12:20PM"
      ],
      "title": "Introductory Statistics",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "3",
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 07"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14799",
      "days": [
        "TR"
      ],
      "hours": "4",
      "instructor": "Anderson, K",
      "room": [
        "Remington Hall 105"
      ],
      "sec": "07",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "Introductory Statistics",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15243",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "09",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "Lab"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15430",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "10",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "Lab"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15431",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "11",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "Lab"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15433",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "12",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "Lab"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15432",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "13",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "Lab"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15501",
      "days": [
        ""
      ],
      "hours": "0",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "14",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "Lab"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 41"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14793",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Boring, M",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "-1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 42"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14794",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Boring, M",
      "room": [
        "Online Course "
      ],
      "sec": "42",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 43"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14796",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "43",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "1",
        "Maximum Enrollment": "25",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 44"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14797",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "44",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "5",
        "Maximum Enrollment": "25",
        "Section Seats Available": "10"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 45"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14798",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "45",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT111E",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "4",
        "Maximum Enrollment": "25",
        "Section Seats Available": "12"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program   107.80 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "MAT111 46"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15242",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "46",
      "times": [
        "-"
      ],
      "title": "Introductory Statistics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT112",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "22",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14333",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Rice, G",
      "room": [
        "Murphy Hall 107"
      ],
      "sec": "01",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "Finite Mathematics",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT112",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "13963",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Rice, G",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Finite Mathematics",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT116",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "1"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10294",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Bucher, M",
      "room": [
        "Spratt Hall 201"
      ],
      "sec": "02",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "College Algebra",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT116",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11978",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Poet, J",
      "room": [
        "Agenstein Hall 328"
      ],
      "sec": "03",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "College Algebra",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT116",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "9"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "13967",
      "days": [
        "TR"
      ],
      "hours": "3",
      "instructor": "Bucher, M",
      "room": [
        "Remington Hall 117"
      ],
      "sec": "04",
      "times": [
        "2:00PM-3:20PM"
      ],
      "title": "College Algebra",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT116",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10301",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Rice, G",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "College Algebra",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT116",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "4"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "ADDITIONAL FEE": "Course Materials Fee    10.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10293",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Dorsey, A",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "College Algebra",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT119",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program    65.61 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14781",
      "days": [
        ""
      ],
      "hours": "2",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "0:00AM-0:01AM"
      ],
      "title": "Trigonometry",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT119",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "6"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program    65.61 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10474",
      "days": [
        ""
      ],
      "hours": "2",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "41",
      "times": [
        "-"
      ],
      "title": "Trigonometry",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT147",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "10479",
      "days": [
        ""
      ],
      "hours": "5",
      "instructor": "Waters, G",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Applied Calculus",
      "type": "100% Online"
    },
    {
      "course": "MAT177",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "14"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10482",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Rice, G",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Calculus/Analytic Geometry II",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT211",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "11"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15497",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Applied Statistical Reasoning",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT217",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "15",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15435",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Waters, G",
      "room": [
        "Agenstein Hall 126"
      ],
      "sec": "01",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "Modeling and Simulation",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "MAT317",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "20",
        "Section Seats Available": "10"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15438",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Mutua, J",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Differential Equations",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT352",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "B&N - First Day Program    65.61 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "10488",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "McCune, L",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Math Elem/Middle Teachers I",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "MAT451",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "1",
        "Section Seats Available": "1"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14107",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Staff",
      "room": [
        "Arranged ARRG"
      ],
      "sec": "01",
      "times": [
        "-"
      ],
      "title": "Internship in Mathematics",
      "type": "Independent Research"
    },
    {
      "course": "MAT465",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "20",
        "Section Seats Available": "13"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15439",
      "days": [
        "MW"
      ],
      "hours": "3",
      "instructor": "Dorsey, A",
      "room": [
        "Agenstein Hall 119"
      ],
      "sec": "01",
      "times": [
        "4:00PM-5:20PM"
      ],
      "title": "Math Teaching:Methods & Matrls",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "MAT609",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "25",
        "Section Seats Available": "15"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Distance Education"
      ],
      "crn": "12802",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Klassen, S",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Tech, Analysis/Decision Making",
      "type": "100% Online"
    },
    {
      "course": "PHY101",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Physics Lab Fee    25.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15205",
      "days": [
        "T"
      ],
      "hours": "0",
      "instructor": "Bucklein, B",
      "room": [
        "Remington Hall 111"
      ],
      "sec": "02",
      "times": [
        "12:00PM-1:50PM"
      ],
      "title": "Physics for the Liberal Arts",
      "type": "Lab"
    },
    {
      "course": "PHY101",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "2"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15204",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Bucklein, B",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Physics for the Liberal Arts",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "PHY104",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Physics Lab Fee    25.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11211",
      "days": [
        "M"
      ],
      "hours": "0",
      "instructor": "Bucklein, B",
      "room": [
        "Remington Hall 111"
      ],
      "sec": "02",
      "times": [
        "12:00PM-1:50PM"
      ],
      "title": "Introduction to Astronomy",
      "type": "Lab"
    },
    {
      "course": "PHY104",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "3",
        "Maximum Enrollment": "72",
        "Section Seats Available": "8"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program    71.50 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "PHY104 80"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11210",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Bucklein, B",
      "room": [
        "Online Course "
      ],
      "sec": "40",
      "times": [
        "-"
      ],
      "title": "Introduction to Astronomy",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "PHY104",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Crosslist Seats Available": "3",
        "Maximum Enrollment": "72",
        "Section Seats Available": "67"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program    71.50 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        },
        {
          "This course is crosslisted with": "PHY104 40"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "14666",
      "days": [
        ""
      ],
      "hours": "4",
      "instructor": "Bucklein, B",
      "room": [
        "Online Course "
      ],
      "sec": "80",
      "times": [
        "-"
      ],
      "title": "Intro to Astronomy (Honors)",
      "type": "100% Online w/Meeting Times"
    },
    {
      "course": "PHY110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "72",
        "Section Seats Available": "7"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "B&N - First Day Program    68.75 FLAT(Flat Fee)"
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11216",
      "days": [
        "MW"
      ],
      "hours": "4",
      "instructor": "Sithole, A",
      "room": [
        "Spratt Hall 101"
      ],
      "sec": "01",
      "times": [
        "12:30PM-1:50PM"
      ],
      "title": "College Physics I",
      "type": "Classroom w/Online Component"
    },
    {
      "course": "PHY110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Physics Lab Fee    25.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11219",
      "days": [
        "T"
      ],
      "hours": "0",
      "instructor": "Sithole, A",
      "room": [
        "Remington Hall 109"
      ],
      "sec": "04",
      "times": [
        "12:30PM-3:20PM"
      ],
      "title": "College Physics I",
      "type": "Lab"
    },
    {
      "course": "PHY110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "3"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Physics Lab Fee    25.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15334",
      "days": [
        "W"
      ],
      "hours": "0",
      "instructor": "Sithole, A",
      "room": [
        "Remington Hall 109"
      ],
      "sec": "05",
      "times": [
        "2:00PM-4:50PM"
      ],
      "title": "College Physics I",
      "type": "Lab"
    },
    {
      "course": "PHY110",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "1"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Physics Lab Fee    25.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15335",
      "days": [
        "R"
      ],
      "hours": "0",
      "instructor": "Sithole, A",
      "room": [
        "Remington Hall 109"
      ],
      "sec": "06",
      "times": [
        "12:30PM-3:20PM"
      ],
      "title": "College Physics I",
      "type": "Lab"
    },
    {
      "course": "PHY210",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "18"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11220",
      "days": [
        "MW"
      ],
      "hours": "5",
      "instructor": "Bucklein, B",
      "room": [
        "Remington Hall 111"
      ],
      "sec": "01",
      "times": [
        "9:30AM-10:50AM"
      ],
      "title": "University Physics I",
      "type": "Lecture, 100% in Classroom"
    },
    {
      "course": "PHY210",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "24",
        "Section Seats Available": "18"
      },
      "course_messages": [
        {
          "Additional Info 1": "You must register for both a Lecture and Lab for this course."
        },
        {
          "ADDITIONAL FEE": "Physics Lab Fee    25.00 FLAT(Flat Fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "11221",
      "days": [
        "TR"
      ],
      "hours": "0",
      "instructor": "Bucklein, B",
      "room": [
        "Remington Hall 111"
      ],
      "sec": "02",
      "times": [
        "9:30AM-11:20AM"
      ],
      "title": "University Physics I",
      "type": "Lab"
    },
    {
      "course": "PHY450",
      "course_dates": {
        "Course Begins": "8/17/2020",
        "Course Ends": "11/24/2020"
      },
      "course_description": "",
      "course_enrollment": {
        "Maximum Enrollment": "5",
        "Section Seats Available": "5"
      },
      "course_messages": [
        {
          "ADDITIONAL FEE": "CSMP Program Fee    38.00 CRED(per Credit Hour fee)"
        }
      ],
      "course_term": [
        "Full Term"
      ],
      "crn": "15208",
      "days": [
        ""
      ],
      "hours": "3",
      "instructor": "Sithole, A",
      "room": [
        "Arranged ARRG"
      ],
      "sec": "03",
      "times": [
        "-"
      ],
      "title": "Independent Research/Project",
      "type": "Independent Research"
    }
  ]
  
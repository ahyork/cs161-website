$(document).ready(function () {
    var TAinfo = [
        {   
            name: "Sabrina Jesmin",
    	    userName: "jesmins",
    	    officeHours: "",
    	    demoHours: "",
    	    doodleLink: ""
    	},
        {   
            name: "Yipeng (Roger) Song",
            userName: "songyip",
            officeHours: "By appointments",
            demoHours: "N/A",
            doodleLink: ""
        },
        {   
            name: "Megan Black",
            userName: "blackme",
            officeHours: "Mon & Wed 12-2 p.m.",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Erick Branner",
            userName: "brannere",
            officeHours: "Mon 12-2 p.m.",
            demoHours: "Mon 10-12 p.m. & Fri 9-11 a.m.",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUt0XzBpd0tac3k4fGRlZmF1bHR8NDY1YmJkYWQxNzU2MzE0ZDhlYjUzYjE5MTQ5ZmU3M2I"
        },
        {   
            name: "Jesse Chick",
            userName: "chickj",
            officeHours: "Tue & Thur 9-10 a.m.",
            demoHours: "Mon 9-11 a.m. (except Mon 1/20 -> Fri 1/17)",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUhyeWdSeTA2MzJIfGRlZmF1bHR8Mzc2ZTM5NDlmNjczNGM4ZTBmYWU4ZDBjNTNlZmQyNmI"
        },
        {   
            name: "Louis Duvoisin",
            userName: "duvoisil",
            officeHours: "Tue & Thur 11:30-2 p.m. & Fri 11:30-1:30 p.m.",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Jessica Garcia",
            userName: "garciaj3",
            officeHours: "Mon 6-7 p.m. & Wed 8-9 a.m.",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Miguel Gaspar",
            userName: "gasparmm",
            officeHours: "Fri 9:30-11:30 a.m.",
            demoHours: "Thur 4-6 p.m.",
            doodleLink: ""
        },
        {   
            name: "Laura Jiang",
            userName: "jianglau",
            officeHours: "Mon & Fri 10-12 p.m.",
            demoHours: "Tue & Wed 10-12 p.m.",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUlFaGp3TnlmZlRBfGRlZmF1bHR8ZWFkNzE2ZjE0Njc3OWM2Yzg2ZGRmOTRiMmNiNDZmNjY"
        },
        {   
            name: "Thang Kim (LK)",
            userName: "kimth",
            officeHours: "Tue 10-11 a.m.",
            demoHours: "Mon 2-4 p.m.",
            doodleLink: "https://doodle.com/poll/gv3vv7tms3hnsw55"
        },
        {   
            name: "Jason O'Brien",
            userName: "obriejas",
            officeHours: "",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Lucas Pichette",
            userName: "pichettl",
            officeHours: "Tue 8-10 a.m. & Wed 2-5 p.m. & Thur 8-10 a.m.",
            demoHours: "Tue & Thur 11-12 p.m.",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUpjdmJPZ0tzRUpPfGRlZmF1bHR8NzQ0MTQ2MzhkOTY3OTdmNDJiODlhYjQwNDI4NjdlZWU"
        },
        {   
            name: "Maddie Smith",
            userName: "smitmad9",
            officeHours: "Wed 1-3 p.m.",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Austin Wilmoth",
            userName: "wilmotha",
            officeHours: "Thur 10-12 p.m.",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Cheng Xie",
            userName: "xiech",
            officeHours: "Mon 3-5 p.m. & Tue 2:30-3:30 p.m.",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Arthur York",
            userName: "yorkar",
            officeHours: "",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Junze Zhang",
            userName: "zhanjunz",
            officeHours: "",
            demoHours: "",
            doodleLink: ""
        }
    ];

    var table = '<table class="TAHoursInfo" width=100%>';
    table += "<tr><th width=20%>Name</th><th width=10%>Email</th><th width=35%>Office Hours (DEAR 119)</th><th>Grading Hours (KEC 1174)</th></tr>";

    for (var x = 0; x < TAinfo.length; x++) {
        table += "<tr>";
        table += '<td>' + TAinfo[x]["name"] + "</td>";
        table += '<td><a href="mailto:' + TAinfo[x]["userName"] + '@oregonstate.edu">' + TAinfo[x]["userName"] + "</a></td>";
        table += '<td>' + TAinfo[x]["officeHours"] + "</td>";
        table += '<td><a href="' + TAinfo[x]["doodleLink"] + '">' + TAinfo[x]["demoHours"] + "</a></td>";
        table += "</tr>";
    }
    table += "</table>";
    $(".TAHours").append(table);
});

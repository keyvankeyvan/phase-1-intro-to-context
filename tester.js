const indiv = {
    firstName: 'keyvan',
    familyName: 'asdasdasd',
    title: 'ENGR',
    payPerHour: 333,
    timeInEvents:[
        {
            type: "TimeIn",
            hour: 600,
            date: "1996-03-01"
        },
        {
            type: "TimeIn",
            hour: 700,
            date: "2002-12-12"
        }
    ],
    timeOutEvents:[
        {
            type: "TimeOut",
            hour: 1500,
            date: "1996-03-01"
        },
        {
            type: "TimeOut",
            hour: 1600,
            date: "2002-12-12"
        }
    ]
}

const dates = []
indiv.timeInEvents.forEach(dayEntry => dates.push(dayEntry.date))

console.log(dates)
function hoursWorkedOnDate(empRecd, date) {
    // console.log(empRecd.timeInEvents.find(element => element.hour == 600))
    // console.log(date)

    const inTime = empRecd.timeInEvents.find((element) => element.date === date)
    const outTime = empRecd.timeOutEvents.find((element) => element.date === date)

    console.log(inTime)
    console.log(outTime)


    const hrs = outTime.hour - inTime.hour
    console.log(hrs)
    return hrs
}

//hoursWorkedOnDate(indiv, "2002-12-12")
//console.log(indiv.payPerHour)
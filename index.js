// Your code here
function createEmployeeRecord(indivArr) {
    const indiv = {
        firstName: indivArr[0],
        familyName: indivArr[1],
        title: indivArr[2],
        payPerHour: indivArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return indiv
}

function createEmployeeRecords(arrArrs) {
    const arrObjs = arrArrs.map(arr => createEmployeeRecord(arr))
    return arrObjs
}

function createTimeInEvent(empRecd, date) {
    const dateSplit = date.split(" ")

    empRecd.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateSplit[1]),
        date: dateSplit[0]
    })

    return empRecd
}

function createTimeOutEvent(empRecd, dateStamp) {
    let [datee, time] = dateStamp.split(" ")
    empRecd.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time),
        date: datee
    })

    return empRecd
}

function hoursWorkedOnDate(empRecd, date) {
    const inTime = empRecd.timeInEvents.find((element) => element.date === date)
    const outTime = empRecd.timeOutEvents.find((element) => element.date === date)

    const hrs = outTime.hour - inTime.hour

    return (hrs / 100)
}

function wagesEarnedOnDate(empRecd, date) {
    const hrsWorked = hoursWorkedOnDate(empRecd, date)
    const rate = empRecd.payPerHour
    return hrsWorked * rate
}

function allWagesFor(empRecd) {
    const dateList = []
    empRecd.timeInEvents.forEach(element => dateList.push(element.date))

    let totalwages = 0
    dateList.forEach(day => totalwages += wagesEarnedOnDate(empRecd, day))

    return totalwages
}

function calculatePayroll(empRecords){
    let totalPayroll = 0
    empRecords.forEach(individual => {
        totalPayroll += allWagesFor(individual)
    })

    return totalPayroll
}
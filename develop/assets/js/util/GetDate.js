const dateZellFill = (number) => {
    return ( "0" + number ).substr( -2 )
}

const getDate = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month = dateZellFill(date.getMonth() + 1)
    let day = dateZellFill(date.getDate())
    return year + "-" + month + "-" + day
}

const getDate_YYYYMMDDhhmmss = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month = dateZellFill(date.getMonth() + 1)
    let day = dateZellFill(date.getDate())
    let hh = dataZellFill(data.getHours())
    let mm = dataZellFill(data.getMinutes())
    let ss = dataZellFill(data.getSeconds())
    return year + month + day + hh + mm + ss
}

export {
    getDate,
    getDate_YYYYMMDDhhmmss
}
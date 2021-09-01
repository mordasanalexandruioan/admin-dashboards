let eventMenu = e => {
    let obj = e.target;
    let menu = document.getElementsByTagName('header')[0];
    let main = document.getElementsByTagName('main')[0];
    if (obj.className == "closeMenu" || obj.className == "fas fa-times") {
        menu.className = "desappear";
        main.style.transform = "translateX(-220px)";
        main.style.transition = "transform .5s";
    } else if (obj.className == "showMenu" || obj.className == "fas fa-bars") {
        menu.className = "appear";
        main.style.transform = "translateX(0px)";
    }
}



let totalSalesCanvas = document.getElementsByClassName('total-sales')[0];

let salesData = {
    labels: [
        "1-4",
        "6-4",
        "11-4",
        "16-4",
        "21-4",
        "26-4",
        "31-4"
    ],
    datasets: [{
        data: [10580, 7200, 16900, 8450, 4999, 15800, 13490],
        color: 'rgb(88, 181, 251)',
        backgroundColor: [
            'rgb(88, 181, 251)',
            'rgb(18, 61, 103)',
            'rgb(88, 181, 251)',
            'rgb(18, 61, 103)',
            'rgb(88, 181, 251)',
            'rgb(18, 61, 103)',
            'rgb(88, 181, 251)'
        ],
        borderWidth: 1,
        fill: true,
    }, ],
};

let chartOptions = {
    plugins: {
        aspectRatio: 2.5,
        animation: {
            duration: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },
    }
};

let salesChart = new Chart(totalSalesCanvas, {

    data: salesData,
    type: 'bar',
    options: chartOptions

})

let newUsersCanvas = document.getElementsByClassName('new-users')[0];

let usersData = {
    labels: [
        "1-4",
        "6-4",
        "11-4",
        "16-4",
        "21-4",
        "26-4",
        "31-4"
    ],
    datasets: [{
        data: [520, 450, 589, 1200, 759, 2100, 1649],
        backgroundColor: [
            'rgb(122, 101, 242)',
        ],
        fill: true
    }, {
        data: [630, 520, 739, 1578, 899, 2430, 1850],
        backgroundColor: [
            'rgb(18, 61, 103)',
        ],
        fill: true
    }]
}

let userChart = new Chart(newUsersCanvas, {
    data: usersData,
    type: 'line',
    options: chartOptions
})
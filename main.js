// Get actual height of window
window.addEventListener("load", () => {
    document.querySelector(".container").style.height = window.innerHeight + 'px';
})

// Set all inputs of #myinput to empty 
window.addEventListener("load", () => {
    let inputFields = document.querySelectorAll("#myinput");
    let inputFieldsArr = Array.from(inputFields);
    inputFieldsArr.forEach(element => {
        element.value = ""
    });
})
// Set all inputs of #saleinput to empty
window.addEventListener("load", () => {
    let inputFields = document.querySelectorAll("#saleinput");
    let inputFieldsArr = Array.from(inputFields);
    inputFieldsArr.forEach(element => {
        element.value = ""
    });
})

let employerName1, employerName2, employerName3, employerName4, employersNames
let saleScore1, saleScore2, saleScore3, aleScore4, saleScores, graphWheel, graphWheelStyle, graphWheelSelect


// generate graph with data provided by user
    function generate() {
        let employer1 = document.querySelector(".e-1");
        let employer2 = document.querySelector(".e-2");
        let employer3 = document.querySelector(".e-3");
        let employer4 = document.querySelector(".e-4");
        saleScore1 = document.querySelector(".e-1 .sale-score input").value
        saleScore2 = document.querySelector(".e-2 .sale-score input").value
        saleScore3 = document.querySelector(".e-3 .sale-score input").value
        saleScore4 = document.querySelector(".e-4 .sale-score input").value
        saleScores = [saleScore1, saleScore2, saleScore3, saleScore4];
        employerName1 = document.querySelector(".e-1 .name input").value 
        employerName2 = document.querySelector(".e-2 .name input").value
        employerName3 = document.querySelector(".e-3 .name input").value
        employerName4 = document.querySelector(".e-4 .name input").value  
        employersNames = [employerName1, employerName2, employerName3, employerName4];
        // set bars/lines colors
        let color1 = 'rgba(85, 11, 164, 0.2)'
        let color2 = 'rgba(54, 162, 235, 0.2)'
        let color3 = 'rgba(255, 206, 86, 0.2)'
        let color4 = 'rgba(75, 192, 192, 0.2)'
        // set bars/lines borders colors
        let darkenColor1 = color1.replace("0.2", "1")
        let darkenColor2 = color2.replace("0.2", "1")
        let darkenColor3 = color3.replace("0.2", "1")
        let darkenColor4 = color4.replace("0.2", "1")

        employer1.style.backgroundColor = color1;
        employer1.style.borderColor = darkenColor1;

        employer2.style.backgroundColor = color2;
        employer2.style.borderColor = darkenColor2;

        employer3.style.backgroundColor = color3;
        employer3.style.borderColor = darkenColor3;

        employer4.style.backgroundColor = color4;
        employer4.style.borderColor = darkenColor4;
        // get acutal graph type picked by user
        graphWheel = document.querySelector("#graph-wheel");
        graphWheelSelect = document.querySelector("select#graph").value;

        // chart.js
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: graphWheelSelect,
            data: {
                labels: employersNames,
                datasets: [{
                    label: 'PCS Sold',
                    data: saleScores, // array of values
                    backgroundColor: [
                        color1,
                        color2,
                        color3,
                        color4
                    ],
                    borderColor: [
                        darkenColor1,
                        darkenColor2,
                        darkenColor3,
                        darkenColor4
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        // after graph is generated disable all input fields with #myinput
        let allInputs = Array.from(document.querySelectorAll("#myinput"))
        allInputs.forEach(input => {
            input.disabled = "true"
            
        });
        // after graph is generated hide 'choose graph' section ...
        graphWheelStyle = graphWheel.style.display = "none";
        // ...and show reset button
        document.querySelector(".reset-graph").style.display = "inline";
    }

    

    

    
    







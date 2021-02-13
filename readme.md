# This app allows you to generate a chart (bar, line, doughnut, pie, radar) based on data you enter (4 employees).

## Instructions:

1. Select what type of chart you are interested in
2. Enter data in all fields (names and sold quantity)
3. Press the "Generate" button

## Options:

![chart logo](https://www.chartjs.org/img/chartjs-logo.svg "Chart.js logo")

- The application uses the chart.js library, so for full documentation, I refer you to the main page of the library.
- Without going through the documentation, we can quickly change the **fill color** of each bar by editing rules:
  `let color1 = 'rgba(85, 11, 164, 0.2)'`
  `let color2 = 'rgba(54, 162, 235, 0.2)'` etc...

The **border** color is set automatically (color1 - alpha channel).

## The application is responsive.

## To-do list:

1. Ability to choose the number of team members.
2. Set colors without messing with the code.

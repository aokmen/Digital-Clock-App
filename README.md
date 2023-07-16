# Clock and Date Display

This project creates a clock and date display using HTML, CSS, and JavaScript. It provides a visually appealing and functional clock that continuously updates to show the current time, along with a formatted date display. The project utilizes HTML for structuring the elements, CSS for styling, and JavaScript for the dynamic functionality.

## HTML Structure

The HTML file consists of a wrapper element with the ID "clockdate" that contains two nested div elements. One div element with the ID "clock" is used to display the clock, and the other div element with the ID "date" is used to display the date.

## CSS Styling

The CSS file (style.css) contains styles to customize the appearance of the clock and date elements. The clock wrapper has a black background, padding, height, width, and border-radius to create a visually pleasing layout. The clock itself has a gradient background, custom font, text-shadow, box-shadow, and border-radius to make it visually appealing. The date element has box-shadow, padding, border-radius, font styles, and a border-bottom to create a separate section for the date display.

## JavaScript Functionality

The JavaScript file (app.js) contains the necessary functionality for the clock and date display. The time() function is used to continuously update the clock and date elements. Inside this function, the current time is obtained using the Date() object, and the hours, minutes, and seconds are extracted. The hour is then converted to a 12-hour format, and the AM/PM indicator is set accordingly. The checkTime() helper function is used to add a leading zero to single-digit hours, minutes, and seconds. The clock element's HTML is updated with the formatted time, and the date element's HTML is updated with the formatted date. The time() function is set to execute every 500 milliseconds using setTimeout() to provide a real-time clock display.

## External Resources

The project includes an external CSS file (style.css) that contains the custom styles for the clock and date elements. It also includes an external JavaScript file (app.js) that contains the time() function and the checkTime() helper function.

## Usage

To use this clock and date display in your own project, follow these steps:

1. Clone the repository to your local machine or download the project files.
2. Link the CSS file (style.css) to your HTML file.
3. Include the JavaScript file (app.js) in your HTML file.
4. Copy the HTML structure for the clock and date display to your desired location in your HTML file.
5. Customize the CSS styles as needed to match your project's design.
6. The clock and date display will now be functional and will update in real-time.



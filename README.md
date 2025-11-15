## Wilson Gachunga - CSC372 Assignment 8
Rock Paper Scissors Single Page Application
[Demo Link](https://uncg-my.sharepoint.com/:v:/g/personal/tngachunga_uncg_edu/IQBSGYkKEY6cTLSamskp0eRKAazSIbB_yEaxADuxpQXH3wQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=uO49sl)

Set up this project with the following commands
`
npm install
npm run dev
`

The second command will begin the react app on the port specified in the terminal. You can interact with the project, and even tweak it to your own liking.

Try your hand at rock, paper, scissors! Don't let yourself be at the mercy of the CPU.

This implementation uses components to change the display and update game data based on user input. The App component stores the game's important data. Each child component updates that data and sends it back to the parent.

The computer and player throw will display the turns of the round. Players click on an option to select it.

The result component will show the result of the round at the bottom of the screen. There is a scoreboard where players can see their accumulating scores, with a reset button to start from scratch.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are acceptable? 😋  ", (answer1) => {
  rl.question("What's an activity you like doing? 🤔  ", (answer2) => { 
    rl.question("What's your favourite band or album to listen to? 🎵  ", (answer3) => {
      rl.question("Which meal is your favourite (dinner, brunch, etc) 🍽  ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? 🍕🥗  ", (answer5) => {
          rl.question("Which movie/TV show is your absolute favourite? 🎬📺  ", (answer6) => {
            rl.question("What is your superpower? Tell us what you are amazing at! ✨  ", (answer7) => {
              console.log(`⭐️ Here is your user profile ⭐️: Hi, my name is ${answer1}. I like ${answer2} and listening to ${answer3}. My favourite meal of the day is ${answer4} when I usually like to eat ${answer5}. My favourite thing to watch is ${answer6}. Finally, my superpower is ${answer7}!`);
              rl.close();
            })
          })
        })
      })
    }) 
  })
});

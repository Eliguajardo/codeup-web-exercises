// 1.Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
//  2.   Generate a Personal Access Token for the GitHub API.
//
//   3.  We will use this so that we don't get rate limited when talking to the GitHub API.
//   You can add the token to your requests like this:

fetch('https://api.github.com/users/eliguajardo/events/public', {headers:
        {'Authorization':'token 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'}})
    .then(function(response) {
            console.log(response);
            return response.json();
    }).then(function (jsonData){
        console.log(jsonData[0]);
});
//
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// 4. Create a function that accepts a GitHub username, and returns a promise that resolves returning
// just the date of the last commit that user made. Reference the github api documentation to achieve this.
//




//     Create Your Own Promise
//5. Write a function named wait that accepts a number as a parameter, and returns a promise that
// resolves after the passed number of milliseconds.
//
const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('it worked');
        } else {
            reject('this failed');
        }
    }, 1500);
});

console.log(wait); // a pending promise

// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));



//
 wait(1000).then(() => console.log('You\'ll see this after 1 second'));
 wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make
// the console log message more dynamic.













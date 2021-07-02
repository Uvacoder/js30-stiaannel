    // start with strings, numbers and booleans
    let age = 100,
      age2 = age,
      name = 'stiaan',
      name2 = name;
    console.log('Before Change: - AGE - ', age, age2);
    console.log('Before Change: - NAME - ', name, name2);
    age = 200
    name = 'stiaannel'
    console.log('After Change: - AGE - ', age, age2);
    console.log('After Change: - NAME - ', name, name2);


    // Let's say we have an array
    const players = ['Stiaan', 'Sarah', 'Ryan', 'Poppy'];
    const playersTest = ['Stiaan', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = playersTest
    console.log(players, team);

    // You might think we can just do something like this:
    team[3] = 'Pete'
    console.log(playersTest, team);

    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!

    // one way
    const team2 = players.slice();
    console.log(team2);

    // or create a new array and concat the old one in
    const team3 = [].concat(players)
    console.log(team3);
    // or use the new ES6 Spread
    const team4 = [...players]
    console.log(team4);
    // Array.from 
    const team5 = Array.from(players)
    console.log(team5);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object
    // with Objects
    const person = {
      name: 'stiaannel',
      age: 80
    };

    // and think we make a copy:
    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {
      number: 99
    })
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const stiaan = {
      name: 'Stiaan',
      age: 35,
      social: {
        twitter: 'n/a',
        facebook: 'n/a'
      }
    };

    // console.clear();
    console.log(stiaan);
    // Poor man's way of DeepCloning 😅
    const dev2 = JSON.parse(JSON.stringify(stiaan));
    dev2.social.twitter = 'Tweet Tweet'
    console.log(dev2.social.twitter, stiaan.social.twitter)

    // Proof of 1 level deep concept
    const dev = Object.assign({}, stiaan);
    dev.social.twitter = 'What is twitter?'
    console.log(dev.social.twitter, stiaan.social.twitter)
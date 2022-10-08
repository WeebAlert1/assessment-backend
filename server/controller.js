module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["Put your mind into planning today. Look into the future.", "Your mind is your greatest asset.", "Your dreams are never silly; depend on them to guide you.", "You understand how to have fun with others and to enjoy your solitude.", "You never know who you touch.", "Time is precious, but truth is more precious than time"];

        let randomFnt = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomFnt];

        res.status(200).send(randomFortune);
    },

    postName: (req, res) => {
        let {fname, lname} = req.body;


        if (!fname || !lname){
            res.status(400).send('oops! Missing some data');
        } else {
        res.status(200).send(`Hi ${fname} ${lname}! That is a cool name! You are a rockstar!`);
        }
    },

    postGoal: (req, res) => {
        let {goalTxt, timeTxt} = req.body;
        
        if (!goalTxt || !timeTxt){
            res.status(400).send('Gotta get some data in!');
        } else {
            res.status(200).send(`Your goal is ${goalTxt}, and you plan on accomplish it by ${timeTxt}! YOU GOT THIS!`)
        }
    },

    getLucky: (req, res) => {
        let num = [5, 74, 56, 3, 4, 89, 123, 908, 44, 67];

        let randInx = Math.floor(Math.random() * num.length);
        let randNum = num[randInx];

        res.status(200).send(`${randNum} is your lucky number today!`);
    }

}
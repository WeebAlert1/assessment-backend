const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune")
const nameBtn = document.getElementById("nameBtn")
const goalBtn = document.getElementById("goalBtn")
const luckyBtn = document.getElementById("luckNum")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

function postGoal (e) {
    e.preventDefault();

    let goal = document.querySelector('#goal');
    let time = document.querySelector('#time');

    let body = {
        goalTxt: goal.value,
        timeTxt: time.value
    }
    
    axios.post("http://localhost:4000/api/goal", body)
    .then(res => {
        const data = res.data;
        confirm(data);
    })
};

function postName (e) {
    e.preventDefault();

    let fname = document.querySelector('#fname');
    let lname = document.querySelector('#lname');

    let bodyObj = {
        fname: fname.value,
        lname: lname.value
    }

    axios.post("http://localhost:4000/api/names", bodyObj)
    .then(res => {
        const data = res.data;
        alert(data);
    })

};

const getLucky = () => {
    axios.get("http://localhost:4000/api/lucky")
    .then(res => {
        const data = res.data;
        confirm(data);
    })
}


complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

nameBtn.addEventListener('click', postName);

goalBtn.addEventListener('click', postGoal);

luckyBtn.addEventListener('click', getLucky);



let xp=0;
let health=100;
let gold=500;
let currentWeapon="dagger";
let fighting=false;

let inventory=["dagger"];
let inventoryTwo=[
    {
        name: "dagger",
        amount: 1
    },
    
]

const inventoryButton = document.querySelector("#inventoryButton");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const stats = document.querySelector("#stats");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");
let currentLocation = 0;

const locations =[
    {
        name: "TownSquare",
        description: "You are in the Town Square, you see a sign that says \"STORE\", and a cave entrance, and of course the big red dragon infront of the gate, who would miss that?",
        buttonText: ["Go to store", "Go to cave", "Fight Dragon"],
        buttonFunction: [goStore, goCave, FightDragon]
    },
    {
        name: "Store",
        description: "Welcome to the store! What would you like to buy?",
        buttonText: ["Buy Sword (30 gold)", "Buy Health Potion (10 gold)", "Go to Town Square"],
        buttonFunction: [buySword, buyHealthPotion, goTown]
    },
    {
        name: "Cave",
        description: "You enter the cave, you see some monsters.",
        buttonText: ['Fight Slime', "Fight Goblin", "Go to Town Square"],
        buttonFunction: [fightSlime, fightGoblin, goTown]
    }
];

const weapons = [
    {
        name: "dagger",
        damage: 10,
        description: "A small dagger, it does 10 damage."
    },
    {
        name: "sword",
        damage: 20,
        description: "A sword, it does 20 damage."
    },
    {
        name: "axe",
        damage: 30,
        description: "A big axe, it does 30 damage."
    },
    {
        name: "staff",
        damage: 40,
        description: "A staff, it does 40 damage."
    },
    {
        name: "bow",
        damage: 30,
        description: "A bow, it does 50 damage."
    }
]

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = FightDragon;
inventoryButton.onclick = showInventory;

update(locations[currentLocation]);

//add weight to inventory
function showInventory(){
    text.innerText = "You have " + inventoryTwo.length + " item(s) in your inventory";
    text.innerText += "\n\nYour Inventory";
    const list = document.createElement('ul');
    inventoryTwo.forEach(item => {
        let li = document.createElement('li');
        li.innerText = item.name + " x " + item.amount;
        list.appendChild(li);
    });
    text.appendChild(list);
}



function update(location){
    goldText.innerText = gold;
    healthText.innerText = health;
    text.innerText = location.description;
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1];
    button3.innerText = location.buttonText[2];
    button1.onclick = location.buttonFunction[0];
    button2.onclick = location.buttonFunction[1];
    button3.onclick = location.buttonFunction[2];
    if(location.name == "Store"){
        if(gold < 30){
            button1.disabled = true;
        }
        if(gold < 10){
            button2.disabled =true;
        }
    }
    if(location.name == "TownSquare"){
        button1.disabled = false;
        button2.disabled = false;
    }
}

function goTown(){
    currentLocation = 0;
    update(locations[currentLocation]);
}
function goStore(){
    currentLocation = 1;
    update(locations[currentLocation]);
}

function goCave(){
    currentLocation = 2;
    update(locations[currentLocation]);
}

function FightDragon(){
    console.log("You are fighting the dragon");
}

function buySword(){
    gold -= 30;
    addToInventory("Sword")
    text.innerText="You have purchased a Sword for 30 gold.";
    update(locations[currentLocation]);
}

function buyHealthPotion(){
    gold -= 10;
    health += 10;
    addToInventory("health potion");
    text.innerText="You have purchased a Health Potion for 10 gold.";
    update(locations[currentLocation]);
}

function addToInventory(item){
    let itemIndex = inventoryTwo.findIndex(invItem => invItem.name === item);
    if(itemIndex > -1){
        inventoryTwo[itemIndex].amount += 1;
    }
    else{
        inventoryTwo.push({name:item,amount:1});
    }
}

function fightSlime(){}
function fightGoblin(){}
var someone = {
    name: 'codejong',
    whoAmI: function () {
        console.log(this);
    }
}

someone.whoAmI();

var myWhoAmI = someone.whoAmI;
myWhoAmI();

var bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI();
var btn = document.getElementById('btn');
btn.addEventListener('click', bindedWhoAmI);
// btn.addEventListener('click', someone.whoAmI);
// btn.addEventListener('click', myWhoAmI);
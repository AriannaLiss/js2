/*  
    Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
    Создать в объекте вложенный объект - "Приложение". 
    Создать в объекте "Приложение", вложенные объекты, "Заголовок, тело, футер, дата". 
    Создать методы для заполнения и отображения документа.
    */

const doc = {
    title: "Sherlock Holms",
    body: "<img src='./img/objects/SharlockHolms.jpeg' alt='Sharlock Holms' height='100px' width='auto'/>",
    footer: "Do vampires really exist? Robert Ferguson believes his wife is one! Will the famous detective Sherlock Holmes and his friend Dr Watson explain her strange behaviour? Or are they facing a real vampire?",
    date: "2008",
    applications: [{
        title: "Wonder",
        body: "<img src='../img/objects/wonder.jpeg' alt='Sharlock Holms' height='100px' width='auto'/>",
        footer: "When given the choice between being right or being kind choose kind.",
        date: "Palacio novel",
        toString: function(){
            return `<div class="object">
                <h3 class="object__title">${this.title}</h3>
                <div class="object__main">
                    <div class="object__body">${this.body}</div>
                    <div class="object__text">
                        <div class="object__footer">${this.footer}</div>
                        <div class="object__date">${this.date}</div>
                </div></div></div>`
            }
    }],
    toString: function(){
        return `<div class="object">
            <h3 class="object__title">${this.title}</h3>
            <div class="object__main">
                <div class="object__body">${this.body}</div>
                <div class="object__text">
                    <div class="object__footer">${this.footer}</div>
                    <div class="object__date">${this.date}</div>
                    <div class="object__applications"> 
                        <h4> Applications: </h4>
                        <div class="object__application">${this.applications}</div>
            </div></div></div></div>`
        }    
}

function set(prop,value){
    console.log(`Change ${prop}}`)
    doc[prop]=value;
    console.log(`New ${prop} is ${doc[prop]}`)
}

function show(obj){
    document.getElementById("object").innerHTML= doc;
}

set("title", "SH");
set("date","2010")

show(doc);

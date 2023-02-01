class Counter{

constructor(){
    this.count = 0;    
    this.suffix = Math.random().toString(36).substring(2);
}   

increment(){

    this.count = this.count+1;
    this.updateCount();
}

decrement(){
    this.count = this.count-1;
    this.updateCount();
}

updateCount(){
    const countValue = document.getElementById(`countValue-${this.suffix}`);
    countValue.innerText = `count : ${this.count}`
}

render(){
    // const suffix = Math.random().toString(36).substring(2);
    const counterContainer = document.createElement("div");
    const countValue = document.createElement("p");
    const incButton = document.createElement("button");
    const decButton = document.createElement("button");
    counterContainer.setAttribute("class","counterContainer")
    countValue.setAttribute("id",`countValue-${this.suffix}`)
    countValue.innerText = `count : ${this.count}`
    incButton.setAttribute("id",`increment-${this.suffix}`)
    decButton.setAttribute("id",`decrement-${this.suffix}`)
    incButton.innerText = "+"
    decButton.innerText = "-"

    incButton.addEventListener("click",this.increment.bind(this))
    decButton.addEventListener("click",this.decrement.bind(this))

    counterContainer.appendChild(countValue)
counterContainer.appendChild(incButton)
counterContainer.appendChild(decButton)

    return counterContainer;
}

mount(parent){
    

    if(parent){
        parent.appendChild(this.render())
        return;
    }
    document.body.appendChild(this.render())

}

}

export {Counter};
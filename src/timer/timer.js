//Creating and accessing the elements
class Timer{
    constructor(){
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        this.int = null;
    }


    render(){
        var timerContainer = document.createElement("div");
        var timerValue = document.createElement("p");
        var reset = document.createElement("button");
        var start = document.createElement("button");
        var pause = document.createElement("button");
        timerContainer.setAttribute("class","timerContainer")
        timerValue.setAttribute("id","timerValue")
        timerValue.innerText = `${this.hr} : ${this.min} : ${this.sec} : ${this.ms}`
        start.setAttribute("id","start")
        pause.setAttribute("id","pause")
        reset.setAttribute("id","reset")
        start.innerHTML = "START"
        pause.innerHTML = "PAUSE"
        reset.innerHTML = "RESET"

        timerContainer.appendChild(timerValue)
timerContainer.appendChild(start)
timerContainer.appendChild(pause)
timerContainer.appendChild(reset)

function displayTimer(){
    this.ms+=10;
    if(this.ms == 1000){
        this.ms = 0;
        this.sec++;
        if(this.sec == 60){
            this.sec = 0;
            this.min++;
            if(this.min == 60){
                this.min = 0;
                this.hr++;
            }
        }
    }


    let h  = this.hr < 10 ? "0" + this.hr : this.hr;
    let m= this.min < 10 ? "0" + this.min : this.min;
    let s = this.sec < 10 ? "0" + this.sec : this.sec;
let ms = this.ms < 10 ? "00" + this.ms : this.ms < 100 ? "0" + this.ms : this.ms;

timerValue.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}






start.addEventListener('click', ()=>{
    if(this.int!==null){
        clearInterval(this.int);
    }
    this.int = setInterval(()=>{
            this.ms+=10;
            if(this.ms == 1000){
                this.ms = 0;
                this.sec++;
                if(this.sec == 60){
                    this.sec = 0;
                    this.min++;
                    if(this.min == 60){
                        this.min = 0;
                        this.hr++;
                    }
                }
            }
        
        
            let h  = this.hr < 10 ? "0" + this.hr : this.hr;
            let m= this.min < 10 ? "0" + this.min : this.min;
            let s = this.sec < 10 ? "0" + this.sec : this.sec;
        let ms = this.ms < 10 ? "00" + this.ms : this.ms < 100 ? "0" + this.ms : this.ms;
        
        timerValue.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
        
    },10);
});

pause.addEventListener('click', ()=>{
    clearInterval(this.int);
});

reset.addEventListener('click', ()=>{
    clearInterval(this.int);
    this.hr = 0;
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
    timerValue.innerText = `${this.hr} : ${this.min} : ${this.sec} : ${this.ms}`
});
        return timerContainer;

    }
    
mount(parent){
    if(parent){
        parent.appendChild(this.render())
        return;
    }
    document.body.appendChild(this.render())

}

}

export {Timer};






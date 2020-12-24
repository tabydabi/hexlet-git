const a = 1;
const obj = {
  a: 2,
  get() {
    console.log("Get=" + this.a);
  },
  getArrow: () => {
    console.log("GetArrow=" + this.a);
  },
  delay() {
    setTimeout(function () {
      console.log("Delay=" +this.a);
    }, 100);
  },
  delayArrow:()=> {
    setTimeout(function () {
      console.log("DelayArrow=" +this.a);
    }, 100);
  },
  delayChildrenArrow() {
    setTimeout(() =>{
      console.log("DelayChildrenArrow=" +this.a);
    }, 100);
  },
  delayArrowChildrenArrow:() =>{
    setTimeout(() =>{
      console.log("DelayArrowChildrenArrow=" +this.a);
    }, 100);
  }
};

obj.get(); 
obj.getArrow(); 
obj.delay(); 
obj.delayArrow();
obj.delayChildrenArrow(); 
obj.delayArrowChildrenArrow(); 
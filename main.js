/* START CODE UNDER THIS LINE */
console.log("4/1/2024");


//Practice
//q1///
///Define a class Activate
///and create a constructor with one property passCode
///containing a String representing the passCode.
class Activate {
    constructor(){

      this.passCode=''
    
    }
    setPassCode(passCode)
    {
if(this.passCode===""){
    this.passCode=passCode
    return "Passcode has been set"
}
else
{
return "Reset passcode first"
}
    }

  }

//q2
//Write a method setPassCode
///that accepts a passCode as String and saves it in the
///Activate then returns Passcode has been set, 
////and if there is already a passCode return Reset passcode first
//const activate = new Activate();


activate.setPassCode("1234"); // => "Passcode has been set"
activate.setPassCode("1234"); // => "Reset passcode first"

///q3
///Write a method resetPassCode
/// that accepts argument passCode a  String 
/// and that meets the following requirements:
const activate = new Activate();
constructor(){

    this.setPassCode=''

}
{
    setPassCode(passCode)
    if(this.passCode==="")
    this.passCode=passCode
}
activate.resetPassCode("8642"); // => "Set a passcode first"
activate.setPassCode("8642"); // => "Passcode has been set"
activate.setPassCode("7531"); // => "Reset passcode first"
activate.resetPassCode("7531"); // => "Wrong passcode"
activate.resetPassCode("8642"); // => "PassCode has been reset"
//reset the passCode (clear the previous one) if the saved passCode matches the

//q4/
///Define a new class Lock that will inherit all features from Activate class.
class Lock extends Activate {
    constructor() {
      super();
      // TODO: Your code here
    }
  }


import './App.css';


function UserRegister(){

  return(
    <>
      <h1>Registration</h1>

      Name: <input id='1' type = "text"/><br></br>

      Mobile No: <input id='2' type = "text"/><br></br>

      Email:<input id='3' type = "email"/><br></br>

      Password:<input id='4' type = "password"/><br></br>

      Gender:Female<input id='5' type = "radio" name="gender"/> 
             Male<input id='6' type="radio" name="gender"/><br></br>

      DoB:<input id='7' type = "date"/><br></br>

      Hobbies:<input id='8' type = "checkbox" name="hobbies"/>Singing
              <input id='9' type = "checkbox" name="hobbies"/>Dancing
              <input id='10' type = "checkbox" name="hobbies"/>Pottery<br></br>

      Address:<input id='11' type = "text"/><br></br>

      Pincode:<input id='12' type="text"/><br></br>

      <label htmlFor="City">Choose City:</label>
      <select name="city" id="13">
        <option value="nagpur">Nagpur</option>
        <option value="wardha">Wardha</option>
        <option value="bhandara">Bhandara</option>
        <option value="amravati">Amravati</option>
      </select>
      
      <br></br>

      State:<input id='14' type = "text"/><br></br>

      Image:<input id='15' type = "file"/><br></br>

      <input id='16' type = "submit"/><br></br>
    </>
    );
  }
export default UserRegister;
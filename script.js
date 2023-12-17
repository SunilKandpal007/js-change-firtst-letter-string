const changeCase = ()=>{
    let str1 = document.getElementById('strValue').value;
    
    if(str1 == ''){
      
      document.getElementById('showString').style.background='orange';

      document.getElementById('showString').style.color ='white';

      document.getElementById('showString').innerText = `Sorry! String value not found.`;
    }
    else{

        document.getElementById('showString').innerHTML = `Result: ${str1.charAt(0).toUpperCase()}${str1.slice(1)}`;

        document.getElementById('showString').style.background='darkgreen';

        document.getElementById('showString').style.color ='white';
    }
  }
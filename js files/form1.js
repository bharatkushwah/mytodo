    function addtask()
    {
      var listDetail = document.getElementById("addme").value;
      var ul = document.getElementById("myul");
      if (listDetail) {
        var li = document.createElement("LI");
        ul.appendChild(li);
        
      } else {
        alert("please fill up the input field");
      }
      
      
      var entry = document.createElement("SPAN");
      var entryText = document.createTextNode(listDetail);
      entry.className = "userEntry";
      entry.appendChild(entryText);
      li.appendChild(entry);
      document.getElementById("addme").value = ""; 
      
      var span = document.createElement("SPAN");
      var spanText = document.createTextNode("Done");
      span.className = "close";
      span.appendChild(spanText);
      li.appendChild(span);
      span.onclick = function() {
        this.parentElement.style.display = "none";
      }
      
      
      
      
      var span2 = document.createElement("span");
      span2.className ="span2";
      var checkbox = document.createElement("input");
      checkbox.type ="checkbox";
      checkbox.id = "checkbox";
      
      span2.appendChild(checkbox)
      li.appendChild(span2);
      
      var edit = document.createElement("SPAN");
      var eText = document.createTextNode("Edit");
      edit.className = "edit";
      edit.id ="edit";
      edit.appendChild(eText);
      li.appendChild(edit);
      edit.onclick = function() {
        var p = prompt("Edit your entry");
        var obj =this.parentElement.getElementsByClassName("userEntry")[0];
        obj.innerText = p;
      }
      
    }
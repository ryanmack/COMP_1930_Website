// contains the JavaScript code for the display information in the database     


function display_information(list){
    // console logs everything just to make sure everything is right and to provide the user with information if needed
    console.log(list.img_name);
    console.log(list.img_recycle);
    console.log(list.location);
    console.log(list.name);
    console.log(list.type);


    //Create name and type of box + format new line
    var para = document.createElement("div");
    document.getElementById("box").appendChild(para);
    para.appendChild(document.createTextNode("Item: " + list.name ));
    var new_line=document.createElement("br")
    new_line.setAttribute("style","line-height:1");
    para.appendChild(new_line)
    para.appendChild(document.createTextNode( "Type: " + list.type ));
    var other_new_line=document.createElement("br")                                    
    other_new_line.setAttribute("style","line-height:18");
    para.appendChild(other_new_line)

    //Create location + format new line
    var location = document.createElement("p");
    document.getElementById("box_2").appendChild(location);
    location.appendChild(document.createTextNode(" Location: " + list.location ));
    var another_new_line=document.createElement("br")                                    
    another_new_line.setAttribute("style","line-height:18");
    location.appendChild(another_new_line)


    //Create images for the items being recycled 
    x = document.createElement("IMG");
    console.log("./images/databaseimages/"+list.img_name);
    x.setAttribute("src", "./images/databaseimages/"+list.img_name);
    x.setAttribute("height", "180px");
    x.setAttribute("width", "148px");
    document.getElementById("images").appendChild(x);
    z= document.createElement("BR");
    z.setAttribute("style","line-height:8");
    document.getElementById("images").appendChild(z);


    //Create images for where the item goes
    y = document.createElement("IMG");
    y.setAttribute("src", "./images/"+list.img_recycle);
    y.setAttribute("height", "180px");
    y.setAttribute("width", "148px");
    document.getElementById("where").appendChild(y);
    line= document.createElement("BR");
    line.setAttribute("style","line-height:8");
    document.getElementById("where").appendChild(line);

    }
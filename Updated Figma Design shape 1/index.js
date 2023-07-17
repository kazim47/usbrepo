let container = document.getElementById("component-container")

let updatePostion =() =>{

    let rect = container.getBoundingClientRect();
    let value = rect.height;
    let borderContainer = document.getElementById("container-item1");
    borderContainer.style.borderBottomWidth = value +'px';
   
   
    console.log(rect)

}

window.addEventListener('resize' , updatePostion)
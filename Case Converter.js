document.getElementById("upper-case").addEventListener("click", function (){
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function (){
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function (){
    //get the value(which is a string) from textarea(text box)
    let str = document.querySelector("textarea").value; //get the
    // split this string into an words array by ' '(space)
    let arr = str.split(' ');
    //loop through the array items and uppercase the first letters
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    //use join() function to convert the array arr back to a string and add " "(space) between items.
    document.querySelector("textarea").value
        = arr.join(' ');
});

document.getElementById("sentence-case").addEventListener("click", function (){
    let str = document.querySelector('textarea').value;
    let arr = str.split('. ');
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    document.querySelector("textarea").value
        = arr.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('save-text-file').addEventListener('click',function(){
   let text = document.querySelector("textarea").value;
   download('text.txt',text);
});
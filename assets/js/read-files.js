function printSingleFileAsText(evt) {
    let fileContent = getSingleFileAsText(evt);
    console.log(fileContent);
}

function getSingleFileAsText(evt) {
    //Retrieve the first (and only!) File from the FileList object
   // let result = "";
    let file = evt.target.files[0]; // counts files I believ
    if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function(event) {   //basically loads 
            let contents = event.target.result;
          let words = getWords(contents);
             console.log(words)     // why was this needed, javascript ahhh!!!
        }
        return fileReader.readAsText(file)      
    }
}

function getWords(s) {
    let result = "";
    let i = 0;
    while (i < s.length) {
        result += s[i];
        i++;
    }
    return result;
}


let fileInput = document.getElementById('fileinput');   // This line returns the element that has the ID attribute with the specified value.
fileInput.addEventListener('change', getSingleFileAsText, false);   //  
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function generateTimestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return day + month + year + hours + minutes + seconds;
}


function save() {
    const jsong = { "sukmadik": "sukmadik" };
    const timestamp = generateTimestamp();

    localStorage.setItem('player_save', JSON.stringify(jsong));

    const confirmation = confirm('Save File are going to be downloaded');
    if (confirmation) {
        download("save_" + timestamp + ".json", JSON.stringify(jsong));
    }
}

function readFile() {
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const content = event.target.result;
            try {
                const jsonData = JSON.parse(content);
                localStorage.setItem('player_save', content);
                console.log("JSON content:", jsonData);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file to read.');
    }
}

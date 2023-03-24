const form = document.getElementById("csv-upload-form");
const fileInput = document.getElementById("csv-file-input");
const downloadBtn = document.getElementById("download-csv-btn");

let csvData = null; // store the CSV data in a variable

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent default form submission behavior

    const formData = new FormData(); // create a new FormData object
    formData.append("file", fileInput.files[0]); // add the selected file to the FormData object

    try {
        const response = await fetch("http://localhost:8080/check/csv", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            console.log("stuff brokey");
            return;
        }

        csvData = await response.text(); // store the CSV data in the variable
    } catch (error) {
        console.error(error);
    }
});

downloadBtn.addEventListener("click", () => {
    if (csvData) {
        const blob = new Blob([csvData], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } else {
        console.log("No CSV data available");
    }
});

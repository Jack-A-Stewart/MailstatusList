// form.addEventListener("submit", async (event) => {
//     event.preventDefault(); // prevent default form submission behavior
//
//     const formData = new FormData(); // create a new FormData object
//     formData.append("file", fileInput.files[0]); // add the selected file to the FormData object
//
//     let fileData;
//     let filename;
//     try {
//         const response = await fetch("http://localhost:8080/check/upload", {
//             method: "POST",
//             body: formData,
//         });
//
//         if (!response.ok) {
//             console.log("stuff broke");
//             return;
//         }
//
//         filename = response.headers.get("Content-Disposition").match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1];
//         fileData = await response.blob(); // store the file data in the variable
//         downloadForm.style.display = "block"; // show the "Download file" form
//         downloadBtn.disabled = false; // enable the "Download" button
//     } catch (error) {
//         console.log(error);
//     }
//
//     downloadBtn.addEventListener("click", () => {
//         if (fileData) {
//             const url = window.URL.createObjectURL(fileData);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = filename;
//             document.body.appendChild(a);
//             a.click();
//             a.remove();
//             window.URL.revokeObjectURL(url);
//         } else {
//             console.log("No File data available");
//         }
//     });
// });

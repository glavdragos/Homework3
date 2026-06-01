const form = document.getElementById("project-form");
const projectTableBody =
document.getElementById("project-table-body");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let isValid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("description-error").textContent = "";
    document.getElementById("tech-error").textContent = "";
    document.getElementById("url-error").textContent = "";
    document.getElementById("date-error").textContent = "";
    document.getElementById("image-error").textContent = "";

    const name =
    document.getElementById("name").value;

    const description =
    document.getElementById("description").value;

    const url =
    document.getElementById("url").value;

    const date =
    document.getElementById("date").value;

    const tech =
    document.getElementById("tech");

    const image =
    document.getElementById("image");

    const selectedTech =
    Array.from(tech.selectedOptions)
    .map(option => option.text)
    .join(", ");

    if(name.trim() === "")
    {
        document.getElementById(
        "name-error"
        ).textContent = "Name is required";

        isValid = false;
    }

    if(description.trim() === "")
    {
        document.getElementById(
        "description-error"
        ).textContent =
        "Description is required";

        isValid = false;
    }

    if(tech.selectedOptions.length === 0)
    {
        document.getElementById(
        "tech-error"
        ).textContent =
        "Select at least one technology";

        isValid = false;
    }

    if(url.trim() === "")
    {
        document.getElementById(
        "url-error"
        ).textContent =
        "URL is required";

        isValid = false;
    }

    if(date === "")
    {
        document.getElementById(
        "date-error"
        ).textContent =
        "Completion date is required";

        isValid = false;
    }

    let imageContent = "No image";

    if(image.files.length > 0)
    {
        imageContent =
        `<img src="${URL.createObjectURL(image.files[0])}"
        alt="Project Image"
        width="100">`;
    }

    if(isValid)
    {
        projectTableBody.innerHTML += `
        <tr>
        <td>${name}</td>
        <td>${description}</td>
        <td>
            <a href="${url}" target="_blank">
                ${url}
            </a>
        </td>
        <td>${date}</td>
        <td>${imageContent}</td>
        <td>${selectedTech}</td>
        </tr>
        `;

        form.reset();
    }

});
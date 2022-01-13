const pages = (status)=>{
    const div = document.getElementById(`pages`);
    const ul = div.firstElementChild;

    let countPages = 0;
    if(data.length % 9 === 0){
        countPages = data.length / 9;
    }
    else{
        countPages = ((data.length - data.length % 9) / 9)+1;
    }

    for(let i = 1; i <= countPages; i++){
        const li = document.createElement(`li`);
        const button = document.createElement(`button`);
        button.type = `button`;
        button.textContent = i;
        li.appendChild(button);
        ul.appendChild(li);
    }
}


const searchField = function(){
    const field = document.getElementById(`header`).firstElementChild;
    const label = document.createElement(`label`);
    label.className = `student-search`;

    const span = document.createElement(`span`);
    span.textContent = `Search by name`;

    const input = document.createElement(`input`);
    input.id = `search`;
    input.placeholder = `Search my name...`;

    const button = document.createElement(`button`);
    button.type = `button`;
    const img = document.createElement(`img`);
    img.src = `img/icn-search.svg`;
    img.alt = `Search icon`;
    button.appendChild(img);

    label.appendChild(span);
    label.appendChild(input);
    label.appendChild(button);

    field.appendChild(label);
}


const createLI = (data)=>{
    const ul = document.getElementById(`list`);
    const li = document.createElement(`li`);
    li.className = `student-item cf`;
    ul.appendChild(li);

    const studentDetails = document.createElement(`div`);
    studentDetails.className = `student-details`;
    li.appendChild(studentDetails);

    const img = document.createElement(`img`);
    img.className = `avatar`;
    img.src = data.picture.medium;
    img.alt = `Profile Picture`;
    studentDetails.appendChild(img);

    const name = document.createElement(`h3`);
    name.textContent = `${data.name.first} ${data.name.last}`;
    studentDetails.appendChild(name);

    const email = document.createElement(`span`);
    email.className = `email`;
    email.textContent = data.email;
    studentDetails.appendChild(email);

    const joinedDetails = document.createElement(`div`);
    joinedDetails.classNamee = `joined-details`;
    li.appendChild(joinedDetails);

    const date = document.createElement(`span`);
    date.className = `date`;
    date.textContent = `Joined ${data.registered.date}`;
    joinedDetails.appendChild(date);

    ul.appendChild(li);
}


const showPage = function (page) {
    const page_array = [page*9-8, page*9];

    if(parseInt(page) !== ((data.length - data.length % 9) / 9)+1){
    for(let i = page_array[0]; i <= page_array[1]; i++){
        createLI(data[i]);}}
    else if(parseInt(page) === ((data.length - data.length % 9) / 9)+1){
        let lastArray = data.length % 9;
        for(let i = data.length-lastArray; i < data.length; i++){
            createLI(data[i]);
        }
    }

}


const link_list = document.getElementById(`pages`).firstElementChild;

link_list.addEventListener(`click`,(e)=>
    {

        const ul = document.getElementById(`link-list`);
        const li  = ul.children;


        for(let i = 0; i < ul.childElementCount; i++){
            li[i].firstElementChild.className = ``;
        }

        if(e.target.type === `button`) {
            document.getElementById(`list`).innerHTML = "";
            showPage(e.target.textContent);
            e.target.className = `active`;
        }
    });






/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(1);
pages();
searchField();

const field = document.getElementById(`header`).firstElementChild.firstElementChild;
field.addEventListener(`click`,(e)=>{
    const div = document.getElementById(`pages`);
    const ul = div.firstElementChild;
    const buttonField = document.getElementById(`link-list`);
    const ln = buttonField.children.length
    const input = document.getElementById(`search`);
    let searchingInfo = input.value.toUpperCase();
    if(e.target.type === `button` || e.target.alt === `Search icon`) {
        if (input.value === ``) {
            console.log(`f`)
            for (let i = 0; i < ln; i++) {
                buttonField.firstElementChild.remove()
            }
            document.getElementById(`list`).innerHTML = "";
            pages();
            showPage(1);
        } else if(input.value.length > 1)
        {
            console.log(`else`)
            for (let i = 0; i < ln; i++)
            {
                buttonField.firstElementChild.remove()
            }
            for (let i = 0; i < ln; i++) {
                document.getElementById(`list`).innerHTML = "";


                for (let i = 0; i < data.length; i++)
                {
                    let nameSurname = `${data[i].name.first} ${data[i].name.last}`.toUpperCase()

                    if (nameSurname.substring(0, searchingInfo.length) === searchingInfo)
                    {
                        createLI(data[i])
                        console.log(`gillato`)
                    }
                }}}}})
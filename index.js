//declared state of form
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
//allows the input to be saved an clicking "save input"
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})
//line 9 represent the input button thats lefted an open ("") value to insert the website leads
function renderLeads() {
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++) {
        //turns the saved input into a link that opens in a new window
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}
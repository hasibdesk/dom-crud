// Create New Contact Function
function createNewContact(contact, ) {
    let nameField = document.querySelector('#nameField')
    let phoneField = document.querySelector('#phoneField')
    let emailField = document.querySelector('#emailField')


    let btnSaveContact = document.querySelector('#saveContact')
    btnSaveContact.addEventListener('click', function () {
        if (nameField.value !== "") {
            let contact = {
                name: nameField.value,
                phone: phoneField.value,
                email: emailField.value
            }


            const tBody = document.querySelector('#tBody')
            const TR = document.createElement('tr')

            const tdName = document.createElement('td')
            tdName.innerHTML = contact.name
            TR.appendChild(tdName)
            nameField.value = ""

            const tdPhone = document.createElement('td')
            tdPhone.innerHTML = contact.phone
            TR.appendChild(tdPhone)
            phoneField.value = ""

            const tdEmail = document.createElement('td')
            tdEmail.innerHTML = contact.email ? contact.email : "N/A"
            TR.appendChild(tdEmail)
            emailField.value = ""

            const tdActions = document.createElement('td')
            // Edit Button 
            const btnEdit = document.createElement('button')
            btnEdit.className = "btn btn-warning"
            btnEdit.innerHTML = "Edit"
            btnEdit.addEventListener('click', function () {
                let editModal = $('#editModal')
                editModal.modal('toggle')

                let editName = document.querySelector('#edit-name')
                let editPhone = document.querySelector('#edit-phone')
                let editEmail = document.querySelector('#edit-email')

                editName.value = ""
                editPhone.value = ""
                editEmail.value = ""

                let btnUpdate = document.querySelector('#updateContact')
                btnUpdate.addEventListener('click', function () {
                    tdName.innerHTML = editName.value
                    tdPhone.innerHTML = editPhone.value
                    tdEmail.innerHTML = editEmail.value

                    editModal.modal('hide')
                })





            })
            tdActions.appendChild(btnEdit)

            // Delete button 
            const btnDelete = document.createElement('button')
            btnDelete.className = "btn btn-danger mx-1"
            btnDelete.innerHTML = "Delete"
            btnDelete.addEventListener('click', function () {
                tBody.removeChild(TR)
            })
            tdActions.appendChild(btnDelete)

            TR.appendChild(tdActions)
            tBody.appendChild(TR)

        } else {
            alert("Enter your Name Please!")
        }
    })

}


createNewContact();
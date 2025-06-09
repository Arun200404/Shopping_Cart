    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const filterInput = document.getElementById('filter');
    const itemList = document.getElementById('item-list');
    const clearBtn = document.getElementById('clear');

    // Add item event
    itemForm.addEventListener('submit', addItem);
    // Add item function
    function addItem(e) {
        e.preventDefault(); 

        const newItem = itemInput.value;

        if (newItem === '') {  
            alert('Please add an item');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(newItem));

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-item';
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        li.appendChild(removeBtn);

        // Append the new list item to the list
        itemList.appendChild(li);

        // Clear input
        itemInput.value = '';
    }

    
    
    // Remove item event
    itemList.addEventListener('click', removeItem);
    // Remove item function
    function removeItem(e) {
        if (e.target.parentElement.classList.contains('remove-item')) {
            e.target.parentElement.parentElement.remove()
        }
    }


    // Clear all items event
    clearBtn.addEventListener('click', clearItems);
    // Clear items function
    function clearItems() {
        itemList.innerHTML = '';
        //   while(itemlist.firstChild){
                // itemList.removeChild(itemList(firstChild))
        // }
    }


    // Filter items event
    filterInput.addEventListener('input', filterItems);

    function filterItems(e) {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll('.items li').forEach(item => {
            const itemName = item.firstChild.textContent.toLowerCase().trim();
            if (itemName.indexOf(text) !== -1) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }




    
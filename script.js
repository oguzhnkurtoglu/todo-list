const itemForm = document.querySelector("#item-form")
const itemInput = document.querySelector("#item-input")
const itemList = document.querySelector("#item-list")
const clearAll = document.querySelector("#clear")
const filter = document.querySelector("#filter")
const tasks = itemList.querySelectorAll("li")

// Add item
itemForm.addEventListener("submit", e => {
	e.preventDefault()
	if (itemInput.value == "") alert("Please Add an Item")
	else {
		createUtils()
		itemInput.value = ""
	}
})

//crete Utilities
let createUtils = () => {
	let li = document.createElement("li")
	let icon = document.createElement("i")
	let textNode = document.createTextNode(itemInput.value)
	let deleteBtn = document.createElement("button")
	deleteBtn.classList = "remove-item btn-link text-red"
	icon.classList = "fa-solid fa-xmark"
	deleteBtn.append(icon)
	li.append(textNode, deleteBtn)
	itemList.append(li)
	iconChecker()
	filterFunc()
}

//Delete item
let iconChecker = () => {
	let buttons = document.querySelectorAll(".remove-item")
	buttons.forEach(item =>
		item.addEventListener("click", e => {
			e.target.parentElement.parentElement.remove()
		})
	)
}
iconChecker()

//Delete All
clearAll.addEventListener("click", () => {
	while (itemList.firstElementChild) {
		itemList.firstElementChild.remove()
	}
})

//Filter
let filterFunc = () => {
	const tasks = itemList.querySelectorAll("li")
	filter.addEventListener("input", e => {
		tasks.forEach(item =>
			item.firstChild.textContent
				.toLowerCase()
				.indexOf(e.target.value.toLowerCase()) != -1
				? (item.style.display = "flex")
				: (item.style.display = "none")
		)
	})
}

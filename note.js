const content = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const add = document.getElementById("add")
const del = document.getElementById("del")
const list = document.getElementById("list")

const content_list = []
function render() {
    let html_str = ""
    content_list.forEach(function (item, index) {
        html_str = html_str + `
    <div class="content">
    <p>內容:${item.content}</p>
    <p>時間:${item.date} ${item.time}</p>
    </div>`
    })
    list.innerHTML = html_str
}

add.addEventListener("click", function (event) {
    content_list.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })
    render();

})

del.addEventListener("click", function (event) {
    content_list.pop();
    render();

})
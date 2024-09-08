import data from './informatika-2024.json'
console.log(data)

function friendListsElement() {
  const friendLists = document.getElementById("friend_list");
  const lists = `
    ${friendsData.map(data => `
      <li>
        <figure>
          <img src="${data.photo}" alt="Evan Rafa Radya Alifian" width="100%">
          <figcaption>
            <span>Nama : ${data.nama}</span>
            <span>NIM : ${data.nim}</span>
            <span>TTL : ${data.ttl}</span>
            <span>Alamat : ${data.alamat}</span>
            <span>NoHP : ${data.noHP}</span>
          </figcaption>
        </figure>
      </li>
    `).join("")}
  `;

  return friendLists.innerHTML = lists
}

friendListsElement()
 <script> console.log(`${data.photo}`) </script>
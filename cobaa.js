function getData() {
    const data = fetch('./data.json').then(res => res.json())
    return data
  }

  // Pindahkan fungsi scrolling ke dalam DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  async function friendListsElement() {
    const friendLists = document.getElementById("friend_list");
    const data = await getData();
    
    function renderList(items) {
      if (items.length === 0) {
        friendLists.innerHTML = '<li class="error-message">INGAT NAMANYA YANG BENER! KATANYA SE-ANGKATAN!!.</li>';
      } else {
        const lists = `
          ${items.map(i => `
            <li>
              <figure class="card">
                <div class="card_header">
                  <div class="card_image">
                    <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
                  </div>
                  <div class="card_description">
                    <span>${i.nama}</span>
                    <span>${parseInt(i.nim)}</span>
                  </div>
                </div>
                <figcaption class="card_content">
                  <span>TTL : ${i.ttl}</span>
                  <span>Alamat : ${i.alamat}</span>
                  <span>No HP : <a href="https://wa.me/62${i.no.replace(/^0|[^0-9]/g, '')}" target="_blank">${i.no}</a></span>
                </figcaption>
              </figure>
            </li>
          `).join("")}
        `;
        friendLists.innerHTML = lists;
      }
    }

    renderList(data);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredData = data.filter(item => 
        item.nama.toLowerCase().includes(searchTerm)
      );
      renderList(filteredData);
    });
  }

  friendListsElement()

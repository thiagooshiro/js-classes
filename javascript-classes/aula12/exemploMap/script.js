const videos = [
    { 
      id: 1, 
      title: "Como aprender JavaScript", 
      description: "Dicas e truques para dominar JavaScript rapidamente", 
      thumbnail: "https://via.placeholder.com/250x140?text=JavaScript" 
    },
    { 
      id: 2, 
      title: "Entendendo o React", 
      description: "Introdução ao React e como criar componentes", 
      thumbnail: "https://via.placeholder.com/250x140?text=React" 
    },
    { 
      id: 3, 
      title: "Entrevistas técnicas", 
      description: "Prepare-se para entrevistas técnicas com exemplos práticos", 
      thumbnail: "https://via.placeholder.com/250x140?text=Entrevistas" 
    }
  ];
  
  // Função para criar os cards de vídeo
  function renderVideoCards() {
    const container = document.getElementById('video-cards-container');
  
    // Usando map para gerar os cards
    videos.map(video => {
      const card = document.createElement('div');
      card.classList.add('video-card');
      
      card.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
        <div class="video-card-content">
          <h3 class="title">${video.title}</h3>
          <p class="description">${video.description}</p>
        </div>
      `;
      
      container.appendChild(card);
    });
  }
  
  // Chamando a função para renderizar os cards
  renderVideoCards();
  
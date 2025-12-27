---
permalink: /projects/
title: "Projects"
excerpt: "My research and development projects"
author_profile: true
---



{% include projects_card.html
   id="project1"
   date="Flutter Riverpod, Router API, Supabase"
   img="/images/project_ecommerce.png"
   title="Bazar Sodai"
   desc="E-commerce Cross Platform Application built with Flutter, prototype for android version of <a href='https://bazarsodai.co.uk/' target='_blank'>Bazar Sodai</a>"
   github="https://github.com/akibhaider/ecommerce"
%}

{% include projects_card.html
   id="project2"
   date="Dart, C++, Swift, Python, Firebase"
   img="/images/project_bettersis.png"
   title="Better-SIS"
   desc="Student Information System - android version of Islamic University of Technology (IUT)"
   github="https://github.com/akibhaider/BetterSIS"
   youtube="https://youtu.be/F9-pSOwY53w"
%}

{% include projects_card.html
   id="project3"
   date="Java, Socket Programming"
   img="/images/project_xchange.png"
   title="XChange"
   desc="Faster & Efficient File Sharing System without Internet in Local Server"
   github="https://github.com/akibhaider/Xchange"
   youtube="https://www.youtube.com/watch?v=tCIwjp7nuDM"
%}

<!-- {% include projects_card.html
   id="project4"
   date="Flutter, Firebase"
   img="/images/6_ctf_cybercrawler.png"
   title="TheStudentDrivenMarketPlace"
   desc="............................."
   github="https://www.youtube.com/watch?v=tCIwjp7nuDM"
   youtube="https://youtube.com/watch?v=your-video-id"
%} -->

{% include projects_card.html
   id="project5"
   date="C++, Qt, QSql"
   img="/images/project_bookhaven.png"
   title="Book-Haven"
   desc="Bookshop management system with book-lover's forum, books reviewing-borrowing-sharing, competition organizing and rewards features for bookworms!"
   github="https://github.com/akibhaider/BOOK_HAVEN"
   youtube="https://www.youtube.com/watch?v=xOI1AidMRpo"
%}

{% include projects_card.html
   id="project6"
   date="JavaFx, HTML5, CSS3"
   img="/images/project_battleship.png"
   title="BattleShip_Guessing_Game_JavaFx"
   desc="Classic Two player Battleship game"
   github="https://github.com/akibhaider/BattleShip_Guessing_Game_JavaFx-"
   youtube="https://www.youtube.com/watch?v=4h9LDe2AOQo"
%}

{% include projects_card.html
   id="project7"
   date="JavaFx, Scene-Builder"
   img="/images/project_pomodoro.png"
   title="Pomodor Timer"
   desc="Productive pomodoro timer with 5 minutes short break, 15 minutes long break"
   github="https://github.com/akibhaider/Pomodoro_Timer"
   youtube="https://www.youtube.com/watch?v=tCIwjp7nuDM"
%}


<script>
function copyLifeEventLink(postId) {
  const url = window.location.origin + window.location.pathname + '#' + postId;
  navigator.clipboard.writeText(url);
  const btn = document.querySelector(`#${postId} .life-event-share`);
  btn.innerHTML = '✔️';
  setTimeout(() => {
    btn.innerHTML = `<svg width="22" height="22" fill="none" stroke="#2196f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>`;
  }, 1200);
}

// Add click handlers for GitHub and YouTube icons
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.life-event-card');
  
  projectCards.forEach(card => {
    const githubBtn = card.querySelector('.life-event-github');
    const youtubeBtn = card.querySelector('.life-event-youtube');
    
    if (githubBtn) {
      githubBtn.addEventListener('click', function() {
        const githubUrl = this.getAttribute('data-url');
        if (githubUrl) {
          window.open(githubUrl, '_blank');
        }
      });
    }
    
    if (youtubeBtn) {
      youtubeBtn.addEventListener('click', function() {
        const youtubeUrl = this.getAttribute('data-url');
        if (youtubeUrl) {
          window.open(youtubeUrl, '_blank');
        }
      });
    }
  });
});
</script>

<style>
.life-event-github, .life-event-youtube {
  cursor: pointer;
  margin-left: 10px;
  transition: transform 0.2s;
}

.life-event-github:hover, .life-event-youtube:hover {
  transform: scale(1.1);
}

.life-event-icons {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style> 
---
permalink: /achievements/
title: "Achievements"
excerpt: "My achievements and milestones"
author_profile: true
---

{% include achievements_card.html
   id="1"
   date="June 21, 2025"
   img="/images/7_uuiupc.jpg"
   title="Uttara University-Inter University Programming Contest 2025"
   desc="IUT_notBlue: Ranked 80th out of 130+ teams all around Bangladesh (5th in IUT)"
%}

{% include achievements_card.html
   id="2"
   date="May 25, 2025"
   img="/images/1_coderush_hackathon.jpg"
   title="Team Vibin Innit: Champion in Intra University Hackathon Coderush 2025"
   desc="Our mobile application on 'Student Driven Marketplace' stood out at IUT"
%}

{% include achievements_card.html
   id="3"
   date="December 07, 2024"
   img="/images/4_icpc_24.jpg"
   title="ACM ICPC ASIA Dhaka Regional Programming Contest"
   desc="IUT_notBlue: Ranked 102th out of 300+ teams all around Bangladesh (6th in IUT)"
%}

{% include achievements_card.html
   id="4"
   date="September 05, 2024"
   img="/images/2_ijpc.jpg"
   title="6th in Intra University Junior Programming Contest 2024"
%}

{% include achievements_card.html
   id="5"
   date="August 25, 2024"
   img="/images/3_cf_specialist.png"
   title="Became Specialist in Codeforces"
   desc="After 3 months of continuous practice, I became specilaist in Codeforces. Primarily used C++ to solve problems"
%}

{% include achievements_card.html
   id="6"
   date="May 1, 2024"
   img="/images/5_iut_iupc.png"
   title="IUT Inter University Programming Contest 2024"
   desc="IUT_Pounopunik: Ranked 52th out of 110+ teams all around Bangladesh (4th in IUT)"
%}

{% include achievements_card.html
   id="7"
   date="November 10, 2023"
   img="/images/6_ctf_cybercrawler.png"
   title="Cyber Crawler Capture The Flag 2023"
   desc="IUT_Mr.Robot: Ranked 46th among 252 teams. Earned 230 points in cryptography and forensic segment (handle: aaakloo_waiting😄)"
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
</script> 
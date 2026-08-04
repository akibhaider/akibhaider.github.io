---
permalink: /achievements/
title: "Achievements"
excerpt: "My achievements and milestones"
author_profile: true
---

{% include achievements_card.html
   id="10"
   img="/images/10_iut_iupc.png"
   title="12th National ICT Fest IUPC 2026 at IUT"
   desc="Ranked 27th in onsite contest (3rd in IUT)"
%}

{% include achievements_card.html
   id="1"
   date="Nov 16 - Nov 21, 2025"
   img="/images/9_sc25.jpeg"
   title="ACM SIGHPC Immersion Travel Grantee"
   desc="Visited St. Louis, Missouri, USA to attend the SC25 conference. Lightning talk on &quot;Data, Model, Tensor parallelism in ultra low to high field MRI translation&quot;. Met Sidney Fernbach Memorial Awardee <a href='https://scholar.google.com/citations?user=dts9eDUAAAAJ&hl=en' target='_blank'>Dr. Ewa Deelman</a> and renowned author-entrepreneur <a href='https://tkspeaks.com/' target='_blank'>Thomas Koulopoulos</a>. <a href='https://www.linkedin.com/posts/akib-haider-1252051ab_thats-a-wrap-to-this-years-sc-conference-activity-7397835020628877312-E-A7?utm_source=share&utm_medium=member_android&rcm=ACoAADD5am0B9jxcAFMtDMy5KFbbtb8_b72Ibq8' target='_blank'>  [Details]</a>"
%}

{% include achievements_card.html
   id="2"
   date="Aug 30, 2025"
   img="/images/8_judge_iupc.jpg"
   title="Judge in Intra-IUT Programming Contest"
   desc="Set two problems in <a href='https://github.com/ir-rafio/AHIUPC-2025-Problemset' target='_blank'>IUT-Intra University Programming Contest 2025</a> and <a href='https://github.com/ir-rafio/IJPC-2025-Problemset' target='_blank'>Intra-IUT Junior Programming Contest 2025</a>"
%}

{% include achievements_card.html
   id="3"
   date="June 21, 2025"
   img="/images/7_uuiupc.JPG"
   title="Uttara University-Inter University Programming Contest 2025"
   desc="Ranked 80th in onsite contest (5th in IUT)"
%}

{% include achievements_card.html
   id="4"
   date="May 25, 2025"
   img="/images/1_coderush_hackathon.jpg"
   title="Champion in Intra University Hackathon Coderush 2025"
   desc="Android application 'Student Driven Marketplace' using Flutter and Next.js"
%}

{% include achievements_card.html
   id="5"
   date="December 07, 2024"
   img="/images/4_icpc_24.jpg"
   title="ACM ICPC ASIA Dhaka Regional Programming Contest"
   desc="Ranked 102th out of 300+ teams all around Bangladesh (6th in IUT)"
%}

{% include achievements_card.html
   id="6"
   date="September 05, 2024"
   img="/images/2_ijpc.jpg"
   title="6th in Intra University Programming Contest 2024"
%}

{% include achievements_card.html
   id="7"
   date="August 25, 2024"
   img="/images/3_cf_specialist.png"
   title="Became Specialist in Codeforces"
   desc="After months of practice, became specilaist in Codeforces"
%}

{% include achievements_card.html
   id="8"
   date="May 1, 2024"
   img="/images/5_iut_iupc.png"
   title="11th National ICT Fest IUPC 2026 at IUT"
   desc="Ranked 52th in onsite contest (4th in IUT)"
%}

{% include achievements_card.html
   id="9"
   date="November 10, 2023"
   img="/images/6_ctf_cybercrawler.png"
   title="Cyber Crawler Capture The Flag 2023"
   desc="46th among 252 teams. Solved cryptography and forensic problems"
%}

<script>
function copyAchievementLink(postId) {
  const url = window.location.origin + window.location.pathname + '#' + postId;
  navigator.clipboard.writeText(url).then(function() {
    const btn = document.querySelector('#' + postId + ' .life-event-share');
    if (btn) {
      btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      btn.style.background = 'rgba(76, 175, 80, 0.15)';
      setTimeout(function() {
        btn.innerHTML = '<svg width="22" height="22" fill="none" stroke="#40bfff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>';
        btn.style.background = 'none';
      }, 1200);
    }
  });
}
</script> 
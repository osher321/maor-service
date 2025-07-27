// פונקציה שמציגה את הטאב המתאים בלחיצה על כפתור
function showTab(id) {
  // הסתרת כל הטאבים
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // הצגת הטאב שנבחר לפי מזהה
  document.getElementById(id).classList.add('active');
}

// הפעלת מצב אקורדיון רק בטאב של שאלות נפוצות
document.addEventListener('DOMContentLoaded', () => {
  const faqDetails = document.querySelectorAll('#tab3 details');

  faqDetails.forEach((detail) => {
    detail.addEventListener('toggle', function () {
      if (this.open) {
        faqDetails.forEach((other) => {
          if (other !== this) other.removeAttribute('open');
        });
      }
    });
  });
});

// פונקציית תפריט המבורגר לפתיחה וסגירה
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
  document.body.style.overflow = nav.classList.contains("show") ? "hidden" : "";
}

// סגירה אוטומטית כשנלחץ קישור
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
    document.body.style.overflow = ""; // מאפשר גלילה שוב
  });
});



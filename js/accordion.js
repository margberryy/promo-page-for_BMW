const futureLinksElems = document.querySelectorAll('.feature__link');
const futureSubElems = document.querySelectorAll('.feature-sub');
futureLinksElems.forEach((btn, index) => {
   btn.addEventListener('click', () => {
      if (btn.classList.contains('feature__link_active')) {
         futureSubElems[index].classList.add('hidden');
         btn.classList.remove('feature__link_active');
      } else {
         futureSubElems.forEach((futureSubElem) => {
            futureSubElem.classList.add('hidden');
         })
         futureLinksElems.forEach((futureLinksElem) => {
            futureLinksElem.classList.remove('feature__link_active');
         })
         futureSubElems[index].classList.remove('hidden');
         btn.classList.add('feature__link_active');
      }
   })
});
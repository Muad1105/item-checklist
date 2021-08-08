// document.querySelector('body').addEventListener('click', function () {
//   window.scrollTo(0, 500);
// });

const btns = document.querySelectorAll('.tab-btn');
// console.log(btns[1].dataset.id);
const mainImage = document.getElementById('image');

// const sectionBlurImage = document.querySelector('.section-image');

// const descHeading = document.querySelector('');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    let curImage;

    // console.log(btn.dataset.id);
    const id = btn.dataset.id;
    console.log(id);

    // content lists
    const contents = document.querySelectorAll('.content');

    console.log(contents);

    contents.forEach(content => {
      if (content.classList.contains('show-section'))
        content.classList.remove('show-section');

      //   curImage = content.querySelector('img');
      //   console.log(curImage);
    });
    btns.forEach(btn => {
      if (btn.classList.contains('active')) btn.classList.remove('active');
    });

    // select section to transform
    const showId = document.querySelector(`#${id}`);
    console.log(showId);

    // change main image
    curImage = showId.querySelector('img');
    console.log(curImage);
    mainImage.src = curImage.src;

    // add acive btn class
    btn.classList.add('active');
    // add show section class
    showId.classList.add('show-section');
  });
});

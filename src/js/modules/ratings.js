const ratings = () => {
    const yellowBar = document.querySelectorAll('.bar_yellow'),
          percents = document.querySelectorAll('.percent'),
          barWidth = document.querySelector('.skills__bar').offsetWidth;


    yellowBar.forEach((item, i) => {
        item.style.width = ((barWidth * percents[i].textContent.replace(/\D/g, '')) / 100) + 'px';
    });


};

export default ratings;
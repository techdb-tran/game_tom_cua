function main(){
    const resultUrlImgs = [
        "./imgs/bau.jpg",
        "./imgs/tom.jpg",
        "./imgs/cua.jpg",
        "./imgs/ca.jpg",
        "./imgs/ga.jpg",
        "./imgs/nai.jpg"
      ]
      const eleBtnXocXia = document.querySelector('.js-xoc-dia')
      const eleImgResult = document.querySelector('.js-result-img')
      const eleImgResult2 = document.querySelector('.js-result-img-2')
      const eleImgResult3 = document.querySelector('.js-result-img-3')
      const eleLoading = document.querySelector('.js-loading')
    
      eleBtnXocXia.addEventListener('click', () => {
        eleLoading.style.display = 'block'
        eleImgResult.style.display = 'none';
        eleImgResult2.style.display = 'none';
        eleImgResult3.style.display = 'none';
        setTimeout(() => {
          const randomNumber = Math.floor(Math.random() * 6)
          const randomNumber2 = Math.floor(Math.random() * 6)
          const randomNumber3 = Math.floor(Math.random() * 6)
          console.log(randomNumber);
          // Show result
          eleLoading.style.display = 'none'
          eleImgResult.style.display = 'block';
          eleImgResult2.style.display = 'block';
          eleImgResult3.style.display = 'block';
    
          // Add value result
          eleImgResult.src = resultUrlImgs[randomNumber]
          eleImgResult2.src = resultUrlImgs[randomNumber2]
          eleImgResult3.src = resultUrlImgs[randomNumber3]
        }, 2000)
      })
    }
    
    main()
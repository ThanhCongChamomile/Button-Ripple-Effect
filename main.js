const button = document.querySelectorAll('a');
        button.forEach(btn => {
            btn.addEventListener('click', function(e) {

                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                
                let rippers = document.createElement('span')
                rippers.style.left = x + 'px'
                rippers.style.top = y + 'px'
                this.appendChild(rippers)

                setTimeout(() => {
                    rippers.remove()
                }, 1000)
            })
        })
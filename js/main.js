// main.js

//-----------------------------------------------------------------------------
//  イメージの拡大表示①
//-----------------------------------------------------------------------------
images.forEach(function(image) {
    image.addEventListener('click', function() {
         modalWrapper.classList.add('show');
         modalImage.classList.add('show');

         var imageSrc = image.getAttribute('data-src');
         modalImage.src = imageSrc;
    });
});
//-----------------------------------------------------------------------------
//  イメージの拡大表示②
//-----------------------------------------------------------------------------
modalWrapper.addEventListener('click', function() {
    if (this.classList.contains('show')) {
         this.classList.remove('show');
         modalImage.classList.remove('show');
    }
});

// Bad trial code
function false_facebook() 
{
    alert("老化がひどいSNSに何を共有しようとしているのだ・・・");
}
// Bad trial code
function false_twitter() 
{
    alert("アングラなこのサイトを喧伝するとは何事だ・・・・");
}
// Bad trial code
function false_login() 
{
    alert("何を登録するんだよ（笑）");
}

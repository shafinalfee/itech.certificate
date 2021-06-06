const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

 


const image = new Image()
image.src = 'cer.png'
image.onload = function(){
      drawImage()

}

function drawImage(){
    ctx.drawImage(image, 0, 2,canvas.width,canvas.height)
    ctx.strokeStyle = "blue";
    ctx.moveTo(550, 410);
    ctx.lineTo(550, 410);
    ctx.stroke();
    
    ctx.font = "70px Allura"
    ctx.fillStyle='#A1700C'
    ctx.textAlign = "center"; 
    ctx.fillText(nameInput.value, 550, 410)
    
    
}
nameInput.addEventListener('input',function(){
    drawImage()
})



downloadBtn.addEventListener('click', function(){
   downloadBtn.href = canvas.toDataURL()
   downloadBtn.download = true
})

 const btn = document.querySelector(".btn")
 const coupon = document.querySelector(".coupon")

 btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,length-1)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="Copied"
    setTimeout(()=>{
        btn.textContent="Copy"
    }, 3000)
 })

//click แล้วแสดงช่องค้นหาข้อมูล
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
// ทำการเช็คปุ่มการคลิก
btn.addEventListener("click",()=>{
    //สร้างคลาส active เพื่อจะเปิดอินพุตที่ถูกซ่อนอยู่
    search.classList.toggle("active") //toggle เป็นการใส่คลาสและลบคลาสในเวลาเดียวกัน (เมื่อคลิก)
    input.focus() //เมื่อกดปุ่มแล้วอินพุตจะทำกาโฟกัส คือมีเคอเซอติ๊กอยู่
})

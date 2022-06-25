/* language buttons*/
let arabic = document.querySelector(".arabic"); 
let english = document.querySelector(".english"); 
/* End of language buttons*/

/*texts */
let heading1 = document.querySelector(".body h1");
let paragraph = document.querySelector(".body p")
let heading2 = document.querySelector(".footer h1")
let cilentsName1 = document.getElementsByTagName("h4")[0];
let cilentsName2 = document.getElementsByTagName("h4")[1];
let cilentsName3 = document.getElementsByTagName("h4")[2];
/*End of texts */

arabic.addEventListener('click' , ()=>{
    language = "arabic"
    localStorage.setItem('lang' , "arabic")
    location.reload()
})
english.addEventListener('click' , ()=>{
    language = "english"
    localStorage.setItem('lang' ,"english")
    location.reload()
})


function filterLanuage(language){
    if(language === "arabic"){
        heading1.innerHTML = '<span>ز</span>بناؤنا '
        paragraph.innerHTML = 'نحن فريق موشن جرافيك ونحن نعمل معا ل صنع تصاميم احترافية للعملاء، مع عامين من الخبرة لن تكون نادما على التعامل معنا'
        heading2.innerHTML = '<span>ه</span>ذا كل ما لدينا '
        cilentsName1.innerHTML = "جومان"
        cilentsName2.innerHTML = "جوناس"
        cilentsName3.innerHTML = "اكرم"
    }else if(language === "english"){
        heading1.innerHTML = '<span>O</span>ur <span>C</span>lients :'
        paragraph.innerHTML= "we are a motion graphic team and we are working together to creat extra designes for our clients, with 2 years of experience you'll not regret of work with us."
        heading2.innerHTML = "<span>T</span>hat <span>S</span>et"
        cilentsName1.innerHTML = "joman"
        cilentsName2.innerHTML = "jonas"
        cilentsName3.innerHTML = "akram"


    }
}

onload=()=>{
    if(localStorage.getItem("lang") != null){
        filterLanuage(localStorage.getItem('lang'))
    }else{
        filterLanuage("english")
    }
}

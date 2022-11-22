const template=document.createElement('template')
template.innerHTML=`
<link rel="stylesheet" href="/components/mainsection/mainsection.css">
<div class="container">
    <ul>
        <li>icon</li>
        <li>name</li>
        <li>last price</li>
        <li>changes</li>
        <li>chart</li>
        <li>buy&sell</li>
    </ul>
</div>`
class mainsection extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}
export {mainsection}